"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{482:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(852),c="ErrorMessage_content__yYcYy",a="ErrorMessage_img__ftSmX",i="ErrorMessage_text__wxNos",s=n(184),o=function(e){var t=e.message;return(0,s.jsxs)("div",{role:"alert",className:c,children:[(0,s.jsx)("img",{src:r,width:"600",alt:"not found",className:a}),(0,s.jsx)("p",{text:t,className:i,children:t})]})}},540:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(206),c=n.n(r),a="Loader_loader__+lRPl",i=n(184),s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(c(),{size:100,color:"var(--accent-color)"})})}},573:function(e,t,n){n.d(t,{Hx:function(){return _},Tg:function(){return l},Y5:function(){return f},bI:function(){return d},xc:function(){return m}});var r=n(861),c=n(757),a=n.n(c),i="https://api.themoviedb.org/3",s="8291bfa5fdbbfe1b8899750e95db67c5";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function e(){var t,n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("404 Not Found \ud83d\ude14 The resource requested could not be found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return o("".concat(i,"/trending/movie/day?api_key=").concat(s))}function d(e){return o("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function f(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function m(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function _(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(152),c=n(791),a=n(504),i=n(871),s=n(573),o=n(540),u=n(482),l=n(652),d={title:"HomePage_title__rAQS9",list:"HomePage_list__EYi5N",item:"HomePage_item__RIn+K",link:"HomePage_link__CYdf4",thumb:"HomePage_thumb__FqwMi",text:"HomePage_text__RdLCR"},f=n(184),m=function(){var e=(0,i.TH)(),t=(0,c.useState)(null),n=(0,r.Z)(t,2),m=n[0],_=n[1],g=(0,c.useState)(null),h=(0,r.Z)(g,2),p=h[0],x=h[1],v=(0,c.useState)("idle"),j=(0,r.Z)(v,2),b=j[0],k=j[1];return(0,c.useEffect)((function(){k("pending"),s.Tg().then((function(e){var t=e.results;_(t),k("resolved")})).catch((function(e){x("PLEASE, TRY AGAIN"),k("rejected")}))}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:d.title,children:"Trending today"}),"pending"===b&&(0,f.jsx)(o.Z,{}),"rejected"===b&&(0,f.jsx)(u.Z,{message:p.message}),"resolved"===b&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:d.list,children:m.map((function(t){var n=t.id,r=t.title,c=t.poster_path;return(0,f.jsx)("li",{className:d.item,children:(0,f.jsxs)(a.rU,{className:d.link,to:"movies/".concat(n),state:{from:e},children:[(0,f.jsx)("div",{className:d.thumb,children:(0,f.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):l,alt:r,className:d.poster})}),(0,f.jsx)("h2",{className:d.text,children:r})]})},n)}))})})]})}},852:function(e,t,n){e.exports=n.p+"static/media/error-image.ff3c705f3510c44cc252.jpg"},652:function(e,t,n){e.exports=n.p+"static/media/no-image.595277c379d59ecb45b6.jpg"}}]);
//# sourceMappingURL=home-page.c2bce517.chunk.js.map