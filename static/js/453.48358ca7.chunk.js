"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[453],{6453:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(885),r=a(2791),n=a(6731),o=a(470),l=a(2794),i={},c=a(184),u=function(e){var t=e.onSubmit,a=(0,r.useState)(""),n=(0,s.Z)(a,2),o=n[0],l=n[1];return(0,c.jsx)("header",{className:i.Searchbar,children:(0,c.jsxs)("form",{className:i.SearchForm,onSubmit:t,children:[(0,c.jsx)("button",{type:"submit",className:i.SearchFormButton,children:(0,c.jsx)("span",{className:"button-label",children:"Search"})}),(0,c.jsx)("input",{className:i.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){l(e.target.value)},value:o})]})})},m=a(6444),h=function(){var e,t=(0,o.TH)(),a=(0,r.useState)([]),i=(0,s.Z)(a,2),h=i[0],p=i[1],f=(0,n.lr)(),d=(0,s.Z)(f,2),v=d[0],g=d[1],b=null!==(e=v.get("filter"))&&void 0!==e?e:"";(0,r.useEffect)((function(){""!==b?setTimeout((function(){(0,l.gy)(b).then((function(e){p(e.results)}))}),200):p([])}),[b]);var j=(0,r.useMemo)((function(){return h.filter((function(e){return e.hasOwnProperty("title")&&e.title.toLowerCase().includes(b.toLowerCase())}))}),[b,h]);return(0,c.jsxs)("div",{className:m.ZP.listContainer,children:[(0,c.jsx)(u,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements[1].value;g(""!==t?{filter:t}:{})}}),j.length>0&&(0,c.jsx)("ul",{className:m.ZP.moviesList,children:j.map((function(e){return(0,c.jsx)("li",{className:m.ZP.listItem,children:(0,c.jsxs)("nav",{to:"".concat(e.id),state:{from:t},children:[e.poster_path?(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w185"+e.poster_path,alt:"Poster"}):(0,c.jsx)("img",{className:m.ZP.noImgAvlb,src:"https://bpgroup.lv/i/product_images/images/Z2000128443.jpg",alt:"No Poster Available"}),(0,c.jsx)("h2",{className:m.ZP.movieTitle,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=453.48358ca7.chunk.js.map