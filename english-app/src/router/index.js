import { createRouter, createWebHashHistory } from "vue-router";
import StartScreen from "@/views/StartScreen.vue";
import PlayScreen from "@/views/PlayScreen";
import SettingScreen from "@/views/SettingScreen";
import NotFoundScreen from "@/views/NotfoundScreen.vue";
import WordQuizScreen from "@/views/WordQuiz.vue";
import AuthScreen from "@/views/AuthScreen.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
	{
		path: "/",
		name: "Start",
		component: StartScreen,
	},
	{
		path: "/play",
		name: "Play",
		component: PlayScreen,
	},
	{
		path: "/auth",
		name: "Auth",
		component: AuthScreen,
	},
	{
		path: "/settings",
		name: "Settings",
		component: SettingScreen,
		meta: { requiresAuth: true }, // 修正: requiredAuth → requiresAuth に統一
	},
	{
		path: "/wordQuiz",
		name: "WordQuiz",
		component: WordQuizScreen,
	},
	{
		path: "/:notFound(.*)",
		name: "error.404",
		component: NotFoundScreen,
	},

	// 他のルートをここに追加していきます
];

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHashHistory(process.env.BASE_URL),
	routes,
});

// ナビゲーションガード - 認証が必要なルートを保護
router.beforeEach((to, from, next) => {
	const auth = getAuth();
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

	if (requiresAuth) {
		// 認証が必要なルートへのアクセス時に認証状態を確認
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// ユーザーが認証済みの場合、アクセスを許可
				next();
			} else {
				// 未認証の場合、認証ページにリダイレクト
				next({
					path: "/auth",
					query: { redirect: to.fullPath }, // リダイレクト先を保存
				});
			}
		});
	} else {
		// 認証が不要なルートは通常通り進む
		next();
	}
});

export default router;
