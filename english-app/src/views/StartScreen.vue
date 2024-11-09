<template>
  <div class="start-screen">
    <!-- Main Section -->
    <v-container class="main-section d-flex align-center justify-center fill-height" fluid>
      <v-row align="start" justify="center" class="mt-16">
        <v-col cols="12" sm="8" md="4">
          <v-card class="start-card elevation-0 rounded-lg">
            <v-card-title class="text-h4 font-weight-bold text-center py-6">
              英語学習アプリ
              <div class="text-subtitle-1 mt-2 text-grey-darken-1">以下のオプションから選択してください</div>
            </v-card-title>
            <v-card-text class="pa-6">
              <v-btn @click="startLesson" color="primary" block
                class="start-btn mb-4 py-6 text-body-1 font-weight-medium" elevation="2" rounded="lg">
                <v-icon start icon="mdi-login" class="mr-2"></v-icon>
                レッスンをはじめる
              </v-btn>
              <v-btn @click="settings" variant="outlined" block class="settings-btn py-6 text-body-1 font-weight-medium"
                elevation="0" rounded="lg">
                <v-icon start icon="mdi-cog-outline" class="mr-2"></v-icon>
                設定
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Preview Section -->
    <div class="preview-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <PlayPreview />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import PlayPreview from './PlayPreview'

export default {
  name: 'StartScreen',
  methods: {
    startLesson() {
      this.$router.push('/play')
    },
    settings() {
      this.$router.push('/settings')
    },
  },
  components: {
    PlayPreview,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

.start-screen {
  min-height: 100vh;
  font-family: 'Noto Sans JP', sans-serif;
}

/* Main Section Styles */
.main-section {
  background: linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%);
  min-height: 60vh;
  padding: 2rem 0;
}

.start-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.start-btn,
.settings-btn {
  text-transform: none;
  letter-spacing: 0.5px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: transform 0.2s ease;
}

.start-btn:hover,
.settings-btn:hover {
  transform: translateY(-2px);
}

/* Preview Section Styles */
.preview-section {
  min-height: 40vh;
  padding: 2rem 0;
  position: relative;
}

.preview-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(180deg, transparent, rgba(142, 55, 215, 0.1));
  pointer-events: none;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .main-section {
    min-height: 50vh;
  }

  .preview-section {
    min-height: 50vh;
  }

  .start-card {
    margin: 1rem;
  }
}

/* Animation for gradient background */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.main-section,
.preview-section {
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}
</style>
