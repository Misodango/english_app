(function(){"use strict";var e={3221:function(e,t,n){var s=n(3751),r=n(641);const l={id:"app"};function c(e,t,n,s,c,o){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.bF)(a)])}var o={name:"App"},a=n(6262);const i=(0,a.A)(o,[["render",c]]);var u=i,d=n(5220);function f(e,t,n,s,l,c){const o=(0,r.g2)("v-card-title"),a=(0,r.g2)("v-btn"),i=(0,r.g2)("v-card-text"),u=(0,r.g2)("v-card"),d=(0,r.g2)("v-col"),f=(0,r.g2)("v-row"),h=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.Wv)(h,{class:"fill-height",fluid:""},{default:(0,r.k6)((()=>[(0,r.bF)(f,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(d,{cols:"12",sm:"8",md:"6"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{class:"elevation-12"},{default:(0,r.k6)((()=>[(0,r.bF)(o,{class:"text-h5 text-center"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)(" 英語学習アプリへようこそ ")]))),_:1}),(0,r.bF)(i,null,{default:(0,r.k6)((()=>[t[3]||(t[3]=(0,r.Lk)("p",{class:"text-center"},"以下のオプションから選択してください：",-1)),(0,r.bF)(a,{onClick:c.startLesson,color:"primary",block:"",class:"mt-2"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)(" レッスンを始める ")]))),_:1},8,["onClick"]),(0,r.bF)(a,{onClick:c.settings,color:"secondary",block:"",class:"mt-2"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)(" 設定 ")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}n(4114);var h={name:"StartScreen",methods:{startLesson(){this.$router.push("/play")},settings(){this.$router.push("/settings")}}};const p=(0,a.A)(h,[["render",f]]);var k=p,v=n(33);const g={key:2},b={key:0},y={key:0},m={key:1};function _(e,t,n,s,l,c){const o=(0,r.g2)("v-card-title"),a=(0,r.g2)("v-chip"),i=(0,r.g2)("v-chip-group"),u=(0,r.g2)("v-card-text"),d=(0,r.g2)("v-card"),f=(0,r.g2)("v-btn"),h=(0,r.g2)("v-card-actions"),p=(0,r.g2)("v-alert"),k=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.Wv)(k,null,{default:(0,r.k6)((()=>[t[7]||(t[7]=(0,r.Lk)("h1",null,"プレイ画面",-1)),l.currentSentence?((0,r.uX)(),(0,r.Wv)(d,{key:0},{default:(0,r.k6)((()=>[(0,r.bF)(o,null,{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("文章を正しく並べ替えてください")]))),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(i,{modelValue:l.selectedWords,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedWords=e),column:"",multiple:""},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.shuffledWords,(e=>((0,r.uX)(),(0,r.Wv)(a,{key:e,value:e},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(e),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,r.bF)(d,null,{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("あなたの回答")]))),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(i,{column:"",multiple:""},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.selectedWords,(e=>((0,r.uX)(),(0,r.Wv)(a,{key:e,value:e},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(e),1)])),_:2},1032,["value"])))),128))])),_:1})])),_:1}),l.currentSentence.length>0?((0,r.uX)(),(0,r.Wv)(h,{key:0},{default:(0,r.k6)((()=>[(0,r.bF)(f,{onClick:c.popString,color:"primary"},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)(" 1つ戻る ")]))),_:1},8,["onClick"])])),_:1})):(0,r.Q3)("",!0),c.checkLength()?((0,r.uX)(),(0,r.Wv)(h,{key:1},{default:(0,r.k6)((()=>[(0,r.bF)(f,{onClick:c.checkAnswer,color:"primary"},{default:(0,r.k6)((()=>t[4]||(t[4]=[(0,r.eW)(" 回答を確認 ")]))),_:1},8,["onClick"])])),_:1})):(0,r.Q3)("",!0)])),_:1})):(0,r.Q3)("",!0),l.feedback?((0,r.uX)(),(0,r.Wv)(p,{key:1,type:l.feedbackType,class:"mt-4"},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(l.feedback),1)])),_:1},8,["type"])):(0,r.Q3)("",!0),l.currentSentence?((0,r.uX)(),(0,r.CE)("div",g,[c.isCorrect()&&"success"===l.feedbackType?((0,r.uX)(),(0,r.CE)("div",b,[c.isEnd()?((0,r.uX)(),(0,r.CE)("div",y,[(0,r.bF)(f,{onClick:c.startScreen},{default:(0,r.k6)((()=>t[5]||(t[5]=[(0,r.Lk)("p",null,"終了",-1)]))),_:1},8,["onClick"])])):((0,r.uX)(),(0,r.CE)("div",m,[(0,r.bF)(f,{onClick:c.nextSentence,color:"secondary",class:"mt-4"},{default:(0,r.k6)((()=>t[6]||(t[6]=[(0,r.Lk)("p",null,"次の問題",-1)]))),_:1},8,["onClick"])]))])):(0,r.Q3)("",!0)])):(0,r.Q3)("",!0)])),_:1})}var S={name:"PlayScreen",data(){return{sentences:[],currentSentence:null,shuffledWords:[],selectedWords:[],feedback:"",feedbackType:"info"}},mounted(){this.loadSentences()},methods:{loadSentences(){this.sentences=["I,play,the,guitar,.","She,likes,to,sing,songs,.","They,are,studying,English,."],this.nextSentence()},nextSentence(){this.sentences.length>0?(this.currentSentence=this.sentences.pop(),this.shuffledWords=this.shuffleArray(this.currentSentence.split(",")),this.selectedWords=[],this.feedback="",this.feedbackType="info"):(this.currentSentence=null,this.feedback="すべての問題が終了しました。",this.feedbackType="success")},shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},isCorrect(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return e===t},checkAnswer(){this.isCorrect()?(this.feedback="正解です！",this.feedbackType="success"):(this.feedback="😣残念．．．もう一度やってみよう！😣",this.feedbackType="error")},checkLength(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return t.length==e.length},popString(){this.selectedWords.pop()},isEnd(){return 0===this.sentences.length},startScreen(){this.$router.push("/")}}};const W=(0,a.A)(S,[["render",_]]);var C=W;function F(e,t,n,s,l,c){const o=(0,r.g2)("v-file-input"),a=(0,r.g2)("v-btn"),i=(0,r.g2)("v-alert"),u=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.Wv)(u,null,{default:(0,r.k6)((()=>[t[2]||(t[2]=(0,r.Lk)("h1",null,"設定画面",-1)),(0,r.bF)(o,{modelValue:l.file,"onUpdate:modelValue":t[0]||(t[0]=e=>l.file=e),label:"CSVファイルをアップロード",accept:".csv",onChange:c.handleFileUpload},null,8,["modelValue","onChange"]),(0,r.bF)(a,{onClick:c.saveSentences,color:"primary",disabled:!l.file},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)(" 保存 ")]))),_:1},8,["onClick","disabled"]),l.message?((0,r.uX)(),(0,r.Wv)(i,{key:0,type:l.messageType,class:"mt-4"},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(l.message),1)])),_:1},8,["type"])):(0,r.Q3)("",!0)])),_:1})}var T={name:"SettingsScreen",data(){return{file:null,sentences:[],message:"",messageType:"info"}},methods:{handleFileUpload(){if(this.file){const e=new FileReader;e.onload=e=>{const t=e.target.result;this.sentences=t.split("\n").filter((e=>""!==e.trim()))},e.readAsText(this.file)}},saveSentences(){this.sentences.length>0?(console.log("保存された文章:",this.sentences),this.message="文章が正常に保存されました。",this.messageType="success"):(this.message="保存する文章がありません。",this.messageType="error")}}};const X=(0,a.A)(T,[["render",F]]);var x=X;const j=[{path:"/",name:"Start",component:k},{path:"/play",name:"Play",component:C},{path:"/settings",name:"Settings",component:x}],w=(0,d.aE)({history:(0,d.LA)("/english_app/"),routes:j});var E=w,O=(n(5524),n(4825)),A=n(2938),L=n(3379),Q=(0,O.$N)({components:A,directives:L});const V=(0,s.Ef)(u);V.use(E),V.use(Q),V.mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,l){if(!s){var c=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],l=e[u][2];for(var o=!0,a=0;a<s.length;a++)(!1&l||c>=l)&&Object.keys(n.O).every((function(e){return n.O[e](s[a])}))?s.splice(a--,1):(o=!1,l<c&&(c=l));if(o){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,r,l]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,l,c=s[0],o=s[1],a=s[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(a)var u=a(n)}for(t&&t(s);i<c.length;i++)l=c[i],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},s=self["webpackChunkenglish_app"]=self["webpackChunkenglish_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(3221)}));s=n.O(s)})();
//# sourceMappingURL=app.1daa478d.js.map