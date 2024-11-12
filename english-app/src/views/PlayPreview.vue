<template>
  <v-card class="preview-card elevation-0 rounded-lg">
    <v-card-title class="text-h5 font-weight-bold text-center py-4">
      <v-icon icon="mdi-puzzle-heart" color="pink-lighten-1" size="32" class="mb-2"></v-icon>
      <div class="title-text">ゲームサンプル</div>
      <div class="text-subtitle-2 mt-2 text-grey-darken-1">
        文章を正しく並べ替えてください
      </div>
    </v-card-title>

    <v-card-text class="word-container pa-6">
      <v-chip-group v-model="displayedWords" column multiple class="word-grid">
        <v-chip v-for="word in shuffledWords" :key="word" :value="word" class="play-preview-chip"
          :class="{ 'selected': selectedWords.includes(word) }" color="primary" label>
          {{ word }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text class="answer-container pa-6">
      <v-card-title class="text-subtitle-1 mb-2 font-weight-medium">
        <v-icon icon="mdi-lightbulb" color="amber-darken-2" class="mr-2"></v-icon>
        選択された単語
      </v-card-title>
      <div class="selected-words-container">
        <v-chip-group column multiple class="selected-words">
          <v-chip v-for="word in selectedWords" :key="word" :value="word" variant="outlined" class="selected-word-chip" size="small">
            {{ word }}
          </v-chip>
        </v-chip-group>
        <div class="confetti-container">
          <ConfettiExplosion v-if="isCorrect" />
        </div>
      </div>
    </v-card-text>

    <div class="decoration-dots"></div>
  </v-card>
</template>

<script>
import ConfettiExplosion from 'vue-confetti-explosion'
export default {
  name: "PlayPreview",
  components: {
    ConfettiExplosion
  },
  data() {
    return {
      sentence: "This is a sample sentence",
      shuffledWords: [],
      selectedWords: [],
      displayedWords: [],
      availableWords: [],
      lastTime: performance.now(),
      interval: 800,
      rafId: null,
    };
  },
  computed: {
    isCorrect() {
      const correctAnswer = this.sentence.split(" ").join(" ")
      const userAnswer = this.selectedWords.join(" ")
      return correctAnswer === userAnswer
    }
  },
  mounted() {
    this.setupGame();
    this.tick = this.tick.bind(this)
    this.rafId = requestAnimationFrame(this.tick)
  },
  beforeUnmount() {
    cancelAnimationFrame(this.rafId)
  },
  methods: {
    setupGame() {
      this.selectedWords = [];
      this.displayedWords = [];
      this.shuffledWords = this.shuffleArray(this.sentence.split(" "));
      this.availableWords = [...this.shuffledWords];
    },
    shuffleArray(array) {
      const newArray = [...array];
      return newArray.sort(() => Math.random() - 0.5);
    },
    selectRandomWord() {
      if (this.availableWords.length === 0) {
        setTimeout(() => {
          this.setupGame();
        }, 1000);
        return;
      }

      const randomIndex = Math.floor(Math.random() * this.availableWords.length);
      const selectedWord = this.availableWords[randomIndex];
      this.availableWords.splice(randomIndex, 1);
      this.selectedWords.push(selectedWord);
      this.displayedWords = [...this.selectedWords];
    },
    tick(timestamp) {
      if (timestamp - this.lastTime >= this.interval) {
        this.selectRandomWord();
        this.lastTime = timestamp;
      }
      this.rafId = requestAnimationFrame(this.tick);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

.preview-card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.98) !important;
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  font-family: 'Noto Sans JP', sans-serif;
}

.title-text {
  font-weight: 700;
  background: linear-gradient(45deg, #6B8DD6, #8E37D7);
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 0.5rem;
}

.word-container {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.word-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.answer-container {
  min-height: 150px;
  background: rgba(107, 141, 214, 0.05);
  border-radius: 12px;
  margin: 0 16px 16px;
}

.selected-words-container {
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

.selected-words {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.play-preview-chip {
  animation: float 1s infinite ease-in-out;
  margin: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.play-preview-chip.selected {
  opacity: 0.5;
  pointer-events: none;
  transform: scale(0.95);
}

.selected-word-chip {
  transition: transform 0.3s ease;
}

.selected-word-chip:hover {
  transform: scale(1.05);
}

.confetti-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* デコレーション用のドット背景 */
.decoration-dots {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0.4;
  background-image: radial-gradient(#6B8DD6 1px, transparent 1px);
  background-size: 20px 20px;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-5px) rotate(1deg);
  }
}

/* v-chip-groupのデフォルトスタイルを上書き */
:deep(.v-chip-group) {
  flex-wrap: wrap;
  justify-content: center;
}

:deep(.v-chip-group__content) {
  flex-wrap: wrap !important;
  justify-content: center !important;
}

:deep(.v-chip) {
  font-family: 'Noto Sans JP', sans-serif !important;
}

/* アニメーション効果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preview-card {
  animation: fadeIn 0.5s ease-out;
}
</style>
