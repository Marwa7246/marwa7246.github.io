(this["webpackJsonpmarwa7246.github.io"]=this["webpackJsonpmarwa7246.github.io"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),i=s(8),r=s.n(i),o=(s(15),s(2)),l=s(3),j=s(5),h=s(4),d=s(9),b=s.n(d),u=(s(16),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=(this.props.data.description,this.props.data.quotes,this.props.data.author,this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)})));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h1",{className:"responsive-headline",children:e}),Object(a.jsx)("hr",{}),Object(a.jsxs)("h3",{id:"description",children:["I'm a ",Object(a.jsx)("span",{children:t}),"."]}),Object(a.jsx)("hr",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:s})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component)),m=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("ul",{className:"social-links",children:e}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:"Modified with love by the Clever Programmer team \u2665\ufe0f"})}),Object(a.jsxs)("ul",{className:"copyright",children:[Object(a.jsx)("li",{children:"\xa9 All credit goes to Tim Baker - Copyright 2017 Tim Baker"}),Object(a.jsxs)("li",{children:["Design by ",Object(a.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),O=(c.Component,s(6)),p=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).submitForm=a.submitForm.bind(Object(O.a)(a)),a.state={status:""},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.status;return Object(a.jsxs)("form",{id:"contactForm",name:"contactForm",onSubmit:this.submitForm,action:"https://formspree.io/f/".concat("xwkwbdge"),method:"POST",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",name:"email",placeholder:"Your email",required:!0}),Object(a.jsx)("label",{children:"Message:"}),Object(a.jsx)("textarea",{type:"text",name:"message",placeholder:"Your message",required:!0}),"SUCCESS"===e?Object(a.jsx)("p",{children:"Thanks!"}):Object(a.jsx)("button",{children:"Submit"}),"ERROR"===e&&Object(a.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var s=e.target,a=new FormData(s),c=new XMLHttpRequest;c.open(s.method,s.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(s.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(a)}}]),s}(n.a.Component),x=function(){return Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsx)("div",{className:"row section-head",children:Object(a.jsx)("div",{className:"two columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"CONTACT"})})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"eight columns",children:Object(a.jsx)(p,{})})})]})},f=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,t=this.props.data.bio,s=this.props.data.quotes,c=this.props.data.author;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:e,alt:"river"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:t}),Object(a.jsxs)("p",{className:"quotes",children:[Object(a.jsx)("span",{children:'"'.concat(s,'"')}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{id:"author",children:c})]})]})]})})}}]),s}(c.Component),v=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsx)("div",{className:"item-wrap",children:Object(a.jsxs)("a",{href:e.url,title:e.title,children:[Object(a.jsx)("img",{alt:e.title,src:t}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("h5",{children:e.title}),Object(a.jsx)("p",{children:e.category})]})}),Object(a.jsx)("div",{className:"link-icon",children:Object(a.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(a.jsx)("section",{id:"portfolio",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:"PROJECTS"}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component),g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(l.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{data:this.state.resumeData.main}),Object(a.jsx)(f,{data:this.state.resumeData.main}),Object(a.jsx)(v,{data:this.state.resumeData.portfolio}),Object(a.jsx)(x,{data:this.state.resumeData.main}),Object(a.jsx)(m,{data:this.state.resumeData.main})]})}}]),s}(c.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.db582d8c.chunk.js.map