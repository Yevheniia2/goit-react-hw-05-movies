"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{6110:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return d},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),c=e(5294),i="92101c7f268f4470499c4d3a4b7daa99";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4146:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,u=e(7689),c=e(168),i=e(1087),o=e(82),s=(0,o.ZP)(i.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  padding: 2px 8px;\n\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"]))),p=o.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 15px;\n"]))),f=e(184),d=function(n){var t=n.movies,e=(0,u.TH)();return(0,f.jsxs)(p,{children:[t.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title||n.name})},n.id)})),(0,f.jsx)(u.j3,{})]})}},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a,u=e(9439),c=e(2791),i=e(168),o=e(82),s=o.ZP.h2(r||(r=(0,i.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"]))),p=(o.ZP.ul(a||(a=(0,i.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),e(6110)),f=e(4146),d=e(3089),v=e(184),l=function(){var n=(0,c.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(!1),i=(0,u.Z)(a,2),o=i[0],l=i[1];return(0,c.useEffect)((function(){l(!0),(0,p.Hg)().then((function(n){r(n.results),l(!1)}))}),[]),(0,v.jsxs)("main",{children:[(0,v.jsx)(s,{children:"Top Movies for today"}),(0,v.jsx)(f.Z,{movies:e}),o&&(0,v.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=485.63c71905.chunk.js.map