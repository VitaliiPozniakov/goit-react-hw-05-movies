"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[809],{435:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,c,a,o,i=e(861),u=e(152),s=e(757),p=e.n(s),f=e(791),l=e(871),h=e(88),d=e(7),v=e.n(d),g=e(905),x=e(168),m=e(499),b=m.Z.ul(r||(r=(0,x.Z)(["\n\n"]))),w=m.Z.li(c||(c=(0,x.Z)(["\n&:not(:last-child){\n    margin-bottom: 10px;\n\n    border: 1px solid rgba(238, 238, 238, 1);\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"]))),y=m.Z.h2(a||(a=(0,x.Z)(["\ntext-align: center;\nmargin-bottom: 5px;\n"]))),k=m.Z.p(o||(o=(0,x.Z)(["\n\n"]))),Z=e(184);function j(n){var t=n.reviews;return(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(b,{children:t.map((function(n){var t=n.id,e=n.author,r=n.text;return(0,Z.jsxs)(w,{children:[(0,Z.jsx)(y,{children:e}),(0,Z.jsx)(k,{children:r})]},t)}))})})}j.prototype={reviews:v().arrayOf(v().shape({id:v().string,author:v().string,text:v().string})).isRequired};var _=j;var S=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)(null),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,f.useEffect)((function(){function t(){return(t=(0,i.Z)(p().mark((function t(){var e,r,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Hx(n);case 2:e=t.sent,r=e.results,a=[],r.map((function(n){var t={id:n.id,author:n.author,text:n.content};return a.push(t)})),c(a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}try{!function(){t.apply(this,arguments)}()}catch(e){}}),[n]),r&&r.length>0?(0,Z.jsx)(_,{reviews:r}):(0,Z.jsx)(g.Z,{children:(0,Z.jsx)("p",{children:"We don't have any reviews for this movie."})})}},88:function(n,t,e){e.d(t,{Hx:function(){return d},Tg:function(){return p},Y5:function(){return l},vw:function(){return f},xc:function(){return h}});var r=e(861),c=e(757),a=e.n(c),o="c82323a9bebf6624949ce9fae3cb7c73",i="https://api.themoviedb.org";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:return r=n.sent,n.abrupt("return",r.ok?r.json():Promise.reject(new Error("Not found")));case 6:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function p(){return u("".concat(i,"/3/trending/all/day?api_key=").concat(o))}function f(n){return u("".concat(i,"/3/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}function l(n){return u("".concat(i,"/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function h(n){return u("".concat(i,"/3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function d(n){return u("".concat(i,"/3/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=review-page.e8bda060.chunk.js.map