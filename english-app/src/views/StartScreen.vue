<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <v-row align="start" justify="center" class="mt-16">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-0 rounded-lg" style="background: rgba(255, 255, 255, 0.95)">
          <v-card-title class="text-h4 font-weight-bold text-center py-6"
            style="font-family: 'Noto Sans JP', sans-serif;">
            英語学習アプリ
            <div class="text-subtitle-1 mt-2 text-grey-darken-1">以下のオプションから選択してください</div>
          </v-card-title>
          <v-card-text class="pa-6">
            <v-btn @click="startLesson" color="primary" block class="mb-4 py-6 text-body-1 font-weight-medium"
              elevation="2" rounded="lg">
              <v-icon start icon="mdi-login" class="mr-2"></v-icon>
              レッスンをはじめる
            </v-btn>
            <v-btn @click="settings" variant="outlined" block class="py-6 text-body-1 font-weight-medium" elevation="0"
              rounded="lg">
              <v-icon start icon="mdi-cog-outline" class="mr-2"></v-icon>
              設定
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
  <v-divider></v-divider>
  <v-spacer></v-spacer>
  <v-container class="">
    <v-row>
      <PlayPreview />
      <v-spacer></v-spacer>
      <PlayPreview />
      <v-spacer></v-spacer>
      <PlayPreview />
    </v-row>
  </v-container>
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
.v-btn {
  text-transform: none;
  letter-spacing: 0.5px;
}

.v-container {
  background: linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%);
  overflow: hidden;
}

.lab-scene {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50vh;
  pointer-events: none;
}

.float-element {
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  animation: float 6s infinite ease-in-out;
}

.beaker {
  left: 20%;
  bottom: 20%;
  animation-delay: -2s;
}

.flask {
  left: 60%;
  bottom: 30%;
  animation-delay: -4s;
}

.molecule {
  left: 40%;
  bottom: 40%;
  animation-delay: -1s;
}

.liquid {
  animation: bubble 3s infinite ease-in-out;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes bubble {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

/* スマートフォン向けの調整 */
@media (max-width: 600px) {
  .lab-scene {
    height: 30vh;
  }

  .float-element {
    transform: scale(0.7);
  }
}
</style>
