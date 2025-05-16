<template>
  <div class="auth-screen">
    <v-container class="main-section d-flex align-center justify-center" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="auth-card elevation-0 rounded-lg">
            <v-card-title class="text-h4 font-weight-bold text-center py-6">
              {{ isLogin ? 'ログイン' : 'サインアップ' }}
              <div class="text-subtitle-1 mt-2 text-grey-darken-1">
                {{ isLogin ? 'アカウントにログインしてください' : '新しいアカウントを作成してください' }}
              </div>
            </v-card-title>

            <v-card-text class="pa-6">
              <v-form @submit.prevent="handleAuth">
                <v-text-field
                  v-model="email"
                  label="メールアドレス"
                  type="email"
                  variant="outlined"
                  required
                  class="mb-4"
                  prepend-inner-icon="mdi-email-outline"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="パスワード"
                  type="password"
                  variant="outlined"
                  required
                  class="mb-6"
                  prepend-inner-icon="mdi-lock-outline"
                ></v-text-field>

                <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
                  {{ error }}
                </v-alert>

                <v-btn
                  type="submit"
                  color="primary"
                  block
                  class="auth-btn py-6 text-body-1 font-weight-medium"
                  elevation="2"
                  rounded="lg"
                >
                  <v-icon start icon="mdi-login" class="mr-2"></v-icon>
                  {{ isLogin ? 'ログイン' : 'アカウント作成' }}
                </v-btn>

                <div class="text-center mt-6">
                  <a @click="toggleMode" class="toggle-link">
                    {{ isLogin ? 'アカウントがない？ サインアップ' : 'すでにアカウントをお持ちの方はこちら' }}
                  </a>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn class="floating-btn" color="white" icon="mdi-home" size="x-large"
      @click="$router.push('/')"></v-btn>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'AuthScreen',
  setup() {
    const email = ref('')
    const password = ref('')
    const isLogin = ref(true)
    const error = ref('')
    const auth = getAuth()
    const router = useRouter()
    const route = useRoute()
    const redirectPath = ref('/')

    // URLクエリパラメータからリダイレクト先を取得
    onMounted(() => {
      if (route.query.redirect) {
        redirectPath.value = route.query.redirect
      }
    })

    const handleAuth = async () => {
      error.value = ''
      try {
        if (isLogin.value) {
          await signInWithEmailAndPassword(auth, email.value, password.value)
        } else {
          await createUserWithEmailAndPassword(auth, email.value, password.value)
        }
        // 認証成功後、元のリクエスト先またはホームページにリダイレクト
        router.push(redirectPath.value)
      } catch (err) {
        // エラーメッセージを日本語に変換
        switch(err.code) {
          case 'auth/email-already-in-use':
            error.value = 'このメールアドレスは既に使用されています'
            break
          case 'auth/invalid-email':
            error.value = 'メールアドレスの形式が正しくありません'
            break
          case 'auth/user-not-found':
            error.value = 'ユーザーが見つかりません'
            break
          case 'auth/wrong-password':
            error.value = 'パスワードが間違っています'
            break
          case 'auth/weak-password':
            error.value = 'パスワードは6文字以上にしてください'
            break
          default:
            error.value = err.message
        }
      }
    }

    const toggleMode = () => {
      isLogin.value = !isLogin.value
      error.value = '' // モード切替時にエラーをクリア
    }

    return {
      email,
      password,
      isLogin,
      error,
      handleAuth,
      toggleMode,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap');

.auth-screen {
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

.auth-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.auth-btn {
  text-transform: none;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
}

.auth-btn:hover {
  transform: translateY(-2px);
}

.toggle-link {
  color: var(--v-primary-base);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
}

.toggle-link:hover {
  text-decoration: underline;
  opacity: 0.8;
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

  .auth-card {
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
