(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a(155),l=a(157);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(151);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"7ec551e2-9cf4-5d96-9a9c-ddf78ff760ff",name:"Main menu",items:[{title:"Sample Page",url:"http://localhost/playground/sample-page/",object_slug:"sample-page"},{title:"Ut exercitationem sapiente omnis animi",url:"http://localhost/playground/2019/04/15/ut-exercitationem-sapiente-omnis-animi/",object_slug:"ut-exercitationem-sapiente-omnis-animi"},{title:"Unde est eum amet",url:"http://localhost/playground/2019/04/15/unde-est-eum-amet/",object_slug:"unde-est-eum-amet"},{title:"test",url:"#",object_slug:"test"}]}}]}}}},155:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(150),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(156),a(154)),m=a(33),p=a.n(m),g=function(){return i.a.createElement(s.b,{query:"1091162957",render:function(e){return i.a.createElement("div",null,i.a.createElement("h1",null,"Main Menu"),i.a.createElement("ul",null,e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return i.a.createElement("li",{key:e.object_slug},i.a.createElement(p.a,{to:e.url},e.title))})))},data:d})},f=function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,i.a.createElement(g,null),t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};f.propTypes={children:l.a.node.isRequired};t.a=f},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(161),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-7f823fb5ba52b580ae81.js.map