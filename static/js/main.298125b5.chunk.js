(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),i=n(4),s=n.n(i),c=n(6),l=n(5),h=["a beautiful mind","a charlie brown christmas","a christmas story","a quiet place","a star is born","about time","ad astra","alien","always be my maybe","american beauty","anchorman","annihilation","apocalypto","arrival","arthur christmas","avatar","baby driver","back to the future","bad santa","baywatch","beautiful boy","big hero six","bird box","black panther","black swan","black widow","blade runner","blockers","booksmart","boyhood","bridesmaids","bridget jones\u2019s diary","call me by your name","cast away","chicken run","children of men","chinatown","christmas vacation","clueless","collateral","crazy rich asians","crazy, stupid, love","dawn of the dead","despicable me","die hard","die hard","dodgeball","dolittle","dora and the lost city of gold","dumb and dumber","dumbo","edge of tomorrow","edward scissorhands","elf","eyes wide shut","finding dory","forgetting sarah marshall","forrest gump","free guy","frozen","game night","get out","ghost dog","ghostbusters","gifted","gladiator","good boys","goodfellas","gravity","green book","halloween","hancock","happiest season","heat","hereditary","home again","home alone","how the grinch stole christmas!","how to train your dragon","hustlers","i feel pretty","inception","raiders of the lost ark","inside out","insomnia","interstellar","it","it happened on fifth avenue","james bond: casino royale","jaws","john wick","jojo rabbit","joyeux no\xebl","kill bill","kingsman: the secret service","klaus","knives out","knocked up","kong skull island","kung fu panda","last christmas","lethal weapon","liar liar","lion","logan","love actually","love actually","love, simon","lucky number slevin","mad max","mary poppins returns","meet the fockers","minions","minority report","minority report","mission impossible","moana","monsters inc.","moon","moonlight","mother!","mulholland dr.","munich","my spy","mystic river","no country for old men","noelle","notting hill","old school","oldboy","paranormal activity","parasite","predator","pretty woman","prisoners","rango","ready player one","ring","rocky","rudolph, the red-nosed reindeer","run lola run","saving private ryan","scoob!","scream","scrooge","scrooged","seven","shazam!","shrek","shutter island","silent night","sin city","snowpiercer","sonic the hedgehog","sorry to bother you","soul","source code","southpaw","spider-man","split","spotlight","star trek the wrath of khan","star wars the rise of skywalker","step brothers","straw dogs","suicide squad","superbad","tag","taken","taxi driver","tenet","the accountant","the big lebowski","the big sick","the blair witch project","the bourne identity","the cabin in the woods","the christmas chronicles","the conjuring","the dark knight","the departed","the exorcist","the favourite","the fly","the fugitive","the game","the godfather","the green mile","the half of it","the house with a clock in its walls","the human centipede","the incredibles","the invisible man","the lego movie","the lion king","the longshot","the martian","the matrix","the next three days","the nice guys","the night before","the nightmare before christmas","the notebook","the other guys","the others","the peanut butter falcon","the prestige","the proposal","the santa clause","the secret life of pets","the shawshank redemption","the shining","the shop around the corner","the silence of the lambs","the silence of the lambs","the sixth sense","the terminator","the texas chain saw massacre","the thing","the transporter","the usual suspects","the wailing","the witch","there will be blood","there\u2019s something about mary","thor","titanic","togo","tomb raider","total recall","toy story","trading places","trainwreck","trolls","tropic thunder","twelve monkeys","up","us","v for vendetta","vice","wall-e","wedding crashers","when harry met sally","whiplash","wonder","wreck-it ralph","you\u2019ve got mail","zoolander"];function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";return Array.from(e).map((function(e){return" "===e?" ":t.includes(e)?e:n})).join("")}!function(e){e.NotStarted="notStarted",e.Playing="playing",e.Lost="lost",e.Won="won"}(r||(r={}));var d={chancesRemaining:0,guesses:[],letters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],solution:"",solutionFormatted:"",status:r.NotStarted},b=Object(l.a)((function(e,t){switch(t.type){case"start":var n=(o=h)[Math.floor(Math.random()*o.length)];return e.chancesRemaining=7,e.guesses=[],e.solution=n,e.solutionFormatted=u(e.solution,e.guesses),void(e.status=r.Playing);case"quit":return d;case"giveup":return e.chancesRemaining=0,e.solutionFormatted=e.solution,void(e.status=r.Lost);case"guess":var a=t.payload.letter;return e.guesses.push(t.payload.letter),e.solutionFormatted=u(e.solution,e.guesses),e.chancesRemaining=e.solution.includes(a)?e.chancesRemaining:e.chancesRemaining-1,e.solution===e.solutionFormatted&&(e.status=r.Won),void(0===e.chancesRemaining&&(e.status=r.Lost));default:return}var o})),m=n(0),g=Object(a.createContext)(null),p=Object(a.createContext)(null);function j(){var e=Object(a.useContext)(g);if(!e)throw new Error("useGameDispatch must be used within a GameDispatchProvider.");return e}function y(){var e=Object(a.useContext)(p);if(!e)throw new Error("useGameState must be used within a GameStateProvider.");return e}var f=function(e){var t=e.children,n=Object(a.useReducer)(b,d),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(m.jsx)(g.Provider,{value:i,children:Object(m.jsx)(p.Provider,{value:o,children:t})})},v=function(e){var t=e.onClick,n=e.text;return Object(m.jsx)("button",{style:{marginRight:6},onClick:t,children:n})},x=n(3),w=function(e){var t=e.type,n=e.text,r={};return"error"===t&&(r={backgroundColor:"#FFBABA"}),"success"===t&&(r={backgroundColor:"#DFF2BF"}),Object(m.jsx)("div",{style:Object(x.a)(Object(x.a)({},r),{},{padding:20,margin:"10px 0",border:"2px solid black"}),children:n})},k=function(e){var t=e.chancesRemaining;return Object(m.jsxs)("div",{style:{width:160,height:160,backgroundColor:"#c3c3c3",textAlign:"center",padding:20,marginBottom:20},children:[Object(m.jsx)("p",{children:"Hangman graphic @todo..."}),Object(m.jsxs)("p",{children:["(chances remaining: ",t,")"]})]})},O=function(e){var t=e.onClick,n=e.letter,r=e.isDisabled,a=e.isCorrect,o=e.shouldHighlight;return Object(m.jsx)("button",{disabled:r,onClick:function(){return t(n)},style:{border:"1px solid #c3c3c3",color:o?a?"green":"red":void 0,width:30,height:30,display:"inline-block",fontSize:18,textAlign:"center",textTransform:"uppercase",margin:2},children:n})},C=function(e){var t=e.text;return Object(m.jsx)("div",{style:{fontSize:"32px",letterSpacing:"4px",textTransform:"uppercase",marginBottom:20},children:t})},F=function(){var e=j(),t=y(),n=t.chancesRemaining,a=t.status,i=t.letters,s=t.solution,c=t.solutionFormatted,l=t.guesses,h=o.a.useCallback((function(t){e({type:"guess",payload:{letter:t}})}),[e]),u=o.a.useCallback((function(e){i.includes(e.key)&&h(e.key)}),[i,h]);return o.a.useEffect((function(){return a===r.Playing?window.addEventListener("keyup",u):window.removeEventListener("keyup",u),function(){window.removeEventListener("keyup",u)}}),[a,u]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)(v,{onClick:function(){e({type:"start"})},text:"New Game"}),Object(m.jsx)(v,{onClick:function(){e({type:"giveup"})},text:"Give up!"}),Object(m.jsx)(v,{onClick:function(){e({type:"quit"})},text:"Quit Game"})]}),Object(m.jsx)("hr",{}),a===r.Lost&&Object(m.jsx)(w,{type:"error",text:'You Lost :-( \u2014 the answer was "'.concat(s.toUpperCase(),'"')}),a===r.Won&&Object(m.jsx)(w,{type:"success",text:"Congratulations! You Won :-) with ".concat(n," chances left")}),Object(m.jsx)(k,{chancesRemaining:n}),Object(m.jsx)(C,{text:c}),Object(m.jsx)("div",{style:{maxWidth:240},children:i.flatMap((function(e){var t=l.includes(e),n=a!==r.Playing||t,o=null===s||void 0===s?void 0:s.includes(e),i=t&&n;return Object(m.jsx)(O,{onClick:h,letter:e,isDisabled:n,isCorrect:o,shouldHighlight:i},e)}))})]})},R=function(){var e=j();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Welcome to Hangman!"}),Object(m.jsx)("p",{children:"Press the button to get started..."}),Object(m.jsx)("button",{onClick:function(){e({type:"start"})},children:"Start Game"})]})},S=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("p",{children:"Hangman App"}),Object(m.jsx)("hr",{})]})},P=function(){return Object(m.jsxs)("footer",{style:{position:"fixed",left:0,bottom:0,width:"calc(100% - 20px)",padding:10},children:[Object(m.jsx)("hr",{}),Object(m.jsx)("p",{children:"Built with create-react-app."})]})},z=function(){var e=y().status;return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)("main",{children:"notStarted"===e?Object(m.jsx)(R,{}):Object(m.jsx)(F,{})}),Object(m.jsx)(P,{})]})};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(f,{children:Object(m.jsx)(z,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.298125b5.chunk.js.map