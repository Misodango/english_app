<template>
  <v-container>
    <h1>プレイ画面</h1>
    <v-card v-if="currentSentence">
      <v-card-title>文章を正しく並べ替えてください</v-card-title>
      <v-card-text>
        <v-chip-group v-model="selectedWords" column multiple>
          <v-chip v-for="word in shuffledWords" :key="word" :value="word">
            {{ word }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card>あなたの回答</v-card>
      <v-card-text>
        <v-chip-group column multiple>
          <v-chip v-for="word in selectedWords" :key="word" :value="word">
            {{ word }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions v-if="currentSentence.length > 0">
        <v-btn @click="popString" color="primary">
          1つ戻る
        </v-btn>
      </v-card-actions>

      <v-card-actions v-if="checkLength()">
        <v-btn @click="checkAnswer" color="primary">
          回答を確認
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-alert v-if="feedback" :type="feedbackType" class="mt-4">
      {{ feedback }}
    </v-alert>

    <div v-if="currentSentence">

      <div v-if="isCorrect() && feedbackType === 'success'">
        <div v-if="isEnd()">
          <v-btn @click="startScreen">
            <p>終了</p>
          </v-btn>
        </div>

        <div v-else>
          <v-btn @click="nextSentence" color="secondary" class="mt-4">
            <p>次の問題</p>
          </v-btn>
        </div>
      </div>

    </div>
  </v-container>
</template>

<script>
export default {
  name: 'PlayScreen',
  data() {
    return {
      sentences: [],
      currentSentence: null,
      shuffledWords: [],
      selectedWords: [],
      feedback: '',
      feedbackType: 'info'
    }
  },
  mounted() {
    this.loadSentences()
  },
  methods: {
    loadSentences() {
      // ここでCSVから文章を読み込む処理を実装
      // 仮のデータを使用
      this.sentences = [
        'I,play,the,guitar,.',
        'She,likes,to,sing,songs,.',
        'They,are,studying,English,.'
      ]
      this.nextSentence()
    },
    nextSentence() {
      if (this.sentences.length > 0) {
        this.currentSentence = this.sentences.pop()
        this.shuffledWords = this.shuffleArray(this.currentSentence.split(','))
        this.selectedWords = []
        this.feedback = ''
        this.feedbackType = 'info'
      } else {
        this.currentSentence = null
        this.feedback = 'すべての問題が終了しました。'
        this.feedbackType = 'success'
      }
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
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
    isEnd() {
      return this.sentences.length === 0
    },
    startScreen() {
      this.$router.push('/')
    }
  }
}
</script>
