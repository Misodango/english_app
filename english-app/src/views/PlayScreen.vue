<template>
  <div class="sorting-quiz-screen">
    <v-container class="main-section d-flex align-center justify-center" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="start-card elevation-0 rounded-lg">
            <v-card-title class="text-h4 font-weight-bold text-center py-6">
              並び替えゲーム
              <div class="text-subtitle-1 mt-2 text-grey-darken-1">
                {{ !gameStarted ? '単元を選択してゲームを始めましょう' : '文章を正しく並べ替えてください' }}
              </div>
            </v-card-title>

            <v-card-text class="pa-6">
              <!-- 単元選択部分 -->
              <div v-if="!gameStarted" class="mb-6">
                <v-select v-model="selectedLesson" :items="lessons" item-title="name" item-value="id" label="単元を選択"
                  variant="outlined" class="mb-4" @update:model-value="onLessonSelect"></v-select>

                <v-btn v-if="selectedLesson" @click="startGame" color="primary" block
                  class="start-btn py-6 text-body-1 font-weight-medium" elevation="2" rounded="lg">
                  <v-icon start icon="mdi-timer-play-outline" class="mr-2"></v-icon>
                  ゲームスタート
                </v-btn>
              </div>

              <!-- ゲーム部分 -->
              <div v-if="gameStarted && currentSentence" class="game-content">
                <v-card-subtitle class="text-h6 mb-4">
                  のこり{{ sentences.length + 1 }}問
                </v-card-subtitle>

                <v-chip-group v-model="selectedWords" column multiple class="word-container mb-6">
                  <v-chip v-for="word in shuffledWords" :key="word" :value="word"
                    :style="getChipStyle(word.trim(), currentIndex)" variant="elevated" size="x-large"
                    class="play-preview-chip large-chip" :class="{ 'selected': selectedWords.includes(word) }">
                    {{ word }}
                  </v-chip>
                </v-chip-group>

                <div class="answer-container pa-4 mb-6">
                  <div class="text-subtitle-1 mb-2 font-weight-medium">
                    <v-icon icon="mdi-lightbulb" color="amber-darken-2" class="mr-2"></v-icon>
                    あなたの回答
                  </div>
                  <v-chip-group column multiple>
                    <v-chip v-for="word in selectedWords" :key="word" :value="word"
                      :style="getChipStyle(word.trim(), currentIndex)" variant="outlined" size="large">
                      {{ word }}
                    </v-chip>
                  </v-chip-group>
                </div>

                <v-alert v-if="feedback" :type="feedbackType" variant="tonal" class="mb-4">
                  {{ feedback }}
                </v-alert>

                <div class="d-flex gap-4">
                  <v-btn v-if="!gameEnded && currentSentence.length > 0" @click="popString" color="orange-darken-2"
                    variant="tonal" class="flex-grow-1">
                    <v-icon icon="mdi-arrow-left" start></v-icon>
                    1つ戻る
                  </v-btn>
                  <v-btn v-if="!gameEnded && checkLength()" @click="checkAnswer" color="primary" variant="elevated"
                    class="flex-grow-1">
                    回答を確認
                    <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
                  </v-btn>
                </div>
              </div>

              <!-- ゲーム終了部分 -->
              <div v-if="gameEnded" class="text-center">
                <ConfettiExplosion />
                <v-card-text class="pa-6">
                  <v-btn @click="resetGame" color="primary" block class="start-btn py-6 text-body-1 font-weight-medium"
                    elevation="2" rounded="lg">
                    <v-icon icon="mdi-timer-play-outline" class="mr-2"></v-icon>
                    もう一度プレイ
                  </v-btn>
                  <v-divider></v-divider>
                  <v-btn @click="returnHome" color="primary" block class="start-btn py-6 text-body-1 font-weight-medium"
                    elevation="2" rounded="lg">
                    <v-icon icon="mdi-home" class="mr-2"></v-icon>
                    スタート画面に戻る
                  </v-btn>
                </v-card-text>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

          </v-container>
  </div>

  <v-btn class="floating-btn" color="white" icon="mdi-home" size="x-large"
      @click="$router.push('/')"></v-btn>

</template>
<script>
import { db } from '../firebase/init'
import { collection, getDocs } from 'firebase/firestore'
import ConfettiExplosion from 'vue-confetti-explosion'

