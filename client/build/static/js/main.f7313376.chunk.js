(this.webpackJsonpjy_book_list=this.webpackJsonpjy_book_list||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"text":"My Book List","link":"/saved","icon":"fas fa-book","order":0},{"text":"Find Books","link":"/search","icon":"fas fa-search","order":1}]')},38:function(e,t,a){},39:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(29),r=a.n(s),o=(a(38),a(39),a(31)),i=a(2),l=a(11),u=a(5),b=a(30),j=a(0);function d(){var e=b||[{text:"",link:"",icon:"",order:0}];var t=Object(c.useReducer)((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{change:t})}),e),a=Object(l.a)(t,2),n=a[0];a[1];return Object(j.jsxs)("nav",{className:"container-fluid navbar navbar-expand-md navbar-light bg-light",children:[Object(j.jsx)("button",{className:"navbar-toggler ml-auto",type:"button","data-toggle":"collapse","data-target":"#navbarCollapseableContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("i",{className:"fas fa-bars"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapseableContent",children:Object(j.jsx)("ul",{className:"navbar-nav",children:n.map((function(e){return Object(j.jsx)("li",{className:"nav-item px-3",children:Object(j.jsxs)("a",{className:"nav-link",href:e.link,children:[e.text," ",Object(j.jsx)("i",{className:e.icon})]})},e.order)}))})})]})}function m(){return Object(j.jsx)("header",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h1",{className:"col-12 col-lg-6 mx-auto logo",children:Object(j.jsxs)("a",{href:"/",children:[Object(j.jsx)("img",{src:"./logo192.png",alt:"React Logo"}),Object(j.jsx)("span",{className:"company-name text-wrap align-middle",children:" React Google Books Search"})]})}),Object(j.jsx)("div",{className:"col-12 text-center",children:Object(j.jsx)("p",{children:"Search for and Save Books of Interest"})})]})})}var f=a(3),x=a.n(f),p=a(10),h=a(33),O=a(15),v=a.n(O),g=function(e){return Object(p.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Searching For Book:".concat(e)),t.next=3,v.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},k=function(){return Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting My Books:"),e.next=3,v.a.get("/api/books/");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},N=function(e){return Object(p.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("AddingBook:".concat(e)),t.next=3,v.a.post("/api/books/",e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},y=function(e){return Object(p.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Deleting Book From My List:".concat(e)),t.next=3,v.a.delete("/api/books/".concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()};function w(){var e=Object(c.useRef)();var t=Object(c.useReducer)((function(e,t){switch(t.request){case"update-search":return Object(u.a)(Object(u.a)({},e),{},{searchList:t.value});case"add-book":var a=e.myList||[];return Object(u.a)(Object(u.a)({},e),{},{myList:[].concat(Object(h.a)(a),[t.value])})}return Object(u.a)({},e)}),[]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=function(){var t=Object(p.a)(x.a.mark((function t(a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!e.current.value){t.next=6;break}return t.next=4,g(e.current.value);case 4:c=t.sent,s({request:"update-search",value:c.data.items});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(p.a)(x.a.mark((function t(a){var c,r,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c=a.target.value,!e.current.value){t.next=9;break}return r=n.searchList.find((function(e){return e.id===c})),t.next=6,N({id:r.id,title:r.volumeInfo.title,authors:r.volumeInfo.authors,description:r.volumeInfo.description,image:r.volumeInfo.imageLinks.thumbnail||"",link:r.volumeInfo.infoLink});case 6:o=t.sent,s({request:"add-book",value:r}),console.log("Book Saved:".concat(o));case 9:window.location="/saved";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container border",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h3",{children:"Book Search"})}),Object(j.jsxs)("form",{className:"form=group mt-2",onSubmit:r,children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("input",{className:"form-control",type:"text",ref:e,placeholder:"Title and/or Author"})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsxs)("button",{className:"btn btn-primary",type:"submit",children:["Search ",Object(j.jsx)("i",{className:"fas fa-search"})]})})]}),Object(j.jsx)("div",{className:"books row my-3",children:n.searchList&&n.searchList.map((function(e,t){return Object(j.jsx)("div",{className:"book col-4 mb-4",children:Object(j.jsxs)("section",{className:"card",children:[e.volumeInfo.imageLinks?Object(j.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,className:"card-img-top",alt:e.volumeInfo.title}):Object(j.jsx)("p",{}),Object(j.jsxs)("summary",{className:"card-body",children:[Object(j.jsx)("h5",{className:"book-title card-title",children:e.volumeInfo.title}),Object(j.jsxs)("p",{className:"book-description card-text",children:[" ",e.volumeInfo.description]}),Object(j.jsxs)("button",{className:"btn btn-primary mx-3",value:e.id,type:"button",onClick:o,children:["Add To My List ",Object(j.jsx)("i",{className:"fas fa-plus"})]}),e.volumeInfo.infoLink&&Object(j.jsxs)("a",{href:e.volumeInfo.infoLink,className:"btn btn-secondary mx-3",children:["Get More Info ",Object(j.jsx)("i",{className:"fas fa-info"})]})]})]})},t)}))})]})}function L(){var e=Object(c.useReducer)((function(e,t){switch(t.request){case"update-list":return{myList:t.value.data}}return Object(u.a)({},e)}),[]),t=Object(l.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)(Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("UseEffect"),e.next=3,k();case 3:t=e.sent,console.log("BookList:".concat(JSON.stringify(t))),n({request:"update-list",value:t});case 6:case"end":return e.stop()}}),e)}))),[]);var s=function(){var e=Object(p.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t.target),e.next=4,y(t.target.value);case 4:return e.next=6,k();case 6:a=e.sent,n({value:a,request:"update-list"}),console.log("Removed Book:".concat(t.target.id));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container border",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h3",{children:"My Saved Books"})}),Object(j.jsx)("div",{className:"books row my-3",children:a.myList&&a.myList.map((function(e,t){return Object(j.jsx)("div",{className:"book col-4 mb-4",children:Object(j.jsxs)("section",{className:"card",children:[e.image?Object(j.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title}):Object(j.jsx)("p",{}),Object(j.jsxs)("summary",{className:"card-body",children:[Object(j.jsx)("h5",{className:"book-title card-title",children:e.title}),Object(j.jsxs)("p",{className:"book-author card-text",children:[" ",e.authors]}),Object(j.jsxs)("p",{className:"book-description card-text",children:[" ",e.description]}),Object(j.jsxs)("button",{className:"btn btn-primary mx-3",value:e._id,type:"button",onClick:s,children:["Remove From My List ",Object(j.jsx)("i",{className:"fas fa-minus"})]}),e.link?Object(j.jsxs)("a",{href:e.link,className:"btn btn-secondary mx-3",children:["Get More Info ",Object(j.jsx)("i",{className:"fas fa-info"})]}):""]})]})},t)}))})]})}function I(){var e={text:"Copyright "+(new Date).getFullYear()};var t=Object(c.useReducer)((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{change:t})}),e),a=Object(l.a)(t,2),n=a[0];a[1];return Object(j.jsx)("footer",{className:"container-fluid fixed-bottom mb-0 bg-light",children:Object(j.jsx)("section",{className:"row",children:Object(j.jsxs)("div",{className:"col text-center text-company-primary",children:[Object(j.jsx)("i",{className:"fas fa-copyright"})," ",n.text]})})})}var B=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(i.a,{exact:!0,path:"/",component:w}),Object(j.jsx)(i.a,{exact:!0,path:"/saved",component:L}),Object(j.jsx)(i.a,{exact:!0,path:"/search",component:w})]}),Object(j.jsx)(I,{})]})};a(68),a(69),a(70);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),reportWebVitals()}},[[71,1,2]]]);
//# sourceMappingURL=main.f7313376.chunk.js.map