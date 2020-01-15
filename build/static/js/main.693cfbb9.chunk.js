(this["webpackJsonpreact-mastermind"]=this["webpackJsonpreact-mastermind"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports={GuessRow:"GuessRow_GuessRow__2xB0Q",rowNum:"GuessRow_rowNum__2MfpL"}},function(e,t,n){e.exports={ColorPicker:"ColorPicker_ColorPicker__2MEvt",button:"ColorPicker_button__2D9S8"}},,,,,,function(e,t,n){e.exports={peg:"GuessPeg_peg__1qANj"}},function(e,t,n){e.exports={button:"ScoreButton_button__2ZFt3"}},function(e,t,n){e.exports={GameBoard:"GameBoard_GameBoard__2sC3L"}},function(e,t,n){e.exports={GameTimer:"GameTimer_GameTimer__PY19_"}},,,function(e,t,n){e.exports=n(47)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),l=n.n(c),o=(n(35),n(8)),s=n(9),i=n(11),u=n(12),d=n(14),m=n(13),f=n(15),h=(n(36),n(24)),g=n.n(h),C=function(e){return r.a.createElement("div",{className:g.a.peg,style:{backgroundColor:e.color,border:e.color?"1px solid ".concat(e.color):"1px dashed grey",cursor:e.currentGuess&&"pointer"},onClick:e.currentGuess?e.handlePegClick:null})},p=(n(37),function(e){return r.a.createElement("div",{className:"GuessPegs"},r.a.createElement(C,{color:e.colors[e.code[0]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(0)}}),r.a.createElement(C,{color:e.colors[e.code[1]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(1)}}),r.a.createElement(C,{color:e.colors[e.code[2]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(2)}}),r.a.createElement(C,{color:e.colors[e.code[3]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(3)}}))}),k=(n(38),function(e){var t=e.score,n=("P".repeat(t.perfect)+"A".repeat(t.almost)+"I".repeat(4-t.perfect-t.almost)).split(""),a={width:10,height:10,margin:1,border:"2px solid",borderRadius:"50%"},c={P:{borderColor:"black",backgroundColor:"black"},A:{borderColor:"black",backgroundColor:"white"},I:{borderColor:"white",backgroundColor:"lightgrey"}};return r.a.createElement("div",{className:"GuessScore"},n.map((function(e,t){return r.a.createElement("div",{key:t,style:Object(o.a)({},a,{},c[e])})})))}),b=n(25),E=n.n(b),y=function(e){return r.a.createElement("button",{className:"".concat(E.a.button," btn btn-default"),disabled:e.disabled,onClick:e.handleScoreClick},"\u2714")},v=n(17),G=n.n(v),w=function(e){return r.a.createElement("div",{className:G.a.GuessRow},r.a.createElement("div",{className:G.a.rowNum,style:{color:e.currentGuess?"black":"lightgrey"}},e.rowIdx+1),r.a.createElement(p,{colors:e.colors,code:e.guess.code,currentGuess:e.currentGuess,handlePegClick:e.handlePegClick}),e.currentGuess&&4!==e.guess.score.perfect?r.a.createElement(y,{disabled:e.guess.code.includes(null),handleScoreClick:e.handleScoreClick}):r.a.createElement(k,{score:e.guess.score}))},N=n(26),S=n.n(N),P=function(e){return r.a.createElement("div",{className:S.a.GameBoard},e.guesses.map((function(t,n){return r.a.createElement(w,{guess:t,colors:e.colors,rowIdx:n,currentGuess:n===e.guesses.length-1,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick,key:n})})))},x=n(18),D=n.n(x),T=function(e){return r.a.createElement("div",{className:D.a.ColorPicker},e.colors.map((function(t,n){return r.a.createElement("button",{key:t,className:D.a.button,style:{backgroundColor:e.selColorIdx===n?"white":t,borderColor:t},onClick:function(){return e.handleColorSelection(n)}})})))},_=n(27),O=n.n(_);var j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleTick=function(){n.props.winTries||n.props.handleTimerUpdate()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.handleTick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(O.a.GameTimer," flex-h")},function(e){var t=Math.floor(e/60).toString().padStart(2,"0"),n=(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(n)}(this.props.timer))}}]),t}(r.a.Component),I=function(e){return r.a.createElement("button",{className:"btn btn-default",onClick:e.handleNewGameClick},"New Game")},A=n(6),B=(n(39),function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flex-h align-flex-end"},r.a.createElement(P,{colors:e.colors,guesses:e.guesses,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick}),r.a.createElement("div",{className:"App-controls"},r.a.createElement(T,{colors:e.colors,selColorIdx:e.selColorIdx,handleColorSelection:e.handleColorSelection}),r.a.createElement(j,{timer:e.timer,handleTimerUpdate:e.handleTimerUpdate,winTries:e.winTries}),r.a.createElement(A.b,{className:"btn btn-default Gamepage-link-margin",to:"/settings"},"Settings"),r.a.createElement(I,{handleNewGameClick:e.handleNewGameClick}))),r.a.createElement("footer",{className:"App-header-footer"},e.winTries?"You Won in ".concat(e.winTries," Guesses!"):"Good Luck!"))}),M=(n(45),n(46),function(e){return r.a.createElement("div",{className:"settings-colors"},r.a.createElement("button",{className:"btn btn-default difficulty-options",disabled:e.currentDifficulty,onClick:function(){return t=e.difficulty,e.handleDifficultyClick(t),void e.history.push("/");var t}},e.difficulty),e.colors.map((function(e){return r.a.createElement(C,{color:e,key:e})})))}),U=function(e){return r.a.createElement("div",{className:"settings-page"},r.a.createElement("h1",null,"Set Difficulty Level"),e.difficultyOp.map((function(t,n){return r.a.createElement(M,Object.assign({},e,{currentDifficulty:t===e.currentDifficulty,difficulty:t,colors:e.colors[t],handleDifficultyClick:e.handleDifficultyClick,key:n}))})),r.a.createElement(A.b,{to:"/",className:"btn btn-default"},"Cancel"))},F=n(5),R={Easy:["#7CCCE5","#FDE47F","#E04644","#B576AD"],Moderate:["#7CCCE5","#FDE47F","#E04644","#B576AD","#BB821D"],Difficult:["#7CCCE5","#FDE47F","#E04644","#B576AD","#BB821D","#F0E141"]},W=["Easy","Moderate","Difficult"],L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleTimerUpdate=function(){e.setState((function(e){return{elapstedTime:++e.elapstedTime}}))},e.handleColorSelection=function(t){e.setState({selColorIdx:t})},e.handleNewGameClick=function(){e.setState(e.getInitialState())},e.handlePegClick=function(t){var n=e.state.guesses.length-1,a=Object(s.a)(e.state.guesses),r=Object(o.a)({},a[n]),c=Object(s.a)(r.code);c[t]=e.state.selColorIdx,r.code=c,a[n]=r,e.setState({guesses:a})},e.handleScoreClick=function(){var t=e.state.guesses.length-1,n=Object(s.a)(e.state.guesses[t].code),a=Object(s.a)(e.state.code),r=0,c=0;n.forEach((function(e,t){a[t]===e&&(r++,n[t]=a[t]=null)})),n.forEach((function(e,t){if(null!==e){var n=a.indexOf(e);n>-1&&(c++,a[n]=null)}}));var l=Object(s.a)(e.state.guesses),i=Object(o.a)({},l[t]),u=Object(o.a)({},i.score);u.perfect=r,u.almost=c,i.score=u,l[t]=i,4!==r&&l.push(e.getNewGuess()),e.setState({guesses:l})},e.handleDifficultyClick=function(t){e.setState({difficulty:t},e.handleNewGameClick())},e.state=e.getInitialState(),e.state.difficulty="Easy",console.log("constructor ran"),e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("app mount")}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){console.log("will unmount")}},{key:"getInitialState",value:function(){return{selColorIdx:0,guesses:[this.getNewGuess()],code:this.genCode(),elapstedTime:0}}},{key:"getNewGuess",value:function(){return{code:[null,null,null,null],score:{perfect:0,almost:0}}}},{key:"genCode",value:function(){return new Array(4).fill().map((function(e){return Math.floor(4*Math.random())}))}},{key:"getWinTries",value:function(){var e=this.state.guesses.length-1;return 4===this.state.guesses[e].score.perfect?e+1:0}},{key:"render",value:function(){var e=this,t=this.getWinTries();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header-footer"},"R E A C T \xa0\xa0\xa0  M A S T E R M I N D"),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,{winTries:t,colors:R[e.state.difficulty],selColorIdx:e.state.selColorIdx,guesses:e.state.guesses,handleColorSelection:e.handleColorSelection,handleNewGameClick:e.handleNewGameClick,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick,timer:e.state.elapstedTime,handleTimerUpdate:e.handleTimerUpdate})}}),r.a.createElement(F.a,{path:"/settings",render:function(t){return r.a.createElement(U,Object.assign({},t,{currentDifficulty:e.state.difficulty,difficultyOp:W,colors:R,handleDifficultyClick:e.handleDifficultyClick}))}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[30,1,2]]]);
//# sourceMappingURL=main.693cfbb9.chunk.js.map