<template>
  <v-container>
    <h1 class="mb-4">設定画面</h1>

    <!-- ファイルアップロード部分 -->
    <v-file-input v-model="file" label="CSVファイルをアップロード" accept=".csv" @change="handleFileUpload"
      class="mb-4"></v-file-input>

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
                color="primary" variant="outlined">
                {{ word }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn prepend-icon="mdi-plus" variant="tonal" @click="addNewSentence" class="mr-2">
          新しい問題を追加
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-check" color="primary" @click="saveSentences" :disabled="!isValidData">
          保存
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- メッセージ表示 -->
    <v-alert v-if="message" :type="messageType" class="mt-4" closable>
      {{ message }}
    </v-alert>
  </v-container>
</template>

<script>
import { db } from '../firebase/init'
import { collection, addDoc, query, getDocs, where, updateDoc } from 'firebase/firestore'

export default {
  name: 'SettingsScreen',
  data() {
    return {
      file: null,
      sentences: [],
      message: '',
      messageType: 'info',
      fileName: ''
    }
  },
  computed: {
    isValidData() {
      return this.fileName.trim() !== '' &&
        this.sentences.length > 0 &&
        this.sentences.every(s => s.trim() !== '')
    }
  },
  methods: {
    handleFileUpload() {
      if (this.file) {
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

    async saveSentences() {
      if (!this.isValidData) {
        this.message = '単元名と少なくとも1つの有効な問題が必要です。'
        this.messageType = 'error'
        return
      }

      try {
        const lessonsRef = collection(db, 'lessons')
        const q = query(lessonsRef, where("name", "==", this.fileName))
        const querySnapshot = await getDocs(q)

        const lessonData = {
          name: this.fileName,
          sentences: this.sentences,
          createdAt: new Date().toISOString()
        }

        if (querySnapshot.empty) {
          // 新規作成
          await addDoc(lessonsRef, lessonData)
        } else {
          // 更新
          const docRef = querySnapshot.docs[0].ref
          await updateDoc(docRef, lessonData)
        }

        this.message = '文章が正常に保存されました。'
        this.messageType = 'success'
      } catch (error) {
        this.message = '保存中にエラーが発生しました。'
        this.messageType = 'error'
        console.error('保存エラー:', error)
      }
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
</style>
