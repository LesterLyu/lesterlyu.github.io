(this["webpackJsonplesterlyu.github.io"]=this["webpackJsonplesterlyu.github.io"]||[]).push([[0],{222:function(e,t,a){e.exports=a(283)},227:function(e,t,a){},228:function(e,t,a){},231:function(e,t,a){},269:function(e,t){},270:function(e,t){},271:function(e,t){},275:function(e,t){},276:function(e,t){},277:function(e,t){},279:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),l=(a(227),a(228),a(7)),c=a.n(l),s=(a(231),function(e,t){var a=t.theme.colorPrimary;return r.a.createElement("div",{className:"parallax",style:{color:a}},r.a.createElement("div",{id:"stars1"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}))});s.contextTypes={theme:c.a.any};var m=s,h=a(93),u=a(94),d=a(112),f=a(96),g=a(95),p=a(113),v=[{name:"blue",firstTime:!0,colorPrimary:"#4ea9da",colorAlternate:"#FAFAFA",colorHighlight:"#daedf7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"cyan",firstTime:!0,colorPrimary:"#3dc0b0",colorAlternate:"#FAFAFA",colorHighlight:"#d7f2ef",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"blue-alt",colorPrimary:"#FAFAFA",colorAlternate:"#4ea9da",colorHighlight:"#2a93cb",textPrimary:"#FAFAFA",navAlpha:"rgba(78, 169, 218, 0.75)"},{name:"cyan-alt",colorPrimary:"#FAFAFA",colorAlternate:"#3dc0b0",colorHighlight:"#35a698",textPrimary:"#FAFAFA",navAlpha:"rgba(61, 192, 176, 0.75)"},{name:"green",colorPrimary:"#5BA150",colorAlternate:"#FAFAFA",colorHighlight:"#e1efdf",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"brown",colorPrimary:"#A26836",colorAlternate:"#FAFAFA",colorHighlight:"#f5ebe2",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"orange",colorPrimary:"#e17421",colorAlternate:"#FAFAFA",colorHighlight:"#f9e4d5",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"crimson-red",colorPrimary:"#e64f52",colorAlternate:"#FAFAFA",colorHighlight:"#fbe4e4",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red",colorPrimary:"#af3d4e",colorAlternate:"#FAFAFA",colorHighlight:"#f6e4e7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red-alt",colorPrimary:"#FFFFFF",colorAlternate:"#89303d",colorHighlight:"#63232c",textPrimary:"#FFFFFF",navAlpha:"rgba(137, 48, 61, 0.75)"},{name:"indigo-alt",colorPrimary:"#FAFAFA",colorAlternate:"#303F9F",colorHighlight:"#242f78",textPrimary:"#FAFAFA",navAlpha:"rgba(48, 63, 159, 0.75)"},{name:"grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#485564",colorHighlight:"#333c46",textPrimary:"#FFFFFF",navAlpha:"rgba(72, 85, 100, 0.75)"},{name:"material-cyan",colorPrimary:"#00BCD4",colorAlternate:"#FFFFFF",colorHighlight:"#d4faff",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-brown",colorPrimary:"#845c4e",colorAlternate:"#FFFFFF",colorHighlight:"#eee6e3",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey",firstTime:!0,colorPrimary:"#607D8B",colorAlternate:"#FFFFFF",colorHighlight:"#dfe6e9",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#455A64",colorHighlight:"#374850",textPrimary:"#FAFAFA",navAlpha:"rgba(69, 90, 100, 0.75)"}],b=function(){return v.map((function(e){return{name:e.name,firstTime:e.firstTime,colorPrimary:e.colorPrimary,colorAlternate:e.colorAlternate,colorHighlight:e.colorHighlight,bgPrimary:e.colorAlternate,bgAlternate:e.colorPrimary,bgLanding:e.colorPrimary,textPrimary:e.textPrimary,textAlternate:e.colorAlternate,textLanding:e.colorPrimary,parallaxStars:e.colorPrimary,navAlpha:e.navAlpha}}))},A=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).getRandomTheme=function(){var e=a.state.theme,t=b().filter((function(t){return t.name!==e.name}));return t[Math.floor(Math.random()*t.length)]},a.switchTheme=function(){var e=a.getRandomTheme();a.setState({theme:e})};var n=b().filter((function(e){return!0===e.firstTime}));return a.state={theme:n[Math.floor(Math.random()*n.length)]},a.switchTheme=a.switchTheme.bind(Object(g.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getChildContext",value:function(){return{theme:this.state.theme,switchTheme:this.switchTheme}}},{key:"render",value:function(){var e=this.props.children,t=this.state.theme;return r.a.createElement("div",{className:"theme-switcher"},r.a.createElement("style",{jsx:"true"},"\n          body {\n            background-color: ".concat(t.bgPrimary,";\n            body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n              color: ").concat(t.textPrimary,"\n            }\n          }\n        ")),e)}}]),t}(n.Component);A.childContextTypes={theme:c.a.any,switchTheme:c.a.func};var y=A,E=a(76),F=a(173),w=a(137),x=a(91),P=a(88),S=a(363),N=a(365),k=a(366),T=a(367),C=a(67),D=a(55),R=a(62),j=a(161),L=a(361),H=a(362),W=Object(P.a)({itemRoot:{textAlign:"left",paddingBottom:20,fontFamily:"Ubuntu",lineHeight:1.5},title:{paddingTop:30,paddingBottom:10,fontWeight:"bold",fontFamily:"Ubuntu",textAlign:"initial",fontSize:26},demo:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#3b6ae9","&:hover":{color:"#2196f3"}},noDemo:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#3b6ae9",textDecoration:"line-through"},item:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#000","&:hover":{color:"#2196f3"}},itemDescription:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#7a7a7a"},hr:{borderTop:"1px solid #ddd"},itemInterest:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#000"},itemCompany:{fontSize:17,fontWeight:400,textAlign:"initial",color:"#7a7a7a","&:hover":{color:"#2196f3"}}});function I(e){var t=W();return r.a.createElement(E.a,{className:t.title,variant:"h5",gutterBottom:!0},e.name)}function O(e){var t=e.name,a=e.description,n=e.link,o=e.demo,i=e.playStore,l=e.noDemo,c=W();return r.a.createElement("div",{className:c.itemRoot},r.a.createElement(j.a,{className:c.item,href:n,target:"_blank"},t,r.a.createElement(L.a,{fontSize:"inherit"})),o?r.a.createElement("span",null," \xb7 ",r.a.createElement(C.b,{className:c.demo,to:o},"demo",r.a.createElement(H.a,{fontSize:"inherit"}))):null,l?r.a.createElement("span",null," \xb7 ",r.a.createElement("span",{className:c.noDemo},"demo",r.a.createElement(H.a,{fontSize:"inherit"}))):null,i?r.a.createElement("span",null," \xb7 ",r.a.createElement(j.a,{className:c.demo,href:i,target:"_blank"},"Play Store",r.a.createElement(L.a,{fontSize:"inherit"}))):null," \xb7 ",r.a.createElement("span",{className:c.itemDescription},a))}function B(e){var t=e.name,a=W();return r.a.createElement("div",{className:a.itemRoot},r.a.createElement("span",{className:a.itemInterest},t))}function M(e){var t=e.title,a=e.company,n=e.link,o=e.duration,i=W();return r.a.createElement("div",{className:i.itemRoot},r.a.createElement("span",{className:i.itemInterest},t)," \xb7 ",r.a.createElement("span",{className:i.itemDescription},o),r.a.createElement("br",null),n?r.a.createElement(j.a,{className:i.itemCompany,href:n,target:"_blank"},a):r.a.createElement("span",{className:i.itemDescription},a))}function U(){var e=W();return r.a.createElement("div",{className:e.itemRoot},r.a.createElement("div",{style:{paddingBottom:15}},r.a.createElement("span",{className:e.itemInterest},"Bachelor of Science \xb7 University of Toronto \xb7 Graduating 2020 May")),r.a.createElement("div",{className:e.itemInterest,style:{paddingBottom:15,paddingLeft:20}},"- Computer Science Specialist \xb7 Focus on Artificial Intelligent & Computer Networks"),r.a.createElement("div",{className:e.itemInterest,style:{paddingLeft:20}},"- Statistics Minor"))}function z(){return r.a.createElement("span",{style:{color:"#aaa",paddingBottom:10}},"Copyright \xa9 2019-2020 Dishu(Lester) Lyu")}var G=function(){return r.a.createElement(R.Container,{style:{maxWidth:800}},r.a.createElement(R.Divider,null),r.a.createElement(I,{name:"Public Projects"}),r.a.createElement(O,{name:"Excel Formula Parser",description:"A JavaScript library to parse and evaluate MS Excel/Google Sheets formulas with near 300\r formulas support and competitive performance.",demo:"/demo/fast-formula-parser",link:"https://github.com/LesterLyu/fast-formula-parser"}),r.a.createElement(O,{name:"MOHLTC Data Project",description:"A web app designed for businesses to create data collection forms on the fly and collect\r data in a short period of time.",noDemo:!0,link:"https://github.com/LesterLyu/MOHLTC-DataProject"}),r.a.createElement(O,{name:"Xlsx Populate",description:"A JavaScript library that creates or modifies MS Excel files. It supports real-time\r formula evaluating and is able to run in the browser.",link:"https://github.com/LesterLyu/xlsx-populate"}),r.a.createElement(O,{name:"Connect Four AI",description:"An  implementation of Minimax Algorithm on Connect Four with GUI.",link:"https://github.com/LesterLyu/CSC384Project"}),r.a.createElement(O,{name:"UofT Timetable",description:"A timetable Android app for students in University of Toronto.",playStore:"https://play.google.com/store/apps/details?id=com.lvds2000.utsccsuntility",link:"https://github.com/LesterLyu/UofT-Timetable"}),r.a.createElement(O,{name:"Acorn API",description:"An Acorn API for University of Toronto. Acorn is UofT' s student information service.\r It has no public API. I wrote this to support the UofT Timetable above.",link:"https://github.com/LesterLyu/AcornAPI"}),r.a.createElement(O,{name:"Object Detection Webapp (requires camera)",description:"A react wrapper for object detection. Pre-trained Model is from Tenserflow.js ",demo:"/demo/object-detection",link:"https://github.com/LesterLyu/ObjectDetectionReact"}),r.a.createElement(R.Divider,null),r.a.createElement(I,{name:"Interests"}),r.a.createElement(B,{name:"Computer Networks & Low Level Programming"}),r.a.createElement(B,{name:"Web Full Stack Programming"}),r.a.createElement(B,{name:"Machine Learning & Visual Computing"}),r.a.createElement(R.Divider,null),r.a.createElement(I,{name:"Experiences"}),r.a.createElement(M,{title:"Software Developer Intern",company:"Ontario Government Ministry of Health and Long-Term Care",link:"http://www.health.gov.on.ca/en/",duration:"September 2018 \u2013 August 2019"}),r.a.createElement(M,{title:"Software Developer Co-op",company:"Xiamen Dnake Intelligent Technology Co., Ltd.",link:"https://www.dnake-global.com/",duration:"June 2016 \u2013 August 2016"}),r.a.createElement(R.Divider,null),r.a.createElement(I,{name:"Education"}),r.a.createElement(U,null),r.a.createElement(R.Divider,null),r.a.createElement(z,null))},V=a(157),$=a(168),_=a(71),J=a(196),X=a(162),q=a(195),K=a(364),Q=Object(P.a)((function(e){return{root:{flexGrow:1},backButton:{color:"#fff",textDecoration:"initial"},title:{flexGrow:1,color:"#fff",textDecoration:"initial"}}}));function Y(e){var t=e.title,a=Q();return r.a.createElement(X.a,{position:"static",className:a.root},r.a.createElement(q.a,null,r.a.createElement(C.b,{to:"/",className:a.backButton},r.a.createElement(w.a,{color:"inherit"},r.a.createElement(K.a,{fontSize:"default"}))),r.a.createElement(E.a,{variant:"h6",className:a.title},t)))}var Z=a(213),ee=a.n(Z),te=a(215),ae=Object(P.a)((function(e){return{root:{padding:20,marginTop:20},title:{paddingBottom:20,paddingTop:20},cellDefault:{borderRight:"1px solid #ccc",borderBottom:"1px solid #ccc",padding:"0 4px 0 4px",lineHeight:"normal",textAlign:"left",whiteSpace:"pre",boxSizing:"border-box"},input:{paddingBottom:10,paddingRight:10}}}));var ne=function(){for(var e=[],t=0,a=0;a<50;a++){for(var n=[],r=0;r<50;r++)n.push(t++);e.push(n)}return e[0][0]="hello",e[0][1]="world",e[0][2]=!0,e}(),re=function(e){var t=e.columnIndex,a=e.rowIndex,n=e.style,o=ae();return 0===t?r.a.createElement("div",{style:n,className:o.cellDefault},0===a?null:a):0===a?r.a.createElement("div",{style:n,className:o.cellDefault},function(e){for(var t=e,a="",n=0;t>0;)n=(t-1)%26,a=String.fromCharCode("A".charCodeAt(0)+n)+a,t=Math.floor((t-n)/26);return a}(t)):r.a.createElement("div",{style:n,className:o.cellDefault},!0===ne[a-1][t-1]?"TRUE":ne[a-1][t-1])};function oe(){var e=ae(),t=Object(n.useState)("CONCAT(SUM(A2:C4), VARIABLE1)"),a=Object(V.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(""),c=Object(V.a)(l,2),s=c[0],m=c[1],h=new ee.a({onVariable:function(e,t){return"VARIABLE1"===e?{sheet:"Sheet 1",row:1,col:1}:"VARIABLE2"===e?{sheet:"Sheet 1",from:{row:2,col:1},to:{row:3,col:3}}:void 0},onCell:function(e){e.sheet;var t=e.row,a=e.col;return ne[t-1][a-1]},onRange:function(e){for(var t=[],a=e.from.row;a<=e.to.row;a++){var n=[];if(ne[a-1])for(var r=e.from.col;r<=e.to.col;r++)n.push(ne[a-1][r-1]);t.push(n)}return t}});Object(n.useEffect)((function(){try{var e=h.parse(o,{sheet:"Sheet 1",row:50,col:50});m(e)}catch(t){m(t.toString())}}),[o,m,h]);return r.a.createElement("div",null,r.a.createElement(Y,{title:"Fast Formula Parser"}),r.a.createElement($.a,{maxWidth:"lg"},r.a.createElement(_.a,{className:e.root},r.a.createElement(E.a,{variant:"h5",style:{paddingTop:0},className:e.title},"Data (Sheet 1)"),r.a.createElement(te.a,{className:"Grid",height:300,width:400,columnCount:51,columnWidth:100,rowCount:51,rowHeight:35},re),r.a.createElement(E.a,{variant:"h6",className:e.title},"Variables"),r.a.createElement(J.a,{disabled:!0,label:"VARIABLE1",value:"'Sheet 1'!$A$1",className:e.input}),r.a.createElement(J.a,{disabled:!0,label:"VARIABLE2",value:"'Sheet 1'!$A$2:$C$3",className:e.input}),r.a.createElement(E.a,{variant:"h6",className:e.title},"Formula Located In"),r.a.createElement(J.a,{disabled:!0,label:"Row",value:"50",className:e.input}),r.a.createElement(J.a,{disabled:!0,label:"Column",value:"AX",className:e.input}),r.a.createElement(J.a,{disabled:!0,label:"Sheet",value:"Sheet 1",className:e.input}),r.a.createElement(E.a,{variant:"h6",className:e.title},"Formula Input"),r.a.createElement(J.a,{fullWidth:!0,label:"Formula",value:o,onChange:function(e){var t=e.target.value;i(t)},className:e.input}),r.a.createElement(J.a,{multiline:!0,label:"Result",fullWidth:!0,value:s,style:{whiteSpace:"pre"},className:e.input}),r.a.createElement(E.a,{variant:"h6",className:e.title},"Supported Formulas"),r.a.createElement(E.a,{variant:"body2"},h.supportedFunctions().join(", ")))))}var ie=a(214),le=(a(274),a(279),a(164)),ce=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).videoRef=r.a.createRef(),a.canvasRef=r.a.createRef(),a.state={info:"\tloading model, please wait. This may take 10 seconds...\n For ios devices, please use Safari.",fps:0},a.stop=!1,a.front=!0,a.time=Date.now(),a.frames=0,a.detectFrame=function(e,t){a.stop||(Date.now()-a.time>=1e3&&(a.setState({fps:a.frames}),a.frames=0,a.time=Date.now()),a.frames++,t.detect(e).then((function(n){a.renderPredictions(n),requestAnimationFrame((function(){a.detectFrame(e,t)}))})))},a.renderPredictions=function(e){var t=a.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="16px sans-serif";t.font=n,t.textBaseline="top",t.globalAlpha=.7,e.forEach((function(e){var a=e.bbox[0],r=e.bbox[1],o=e.bbox[2],i=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=2,t.strokeRect(a,r,o,i),t.fillStyle="#00FFFF";var l=t.measureText(e.class+" 99%").width,c=parseInt(n,10);t.fillRect(a+1,r+1,l+2,c+2)})),e.forEach((function(e){var a=e.bbox[0],n=e.bbox[1];t.fillStyle="#000000",t.fillText(e.class+" "+(100*e.score).toPrecision(2)+"%",a+1,n+1)}))},a.switchCamera=function(){a.stop=!0,window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),a.front=!a.front,console.log(a.front),a.start()},window.innerHeight>window.innerWidth?(a.idealHeight=960,a.idealWidth=1280,a.canvasWidth=window.innerWidth,a.canvasHeight=window.innerWidth/3*4):(a.idealHeight=720,a.idealWidth=1280,a.canvasWidth=window.innerHeight/9*16,a.canvasHeight=window.innerHeight),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.start().then((function(){return ie.load()})).then((function(t){e.model=t})).catch((function(t){e.setState({info:t.message}),console.log(t)})),this.canvasRef.current.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)}},{key:"start",value:function(){var e=this;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:this.front?"user":"environment",width:{ideal:this.idealWidth},height:{ideal:this.idealHeight}}}).then((function(t){return console.log(t),e.setState({info:"success get stream"}),window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t,a){e.videoRef.current.onloadedmetadata=function(){t()}}))})).then((function(){e.stop=!1,e.setState({info:""}),e.detectFrame(e.videoRef.current,e.model)})):Promise.reject("Browser not supported.")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,{title:"Object Detection"}),r.a.createElement("h4",{style:{display:this.state.info.length?"show":"none"}},this.state.info),r.a.createElement("video",{className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:this.canvasWidth,height:this.canvasHeight}),r.a.createElement("canvas",{className:"size",ref:this.canvasRef,width:window.devicePixelRatio*this.canvasWidth,height:window.devicePixelRatio*this.canvasHeight,style:{width:this.canvasWidth,height:this.canvasHeight}}),0!==this.state.fps?r.a.createElement("h4",{style:{display:"absolute",top:0,left:0,color:"#aaa"}},this.state.fps):"",r.a.createElement(le.a,{variant:"contained",style:{position:"absolute",top:window.innerHeight-60,height:40},color:"primary",onClick:this.switchCamera},"Switch Camera"))}}]),t}(r.a.Component),se=Object(x.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#f50057"}}}),me=Object(P.a)({name:{paddingTop:60,fontWeight:"bold",fontFamily:"Ubuntu"},icon:{fontSize:30,color:"#555"},description:{fontWeight:"bold",fontFamily:"Ubuntu"}});function he(){var e=me();return r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement(m,null),r.a.createElement(E.a,{className:e.name,variant:"h3",gutterBottom:!0},"Dishu Lyu"),r.a.createElement(E.a,{className:e.description,variant:"subtitle1",gutterBottom:!0},"Graduating 2020 May \ud83d\ude0b"),r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(F.a,{item:!0},r.a.createElement(w.a,{href:"https://github.com/LesterLyu",target:"_blank"},r.a.createElement(N.a,{className:e.icon}))),r.a.createElement(F.a,{item:!0},r.a.createElement(w.a,{href:"https://www.linkedin.com/in/lesterlyu/",target:"_blank"},r.a.createElement(k.a,{className:e.icon}))),r.a.createElement(F.a,{item:!0},r.a.createElement(w.a,{href:"mailto:lvds2000@gmail.com",target:"_blank"},r.a.createElement(T.a,{className:e.icon})))),r.a.createElement(G,null)))}var ue=function(){return r.a.createElement(C.a,null,r.a.createElement(S.a,{theme:se},r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/demo/fast-formula-parser"},r.a.createElement(oe,null)),r.a.createElement(D.a,{path:"/demo/object-detection"},r.a.createElement(ce,null)),r.a.createElement(D.a,{path:"/"},r.a.createElement(he,null)))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(280);i.a.render(r.a.createElement(ue,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");de?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()}},[[222,1,2]]]);
//# sourceMappingURL=main.44ce7a46.chunk.js.map