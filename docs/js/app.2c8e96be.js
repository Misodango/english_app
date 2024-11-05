(function(){"use strict";var e={4607:function(e,t,s){var n=s(3751),o=s(641);const r={id:"app"};function l(e,t,s,n,l,a){const i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(i)])}var a={name:"App"},i=s(6262);const c=(0,i.A)(a,[["render",l]]);var d=c,u=s(5220);function h(e,t,s,n,r,l){const a=(0,o.g2)("v-card-title"),i=(0,o.g2)("v-icon"),c=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),u=(0,o.g2)("v-card"),h=(0,o.g2)("v-col"),m=(0,o.g2)("v-row"),p=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(p,{class:"d-flex align-center justify-center fill-height",fluid:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,{align:"start",justify:"center",class:"mt-16"},{default:(0,o.k6)((()=>[(0,o.bF)(h,{cols:"12",sm:"8",md:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"elevation-0 rounded-lg",style:{background:"rgba(255, 255, 255, 0.95)"}},{default:(0,o.k6)((()=>[(0,o.bF)(a,{class:"text-h4 font-weight-bold text-center py-6",style:{"font-family":"'Noto Sans JP', sans-serif"}},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 英語学習アプリ "),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"以下のオプションから選択してください",-1)]))),_:1}),(0,o.bF)(d,{class:"pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{onClick:l.startLesson,color:"primary",block:"",class:"mb-4 py-6 text-body-1 font-weight-medium",elevation:"2",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{start:"",icon:"mdi-login",class:"mr-2"}),t[1]||(t[1]=(0,o.eW)(" レッスンをはじめる "))])),_:1},8,["onClick"]),(0,o.bF)(c,{onClick:l.settings,variant:"outlined",block:"",class:"py-6 text-body-1 font-weight-medium",elevation:"0",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{start:"",icon:"mdi-cog-outline",class:"mr-2"}),t[2]||(t[2]=(0,o.eW)(" 設定 "))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}s(4114);var m={name:"StartScreen",methods:{startLesson(){this.$router.push("/play")},settings(){this.$router.push("/settings")}}};const p=(0,i.A)(m,[["render",h],["__scopeId","data-v-4f013243"]]);var f=p,g=s(33);const b={key:0},v={key:4};function k(e,t,s,n,r,l){const a=(0,o.g2)("v-divider"),i=(0,o.g2)("v-icon"),c=(0,o.g2)("v-select"),d=(0,o.g2)("v-btn"),u=(0,o.g2)("v-card-title"),h=(0,o.g2)("v-card-subtitle"),m=(0,o.g2)("v-chip"),p=(0,o.g2)("v-chip-group"),f=(0,o.g2)("v-card-text"),k=(0,o.g2)("v-card-actions"),y=(0,o.g2)("v-card"),C=(0,o.g2)("v-alert"),F=(0,o.g2)("v-spacer"),S=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(S,null,{default:(0,o.k6)((()=>[t[9]||(t[9]=(0,o.Lk)("h1",null,"レッスンを始めよう",-1)),(0,o.bF)(a),r.gameStarted?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("h2",b,[(0,o.bF)(i,{icon:"mdi-list-box-outline"}),t[2]||(t[2]=(0,o.eW)(" まずは単元を選択しよう "))])),(0,o.bF)(c,{modelValue:r.selectedLesson,"onUpdate:modelValue":[t[0]||(t[0]=e=>r.selectedLesson=e),l.onLessonSelect],items:r.lessons,"item-title":"name","item-value":"id",label:"単元を選択",class:"mb-4",disabled:r.gameStarted},null,8,["modelValue","items","onUpdate:modelValue","disabled"]),r.selectedLesson&&!r.gameStarted?((0,o.uX)(),(0,o.Wv)(d,{key:1,onClick:l.startGame,color:"primary",size:"large"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{icon:"mdi-timer-play-outline"}),t[3]||(t[3]=(0,o.eW)(" ゲームスタート "))])),_:1},8,["onClick"])):(0,o.Q3)("",!0),r.currentSentence&&r.gameStarted?((0,o.uX)(),(0,o.Wv)(y,{key:2},{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)("のこり"+(0,g.v_)(this.sentences.length+1)+"問",1)])),_:1}),(0,o.bF)(h,{class:"text-subtitle-1 mt-2 text-grey-darken-1"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("文章を正しく並べ替えてください")]))),_:1}),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:r.selectedWords,"onUpdate:modelValue":t[1]||(t[1]=e=>r.selectedWords=e),column:"",multiple:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.shuffledWords,(e=>((0,o.uX)(),(0,o.Wv)(m,{key:e,value:e,style:(0,g.Tr)(l.getChipStyle(e.trim(),r.currentIndex)),variant:"elevated",size:"x-large"},{default:(0,o.k6)((()=>[(0,o.eW)((0,g.v_)(e),1)])),_:2},1032,["value","style"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(a),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)(" あなたの回答 ")]))),_:1}),(0,o.bF)(p,{column:"",multiple:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.selectedWords,(e=>((0,o.uX)(),(0,o.Wv)(m,{key:e,value:e,style:(0,g.Tr)(l.getChipStyle(e.trim(),r.currentIndex)),variant:"outlined"},{default:(0,o.k6)((()=>[(0,o.eW)((0,g.v_)(e),1)])),_:2},1032,["value","style"])))),128))])),_:1})])),_:1}),r.gameEnded?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(k,{key:0},{default:(0,o.k6)((()=>[r.currentSentence.length>0?((0,o.uX)(),(0,o.Wv)(d,{key:0,onClick:l.popString,color:"orange-darken-2"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{icon:"mdi-arrow-left",start:""}),t[6]||(t[6]=(0,o.eW)(" 1つ戻る "))])),_:1},8,["onClick"])):(0,o.Q3)("",!0),l.checkLength()?((0,o.uX)(),(0,o.Wv)(d,{key:1,onClick:l.checkAnswer,color:"primary",variant:"elevated"},{default:(0,o.k6)((()=>[t[7]||(t[7]=(0,o.eW)(" 回答を確認 ")),(0,o.bF)(i,{icon:"mdi-checkbox-marked-circle",end:""})])),_:1},8,["onClick"])):(0,o.Q3)("",!0)])),_:1}))])),_:1})):(0,o.Q3)("",!0),r.feedback?((0,o.uX)(),(0,o.Wv)(C,{key:3,type:r.feedbackType,class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)((0,g.v_)(r.feedback),1)])),_:1},8,["type"])):(0,o.Q3)("",!0),(0,o.bF)(F),r.gameEnded?((0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(d,{onClick:l.resetGame,color:"primary"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{icon:"mdi-timer-play-outline"}),t[8]||(t[8]=(0,o.eW)(" もう一度プレイ "))])),_:1},8,["onClick"])])):(0,o.Q3)("",!0)])),_:1})}var y=s(223),C=s(1884);const F={apiKey:"AIzaSyAeVPmP7Lh0m3snGIq2hvCDXL14lTD4heU",authDomain:"english-app-pbl.firebaseapp.com",projectId:"english-app-pbl",storageBucket:"english-app-pbl.appspot.com",messagingSenderId:"785647830769",appId:"1:785647830769:web:b7f7992317d088344acb50"};console.log("Firebase Config:",{apiKey:"1:785647830769:web:b7f7992317d088344acb50"});const S=(0,y.Wp)(F),w=(0,C.aU)(S);var _={name:"PlayScreen",data(){return{lessons:[],selectedLesson:null,sentences:[],currentSentence:null,currentIndex:0,wordColors:[],shuffledWords:[],selectedWords:[],feedback:"",feedbackType:"info",gameStarted:!1,gameEnded:!1,startTime:0,elapsedTime:0,colorScheme:{subject:"#FFF59D",verb:"#A5D6A7",object:"#90CAF9",complement:"#A5D6A7",other:"#E0E0E0"}}},async mounted(){await this.loadLessons()},methods:{getChipStyle(e,t){const s=this.wordColors[t]?.[e]||this.colorScheme.other;return{backgroundColor:s,color:this.getContrastColor(s),borderColor:s}},getContrastColor(e){const t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o=(299*t+587*s+114*n)/1e3;return o>128?"#000000":"#FFFFFF"},async loadLessons(){try{const e=(0,C.rJ)(w,"lessons"),t=await(0,C.GG)(e);this.lessons=t.docs.map((e=>({id:e.id,...e.data()})))}catch(e){console.error("Lessons読み込みエラー:",e)}},onLessonSelect(){const e=this.lessons.find((e=>e.id===this.selectedLesson));e&&(this.sentences=[...e.sentences],this.wordColors=[...e.wordColors])},startGame(){this.gameStarted=!0,this.startTime=Date.now(),this.nextSentence()},nextSentence(){this.sentences.length>0?(this.currentSentence=this.sentences.pop(),this.shuffledWords=this.shuffleArray(this.currentSentence.split(",")),this.selectedWords=[],this.feedback="",this.feedbackType="info",this.currentIndex=this.sentences.length):this.endGame()},endGame(){this.gameEnded=!0,this.elapsedTime=Math.floor((Date.now()-this.startTime)/1e3),this.feedback=`すごい！${this.elapsedTime}秒で終了しました！`,this.feedbackType="success"},resetGame(){this.gameStarted=!1,this.gameEnded=!1,this.selectedLesson=null,this.currentSentence=null,this.elapsedTime=0,this.feedback="",this.feedbackType="info"},shuffleArray(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},isCorrect(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return e===t},checkAnswer(){this.isCorrect()?(this.feedback="正解です！",this.feedbackType="success",this.nextSentence()):(this.feedback="😣残念．．．もう一度やってみよう！😣",this.feedbackType="error")},checkLength(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return t.length==e.length},popString(){this.selectedWords.pop()}}};const W=(0,i.A)(_,[["render",k]]);var x=W;const T={class:"sentences-list"},E={class:"d-flex align-center"},j={class:"mr-2"},L={class:"preview-chips ml-8 mt-2"};function A(e,t,s,n,r,l){const a=(0,o.g2)("v-file-input"),i=(0,o.g2)("v-text-field"),c=(0,o.g2)("v-card-title"),d=(0,o.g2)("v-icon"),u=(0,o.g2)("v-btn"),h=(0,o.g2)("v-chip"),m=(0,o.g2)("v-card-text"),p=(0,o.g2)("v-spacer"),f=(0,o.g2)("v-card-actions"),b=(0,o.g2)("v-card"),v=(0,o.g2)("v-alert"),k=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(k,null,{default:(0,o.k6)((()=>[t[6]||(t[6]=(0,o.Lk)("h1",{class:"mb-4"},"設定画面",-1)),(0,o.bF)(a,{modelValue:r.file,"onUpdate:modelValue":t[0]||(t[0]=e=>r.file=e),label:"CSVファイルをアップロード",accept:".csv",onChange:l.handleFileUpload,class:"mb-4"},null,8,["modelValue","onChange"]),r.sentences.length>0?((0,o.uX)(),(0,o.Wv)(b,{key:0,class:"mb-4"},{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,{modelValue:r.fileName,"onUpdate:modelValue":t[1]||(t[1]=e=>r.fileName=e),label:"単元名を入力",placeholder:"例: Unit1-Daily Life",class:"mb-2",density:"compact"},null,8,["modelValue"])])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",T,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.sentences,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{key:s,class:"sentence-item mb-4"},[(0,o.Lk)("div",E,[(0,o.Lk)("span",j,"問題 "+(0,g.v_)(s+1)+":",1),(0,o.bF)(i,{modelValue:r.sentences[s],"onUpdate:modelValue":e=>r.sentences[s]=e,density:"compact","hide-details":"",class:"flex-grow-1"},null,8,["modelValue","onUpdate:modelValue"]),(0,o.bF)(u,{icon:"",variant:"text",color:"error",size:"large",class:"ml-2",onClick:e=>l.removeSentence(s)},{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("mdi-delete")]))),_:1})])),_:2},1032,["onClick"])]),(0,o.Lk)("div",L,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.split(","),((e,t)=>((0,o.uX)(),(0,o.Wv)(h,{key:t,size:"small",class:"ma-1",style:(0,g.Tr)(l.getChipStyle(e.trim(),s)),variant:"tonal",onClick:t=>l.changeChipColor(e.trim(),s)},{default:(0,o.k6)((()=>[(0,o.eW)((0,g.v_)(e.trim()),1)])),_:2},1032,["style","onClick"])))),128))])])))),128))])])),_:1}),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{"prepend-icon":"mdi-plus",variant:"tonal",onClick:l.addNewSentence,class:"mr-2"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)(" 新しい問題を追加 ")]))),_:1},8,["onClick"]),(0,o.bF)(u,{"prepend-icon":"mdi-content-cut",variant:"tonal",onClick:l.extractSVOC,class:"mr-2",loading:r.isProcessing,disabled:r.isProcessing||!l.isValidData},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)(" 品詞分解 ")]))),_:1},8,["onClick","loading","disabled"]),(0,o.bF)(p),(0,o.bF)(u,{"prepend-icon":"mdi-check",variant:"tonal",color:"primary",onClick:l.saveSentences,disabled:!l.isValidData},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)(" 保存 ")]))),_:1},8,["onClick","disabled"])])),_:1})])),_:1})):(0,o.Q3)("",!0),r.message?((0,o.uX)(),(0,o.Wv)(v,{key:1,type:r.messageType,class:"mt-4",closable:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,g.v_)(r.message),1)])),_:1},8,["type"])):(0,o.Q3)("",!0)])),_:1})}var V=s(4335),O={name:"SettingsScreen",data(){return{file:null,sentences:[],analyzedSentences:[],wordColors:[],message:"",messageType:"info",fileName:"",isProcessing:!1,colorScheme:{subject:"#FFEB3B",verb:"#A5D6A7",object:"#90CAF9",complement:"#FF9800",other:"#E0E0E0"},apiConfig:{baseURL:"https://english-app-serverside.onrender.com",timeout:5e8,headers:{"Content-Type":"application/json",Accept:"application/json"}}}},computed:{isValidData(){return""!==this.fileName.trim()&&this.sentences.length>0&&this.sentences.every((e=>""!==e.trim()))}},methods:{getWordType(e,t){return t.subject.includes(e)?"subject":t.verb.includes(e)?"verb":t.object.includes(e)?"object":t.complement.includes(e)?"complement":"other"},getWordColor(e,t){return this.wordColors[t]?.[e]||this.colorScheme.other},getChipStyle(e,t){const s=this.wordColors[t]?.[e]||this.colorScheme.other;return{backgroundColor:s,color:this.getContrastColor(s),borderColor:s}},changeChipColor(e,t){this.wordColors[t]||(this.wordColors[t]={});const s=this.wordColors[t]?.[e]||this.colorScheme.other,n=Object.keys(this.colorScheme).filter((e=>this.colorScheme[e]===s)),o=n[0],r=Object.keys(this.colorScheme),l=r.indexOf(o),a=(l+1)%r.length;this.wordColors[t][e]=this.colorScheme[r[a]],console.log(`Word: ${e}, Current Key: ${o}, Next Key: ${r[a]}`)},getContrastColor(e){const t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o=(299*t+587*s+114*n)/1e3;return o>128?"#000000":"#FFFFFF"},handleFileUpload(){if(this.file){const e=new FileReader;e.onload=e=>{const t=e.target.result;this.sentences=t.split("\n").filter((e=>""!==e.trim())).map((e=>e.trim())),this.file.name&&(this.fileName=this.file.name.replace(/\.csv$/,""))},e.readAsText(this.file)}},addNewSentence(){this.sentences.push("")},removeSentence(e){this.sentences.splice(e,1)},validateSentence(e){const t=e.split(",");return t.length>=2&&t.every((e=>""!==e.trim()))},async extractSVOC(){if(this.isValidData){this.isProcessing=!0,this.showMessage("文章を解析中です...","info");try{this.analyzedSentences=[],this.wordColors=[];const t=V.A.create({baseURL:"https://english-app-serverside.onrender.com",headers:{"Content-Type":"application/json"},timeout:3e4});for(let s=0;s<this.sentences.length;s++){const n=this.sentences[s],o=n.split(","),r=o.join(" ").trim();if(r)try{const e=await t.post("/analyze",{text:r});if(e.data){this.analyzedSentences[s]=e.data;const t={};o.forEach((s=>{const n=s.trim(),o=this.getWordType(n,e.data);t[n]=this.colorScheme[o]})),this.wordColors[s]=t}}catch(e){if(console.error(`文章${s+1}の解析中にエラー:`,e),V.A.isAxiosError(e)){if("ECONNABORTED"===e.code)throw new Error("サーバーの応答がタイムアウトしました。しばらく待ってから再試行してください。");if(e.response)throw new Error(`サーバーエラー: ${e.response.status} - ${e.response.data?.error||"不明なエラー"}`);if(e.request)throw new Error("サーバーに接続できません。インターネット接続を確認してください。")}throw e}}this.showMessage("解析が完了しました。","success"),console.log(this.analyzedSentences),console.log(this.wordColors)}catch(e){this.showMessage(`解析中にエラーが発生しました: ${e.message}`,"error"),console.error("SVOC解析エラー:",e)}finally{this.isProcessing=!1}}else this.showMessage("単元名と少なくとも1つの有効な問題が必要です。","error")},async saveSentences(){if(!this.isValidData)return this.message="単元名と少なくとも1つの有効な問題が必要です。",void(this.messageType="error");this.isProcessing=!0,this.showMessage("文章を保存中です...","info");try{const e=(0,C.rJ)(w,"lessons"),t=(0,C.P)(e,(0,C._M)("name","==",this.fileName)),s=await(0,C.GG)(t),n={name:this.fileName,sentences:this.sentences,analyzedSentences:this.analyzedSentences,wordColors:this.wordColors,createdAt:(new Date).toISOString()};if(s.empty)await(0,C.gS)(e,n);else{const e=s.docs[0].ref;await(0,C.mZ)(e,n)}this.message="文章が正常に保存されました。",this.messageType="success"}catch(e){this.message="保存中にエラーが発生しました。",this.messageType="error",console.error("保存エラー:",e)}},showMessage(e,t="info"){this.message=e,this.messageType=t}}};const X=(0,i.A)(O,[["render",A],["__scopeId","data-v-43ec08ea"]]);var I=X;function P(e,t,s,n,r,l){const a=(0,o.g2)("v-card-title"),i=(0,o.g2)("v-icon"),c=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),u=(0,o.g2)("v-card"),h=(0,o.g2)("v-col"),m=(0,o.g2)("v-row"),p=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(p,{class:"fill-height position-relative",fluid:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,{align:"start",justify:"center",class:"mt-16"},{default:(0,o.k6)((()=>[(0,o.bF)(h,{cols:"12",sm:"8",md:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"elevation-0 rounded-lg",style:{background:"rgba(255, 255, 255, 0.95)"}},{default:(0,o.k6)((()=>[(0,o.bF)(a,{class:"text-h4 font-weight-bold text-center py-6",style:{"font-family":"'Noto Sans JP', sans-serif"}},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 😣NotFound😣 "),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"このページは存在しないみたいです",-1),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"下のボタンから移動してください",-1)]))),_:1}),(0,o.bF)(d,{class:"pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{onClick:l.startLesson,color:"primary",block:"",class:"mb-4 py-6 text-body-1 font-weight-medium",elevation:"2",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{start:"",icon:"mdi-login",class:"mr-2"}),t[1]||(t[1]=(0,o.eW)(" レッスンをはじめる "))])),_:1},8,["onClick"]),(0,o.bF)(c,{onClick:l.settings,variant:"outlined",block:"",class:"py-6 text-body-1 font-weight-medium",elevation:"0",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{start:"",icon:"mdi-cog-outline",class:"mr-2"}),t[2]||(t[2]=(0,o.eW)(" 設定 "))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var D={name:"NotFoundScreen",methods:{startLesson(){this.$router.push("/play")},settings(){this.$router.push("/settings")}}};const N=(0,i.A)(D,[["render",P],["__scopeId","data-v-52809ab8"]]);var U=N;const M=[{path:"/",name:"Start",component:f},{path:"/play",name:"Play",component:x},{path:"/settings",name:"Settings",component:I},{path:"/:notFound(.*)",name:"error.404",component:U}],$=(0,u.aE)({history:(0,u.Bt)("/english_app/"),routes:M});var z=$,G=(s(5524),s(4825)),Q=s(2938),K=s(3379),B=(0,G.$N)({components:Q,directives:K}),J=s(1021);const R=(0,n.Ef)(d);R.use(z),R.use(B),R.use(J.A),R.use(V.A),R.mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,n,o,r){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(a=!1,r<l&&(l=r));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,l=n[0],a=n[1],i=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(i)var d=i(s)}for(t&&t(n);c<l.length;c++)r=l[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=self["webpackChunkenglish_app"]=self["webpackChunkenglish_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(4607)}));n=s.O(n)})();
//# sourceMappingURL=app.2c8e96be.js.map