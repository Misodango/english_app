(function(){"use strict";var e={7140:function(e,t,s){var n=s(3751),o=s(641);const a={id:"app"};function l(e,t,s,n,l,i){const r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(r)])}var i={name:"App"},r=s(6262);const c=(0,r.A)(i,[["render",l]]);var d=c,u=s(5220);const h={class:"start-screen"},m={class:"preview-section"};function p(e,t,s,n,a,l){const i=(0,o.g2)("v-card-title"),r=(0,o.g2)("v-icon"),c=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),u=(0,o.g2)("v-card"),p=(0,o.g2)("v-col"),f=(0,o.g2)("v-row"),g=(0,o.g2)("v-container"),v=(0,o.g2)("PlayPreview");return(0,o.uX)(),(0,o.CE)("div",h,[(0,o.bF)(g,{class:"main-section d-flex align-center justify-center fill-height",fluid:""},{default:(0,o.k6)((()=>[(0,o.bF)(f,{align:"start",justify:"center",class:"mt-16"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{cols:"12",sm:"8",md:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"start-card elevation-0 rounded-lg"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{class:"text-h4 font-weight-bold text-center py-6"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 英語学習アプリ "),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"以下のオプションから選択してください",-1)]))),_:1}),(0,o.bF)(d,{class:"pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{onClick:l.startLesson,color:"primary",block:"",class:"start-btn mb-4 py-6 text-body-1 font-weight-medium",elevation:"2",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{start:"",icon:"mdi-login",class:"mr-2"}),t[1]||(t[1]=(0,o.eW)(" レッスンをはじめる "))])),_:1},8,["onClick"]),(0,o.bF)(c,{onClick:l.settings,variant:"outlined",block:"",class:"settings-btn py-6 text-body-1 font-weight-medium",elevation:"0",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{start:"",icon:"mdi-cog-outline",class:"mr-2"}),t[2]||(t[2]=(0,o.eW)(" 設定 "))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Lk)("div",m,[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,{justify:"center"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{cols:"12",sm:"8",md:"6"},{default:(0,o.k6)((()=>[(0,o.bF)(v)])),_:1})])),_:1})])),_:1})])])}s(4114);var f=s(33);const g={class:"selected-words-container"},v={class:"confetti-container"};function b(e,t,s,n,a,l){const i=(0,o.g2)("v-icon"),r=(0,o.g2)("v-card-title"),c=(0,o.g2)("v-chip"),d=(0,o.g2)("v-chip-group"),u=(0,o.g2)("v-card-text"),h=(0,o.g2)("ConfettiExplosion"),m=(0,o.g2)("v-card");return(0,o.uX)(),(0,o.Wv)(m,{class:"preview-card elevation-0 rounded-lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{class:"text-h5 font-weight-bold text-center py-4"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{icon:"mdi-puzzle-heart",color:"pink-lighten-1",size:"32",class:"mb-2"}),t[1]||(t[1]=(0,o.Lk)("div",{class:"title-text"},"ゲームサンプル",-1)),t[2]||(t[2]=(0,o.Lk)("div",{class:"text-subtitle-2 mt-2 text-grey-darken-1"}," 文章を正しく並べ替えてください ",-1))])),_:1}),(0,o.bF)(u,{class:"word-container pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(d,{modelValue:a.displayedWords,"onUpdate:modelValue":t[0]||(t[0]=e=>a.displayedWords=e),column:"",multiple:"",class:"word-grid"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.shuffledWords,(e=>((0,o.uX)(),(0,o.Wv)(c,{key:e,value:e,class:(0,f.C4)(["play-preview-chip",{selected:a.selectedWords.includes(e)}]),color:"primary",label:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e),1)])),_:2},1032,["value","class"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(u,{class:"answer-container pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{class:"text-subtitle-1 mb-2 font-weight-medium"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{icon:"mdi-lightbulb",color:"amber-darken-2",class:"mr-2"}),t[3]||(t[3]=(0,o.eW)(" 選択された単語 "))])),_:1}),(0,o.Lk)("div",g,[(0,o.bF)(d,{column:"",multiple:"",class:"selected-words"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.selectedWords,(e=>((0,o.uX)(),(0,o.Wv)(c,{key:e,value:e,variant:"outlined",class:"selected-word-chip",size:"small"},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e),1)])),_:2},1032,["value"])))),128))])),_:1}),(0,o.Lk)("div",v,[l.isCorrect?((0,o.uX)(),(0,o.Wv)(h,{key:0})):(0,o.Q3)("",!0)])])])),_:1}),t[4]||(t[4]=(0,o.Lk)("div",{class:"decoration-dots"},null,-1))])),_:1})}var k=s(5910),y={name:"PlayPreview",components:{ConfettiExplosion:k.A},data(){return{sentence:"This is a sample sentence",shuffledWords:[],selectedWords:[],displayedWords:[],availableWords:[],lastTime:performance.now(),interval:800,rafId:null}},computed:{isCorrect(){const e=this.sentence.split(" ").join(" "),t=this.selectedWords.join(" ");return e===t}},mounted(){this.setupGame(),this.tick=this.tick.bind(this),this.rafId=requestAnimationFrame(this.tick)},beforeUnmount(){cancelAnimationFrame(this.rafId)},methods:{setupGame(){this.selectedWords=[],this.displayedWords=[],this.shuffledWords=this.shuffleArray(this.sentence.split(" ")),this.availableWords=[...this.shuffledWords]},shuffleArray(e){const t=[...e];return t.sort((()=>Math.random()-.5))},selectRandomWord(){if(0===this.availableWords.length)return void setTimeout((()=>{this.setupGame()}),1e3);const e=Math.floor(Math.random()*this.availableWords.length),t=this.availableWords[e];this.availableWords.splice(e,1),this.selectedWords.push(t),this.displayedWords=[...this.selectedWords]},tick(e){e-this.lastTime>=this.interval&&(this.selectRandomWord(),this.lastTime=e),this.rafId=requestAnimationFrame(this.tick)}}};const F=(0,r.A)(y,[["render",b],["__scopeId","data-v-7030ef97"]]);var C=F,W={name:"StartScreen",methods:{startLesson(){this.$router.push("/play")},settings(){this.$router.push("/settings")}},components:{PlayPreview:C}};const w=(0,r.A)(W,[["render",p],["__scopeId","data-v-9bc0aaf0"]]);var _=w;const S={key:0},x={key:4};function E(e,t,s,n,a,l){const i=(0,o.g2)("v-divider"),r=(0,o.g2)("v-icon"),c=(0,o.g2)("v-select"),d=(0,o.g2)("v-btn"),u=(0,o.g2)("v-card-title"),h=(0,o.g2)("v-card-subtitle"),m=(0,o.g2)("v-chip"),p=(0,o.g2)("v-chip-group"),g=(0,o.g2)("v-card-text"),v=(0,o.g2)("v-card-actions"),b=(0,o.g2)("v-card"),k=(0,o.g2)("v-alert"),y=(0,o.g2)("v-spacer"),F=(0,o.g2)("ConfettiExplosion"),C=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(C,null,{default:(0,o.k6)((()=>[t[9]||(t[9]=(0,o.Lk)("h1",null,"レッスンを始めよう",-1)),(0,o.bF)(i),a.gameStarted?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("h2",S,[(0,o.bF)(r,{icon:"mdi-list-box-outline"}),t[2]||(t[2]=(0,o.eW)(" まずは単元を選択しよう "))])),(0,o.bF)(c,{modelValue:a.selectedLesson,"onUpdate:modelValue":[t[0]||(t[0]=e=>a.selectedLesson=e),l.onLessonSelect],items:a.lessons,"item-title":"name","item-value":"id",label:"単元を選択",class:"mb-4",disabled:a.gameStarted},null,8,["modelValue","items","onUpdate:modelValue","disabled"]),a.selectedLesson&&!a.gameStarted?((0,o.uX)(),(0,o.Wv)(d,{key:1,onClick:l.startGame,color:"primary",size:"large"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{icon:"mdi-timer-play-outline"}),t[3]||(t[3]=(0,o.eW)(" ゲームスタート "))])),_:1},8,["onClick"])):(0,o.Q3)("",!0),a.currentSentence&&a.gameStarted?((0,o.uX)(),(0,o.Wv)(b,{key:2},{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)("のこり"+(0,f.v_)(this.sentences.length+1)+"問",1)])),_:1}),(0,o.bF)(h,{class:"text-subtitle-1 mt-2 text-grey-darken-1"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("文章を正しく並べ替えてください")]))),_:1}),(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:a.selectedWords,"onUpdate:modelValue":t[1]||(t[1]=e=>a.selectedWords=e),column:"",multiple:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.shuffledWords,(e=>((0,o.uX)(),(0,o.Wv)(m,{key:e,value:e,style:(0,f.Tr)(l.getChipStyle(e.trim(),a.currentIndex)),variant:"elevated",size:"x-large"},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e),1)])),_:2},1032,["value","style"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(i),(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)(" あなたの回答 ")]))),_:1}),(0,o.bF)(p,{column:"",multiple:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.selectedWords,(e=>((0,o.uX)(),(0,o.Wv)(m,{key:e,value:e,style:(0,f.Tr)(l.getChipStyle(e.trim(),a.currentIndex)),variant:"outlined"},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e),1)])),_:2},1032,["value","style"])))),128))])),_:1})])),_:1}),a.gameEnded?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(v,{key:0},{default:(0,o.k6)((()=>[a.currentSentence.length>0?((0,o.uX)(),(0,o.Wv)(d,{key:0,onClick:l.popString,color:"orange-darken-2"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{icon:"mdi-arrow-left",start:""}),t[6]||(t[6]=(0,o.eW)(" 1つ戻る "))])),_:1},8,["onClick"])):(0,o.Q3)("",!0),l.checkLength()?((0,o.uX)(),(0,o.Wv)(d,{key:1,onClick:l.checkAnswer,color:"primary",variant:"elevated"},{default:(0,o.k6)((()=>[t[7]||(t[7]=(0,o.eW)(" 回答を確認 ")),(0,o.bF)(r,{icon:"mdi-checkbox-marked-circle",end:""})])),_:1},8,["onClick"])):(0,o.Q3)("",!0)])),_:1}))])),_:1})):(0,o.Q3)("",!0),a.feedback?((0,o.uX)(),(0,o.Wv)(k,{key:3,type:a.feedbackType,class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(a.feedback),1)])),_:1},8,["type"])):(0,o.Q3)("",!0),(0,o.bF)(y),a.gameEnded?((0,o.uX)(),(0,o.CE)("div",x,[(0,o.bF)(F),(0,o.bF)(d,{onClick:l.resetGame,color:"primary"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{icon:"mdi-timer-play-outline"}),t[8]||(t[8]=(0,o.eW)(" もう一度プレイ "))])),_:1},8,["onClick"])])):(0,o.Q3)("",!0)])),_:1})}var T=s(223),A=s(1884);const L={apiKey:"AIzaSyAeVPmP7Lh0m3snGIq2hvCDXL14lTD4heU",authDomain:"english-app-pbl.firebaseapp.com",projectId:"english-app-pbl",storageBucket:"english-app-pbl.appspot.com",messagingSenderId:"785647830769",appId:"1:785647830769:web:b7f7992317d088344acb50"},j=(0,T.Wp)(L),I=(0,A.aU)(j);var X={name:"PlayScreen",data(){return{lessons:[],selectedLesson:null,sentences:[],currentSentence:null,currentIndex:0,wordColors:[],shuffledWords:[],selectedWords:[],feedback:"",feedbackType:"info",gameStarted:!1,gameEnded:!1,startTime:0,elapsedTime:0,colorScheme:{subject:"#FFF59D",verb:"#A5D6A7",object:"#90CAF9",complement:"#A5D6A7",other:"#E0E0E0"}}},components:{ConfettiExplosion:k.A},async mounted(){await this.loadLessons()},methods:{getChipStyle(e,t){const s=this.wordColors[t]?.[e]||this.colorScheme.other;return{backgroundColor:s,color:this.getContrastColor(s),borderColor:s}},getContrastColor(e){const t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o=(299*t+587*s+114*n)/1e3;return o>128?"#000000":"#FFFFFF"},async loadLessons(){try{const e=(0,A.rJ)(I,"lessons"),t=await(0,A.GG)(e);this.lessons=t.docs.map((e=>({id:e.id,...e.data()})))}catch(e){this.feedback="単元の読み込み中にエラーが発生しました",this.feedbackType="error"}},onLessonSelect(){const e=this.lessons.find((e=>e.id===this.selectedLesson));e&&(this.sentences=[...e.sentences],this.wordColors=[...e.wordColors])},startGame(){this.gameStarted=!0,this.startTime=Date.now(),this.nextSentence()},nextSentence(){this.sentences.length>0?(this.currentSentence=this.sentences.pop(),this.shuffledWords=this.shuffleArray(this.currentSentence.split(",")),this.selectedWords=[],this.feedback="",this.feedbackType="info",this.currentIndex=this.sentences.length):this.endGame()},endGame(){this.gameEnded=!0,this.elapsedTime=Math.floor((Date.now()-this.startTime)/1e3),this.feedback=`すごい！${this.elapsedTime}秒で終了しました！`,this.feedbackType="success"},resetGame(){this.gameStarted=!1,this.gameEnded=!1,this.selectedLesson=null,this.currentSentence=null,this.elapsedTime=0,this.feedback="",this.feedbackType="info"},shuffleArray(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},isCorrect(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return e===t},checkAnswer(){this.isCorrect()?(this.feedback="正解です！",this.feedbackType="success",this.nextSentence()):(this.feedback="😣残念．．．もう一度やってみよう！😣",this.feedbackType="error")},checkLength(){const e=this.currentSentence.split(",").join(" "),t=this.selectedWords.join(" ");return t.length==e.length},popString(){this.selectedWords.pop()}}};const V=(0,r.A)(X,[["render",E]]);var O=V;const P={class:"sentences-list"},D={class:"d-flex align-center"},M={class:"mr-2"},U={class:"preview-chips ml-8 mt-2"};function z(e,t,s,n,a,l){const i=(0,o.g2)("v-file-input"),r=(0,o.g2)("v-text-field"),c=(0,o.g2)("v-card-title"),d=(0,o.g2)("v-icon"),u=(0,o.g2)("v-btn"),h=(0,o.g2)("v-chip"),m=(0,o.g2)("v-card-text"),p=(0,o.g2)("v-spacer"),g=(0,o.g2)("v-card-actions"),v=(0,o.g2)("v-card"),b=(0,o.g2)("v-alert"),k=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(k,null,{default:(0,o.k6)((()=>[t[6]||(t[6]=(0,o.Lk)("h1",{class:"mb-4"},"設定画面",-1)),(0,o.bF)(i,{modelValue:a.file,"onUpdate:modelValue":t[0]||(t[0]=e=>a.file=e),label:"CSVファイルをアップロード",accept:".csv",onChange:l.handleFileUpload,class:"mb-4"},null,8,["modelValue","onChange"]),a.sentences.length>0?((0,o.uX)(),(0,o.Wv)(v,{key:0,class:"mb-4"},{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,{modelValue:a.fileName,"onUpdate:modelValue":t[1]||(t[1]=e=>a.fileName=e),label:"単元名を入力",placeholder:"例: Unit1-Daily Life",class:"mb-2",density:"compact"},null,8,["modelValue"])])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.sentences,((e,s)=>((0,o.uX)(),(0,o.CE)("div",{key:s,class:"sentence-item mb-4"},[(0,o.Lk)("div",D,[(0,o.Lk)("span",M,"問題 "+(0,f.v_)(s+1)+":",1),(0,o.bF)(r,{modelValue:a.sentences[s],"onUpdate:modelValue":e=>a.sentences[s]=e,density:"compact","hide-details":"",class:"flex-grow-1"},null,8,["modelValue","onUpdate:modelValue"]),(0,o.bF)(u,{icon:"",variant:"text",color:"error",size:"large",class:"ml-2",onClick:e=>l.removeSentence(s)},{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("mdi-delete")]))),_:1})])),_:2},1032,["onClick"])]),(0,o.Lk)("div",U,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.split(","),((e,t)=>((0,o.uX)(),(0,o.Wv)(h,{key:t,size:"small",class:"ma-1",style:(0,f.Tr)(l.getChipStyle(e.trim(),s)),variant:"tonal",onClick:t=>l.changeChipColor(e.trim(),s)},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e.trim()),1)])),_:2},1032,["style","onClick"])))),128))])])))),128))])])),_:1}),(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{"prepend-icon":"mdi-plus",variant:"tonal",onClick:l.addNewSentence,class:"mr-2"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)(" 新しい問題を追加 ")]))),_:1},8,["onClick"]),(0,o.bF)(u,{"prepend-icon":"mdi-content-cut",variant:"tonal",onClick:l.extractSVOC,class:"mr-2",loading:a.isProcessing,disabled:a.isProcessing||!l.isValidData},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)(" 品詞分解 ")]))),_:1},8,["onClick","loading","disabled"]),(0,o.bF)(p),(0,o.bF)(u,{"prepend-icon":"mdi-check",variant:"tonal",color:"primary",onClick:l.saveSentences,disabled:!l.isValidData},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)(" 保存 ")]))),_:1},8,["onClick","disabled"])])),_:1})])),_:1})):(0,o.Q3)("",!0),a.message?((0,o.uX)(),(0,o.Wv)(b,{key:1,type:a.messageType,class:"mt-4",closable:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(a.message),1)])),_:1},8,["type"])):(0,o.Q3)("",!0)])),_:1})}var N=s(4335),G={name:"SettingsScreen",data(){return{file:null,sentences:[],analyzedSentences:[],wordColors:[],message:"",messageType:"info",fileName:"",isProcessing:!1,colorScheme:{subject:"#FFEB3B",verb:"#A5D6A7",object:"#90CAF9",complement:"#FF9800",other:"#E0E0E0"},apiConfig:{baseURL:"https://english-app-serverside.onrender.com",timeout:5e8,headers:{"Content-Type":"application/json",Accept:"application/json"}}}},computed:{isValidData(){return""!==this.fileName.trim()&&this.sentences.length>0&&this.sentences.every((e=>""!==e.trim()))}},methods:{getWordType(e,t){return t.subject.includes(e)?"subject":t.verb.includes(e)?"verb":t.object.includes(e)?"object":t.complement.includes(e)?"complement":"other"},getWordColor(e,t){return this.wordColors[t]?.[e]||this.colorScheme.other},getChipStyle(e,t){const s=this.wordColors[t]?.[e]||this.colorScheme.other;return{backgroundColor:s,color:this.getContrastColor(s),borderColor:s}},changeChipColor(e,t){this.wordColors[t]||(this.wordColors[t]={});const s=this.wordColors[t]?.[e]||this.colorScheme.other,n=Object.keys(this.colorScheme).filter((e=>this.colorScheme[e]===s)),o=n[0],a=Object.keys(this.colorScheme),l=a.indexOf(o),i=(l+1)%a.length;this.wordColors[t][e]=this.colorScheme[a[i]]},getContrastColor(e){const t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o=(299*t+587*s+114*n)/1e3;return o>128?"#000000":"#FFFFFF"},handleFileUpload(){if(this.file){const e=new FileReader;e.onload=e=>{const t=e.target.result;this.sentences=t.split("\n").filter((e=>""!==e.trim())).map((e=>e.trim())),this.file.name&&(this.fileName=this.file.name.replace(/\.csv$/,""))},e.readAsText(this.file)}},addNewSentence(){this.sentences.push("")},removeSentence(e){this.sentences.splice(e,1)},validateSentence(e){const t=e.split(",");return t.length>=2&&t.every((e=>""!==e.trim()))},async extractSVOC(){if(this.isValidData){this.isProcessing=!0,this.showMessage("文章を解析中です...","info");try{this.analyzedSentences=[],this.wordColors=[];const t=N.A.create({baseURL:"https://english-app-serverside.onrender.com",headers:{"Content-Type":"application/json"},timeout:3e4});for(let s=0;s<this.sentences.length;s++){const n=this.sentences[s],o=n.split(","),a=o.join(" ").trim();if(a)try{const e=await t.post("/analyze",{text:a});if(e.data){this.analyzedSentences[s]=e.data;const t={};o.forEach((s=>{const n=s.trim(),o=this.getWordType(n,e.data);t[n]=this.colorScheme[o]})),this.wordColors[s]=t}}catch(e){if(N.A.isAxiosError(e)){if("ECONNABORTED"===e.code)throw new Error("サーバーの応答がタイムアウトしました。しばらく待ってから再試行してください。");if(e.response)throw new Error(`サーバーエラー: ${e.response.status} - ${e.response.data?.error||"不明なエラー"}`);if(e.request)throw new Error("サーバーに接続できません。インターネット接続を確認してください。")}throw e}}this.showMessage("解析が完了しました。","success")}catch(e){this.showMessage(`解析中にエラーが発生しました: ${e.message}`,"error")}finally{this.isProcessing=!1}}else this.showMessage("単元名と少なくとも1つの有効な問題が必要です。","error")},async saveSentences(){if(!this.isValidData)return this.message="単元名と少なくとも1つの有効な問題が必要です。",void(this.messageType="error");this.isProcessing=!0,this.showMessage("文章を保存中です...","info");try{const e=(0,A.rJ)(I,"lessons"),t=(0,A.P)(e,(0,A._M)("name","==",this.fileName)),s=await(0,A.GG)(t),n={name:this.fileName,sentences:this.sentences,analyzedSentences:this.analyzedSentences,wordColors:this.wordColors,createdAt:(new Date).toISOString()};if(s.empty)await(0,A.gS)(e,n);else{const e=s.docs[0].ref;await(0,A.mZ)(e,n)}this.message="文章が正常に保存されました。",this.messageType="success"}catch(e){this.message="保存中にエラーが発生しました。",this.messageType="error"}},showMessage(e,t="info"){this.message=e,this.messageType=t}}};const Q=(0,r.A)(G,[["render",z],["__scopeId","data-v-fa252730"]]);var $=Q;function K(e,t,s,n,a,l){const i=(0,o.g2)("v-card-title"),r=(0,o.g2)("v-icon"),c=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),u=(0,o.g2)("v-card"),h=(0,o.g2)("v-col"),m=(0,o.g2)("v-row"),p=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(p,{class:"fill-height position-relative",fluid:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,{align:"start",justify:"center",class:"mt-16"},{default:(0,o.k6)((()=>[(0,o.bF)(h,{cols:"12",sm:"8",md:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"elevation-0 rounded-lg",style:{background:"rgba(255, 255, 255, 0.95)"}},{default:(0,o.k6)((()=>[(0,o.bF)(i,{class:"text-h4 font-weight-bold text-center py-6",style:{"font-family":"'Noto Sans JP', sans-serif"}},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 😣NotFound😣 "),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"このページは存在しないみたいです",-1),(0,o.Lk)("div",{class:"text-subtitle-1 mt-2 text-grey-darken-1"},"下のボタンから移動してください",-1)]))),_:1}),(0,o.bF)(d,{class:"pa-6"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{onClick:l.startLesson,color:"primary",block:"",class:"mb-4 py-6 text-body-1 font-weight-medium",elevation:"2",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{start:"",icon:"mdi-login",class:"mr-2"}),t[1]||(t[1]=(0,o.eW)(" レッスンをはじめる "))])),_:1},8,["onClick"]),(0,o.bF)(c,{onClick:l.settings,variant:"outlined",block:"",class:"py-6 text-body-1 font-weight-medium",elevation:"0",rounded:"lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{start:"",icon:"mdi-cog-outline",class:"mr-2"}),t[2]||(t[2]=(0,o.eW)(" 設定 "))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var R={name:"NotFoundScreen",methods:{startLesson(){this.$router.push("/play")},settings(){this.$router.push("/settings")}}};const B=(0,r.A)(R,[["render",K],["__scopeId","data-v-52809ab8"]]);var q=B;const J=[{path:"/",name:"Start",component:_},{path:"/play",name:"Play",component:O},{path:"/settings",name:"Settings",component:$},{path:"/:notFound(.*)",name:"error.404",component:q}],Z=(0,u.aE)({history:(0,u.Bt)("/english_app/"),routes:J});var H=Z,Y=(s(5524),s(4825)),ee=s(2938),te=s(3379),se=(0,Y.$N)({components:ee,directives:te}),ne=s(1021);const oe=(0,n.Ef)(d);oe.use(H),oe.use(se),oe.use(ne.A),oe.use(N.A),oe.mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,n,o,a){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var i=!0,r=0;r<n.length;r++)(!1&a||l>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[r])}))?n.splice(r--,1):(i=!1,a<l&&(l=a));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],i=n[1],r=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(r)var d=r(s)}for(t&&t(n);c<l.length;c++)a=l[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},n=self["webpackChunkenglish_app"]=self["webpackChunkenglish_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(7140)}));n=s.O(n)})();
//# sourceMappingURL=app.29fc13bd.js.map