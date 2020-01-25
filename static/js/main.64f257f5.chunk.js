(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{19:function(e,t,a){e.exports={loader:"loader_loader__3SNd7",spin:"loader_spin__23ojR"}},28:function(e,t,a){e.exports=a.p+"static/media/image-unavailable-icon-260nw-1157415967.e7d77243.webp"},32:function(e,t,a){e.exports=a.p+"static/media/unavailable-image.2f9bba45.jpg"},34:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(39),a(8)),i=a(47),s=a(27),m=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",{id:"searchDiv",className:"bg-dark"},r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"20px"}},"Search for any movie"),r.a.createElement("div",{className:"input-group mb-3",style:{width:"100%"}},r.a.createElement(i.a,{inline:!0,style:{width:"100%"},onSubmit:function(t){t.preventDefault(),e.search(o),l("")}},r.a.createElement(s.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){l(e.target.value)},style:{width:"100%"}}))))},d=a(22),u=a(15),g=a(30),h=a(31),p=a(16),b=a(28),v=a.n(b),f=a(19),E=a.n(f),w=function(e){var t=null==e.movie.poster_path?v.a:"https://image.tmdb.org/t/p/w185".concat(e.movie.poster_path);return r.a.createElement(u.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(u.a.Header,{closeButton:!0,className:"bg-dark",style:{color:"white"}},r.a.createElement(u.a.Title,{id:"contained-modal-title-vcenter"},e.movie.original_title,""===e.movie.release_date||null===e.movie.release_date?null:r.a.createElement("p",null,"Release Date : ",e.movie.release_date))),r.a.createElement(u.a.Body,{className:"bg-dark"},r.a.createElement(g.a,null,e.loading?r.a.createElement("div",{className:E.a.loader}):r.a.createElement(h.a,{className:"show-grid"},r.a.createElement(p.a,{xs:12,sm:12,md:6,lg:4},r.a.createElement("img",{src:t,style:{display:"block",margin:"1rem auto"}})),r.a.createElement(p.a,{xs:12,sm:12,md:6,lg:8},r.a.createElement("p",{style:{color:"white"}},e.movie.overview),r.a.createElement("p",{style:{color:"white"}}," ",e.things.genres.length>0?"Genres : ":null,e.things.genres.map((function(t,a){return a<e.things.genres.length-1?" ".concat(t.name,","):" ".concat(t.name)}))))))),r.a.createElement(u.a.Footer,{className:"bg-dark"},e.loading?null:null===e.things.imdburl?null:r.a.createElement(d.a,{href:e.things.imdburl},"Go to IMDB Page"),r.a.createElement(d.a,{onClick:e.onHide},"Close")))},y=a(32),_=a.n(y),j=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],l=a[1],i=null==e.movie.poster_path?_.a:"https://image.tmdb.org/t/p/w342".concat(e.movie.poster_path);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-3 card card_container bg-dark",style:{width:"17rem"},onClick:function(t){e.Fetchmoviedata(e.movie),l(!0)}},r.a.createElement("img",{src:i,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",style:{color:"white"}},e.movie.original_title))),r.a.createElement(w,{movie:e.movie,things:e.things,show:o,onHide:function(){return l(!1)},loading:e.loading}))},k=function(e){var t=e.movies,a=Object(n.useState)({imdburl:"",genres:[]}),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(!0),m=Object(c.a)(s,2),d=m[0],u=m[1],g=function(e){u(!0);var t="https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=21ae4e075ad23b2fddaf0870594cb704");fetch(t).then((function(e){return e.json()})).then((function(e){u(!1),console.log(e),null===e.imdb_id||""===e.imdb_id?i({imdburl:null,genres:e.genres}):i({imdburl:"https://www.imdb.com/title/".concat(e.imdb_id),genres:e.genres})})).catch((function(e){i({imdburl:null,genres:[]})}))};return t.map((function(e){return r.a.createElement(p.a,{xs:12,sm:12,md:6,lg:4,xl:3},r.a.createElement(j,{Fetchmoviedata:g,movie:e,things:l,loading:d}))}))};a(44);var N=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),i=Object(c.a)(l,2),s=i[0],d=i[1],u=Object(n.useState)(null),p=Object(c.a)(u,2),b=p[0],v=p[1],f="21ae4e075ad23b2fddaf0870594cb704",w="https://api.themoviedb.org/3/search/movie?api_key=".concat(f,"&query=man");return Object(n.useEffect)((function(){fetch(w).then((function(e){return e.json()})).then((function(e){d(!1),console.log(e),localStorage.getItem("document")?o(JSON.parse(localStorage.getItem("document")).results):o(e.results)})).catch((function(e){v("Please check network connection")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{search:function(e){d(!0),v(null),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(f,"&query=").concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?(d(!1),v("Search criteria not entered")):0===e.results.length?(d(!1),v("Movie not found")):(d(!1),localStorage.setItem("document",JSON.stringify(e)),o(e.results))})).catch((function(e){d(!1),v("No network connection")}))}}),s&&!b?r.a.createElement("div",{className:E.a.loader,style:{border:"16px solid #f8f8f8",borderTop:"16px solid #000000"}}):b?r.a.createElement("div",{className:"errorMessage",style:{color:"white",textAlign:"center",margin:"5rem auto"}},r.a.createElement("h1",null,"Error : ",b," :(")):r.a.createElement(g.a,null,r.a.createElement(h.a,{style:{color:"black"}},r.a.createElement(k,{movies:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.64f257f5.chunk.js.map