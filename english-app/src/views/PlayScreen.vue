<template>
  <v-container>
    <h1>レッスンを始めよう</h1>
    <v-divider></v-divider>

    <!-- 単元選択 (選択後ロック) -->
    <h2 v-if="!gameStarted">
      <v-icon icon="mdi-list-box-outline"></v-icon>
      まずは単元を選択しよう
    </h2>

    <v-select v-model="selectedLesson" :items="lessons" item-title="name" item-value="id" label="単元を選択" class="mb-4"
      @update:model-value="onLessonSelect" :disabled="gameStarted">
    </v-select>

    <v-btn v-if="selectedLesson && !gameStarted" @click="startGame" color="primary" size="large">
      <v-icon icon="mdi-timer-play-outline"></v-icon>
      ゲームスタート
    </v-btn>

    <v-card v-if="currentSentence && gameStarted">
      <v-card-title>のこり{{ this.sentences.length + 1 }}問</v-card-title>
      <v-card-subtitle class="text-subtitle-1 mt-2 text-grey-darken-1">文章を正しく並べ替えてください</v-card-subtitle>
      <v-card-text>
        <v-chip-group v-model="selectedWords" column multiple>
          <v-chip v-for="word in shuffledWords" :key="word" :value="word"
            :style="getChipStyle(word.trim(), currentIndex)" variant="elevated" size="x-large" class="play-preview-chip"
            :class="{ 'selected ': selectedWords.includes(word) }">
            {{ word }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="answer-container pa-6">
        <v-card-title class="text-subtitle-1 mb-2 font-weight-medium">
          <v-icon icon="mdi-lightbulb" color="amber-darken-2" class="mr-2"></v-icon>
          あなたの回答
        </v-card-title>
        <v-chip-group column multiple>
          <v-chip v-for="word in selectedWords" :key="word" :value="word"
            :style="getChipStyle(word.trim(), currentIndex)" variant="outlined">
            {{ word }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions v-if="!gameEnded">
        <v-btn @click="popString" color="orange-darken-2" v-if="currentSentence.length > 0">
          <v-icon icon="mdi-arrow-left" start></v-icon>
          1つ戻る
        </v-btn>
        <v-btn @click="checkAnswer" color="primary" variant="elevated" v-if="checkLength()">
          回答を確認
          <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-alert v-if="feedback" :type="feedbackType" class="mt-4">
      {{ feedback }}
    </v-alert>

    <v-spacer></v-spacer>
    <div v-if="gameEnded">
      <ConfettiExplosion />
      <v-btn @click="resetGame" color="primary">
        <v-icon icon="mdi-timer-play-outline"></v-icon>
        もう一度プレイ
      </v-btn>
    </div>
  </v-container>
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
        this.shuffledWords = this.shuffleArray(this.currentSentence.split(','))
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

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },

    isCorrect() {
      const correctAnswer = this.currentSentence.split(',').join(' ')
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
      const correctAnswer = this.currentSentence.split(',').join(' ')
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
.answer-container {
  min-height: 150px;
  background: rgba(107, 141, 214, 0.05);
  border-radius: 12px;
  margin: 0 16px 16px;
}

.word-container {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
</style>
