<template>
  <div class="word-quiz-screen">
    <!-- スタート画面 -->
    <v-container v-if="!isStarted" class="start-container d-flex align-center justify-center fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="start-card elevation-0 rounded-lg">
            <v-card-title class="text-h4 font-weight-bold text-center py-6">
              English Application
              <div class="text-subtitle-1 mt-2 text-grey-darken-1">
                チャレンジする問題数を入力してください
              </div>
            </v-card-title>
            <v-card-text class="pa-6">
              <v-text-field v-model="totalQuizzesPersonal" type="number" variant="outlined" class="mb-4" hide-details
                min="1" :rules="[v => !!v || '問題数を入力してください']"></v-text-field>
              <v-btn @click="() => { isStarted = true }" color="primary" block
                class="start-btn py-6 text-body-1 font-weight-medium" elevation="2" rounded="lg"
                :disabled="!totalQuizzesPersonal">
                <v-icon start icon="mdi-play" class="mr-2"></v-icon>
                START
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- クイズ画面 -->
    <v-container v-else class="quiz-container" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <!-- プログレスバー -->
          <v-progress-linear :model-value="progressPercentage" color="primary" height="10" rounded
            class="mb-6"></v-progress-linear>
          <!-- クイズコンテンツ -->
          <v-card v-if="currentIndex < totalQuizzesPersonal" class="quiz-card pa-6" elevation="0">
            <v-card-title class="text-h5 text-center mb-6">
              画像に合う単語を選んでください
            </v-card-title>
            <!-- 画像表示 -->
            <div class="text-center mb-6">
              <v-img :src="require(`@/assets/${currentQuiz.image}`)" :width="currentQuiz.width"
                :height="currentQuiz.height" class="mx-auto" cover></v-img>
            </div>
            <!-- 選択肢 -->
            <v-row justify="center" class="word-options mb-6">
              <v-col v-for="(word, index) in currentQuiz.words" :key="index" cols="12" sm="6" md="3"
                class="d-flex justify-center">
                <v-btn :class="{ 'selected': selectedWordIndex === index }" @click="selectedWord(index)"
                  variant="outlined" size="large" rounded="pill" block class="word-btn">
                  <ConfettiExplosion v-if="correctText === 'Excellent!!'" />
                  {{ word }}
                </v-btn>
              </v-col>
            </v-row>

            <!-- フィードバック表示 -->
            <v-alert v-if="correctText" :color="correctText === 'Excellent!!' ? 'success' : 'error'" class="mb-4"
              variant="tonal">
              {{ correctText }}
              <div v-if="correctAnswer" class="mt-2">
                正解: {{ correctAnswer }}
              </div>
            </v-alert>

            <!-- 確認ボタン -->
            <v-btn @click="checkAnswer" color="primary" size="x-large" rounded="lg" class="check-btn" block
              :loading="correctText === 'Excellent!!'" :disabled="selectedWordIndex === null || correctText === 'Excellent!!' || correctText === 'False.'">
              {{ buttonTextC }}
            </v-btn>
          </v-card>

          <!-- 完了画面 -->
          <v-card v-else class="completion-card text-center pa-6" elevation="0">
            <v-card-title class="text-h4 mb-4">
              おつかれさまでした！
            </v-card-title>
            <v-card-text class="text-h6">
              かかった時間は {{ elapsedTime }} 秒です
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="againGame" class="check-btn" rounded="lg">もう一度</v-btn>
              <v-btn color="primary" @click="returnHome" ize="x-large" rounded="lg" class="check-btn">タイトルにもどる</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="floating-btn" color="white" icon="mdi-home" size="x-large"
      @click="$router.push('/')"></v-btn>

  </div>
</template>

<style scoped>
.word-quiz-screen {
  min-height: 100vh;
  background: linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%);
  padding: 2rem 0;
}

.start-container {
  min-height: 100vh;
}

.start-card,
.quiz-card,
.completion-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.word-btn {
  height: 54px;
  font-size: 1.1rem;
  text-transform: none;
  transition: all 0.2s ease;
}

.word-btn:hover {
  transform: translateY(-2px);
}

.word-btn.selected {
  background-color: var(--v-primary-base);
  color: white;
}

.check-btn {
  height: 56px;
  font-size: 1.2rem;
  text-transform: none;
  position: relative;
  margin-top: 2rem;
}

@media (max-width: 600px) {
  .word-quiz-screen {
    padding: 1rem;
  }

  .word-btn {
    margin-bottom: 1rem;
  }
}

.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>

<script>
import { ref, computed } from 'vue';
import jsonData from '@/assets/json/easy-lesson.json';
import ConfettiExplosion from 'vue-confetti-explosion'

export default {
  name: "WordQuizScreen",
  components: {
    ConfettiExplosion
  },
  methods: {
    returnHome() {
      this.$router.push('/')
    },

  },
  setup() {
    const quizzes = ref([]);
    const isStarted = ref(false);
    const totalQuizzes = ref(0);
    const totalQuizzesPersonal = ref(null);
    const currentIndex = ref(0);
    const selectedWordIndex = ref(null);
    const buttonTextC = ref('Check');
    const correctText = ref(undefined);
    const correctAnswer = ref(undefined);
    const startTime = ref(null);
    const elapsedTime = ref(0);

    const currentQuiz = computed(() => quizzes.value[currentIndex.value]);
    const progressPercentage = computed(() => {
      return currentIndex.value >= totalQuizzesPersonal.value
        ? 100
        : (currentIndex.value / totalQuizzesPersonal.value) * 100;
    });

    const selectedWord = (index) => {
      selectedWordIndex.value = index;
    };

    const checkAnswer = () => {
      if (selectedWordIndex.value === currentQuiz.value.correctIndex) {
        correctText.value = 'Excellent!!';
      } else {
        correctText.value = 'False.';
        correctAnswer.value = currentQuiz.value.words[currentQuiz.value.correctIndex];
      }

      setTimeout(() => {
        correctText.value = undefined;
        correctAnswer.value = undefined;
        currentIndex.value++;
        selectedWordIndex.value = null;
        correctText.value = null;
        if (currentIndex.value >= totalQuizzesPersonal.value) {
          const endTime = Date.now();
          elapsedTime.value = Math.floor((endTime - startTime.value) / 1000);
        }
      }, 1500);
    };

    const loadQuizzes = () => {
      quizzes.value = jsonData.quizzes;
      totalQuizzes.value = jsonData.quizzes.length;
      startTime.value = Date.now();
    };

    loadQuizzes();

    const againGame = () => {
      loadQuizzes();
      isStarted.value = false;
      totalQuizzes.value = 0;
      totalQuizzesPersonal.value = null;
      currentIndex.value = 0;
      selectedWordIndex.value = null;
      buttonTextC.value = 'Check';
      correctText.value = undefined;
      correctAnswer.value = undefined;
      elapsedTime.value = 0;
      currentQuiz.value = computed(() => quizzes.value[currentIndex.value]);
      startTime.value = Date.now();
    }
    return {
      quizzes,
      isStarted,
      totalQuizzes,
      totalQuizzesPersonal,
      currentIndex,
      selectedWordIndex,
      buttonTextC,
      correctText,
      correctAnswer,
      currentQuiz,
      progressPercentage,
      selectedWord,
      checkAnswer,
      elapsedTime,
      againGame,
    };
  },

  beforeUnmount() {
    window.onbeforeunload = null;
  },

  mounted() {
    window.onbeforeunload = function (event) {
      const message = 'このページを離れますか？';
      event.returnValue = message;
      return message;
    };
  }
};
</script>
