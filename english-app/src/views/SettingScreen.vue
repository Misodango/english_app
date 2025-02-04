<template>
  <v-container>
    <h1 class="mb-4">設定画面</h1>

    <!-- ファイルアップロード部分 -->
    <v-file-input v-model="file" label="CSVファイルをアップロード" accept=".csv" @change="handleFileUpload"
      class="mb-4" ></v-file-input>

    <!-- 単元選択部分 -->
    <div v-if="!gameStarted" class="mb-6">
      <v-select v-model="selectedLesson" :items="lessons" item-title="name" item-value="id" label="または，単元を選択して編集"
        variant="outlined" class="mb-4" @update:model-value="onLessonSelect"></v-select>
    </div>

    <!-- ファイルの内容確認・編集部分 -->
    <v-card v-if="sentences.length > 0" class="mb-4">
      <v-card-title>
        <v-text-field v-model="fileName" label="単元名を入力" placeholder="例: Unit1-Daily Life" class="mb-2"
          density="compact"></v-text-field>
      </v-card-title>

      <v-card-text>
        <div class="sentences-list">
          <div v-for="(sentence, index) in sentences" :key="index" class="sentence-item mb-4">
            <div class="d-flex align-center">
              <span class="mr-2">問題 {{ index + 1 }}:</span>
              <v-text-field v-model="sentences[index]" density="compact" hide-details
                class="flex-grow-1"></v-text-field>
              <v-btn icon variant="text" color="error" size="large" class="ml-2" @click="removeSentence(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>

            <!-- プレビュー表示 -->
            <div class="preview-chips ml-8 mt-2">
              <v-chip v-for="(word, wordIndex) in sentence.split(',')" :key="wordIndex" size="small" class="ma-1"
                :style="getChipStyle(word.trim(), index)" variant="tonal" @click="changeChipColor(word.trim(), index)">
                {{ word.trim() }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn prepend-icon="mdi-plus" variant="tonal" @click="addNewSentence" class="mr-2">
          新しい問題を追加
        </v-btn>

        <v-btn prepend-icon="mdi-content-cut" variant="tonal" @click="extractSVOC" class="mr-2" :loading="isProcessing"
          :disabled="isProcessing || !isValidData">
          品詞分解
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn prepend-icon="mdi-close" variant="tonal" color="error" @click="onCancelHandle">
          キャンセル
        </v-btn>

        <v-btn prepend-icon="mdi-check" variant="tonal" color="primary" @click="saveSentences" :disabled="!isValidData || isProcessing">
          {{currentDataType==='lesson' ? "更新" : "保存"}}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- メッセージ表示 -->
    <v-alert v-if="message" :type="messageType" class="mt-4" closable>
      {{ message }}
    </v-alert>
    </v-container>
    <v-btn class="floating-btn" color="primary" icon="mdi-home" size="x-large"
        @click="$router.push('/')"></v-btn>

    </template>

<script>
import { db } from '../firebase/init'
import { collection, addDoc, query, getDocs, where, updateDoc } from 'firebase/firestore'
import axios from 'axios'

export default {
  name: 'SettingsScreen',
  data() {
    return {
      currentDataType: null,
      lessons: [],
      selectedLesson: null,

      file: null,
      sentences: [], // 元の文章（カンマ区切り）
      analyzedSentences: [], // 解析結果を保持
      wordColors: [], // 各単語の色情報を保持
      message: '',
      messageType: 'info',
      fileName: '',
      isProcessing: false,
      colorScheme: {
        subject: '#FFEB3B', // 黄色
        verb: '#A5D6A7', // 緑
        object: '#90CAF9', // 青
        complement: '#FF9800', // オレンジ
        other: '#E0E0E0' // その他（グレー）
      },
      apiConfig: {
        baseURL: 'https://english-app-serverside.onrender.com',
        timeout: 500000000,
        headers: {
          'Content-Type': 'application/json',
          // CORSプリフライトリクエストのための追加ヘッダー
          'Accept': 'application/json'
        }
      }
    }
  },
  computed: {
    isValidData() {
      return this.fileName.trim() !== '' &&
        this.sentences.length > 0 &&
        this.sentences.every(s => s.trim() !== '')
    },
  },

  async mounted() {
    await this.loadLessons()
  },

  methods: {

    async loadLessons() {
      try {
        const lessonsRef = collection(db, 'lessons')
        const querySnapshot = await getDocs(lessonsRef)
        this.lessons = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        this.feedback = '単元の読み込み中にエラーが発生しました'
        this.feedbackType = 'error'
      }
    },

    onLessonSelect() {
      const lesson = this.lessons.find(l => l.id === this.selectedLesson)
      this.currentDataType = 'lesson'
      if (lesson) {
        this.sentences = [...lesson.sentences]
        this.wordColors = [...lesson.wordColors]
        this.fileName = lesson.name
      }
    },

    onCancelHandle(){
      if(this.currentDataType === 'lesson'){
        this.sentences = []
        this.wordColors = []
        this.fileName = ''
      }else{
        this.file = null
        this.sentences = []
        this.wordColors = []
        this.fileName = ''
      }
    },


    getWordType(word, analysis) {
      if (analysis.subject.includes(word)) return 'subject'
      if (analysis.verb.includes(word)) return 'verb'
      if (analysis.object.includes(word)) return 'object'
      if (analysis.complement.includes(word)) return 'complement'
      return 'other'
    },
    getWordColor(word, index) {
      return this.wordColors[index]?.[word] || this.colorScheme.other
    },

    getChipStyle(word, sentenceIndex) {
      const backgroundColor = this.wordColors[sentenceIndex]?.[word] || this.colorScheme.other;
      // バックグラウンドを薄く、テキストを濃く
      return {
        backgroundColor: backgroundColor,
        color: this.getContrastColor(backgroundColor),
        borderColor: backgroundColor,
      }
    },

    changeChipColor(word, sentenceIndex) {
      // 安全に初期化
      if (!this.wordColors[sentenceIndex]) {
        this.wordColors[sentenceIndex] = {};
      }

      // 現在の色を取得（見つからない場合は "other" の色を使う）
      const currentValue = this.wordColors[sentenceIndex]?.[word] || this.colorScheme.other;

      // 現在の色に対応するキーをすべて取得（重複色にも対応）
      const matchingKeys = Object.keys(this.colorScheme).filter(
        (key) => this.colorScheme[key] === currentValue
      );

      // 複数のキーが見つかった場合は、その中の1つを選ぶ（先頭を使用）
      const currentKey = matchingKeys[0];

      const keys = Object.keys(this.colorScheme); // 全てのキーを取得
      const currentIndex = keys.indexOf(currentKey); // 現在のインデックスを取得

      // 次のインデックスを計算（循環するように）
      const nextIndex = (currentIndex + 1) % keys.length;

      // 次の色を設定
      this.wordColors[sentenceIndex][word] = this.colorScheme[keys[nextIndex]];

    },

    getContrastColor(hexColor) {
      // カラーコードをRGBに変換
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      // 輝度を計算
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      // 明るい背景には暗いテキスト、暗い背景には明るいテキスト
      return brightness > 128 ? '#000000' : '#FFFFFF';
    },

    handleFileUpload() {
      if (this.file) {
        this.currentDataType = 'file'
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target.result
          this.sentences = content.split('\n')
            .filter(line => line.trim() !== '')
            .map(line => line.trim())

          // ファイル名から拡張子を除いて単元名の初期値として設定
          if (this.file.name) {
            this.fileName = this.file.name.replace(/\.csv$/, '')
          }
        }
        reader.readAsText(this.file)
      }
    },

    addNewSentence() {
      this.sentences.push('')
    },

    removeSentence(index) {
      this.sentences.splice(index, 1)
    },

    validateSentence(sentence) {
      // カンマ区切りの形式が正しいかチェック
      const words = sentence.split(',')
      return words.length >= 2 && words.every(word => word.trim() !== '')
    },

    async extractSVOC() {
      if (!this.isValidData) {
        this.showMessage('単元名と少なくとも1つの有効な問題が必要です。', 'error')
        return
      }

      this.isProcessing = true
      this.showMessage('文章を解析中です...', 'info')

      try {
        this.analyzedSentences = []
        this.wordColors = []

        const api = axios.create({
          baseURL: 'https://english-app-serverside.onrender.com',
          headers: {
            'Content-Type': 'application/json'
          },
          // renderのサーバーは応答が遅いため、タイムアウトを長めに設定
          timeout: 30000
        })

        for (let i = 0; i < this.sentences.length; i++) {
          const sentence = this.sentences[i]
          const words = sentence.split(',')
          const wholeSentence = words.join(' ').trim()

          if (!wholeSentence) continue

          try {
            const response = await api.post('/analyze', {
              text: wholeSentence
            })

            if (response.data) {
              this.analyzedSentences[i] = response.data
              const colors = {}
              words.forEach(word => {
                const cleanWord = word.trim()
                const wordType = this.getWordType(cleanWord, response.data)
                colors[cleanWord] = this.colorScheme[wordType]
              })
              this.wordColors[i] = colors
            }

          } catch (error) {
            if (axios.isAxiosError(error)) {
              if (error.code === 'ECONNABORTED') {
                throw new Error('サーバーの応答がタイムアウトしました。しばらく待ってから再試行してください。')
              }
              if (error.response) {
                throw new Error(`サーバーエラー: ${error.response.status} - ${error.response.data?.error || '不明なエラー'}`)
              }
              if (error.request) {
                throw new Error('サーバーに接続できません。インターネット接続を確認してください。')
              }
            }
            throw error
          }
        }

        this.showMessage('解析が完了しました。', 'success')
      } catch (error) {
        this.showMessage(`解析中にエラーが発生しました: ${error.message}`, 'error')
      } finally {
        this.isProcessing = false
      }
    },

    async saveSentences() {
      if (!this.isValidData) {
        this.message = '単元名と少なくとも1つの有効な問題が必要です。'
        this.messageType = 'error'
        return
      }

      this.isProcessing = true
      this.showMessage('文章を保存中です...', 'info')

      try {
        const lessonsRef = collection(db, 'lessons')
        const q = query(lessonsRef, where("name", "==", this.fileName))
        const querySnapshot = await getDocs(q)

        const lessonData = {
          name: this.fileName,
          sentences: this.sentences,
          analyzedSentences: this.analyzedSentences,
          wordColors: this.wordColors,
          createdAt: new Date().toISOString()
        }

        if (querySnapshot.empty) {
          await addDoc(lessonsRef, lessonData)
        } else {
          const docRef = querySnapshot.docs[0].ref
          await updateDoc(docRef, lessonData)
        }

        this.message = '文章が正常に保存されました。'
        this.messageType = 'success'
      } catch (error) {
        this.message = '保存中にエラーが発生しました。'
        this.messageType = 'error'
      }finally {
        this.isProcessing = false
      }
    },
    showMessage(text, type = 'info') {
      this.message = text
      this.messageType = type
    },
    dragEnter(e) {
      console.log('dragEnter', e)
    }
  }
}
</script>

<style scoped>
.sentences-list {
  max-height: 60vh;
  overflow-y: auto;
}

.sentence-item {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.sentence-item:last-child {
  border-bottom: none;
}

.preview-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