export default {
  name: 'PlayScreen',
  data() {
    return {
      lessons: [],
      selectedLesson: null,
      sentences: [],
      delimiter: ',',
      currentSentence: null,
      currentIndex: 0,
      wordColors: [],
      shuffledWords: [],
      selectedWords: [],
      feedback: '',
      feedbackType: 'info',
      gameStarted: false,
      gameEnded: false,
      startTime: 0,
      elapsedTime: 0,
      colorScheme: {
        subject: '#FFF59D',
        verb: '#A5D6A7',
        object: '#90CAF9',
        complement: '#A5D6A7',
        other: '#E0E0E0'
      },
      correctCounts: 0,
    }
  },
  components: {
    ConfettiExplosion
  },
  async mounted() {
    await this.loadLessons()
  },
  methods: {
    getChipStyle(word, sentenceIndex) {
      const backgroundColor = this.wordColors[sentenceIndex]?.[word] || this.colorScheme.other;
      return {
        backgroundColor: backgroundColor,
        color: this.getContrastColor(backgroundColor),
        borderColor: backgroundColor,
      }
    },

    getContrastColor(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? '#000000' : '#FFFFFF';
    },

    async loadLessons() {
      try {
        const lessonsRef = collection(db, 'lessons')
        const querySnapshot = await getDocs(lessonsRef)
        this.lessons = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        this.feedback = '単元の読み込み中にエラーが発生しました'
        this.feedbackType = 'error'
      }
    },

    onLessonSelect() {
      const lesson = this.lessons.find(l => l.id === this.selectedLesson)
      if (lesson) {
        this.sentences = [...lesson.sentences]
        this.wordColors = [...lesson.wordColors]
        this.delimiter = lesson.delimiter === 'comma' ? ',' : ' '
      }
    },

    startGame() {
      this.gameStarted = true
      this.startTime = Date.now()
      this.nextSentence()
    },

    nextSentence() {
      if (this.sentences.length > 0) {
        this.currentSentence = this.sentences.pop()
        this.shuffledWords = this.shuffleArray(this.currentSentence.split(this.delimiter))
        this.selectedWords = []
        this.feedback = ''
        this.feedbackType = 'info'
        this.currentIndex = this.sentences.length
      } else {
        this.endGame()
      }
    },

    endGame() {
      this.gameEnded = true
      this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000)
      this.feedback = `すごい！${this.elapsedTime}秒で終了しました！`
      this.feedbackType = 'success'
    },

    resetGame() {
      this.gameStarted = false
      this.gameEnded = false
      this.selectedLesson = null
      this.currentSentence = null
      this.elapsedTime = 0
      this.feedback = ''
      this.feedbackType = 'info'
      this.correctCounts = 0
    },

    returnHome() {
      this.$router.push('/')
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },

    isCorrect() {
      const correctAnswer = this.currentSentence.split(this.delimiter).join(' ')
      const userAnswer = this.selectedWords.join(' ')
      return correctAnswer === userAnswer
    },

    checkAnswer() {
      if (this.isCorrect()) {
        this.feedback = '正解です！'
        this.feedbackType = 'success'
        this.nextSentence()
        this.correctCounts = this.correctCounts + 1
      } else {
        this.feedback = `😣残念．．．もう一度やってみよう！😣`
        this.feedbackType = 'error'
      }
    },
    checkLength() {
      const correctAnswer = this.currentSentence.split(this.delimiter).join(' ')
      const userAnswer = this.selectedWords.join(' ')
      return (userAnswer.length == correctAnswer.length)
    },

    popString() {
      this.selectedWords.pop()
    },
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap');

.sorting-quiz-screen {
  min-height: 100vh;
  font-family: 'BIZ UDPGothic', sans-serif;
  font-weight: 200;
  background: linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%);
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}

.main-section {
  min-height: 100vh;
  padding: 2rem 0;
}

.start-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.answer-container {
  background: rgba(107, 141, 214, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.word-container {
  min-height: 180px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.large-chip {
  font-size: 1.5rem !important;
  padding: 12px 24px !important;
  height: 60px !important;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.play-preview-chip {
  margin: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.play-preview-chip.selected {
  opacity: 0.5;
  pointer-events: none;
  transform: scale(0.95);
}

.start-btn {
  text-transform: none;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
}

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

@media (max-width: 600px) {
  .main-section {
    padding: 1rem;
  }

  .start-card {
    margin: 1rem;
  }
}

.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
