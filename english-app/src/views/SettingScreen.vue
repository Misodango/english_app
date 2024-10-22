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
    },

    // エクスポート用のJSONデータを生成
    exportData() {
      const existingData = JSON.parse(localStorage.getItem('englishLessons') || '[]')
      return {
        lastUpdated: new Date().toISOString(),
        units: existingData.map(lesson => ({
          id: lesson.name.toLowerCase().replace(/\s+/g, '-'),
          name: lesson.name,
          createdAt: lesson.createdAt,
          sentences: lesson.sentences
        }))
      }
    }
  },
  methods: {
    // ... 既存のメソッドはそのまま残す ...

    async saveSentences() {
      if (!this.isValidData) {
        this.message = '単元名と少なくとも1つの有効な問題が必要です。'
        this.messageType = 'error'
        return
      }

      try {
        // LocalStorageに保存
        const data = {
          name: this.fileName,
          sentences: this.sentences,
          createdAt: new Date().toISOString()
        }

        const existingData = JSON.parse(localStorage.getItem('englishLessons') || '[]')
        const index = existingData.findIndex(lesson => lesson.name === this.fileName)

        if (index !== -1) {
          existingData[index] = data
        } else {
          existingData.push(data)
        }

        localStorage.setItem('englishLessons', JSON.stringify(existingData))

        // JSONファイルとしてエクスポート
        await this.exportToJson()

        this.message = '文章が正常に保存され、JSONファイルが生成されました。'
        this.messageType = 'success'
      } catch (error) {
        this.message = '保存中にエラーが発生しました。'
        this.messageType = 'error'
        console.error('保存エラー:', error)
      }
    },

    async exportToJson() {
      const jsonString = JSON.stringify(this.exportData, null, 2)
      const blob = new Blob([jsonString], { type: 'application/json' })

      // ダウンロード用のリンクを作成
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'english-lessons.json'

      // ダウンロードを実行
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // GitHub APIを使用してリポジトリを更新する場合の実装
      if (process.env.VUE_APP_GITHUB_TOKEN) {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${process.env.VUE_APP_GITHUB_OWNER}/${process.env.VUE_APP_GITHUB_REPO}/contents/data/english-lessons.json`,
            {
              method: 'PUT',
              headers: {
                Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: `Update english lessons data - ${new Date().toISOString()}`,
                content: btoa(jsonString),
                sha: await this.getCurrentFileSha()
              })
            }
          )

          if (!response.ok) {
            throw new Error('GitHub APIの更新に失敗しました')
          }
        } catch (error) {
          console.error('GitHub API エラー:', error)
          // エラーは表示するがプロセスは続行
        }
      }
    },

    async getCurrentFileSha() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${process.env.VUE_APP_GITHUB_OWNER}/${process.env.VUE_APP_GITHUB_REPO}/contents/data/english-lessons.json`,
          {
            headers: {
              Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`
            }
          }
        )

        if (response.ok) {
          const data = await response.json()
          return data.sha
        }
        return null
      } catch (error) {
        return null
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
