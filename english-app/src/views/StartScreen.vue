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
            <v-btn @click="settings" color="secondary" block class="mt-2">
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
      this.$router.push('/play')
    },
    settings() {
      this.$router.push('/settings')
    }
  }
}
</script>
