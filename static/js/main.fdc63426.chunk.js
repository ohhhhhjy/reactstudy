(this.webpackJsonpjy=this.webpackJsonpjy||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(14),i=c.n(s),a=c(7),j=c(1);var o=function(e){var t=e.id,c=e.coverImage,n=e.title,r=e.summary,s=e.genres;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:c,alt:n}),Object(j.jsx)("h2",{children:Object(j.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("ul",{children:s.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})},u=c(5),l=c.n(u),b=c(8),d=c(13);var h=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),a=i[0],u=i[1],h=function(){var e=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,u(c.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),console.log(a),Object(j.jsx)("div",{children:c?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("div",{children:a.map((function(e){return Object(j.jsx)(o,{id:e.id,coverImage:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})},O=c(2);var x=function(){var e=Object(O.f)(),t=Object(O.f)().id;console.log(e),console.log(t);var c=Object(n.useCallback)(Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t));case 2:return e.next=4,e.sent.json();case 4:e.sent;case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(n.useEffect)((function(){c()}),[c]),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Detail"})})};var m=function(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{path:"/hello",children:Object(j.jsx)("h1",{children:"Hello"})}),Object(j.jsx)(O.a,{path:"/movie/:id",children:Object(j.jsx)(x,{})}),Object(j.jsx)(O.a,{path:"/",children:Object(j.jsx)(h,{})})]})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fdc63426.chunk.js.map