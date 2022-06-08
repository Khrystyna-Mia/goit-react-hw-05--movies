"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{482:function(A,e,t){t.d(e,{Z:function(){return o}});var n=t(852),r="ErrorMessage_content__yYcYy",a="ErrorMessage_img__ftSmX",c="ErrorMessage_text__wxNos",s=t(184),o=function(A){var e=A.message;return(0,s.jsxs)("div",{role:"alert",className:r,children:[(0,s.jsx)("img",{src:n,width:"600",alt:"not found",className:a}),(0,s.jsx)("p",{text:e,className:c,children:e})]})}},540:function(A,e,t){t.d(e,{Z:function(){return s}});var n=t(206),r=t.n(n),a="Loader_loader__+lRPl",c=t(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r(),{size:100,color:"var(--accent-color)"})})}},573:function(A,e,t){t.d(e,{Hx:function(){return m},Tg:function(){return u},Y5:function(){return l},bI:function(){return g},xc:function(){return d}});var n=t(861),r=t(757),a=t.n(r),c="https://api.themoviedb.org/3",s="8291bfa5fdbbfe1b8899750e95db67c5";function o(){return i.apply(this,arguments)}function i(){return i=(0,n.Z)(a().mark((function A(){var e,t,n,r=arguments;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},A.next=4,fetch(e,t);case 4:if(!(n=A.sent).ok){A.next=11;break}return A.next=8,n.json();case 8:A.t0=A.sent,A.next=12;break;case 11:A.t0=Promise.reject(new Error("404 Not Found \ud83d\ude14 The resource requested could not be found"));case 12:return A.abrupt("return",A.t0);case 13:case"end":return A.stop()}}),A)}))),i.apply(this,arguments)}function u(){return o("".concat(c,"/trending/movie/day?api_key=").concat(s))}function g(A){return o("".concat(c,"/search/movie?api_key=").concat(s,"&query=").concat(A,"&language=en-US&page=1&include_adult=false"))}function l(A){return o("".concat(c,"/movie/").concat(A,"?api_key=").concat(s,"&language=en-US"))}function d(A){return o("".concat(c,"/movie/").concat(A,"/credits?api_key=").concat(s,"&language=en-US"))}function m(A){return o("".concat(c,"/movie/").concat(A,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}},642:function(A,e,t){t.r(e),t.d(e,{default:function(){return N}});var n=t(683),r=t(152),a=t(791),c=t(504),s=t(871),o=t(573),i=t(355),u=t(562),g="SearchBar_searchBar__rjQkX",l="SearchBar_form__gW7Gj",d="SearchBar_input__bIy50",m="SearchBar_button__T7RTc",h=t(184),E=function(A){var e=A.onSubmit,t=(0,a.useState)(""),n=(0,r.Z)(t,2),c=n[0],s=n[1];return(0,h.jsx)("div",{className:g,children:(0,h.jsxs)("form",{className:l,onSubmit:function(A){A.preventDefault(),""===c&&u.Notify.info("\ud83d\ude44 PLEASE, ENTER THE TITLE OF THE MOVIE!",{position:"center-center",width:"500px",fontSize:"20px"}),e(c),s("")},children:[(0,h.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",value:c,onChange:function(A){s(A.currentTarget.value.trim().toLowerCase())}}),(0,h.jsx)("button",{type:"submit",className:m,children:(0,h.jsx)(i.U41,{size:30,fill:"var(--accent-color)"})})]})})},p=t(540),v=t(482),k=t(652),f="MoviesPage_list__yYFTM",x="MoviesPage_item__dgvDQ",Q="MoviesPage_link__GMVyM",b="MoviesPage_thumb__rE3Wh",y="MoviesPage_title__Ag9yt",N=function(){var A,e=(0,s.TH)(),t=(0,s.s0)(),i=(0,a.useState)(null!==(A=new URLSearchParams(e.search).get("query"))&&void 0!==A?A:""),u=(0,r.Z)(i,2),g=u[0],l=u[1],d=(0,a.useState)(null),m=(0,r.Z)(d,2),N=m[0],R=m[1],S=(0,a.useState)(null),V=(0,r.Z)(S,2),w=V[0],C=V[1],F=(0,a.useState)("idle"),j=(0,r.Z)(F,2),M=j[0],B=j[1];(0,a.useEffect)((function(){g.trim()&&(B("pending"),o.bI(g).then((function(A){var e=A.results;if(0===e.length)return C("NO SUCH MOVIE FOUND ".concat(g)),void B("rejected");R(e),B("resolved")})).catch((function(A){C(A.message),B("rejected")})))}),[g]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(E,{onSubmit:function(A){g!==A&&(l(A),t((0,n.Z)((0,n.Z)({},e),{},{search:"query=".concat(A)})))}}),"pending"===M&&(0,h.jsx)(p.Z,{}),"rejected"===M&&(0,h.jsx)(v.Z,{message:w}),"resolved"===M&&(0,h.jsx)("ul",{className:f,children:N.map((function(A){var t=A.id,n=A.title,r=A.poster_path;return(0,h.jsx)("li",{className:x,children:(0,h.jsxs)(c.rU,{className:Q,to:"/movies/".concat(t),state:{from:e},children:[(0,h.jsx)("div",{className:b,children:(0,h.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):k,alt:n})}),(0,h.jsx)("h2",{className:y,children:n})]})},t)}))})]})}},852:function(A,e,t){A.exports=t.p+"static/media/error-image.ff3c705f3510c44cc252.jpg"},652:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=movies-page.bbc86ecc.chunk.js.map