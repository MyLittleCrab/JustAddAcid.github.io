(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{6838:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.name,n=e.picture,i=e.href;return(0,r.jsxs)("a",{className:"flex items-center",href:i||"#",children:[(0,r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},3763:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(4184),a=n.n(i),o=n(1664);function s(e){var t=e.title,n=e.src,i=e.slug,s=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:a()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":i})});return(0,r.jsx)("div",{className:"-mx-5 sm:mx-0",children:i?(0,r.jsx)(o.default,{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,r.jsx)("a",{"aria-label":t,children:s})}):s})}},3791:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(3855),a=n(8797);function o(e){var t=e.dateString,n=e.className,o=(0,i.Z)(t);return(0,r.jsx)("time",{dateTime:t,className:n,children:(0,a.Z)(o,"LLLL\td, yyyy")})}},5392:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(6742);function a(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(i.Z,{})})}var o=n(9008);function s(){return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"Nosoff.info \u2014 personal blog"})]})}function c(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(a,{})]})}},3359:function(e,t,n){"use strict";var r=n(4575),i=n(3913),a=n(2205),o=n(8585),s=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var l=n(5318);t.__esModule=!0,t.default=void 0;var u=l(n(7294)),d=l(n(2775)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){a(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:p.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:p.h1},e):null,u.default.createElement("div",{style:p.desc},u.default.createElement("h2",{style:p.h2},this.props.title||e?t:u.default.createElement(u.default.Fragment,null,"Application error: a client-side exception has occurred (",u.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}]),n}(u.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=m,h.origGetInitialProps=m;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},2849:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return O}});var r=n(5893),i=n(1163),a=n(2918),o=n(6742);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=n(7294),x=n(1255),g=n.n(x);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}var b=function(e){d(n,e);var t=v(n);function n(){return s(this,n),t.apply(this,arguments)}return l(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:g().markdown,dangerouslySetInnerHTML:{__html:this.props.content}})})}}]),n}(p.Component),j=n(1664);function y(){return(0,r.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,r.jsx)(j.default,{href:"/",children:(0,r.jsx)("a",{className:"hover:underline",children:"Nosoff.info"})})})}var N=n(6838),k=n(3791),w=n(3763);function _(e){var t=e.titleEnabled,n=e.title;return t?(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:n}):(0,r.jsx)("h1",{className:"screenreader",children:n})}function E(e){var t=e.title,n=e.titleEnabled,i=e.coverImage,a=e.date,o=e.author;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{titleEnabled:n,title:t}),(0,r.jsx)("div",{className:"hidden md:block md:mb-12",children:(0,r.jsx)(N.Z,{name:o.name,picture:o.picture,href:o.url})}),(0,r.jsx)("div",{className:"mb-8 md:mb-16 -mx-5 sm:mx-0",children:(0,r.jsx)(w.Z,{title:t,src:i})}),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:"block md:hidden mb-6",children:(0,r.jsx)(N.Z,{name:o.name,picture:o.picture,href:o.url})}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(k.Z,{dateString:a})})]})]})}var R=n(5392),S=n(9008);function I(e){var t=e.picture,n=e.link;return(0,r.jsx)("a",{href:n,className:"mx-auto md:mx-0 md:mr-6",children:(0,r.jsx)("img",{src:t,className:"w-12 h-12 rounded-full",alt:name})})}function P(e){var t=e.avatarUrl,n=e.userProfileUrl,i=e.userLogin,a=e.commentDate,o=e.commentBody;return(0,r.jsxs)("article",{className:"md:flex bg-white rounded-lg p-6 shadow-small mb-2 comment-card",children:[(0,r.jsx)(I,{picture:t,link:n}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{className:"text-xl font-bold hover:underline",href:n,children:i}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:o}}),(0,r.jsx)(k.Z,{className:"text-gray-600",dateString:a})]})]})}function C(e){var t=e.link,n=e.text;return(0,r.jsx)("a",{href:t,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-2 inline-block",children:n})}function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}var Z=function(e){d(n,e);var t=L(n);function n(e){var r;return s(this,n),(r=t.call(this,e)).state={data:null,isLoading:!0},r}return l(n,[{key:"componentDidMount",value:function(){if(!this.state.data){var e=this.props.githubUser,t=this.props.githubRepo,n=this.props.issueId,r=this;window.fetch("https://api.github.com/repos/".concat(e,"/").concat(t,"/issues/").concat(n,"/comments"),{headers:{Accept:"application/vnd.github.v3.html+json"}}).then((function(e){return e.json()})).then((function(e){return r.setState({data:e,isLoading:!1})}))}return null}},{key:"render",value:function(){var e=this.state.isLoading,t=!(!this.state.data||!this.state.data.length),n=this.props.githubUser,i=this.props.githubRepo,a=this.props.issueId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{className:"mb-5"}),(0,r.jsx)("h2",{className:"text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),e&&(0,r.jsx)("div",{className:"md:flex p-6",children:"Loading..."}),t&&this.state.data.map((function(e){return(0,r.jsx)(P,{avatarUrl:e.user.avatar_url,userProfileUrl:e.user.html_url,userLogin:e.user.login,commentDate:e.created_at,commentBody:e.body_html},e.id)})),(0,r.jsx)(C,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",link:"https://github.com/".concat(n,"/").concat(i,"/issues/").concat(a)})]})}}]),n}(p.Component),A=!0;function O(e){var t=e.post,n=(e.morePosts,e.preview),s=(0,i.useRouter)();return s.isFallback||null!==t&&void 0!==t&&t.slug?(0,r.jsx)(R.Z,{preview:n,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(y,{}),s.isFallback?(0,r.jsx)(_,{children:"Loading\u2026"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)(S.default,{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,r.jsx)(E,{title:t.title,titleEnabled:t.titleEnabled,coverImage:t.coverImage,date:t.date,author:t.author}),(0,r.jsx)(b,{content:t.content})]}),(0,r.jsx)("article",{className:"mb-32 max-w-2xl mx-auto",children:(0,r.jsx)(Z,{githubUser:"JustAddAcid",githubRepo:"JustAddAcid.github.io",issueId:t.issueId})})]})]})}):(0,r.jsx)(a.default,{statusCode:404})}},9808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(2849)}])},1255:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},2918:function(e,t,n){e.exports=n(3359)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[853,774,888,179],(function(){return t=9808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);