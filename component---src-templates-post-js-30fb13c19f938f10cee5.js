(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),l=(a(4),a(160),a(155)),o=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.wordpressPost,t="",a="";return null!==e.acf&&(""!==e.acf.facebook&&(t="<h3>Facebook</h3> "+e.acf.facebook),""!==e.acf.twitter&&(a="<h3>Twitter</h3> "+e.acf.twitter)),s.a.createElement(l.a,null,s.a.createElement("div",null,s.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))},t}(n.Component);t.default=o;var d="4045599780"},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(151);var d=i.a.createContext({}),u=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(55),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},154:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"7ec551e2-9cf4-5d96-9a9c-ddf78ff760ff",name:"Main menu",items:[{title:"Sample Page",url:"http://localhost/playground/sample-page/",object_slug:"sample-page"},{title:"Ut exercitationem sapiente omnis animi",url:"http://localhost/playground/2019/04/15/ut-exercitationem-sapiente-omnis-animi/",object_slug:"ut-exercitationem-sapiente-omnis-animi"},{title:"Unde est eum amet",url:"http://localhost/playground/2019/04/15/unde-est-eum-amet/",object_slug:"unde-est-eum-amet"},{title:"test",url:"#",object_slug:"test"}]}}]}}}},155:function(e,t,a){"use strict";var r=a(152),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(150),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var u=d,c=(a(156),a(154)),f=a(33),p=a.n(f),h=function(){return n.a.createElement(o.b,{query:"1091162957",render:function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Main Menu"),n.a.createElement("ul",null,e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return n.a.createElement("li",{key:e.object_slug},n.a.createElement(p.a,{to:e.url},e.title))})))},data:c})},m=function(e){var t=e.children;return n.a.createElement(o.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,n.a.createElement(h,null),t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})};m.propTypes={children:l.a.node.isRequired};t.a=m},160:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),l=r(a(75)),o=r(a(76)),d=r(a(0)),u=r(a(4)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},c,{onLoad:s,onError:u,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,E=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:w?1:0,transition:L?"opacity "+v+"ms":"none"},l),R="boolean"==typeof y?"lightgray":y,T={transitionDelay:v+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&T,l,f),z={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(h){var M=h;return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),R&&d.default.createElement(S,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&T)}),M.base64&&d.default.createElement(b,(0,o.default)({src:M.base64},z)),M.tracedSVG&&d.default.createElement(b,(0,o.default)({src:M.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,M.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},M))}}))}if(m){var O=m,_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},R&&d.default.createElement(S,{title:t,style:(0,o.default)({backgroundColor:R,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},L&&T)}),O.base64&&d.default.createElement(b,(0,o.default)({src:O.base64},z)),O.tracedSVG&&d.default.createElement(b,(0,o.default)({src:O.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(b,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},O))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-templates-post-js-30fb13c19f938f10cee5.js.map