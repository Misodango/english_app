<template>
  <v-container>
    <h1>設定画面</h1>
    <v-file-input
      v-model="file"
      label="CSVファイルをアップロード"
      accept=".csv"
      @change="handleFileUpload"
    ></v-file-input>
    <v-btn @click="saveSentences" color="primary" :disabled="!file">
      保存
    </v-btn>
    <v-alert v-if="message" :type="messageType" class="mt-4">
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
      messageType: 'info'
    }
  },
  methods: {
    handleFileUpload() {
      if (this.file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target.result
          this.sentences = content.split('\n').filter(line => line.trim() !== '')
        }
        reader.readAsText(this.file)
      }
    },
    saveSentences() {
      if (this.sentences.length > 0) {
        // ここでセンテンスを保存する処理を実装
        // 例: localStorage.setItem('sentences', JSON.stringify(this.sentences))
        console.log('保存された文章:', this.sentences)
        this.message = '文章が正常に保存されました。'
        this.messageType = 'success'
      } else {
        this.message = '保存する文章がありません。'
        this.messageType = 'error'
      }
    }
  }
}
</script>
