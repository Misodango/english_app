<template>
  <v-card class="play-preview-card" outlined>
    <v-card-title class="text-h5">ゲームサンプル</v-card-title>
    <v-card-subtitle>文章を正しく並べ替えてください</v-card-subtitle>
    <v-card-text>
      <v-chip-group v-model="selectedWords" column multiple>
        <v-chip v-for="word in shuffledWords" :key="word" :value="word" class="play-preview-chip"
          @click="selectWord(word)">
          {{ word }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <v-card-title class="text-subtitle-1">
        あなたの回答
      </v-card-title>
      <v-chip-group column multiple>
        <v-chip v-for="word in selectedWords" :key="word" :value="word" variant="outlined">
          {{ word }}
        </v-chip>
        <ConfettiExplosion v-if="isCorrect" />
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import ConfettiExplosion from 'vue-confetti-explosion'
export default {
  name: "PlayPreview",
  data() {
    return {
      sentence: "This is a sample sentence", // Static or sample sentence
      shuffledWords: [],
      selectedWords: [],
      lastTime: performance.now(),
      interval: 500,
      rafId: null,
      displayProblem: "",
    };
  },
  beforeUnmount() {
    cancelAnimationFrame(this.rafId)
  },
  components: {
    ConfettiExplosion
  },
  mounted() {
    this.setupGame();
    this.tick = this.tick.bind(this)
    this.rafId = requestAnimationFrame(this.tick)
  },
  methods: {
    setupGame() {
      this.shuffledWords = this.shuffleArray(this.sentence.split(" "));
      this.selectedWords = [];
      this.startPreviewAnimation();
    },
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    selectWord(word) {
      this.selectedWords.push(word);
      // this.shuffledWords = this.shuffledWords.filter((w) => w !== word);
    },
    isCorrect() {
      const currentAnswer = this.sentence.split(" ").join()
      const selectedSentence = this.selectedWords.join()
      return currentAnswer === selectedSentence
    },
    tick(timestamp) {
      if (timestamp - this.lastTime >= this.interval) {
        this.startPreviewAnimation()
        this.lastTime = timestamp
      }
      this.rafId = requestAnimationFrame(this.tick)
    },
    startPreviewAnimation() {
      if (this.shuffledWords.length === this.selectedWords.length) {
        this.setupGame();
      } else {
        let idx = Math.floor(Math.random() * this.shuffledWords.length)
        this.selectWord(this.shuffledWords[idx])
      }
    },
  },
};
</script>

<style scoped>
.play-preview-card {
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
}

.play-preview-chip {
  animation: float 1s infinite ease-in-out;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}
</style>
