webpackJsonp([1],{105:function(e,t){},106:function(e,t){},107:function(e,t){},111:function(e,t,i){i(106);var s=i(19)(i(64),i(114),"data-v-4ea50242",null);e.exports=s.exports},112:function(e,t,i){i(105);var s=i(19)(i(65),i(113),"data-v-19e8e44a",null);e.exports=s.exports},113:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-container"},[i("chessboard",{staticClass:"chessboard",attrs:{iconDir:e.iconDir,pgn:e.pgn,side:e.side},on:{change:function(t){e.boardChange(t)}}}),e._v(" "),i("div",{staticClass:"controls"},[i("table",[i("tbody",[e._m(0),e._v(" "),e._m(1),e._v(" "),i("a",{staticClass:"button",on:{click:function(t){e.randomMove()}}},[e._v("Test Stockfish API")]),e._v(" "),e._m(2)])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("img",{attrs:{src:"https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("h2",[e._v("PARTY PARROT CHESS")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("h6",[e._v("Made using Chode.js")])])}]}},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"chessboard-container"},[i("div",{ref:"board",staticClass:"board board-background"},e._l(e.board,function(t,s){return i("div",{staticClass:"square",class:{"board-square-dark":!e.chessGame.isSquareLight(s),"board-square-light":e.chessGame.isSquareLight(s),"highlighted-red":e.isAvailableMove(s)&&t.piece,"highlighted-yellow":e.selectedIndex===s},style:e.squareStyle},[e.isAvailableMove(s)&&!t.piece?i("i",{staticClass:"circle"}):e._e()])})),e._v(" "),i("transition-group",{staticClass:"board",attrs:{name:"board-squares",tag:"div"}},e._l(e.board,function(t,s){return i("div",{key:t.id,staticClass:"square",style:e.squareStyle,on:{dragover:function(t){e.dragOver(s)},click:function(t){e.squareSelected(s)}}},[t.piece?i("img",{staticClass:"piece",attrs:{draggable:"true",src:e.getIcon(t)},on:{dragstart:function(t){e.drag(s)}}}):e._e()])}))],1)},staticRenderFns:[]}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},40:function(e,t,i){"use strict";var s=i(20),n=i(116),a=i(112),r=i.n(a);s.a.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"Chess",component:r.a}]})},41:function(e,t,i){i(107);var s=i(19)(i(63),i(115),null,null);e.exports=s.exports},60:function(e,t,i){"use strict";var s=i(67),n=i.n(s),a=i(26),r=i.n(a),o=i(27),c=i.n(o),u=i(28),h=i.n(u),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w";r()(this,e),this.game=h()(),t&&this.game.load_pgn(t),this.setSide(i)}return c()(e,[{key:"setSide",value:function(e){this.reversed="b"===e}},{key:"reset",value:function(){this.game.reset()}},{key:"getTurn",value:function(){return this.game.turn()}},{key:"getPGN",value:function(){return this.game.pgn()}},{key:"getHistory",value:function(){return this.game.history({verbose:!0})}},{key:"getBoard",value:function(){var e=this.game.board(),t=this.transformBoardToArray(e);return this.reversed?t.reverse():t}},{key:"transformBoardToArray",value:function(e){for(var t=[],i=0;i<e.length;i++)for(var s=0;s<e[i].length;s++)t.push({id:8*i+s,piece:e[i][s]});return t}},{key:"calculateMove",value:function(e,t){var i=this.getPositionStringForIndex(e),s=this.getPositionStringForIndex(t);return this.game.move({from:i,to:s,promotion:"q"})}},{key:"getAvailableMoves",value:function(e){var t=this;return this.game.moves({square:this.getPositionStringForIndex(e),verbose:!0}).map(function(e){return t.getIndexForPositionString(e.to)})}},{key:"getCoordinates",value:function(e){var t=Math.floor(e/8),i=e%8;return this.reversed&&(t=Math.abs(t-7),i=Math.abs(i-7)),{row:t,column:i}}},{key:"isSquareLight",value:function(e){var t=this.getCoordinates(e);if((t.row+t.column)%2==0)return!0}},{key:"getPositionStringForIndex",value:function(e){var t=this.getCoordinates(e),i=t.row,s=t.column,n=Math.abs(i-7)+1;return""+String.fromCharCode(97+s)+n}},{key:"getIndexForPositionString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"a1",t=this.getCoordinatesForPositionString(e),i=t.row,s=t.column,n=Math.abs(s-8)+8*i;return n=Math.abs(n-64)}},{key:"getCoordinatesForPositionString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"a1",t=e.toLowerCase().charCodeAt(0)-97,i=n()(e[1])-1;return this.reversed&&(t=Math.abs(t-7),i=Math.abs(i-7)),{row:i,column:t}}}]),e}();t.a=d},61:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(20),n=i(41),a=i.n(n),r=i(40);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},62:function(e,t,i){"use strict";var s=i(26),n=i.n(s),a=i(27),r=i.n(a),o=i(42),c=i.n(o),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://stockfish.patricktriest.com";n()(this,e),this.baseurl=t}return r()(e,[{key:"getBestMove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return c.a.get(this.baseurl+"/bestmove",{params:{fen:e,difficulty:t}})}}]),e}();t.a=u},63:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},64:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(66),n=i.n(s),a=i(60);t.default={name:"chessboard",props:{pgn:{type:String,default:null},side:{type:String,default:"w"},iconDir:{type:String,default:"static/icons/"}},data:function(){return{chessGame:null,availableMoves:{},selectedIndex:-1,squareStyle:{height:"100px",width:"100px"}}},computed:{board:function(){return this.chessGame.getBoard()},turn:function(){return this.chessGame.getTurn()},isActive:function(){return this.side=this.chessGame.getTurn()}},watch:{pgn:function(e,t){this.syncToPgn(e)},side:function(e,t){this.chessGame.setSide(e),this.selectedIndex=-1,this.availableMoves={}}},created:function(){this.chessGame=new a.a(this.pgn,this.side)},mounted:function(){var e=this;this.$nextTick(function(){window.addEventListener("resize",e.getSquareStyle),e.getSquareStyle()})},methods:{getSquareStyle:function(e){var t=this.$refs.board;if(t){var i=(t.offsetWidth-1)/8;this.squareStyle={height:i+"px",width:i+"px"}}},applyNewMove:function(e){var t=this.chessGame.getIndexForPositionString(e.from),i=this.chessGame.getIndexForPositionString(e.to);this.movePiece(t,i)},isAvailableMove:function(e){return!0===this.availableMoves[e]},syncToPgn:function(e){this.selectedIndex=-1,this.availableMoves={};var t=new a.a(e),i=t.getHistory(),s=this.chessGame.getHistory();i.length===s.length+1?this.applyNewMove(i.pop()):i.length!==s.length&&(this.chessGame=new a.a(this.pgn,this.side))},getIcon:function(e){if(e.piece)return this.iconDir+""+e.piece.color+e.piece.type+".svg"},reset:function(){this.chessGame.reset(),this.syncBoard()},swap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this.board[t];this.$set(this.board,t,this.board[e]),this.$set(this.board,e,i)},movePiece:function(e,t){var i=this;this.chessGame.calculateMove(e,t)?(this.swap(t,e),this.syncBoard(),this.availableMoves={},this.selectedIndex=-1,setTimeout(function(){return i.$emit("change",i.chessGame.getPGN())},200)):(this.selectedIndex=-1,this.squareSelected(t))},syncBoard:function(){for(var e=this.chessGame.getBoard(),t=0;t<e.length;t++)this.board[t].piece!==e[t].piece&&(this.board[t].piece=e[t].piece)},displayAvailableMoves:function(){var e=this.chessGame.getAvailableMoves(this.selectedIndex);if(e.length<1)this.selectedIndex=-1;else{var t=!0,i=!1,s=void 0;try{for(var a,r=n()(e);!(t=(a=r.next()).done);t=!0){var o=a.value;this.$set(this.availableMoves,o,!0)}}catch(e){i=!0,s=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw s}}}},drag:function(e){this.squareSelected(e)},dragOver:function(e){console.log(e)},squareSelected:function(e){this.isActive&&(this.availableMoves={},this.selectedIndex===e?this.selectedIndex=-1:this.selectedIndex>0?this.movePiece(this.selectedIndex,e):(this.selectedIndex=e,this.displayAvailableMoves()))}}}},65:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(111),n=i.n(s),a=i(62),r=i(28),o=i.n(r);t.default={name:"chess",components:{Chessboard:n.a},data:function(){return{pgn:void 0,userid:Math.floor(1e3*Math.random()),side:"w",twoplayer:!1,iconDir:"static/icons/"}},computed:{game:function(){var e=o()();return e.load_pgn(this.pgn),e}},created:function(){this.newGame(),this.stockfishApi=new a.a},methods:{newGame:function(){var e=o()();this.pgn=e.pgn()},boardChange:function(e){var t=this;this.pgn=e,this.twoplayer?setTimeout(this.swapSides,1e3):this.game.turn()!==this.side&&this.stockfishApi.getBestMove(this.game.fen()).then(function(e){console.log(e),t.move(e.data)})},swapSides:function(){"w"===this.side?this.side="b":this.side="w"},randomMove:function(){var e=this.game.moves(),t=e[Math.floor(Math.random()*(e.length-1))];this.move(t)},move:function(e){var t=this.game.move(e,{sloppy:!0});console.log(t),this.pgn=this.game.pgn()},reset:function(){var e=this.newGame();this.pgn=e.pgn()}}}}},[61]);
//# sourceMappingURL=app.7a1afd90170ea803897e.js.map