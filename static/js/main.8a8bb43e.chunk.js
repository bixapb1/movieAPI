(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),i=n.n(c),o=n(16),s=n(28),j=n(13),l=(n(98),n(5)),d=n(7),b=n(117),u=n(77),x=n.n(u),h=n(123),p=n(128),f=n(129),m=n(131),O=n(132),v=n(133),g=n(125),y=n(134),w=n(78),M=n.n(w),k=n(34),C=n.n(k),S=n(51),E="MOVIES",I="SEARCH",_="FAVORITE_MOVIES",F="VIEWER_MOVIE",B="LOCAL_STORAGE";function G(e){return{type:E,payload:e}}var R=n(2),V=Object(d.a)("div")((function(e){var t=e.theme;return Object(l.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(b.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),W=Object(d.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),A=Object(d.a)(h.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(l.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function L(){var e=Object(o.c)((function(e){return e.myFavoriteMovies})),t=Object(o.b)();return Object(R.jsx)(p.a,{sx:{flexGrow:1},children:Object(R.jsx)(f.a,{position:"fixed",children:Object(R.jsx)(m.a,{maxWidth:"xl",children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)(v.a,{size:"small",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(R.jsx)(s.b,{to:"/",children:"Home"})}),Object(R.jsx)(v.a,{size:"small",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(R.jsx)(g.a,{badgeContent:e?e.length:0,color:"error",children:Object(R.jsx)(s.b,{to:"/favorite",children:Object(R.jsx)(x.a,{})})})}),Object(R.jsx)(y.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),Object(R.jsxs)(V,{onChange:function(e){return t((n=e.target.value,{type:I,payload:n}));var n},children:[Object(R.jsx)(W,{children:Object(R.jsx)(M.a,{})}),Object(R.jsx)(A,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})})})}var J=n(127),z=n(15),D=n.p+"static/media/no-poster.d7e60210.jpg",H=n(135),U=n(136),N=n(137),T=n(138),q=n(124),P=n(139),K=n(140);function Q(e){var t=e.movie,n=t.title,a=t.vote_average,r=t.id,c=t.poster_path,i=Object(o.c)((function(e){return e.myFavoriteMovies})),j=Object(o.b)(),l=i.find((function(e){return e.id===r})),d=i.filter((function(e){return e.id!==r}));function b(e){j({type:_,payload:e}),localStorage.setItem("favorite-movie",JSON.stringify(e))}return Object(R.jsxs)(H.a,{id:r,sx:{maxWidth:300,height:"100%"},children:[Object(R.jsxs)(U.a,{component:s.b,to:"/movie/".concat(r),sx:{height:"95%",display:"flex",justifyContent:"flex-start",flexDirection:"column"},children:[Object(R.jsx)(N.a,{component:"img",height:"auto",src:c?"https://image.tmdb.org/t/p/w500/".concat(c):D,alt:n}),Object(R.jsxs)(T.a,{sx:{flexGrow:"1",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(R.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",sx:{textAlign:"center"},children:n}),Object(R.jsx)(y.a,{variant:"body2",color:"text.secondary",children:Object(R.jsx)(q.a,{name:"half-rating-read",defaultValue:0,value:a/2,precision:.5,readOnly:!0})})]})]}),Object(R.jsx)(P.a,{sx:{height:"5%",width:"100%",m:"0px auto",p:"0px"},children:Object(R.jsx)(K.a,{id:r,sx:{height:"100%",width:"100%",flex:1},size:"small",color:"primary",onClick:function(){Boolean(l)?b(d):b([].concat(Object(z.a)(i),[t]))},children:Boolean(l)?"remove movie":"add movie"})})]},r)}function X(){var e=Object(o.c)((function(e){return e.arrayMovies}));return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(m.a,{sx:{mt:10},maxWidth:"xl",children:Object(R.jsx)(p.a,{sx:{flexGrow:1},children:Object(R.jsx)(J.a,{container:!0,spacing:2,sx:{justifyContent:"center"},children:e?e.map((function(e){return Object(R.jsx)(J.a,{item:!0,sm:6,md:3,children:Object(R.jsx)(Q,{movie:e})},e.id)})):""})})})})}function Y(){var e=Object(o.c)((function(e){return e.myFavoriteMovies}));return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(m.a,{sx:{mt:10},maxWidth:"xl",children:Object(R.jsx)(p.a,{sx:{flexGrow:1},children:Object(R.jsx)(J.a,{container:!0,spacing:2,sx:{justifyContent:"center"},children:e?e.map((function(e){return Object(R.jsx)(J.a,{item:!0,sm:6,md:3,children:Object(R.jsx)(Q,{movie:e})},e.id)})):""})})})})}function Z(){var e=Object(o.c)((function(e){return e.viewerMovie})),t=Object(o.b)(),n=Object(j.f)().id;return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(S.a)(C.a.mark((function t(n){var a,r,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US"),t.next=3,fetch(a);case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,n({type:F,payload:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}),[t,n]),Object(R.jsxs)(J.a,{sx:{mt:10,px:1},container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[Object(R.jsx)(J.a,{item:!0,xs:12,md:4,children:Object(R.jsx)(N.a,{sx:{maxWidth:345,m:"0 auto",boxShadow:"0px 0px 10px 5px rgba(15, 15, 15, 0.44)"},component:"img",height:"auto",src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):D,alt:e.title})}),Object(R.jsxs)(J.a,{item:!0,xs:12,md:4,children:[" ",Object(R.jsxs)(T.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(R.jsx)(y.a,{sx:{m:2,textAlign:"center"},gutterBottom:!0,variant:"h4",component:"div",children:e.title}),Object(R.jsx)(y.a,{variant:"body2",color:"text.secondary",children:e.overview}),Object(R.jsxs)(y.a,{sx:{justifyContent:"flex-end"},component:"span",variant:"h6",color:"text.secondary.black",children:["Release date: ",e.release_date]}),Object(R.jsxs)(y.a,{sx:{justifyContent:"space-between",py:1},component:"span",variant:"body1",color:"text.secondary.black",children:["Genres:",Boolean(0!==e.length)?e.genres.map((function(e){return Object(R.jsx)(y.a,{component:"span",sx:{pl:1},children:e.name},e.id)})):""]}),Object(R.jsx)(q.a,{name:"half-rating-read",defaultValue:0,value:e.vote_average/2,precision:.5,readOnly:!0}),Object(R.jsx)(K.a,{sx:{m:2},component:s.b,to:"/",variant:"outlined",href:"#outlined-buttons",children:"Home"})]})]})]})}var $=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.search}));return Object(a.useEffect)((function(){e(""!==t?function(){var e=Object(S.a)(C.a.mark((function e(t,n){var a,r,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().search,r="https://api.themoviedb.org/3/search/movie?api_key=aba76a579f8ef1f0586b7ce86f0bf326&query=".concat(a,"&language=en-US"),e.next=4,fetch(r);case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,t(G(i.results));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}():function(){var e=Object(S.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t(G(a.results));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,t]),Object(a.useEffect)((function(){e({type:B})}),[e]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(s.a,{children:[Object(R.jsx)(L,{}),Object(R.jsxs)(j.c,{children:[Object(R.jsx)(j.a,{exact:!0,path:"/favorite",children:Object(R.jsx)(Y,{})}),Object(R.jsx)(j.a,{exact:!0,path:"/",children:Object(R.jsx)(X,{})}),Object(R.jsx)(j.a,{exact:!0,path:"/movie/:id",children:Object(R.jsx)(Z,{})})]})]})})},ee=n(53),te=n(26),ne={arrayMovies:[],search:"",myFavoriteMovies:[],viewerMovie:[]},ae=n(79),re=Object(ee.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(te.a)(Object(te.a)({},e),{},{arrayMovies:t.payload});case I:return Object(te.a)(Object(te.a)({},e),{},{search:t.payload});case _:return Object(te.a)(Object(te.a)({},e),{},{myFavoriteMovies:t.payload});case F:return Object(te.a)(Object(te.a)({},e),{},{viewerMovie:t.payload});case B:return Object(te.a)(Object(te.a)({},e),{},{myFavoriteMovies:JSON.parse(localStorage.getItem("favorite-movie"))||[]});default:return e}}),Object(ee.b)(Object(ee.a)(ae.a)));i.a.render(Object(R.jsx)(o.a,{store:re,children:Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)($,{})})}),document.getElementById("root"))},98:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.8a8bb43e.chunk.js.map