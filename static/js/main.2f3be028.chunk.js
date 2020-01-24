(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{15:function(e,t,a){e.exports={loader:"loader_loader__3SNd7",spin:"loader_spin__23ojR"}},21:function(e,t,a){e.exports=a.p+"static/media/image-unavailable-icon-260nw-1157415967.e7d77243.webp"},26:function(e,t,a){e.exports=a.p+"static/media/unavailable-image.2f9bba45.jpg"},29:function(e,t,a){e.exports=a(38)},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(34),a(7)),i=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(t){t.preventDefault(),e.search(o),c("")};return r.a.createElement("div",{id:"searchDiv",className:"bg-dark"},r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"20px"}},"Search for any movie"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:o,type:"text",className:"form-control",placeholder:"Search","aria-label":"Username",onChange:function(e){c(e.target.value)},onSubmit:i,"aria-describedby":"basic-addon1",id:"movieInput"}),r.a.createElement("input",{type:"button",value:"Search",className:"btn btn-primary",onClick:i})))},s=a(19),m=a(13),u=a(24),d=a(25),g=a(18),h=a(21),b=a.n(h),p=a(15),v=a.n(p),f=function(e){var t=null==e.movie.poster_path?b.a:"https://image.tmdb.org/t/p/w185".concat(e.movie.poster_path);return r.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(m.a.Header,{closeButton:!0,className:"bg-dark",style:{color:"white"}},r.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},e.movie.original_title,""===e.movie.release_date||null===e.movie.release_date?null:r.a.createElement("p",null,"Release Date : ",e.movie.release_date))),r.a.createElement(m.a.Body,{className:"bg-dark"},r.a.createElement(u.a,null,e.loading?r.a.createElement("div",{className:v.a.loader}):r.a.createElement(d.a,{className:"show-grid"},r.a.createElement(g.a,{xs:12,sm:12,md:6,lg:4},r.a.createElement("img",{src:t,style:{display:"block",margin:"1rem auto"}})),r.a.createElement(g.a,{xs:12,sm:12,md:6,lg:8},r.a.createElement("p",{style:{color:"white"}},e.movie.overview),r.a.createElement("p",{style:{color:"white"}}," ",e.things.genres.length>0?"Genres : ":null,e.things.genres.map((function(t,a){return a<e.things.genres.length-1?" ".concat(t.name,","):" ".concat(t.name)}))))))),r.a.createElement(m.a.Footer,{className:"bg-dark"},e.loading?null:null===e.things.imdburl?null:r.a.createElement(s.a,{href:e.things.imdburl},"Go to IMDB Page"),r.a.createElement(s.a,{onClick:e.onHide},"Close")))},E=a(26),y=a.n(E),w=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],i=null==e.movie.poster_path?y.a:"https://image.tmdb.org/t/p/w342".concat(e.movie.poster_path);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-3 card card_container bg-dark",style:{width:"17rem"},onClick:function(t){e.Fetchmoviedata(e.movie),c(!0)}},r.a.createElement("img",{src:i,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",style:{color:"white"}},e.movie.original_title))),r.a.createElement(f,{movie:e.movie,things:e.things,show:o,onHide:function(){return c(!1)},loading:e.loading}))},_=function(e){var t=e.movies,a=Object(n.useState)({imdburl:"",genres:[]}),o=Object(l.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(!0),m=Object(l.a)(s,2),u=m[0],d=m[1],h=function(e){d(!0);var t="https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=21ae4e075ad23b2fddaf0870594cb704");fetch(t).then((function(e){return e.json()})).then((function(e){d(!1),console.log(e),null===e.imdb_id||""===e.imdb_id?i({imdburl:null,genres:e.genres}):i({imdburl:"https://www.imdb.com/title/".concat(e.imdb_id),genres:e.genres})})).catch((function(e){i({imdburl:null,genres:[]})}))};return t.map((function(e){return r.a.createElement(g.a,{xs:12,sm:12,md:6,lg:4,xl:3},r.a.createElement(w,{Fetchmoviedata:h,movie:e,things:c,loading:u}))}))};a(37);var j=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),s=Object(l.a)(c,2),m=s[0],g=s[1],h=Object(n.useState)(null),b=Object(l.a)(h,2),p=b[0],f=b[1],E="21ae4e075ad23b2fddaf0870594cb704",y="https://api.themoviedb.org/3/search/movie?api_key=".concat(E,"&query=man");return Object(n.useEffect)((function(){fetch(y).then((function(e){return e.json()})).then((function(e){g(!1),console.log(e),localStorage.getItem("document")?o(JSON.parse(localStorage.getItem("document")).results):o(e.results)})).catch((function(e){f("Please check network connection")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{search:function(e){g(!0),f(null),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(E,"&query=").concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?(g(!1),f("Search criteria not entered")):0===e.results.length?(g(!1),f("Movie not found")):(g(!1),localStorage.setItem("document",JSON.stringify(e)),o(e.results))})).catch((function(e){g(!1),f("No network connection")}))}}),m&&!p?r.a.createElement("div",{className:v.a.loader,style:{border:"16px solid #f8f8f8",borderTop:"16px solid #000000"}}):p?r.a.createElement("div",{className:"errorMessage",style:{color:"white",textAlign:"center",margin:"5rem auto"}},r.a.createElement("h1",null,"Error : ",p," :(")):r.a.createElement(u.a,null,r.a.createElement(d.a,{style:{color:"black"}},r.a.createElement(_,{movies:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.2f3be028.chunk.js.map