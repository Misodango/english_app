<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-card-title class="text-h5 text-center">
            英語学習アプリへようこそ
          </v-card-title>
          <v-card-text>
            <p class="text-center">以下のオプションから選択してください：</p>
            <v-btn @click="startLesson" color="primary" block class="mt-2">
              レッスンを始める
            </v-btn>
            <v-btn @click="viewProgress" color="secondary" block class="mt-2">
              進捗を確認
            </v-btn>
            <v-btn @click="settings" color="success" block class="mt-2">
              設定
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StartScreen',
  methods: {
    startLesson() {
      console.log('レッスンを開始します')
    },
    viewProgress() {
      console.log('進捗を確認します')
    },
    settings() {
      console.log('設定画面に移動します')
    }
  }
}
</script>
