(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8f217f4e"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02b1":function(t,e,s){"use strict";var a=s("7f46"),i=s.n(a);i.a},"2ab8":function(t,e,s){"use strict";var a=s("70d5"),i=s.n(a);i.a},"34c8":function(t,e,s){"use strict";var a=s("66e1"),i=s.n(a);i.a},"45b6":function(t,e,s){"use strict";var a=s("bec5"),i=s.n(a);i.a},4787:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"mt-5"},[s("h2",{staticClass:"title is-2"},[t._v("Feed Page")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter",on:{mouseenter:t.error}},[s("Sidebar")],1),s("div",{staticClass:"column is-one-half"},[s("div",{staticClass:"card"},[t._m(0),s("p",{staticClass:"card-content"}),t._l(t.fbPics,(function(e){return s("figure",{key:e.id,staticClass:"image is-64x64",on:{click:function(s){return s.preventDefault(),t.add(e)}}},[s("img",{attrs:{src:e.picture,alt:""}})])})),s("p")],2),t._l(t.posts,(function(t,e){return s("Post",{key:e,attrs:{i:e,post:t}})}))],2),s("div",{staticClass:"column is-one-quarter",on:{mouseenter:t.error}},[s("Sidebar")],1)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v(" Add a picture ")])])}],n=(s("96cf"),s("1da1")),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"panel"},[s("p",{staticClass:"panel-heading"},[t._v(" Side Bar ")]),s("div",{staticClass:"panel-block"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search"}}),s("span",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])]),s("p",{staticClass:"panel-tabs"},[s("a",{staticClass:"is-active"},[t._v("All")]),s("a",[t._v("Public")]),s("a",[t._v("Private")]),s("a",[t._v("Sources")]),s("a",[t._v("Forks")])]),s("div",{staticClass:"panel-block"},[s("button",{staticClass:"button is-link is-outlined is-fullwidth"},[t._v(" Reset all filters ")])])])}],c={},l=c,u=s("2877"),d=Object(u["a"])(l,r,o,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.post.URL}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.Reactions)+" people reacted to this ")]),s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48 "},[s("img",{attrs:{src:"http://localhost:3001/public/profiles/"+t.post.Owner_id+".jpg",alt:"Placeholder image"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.post.FirstName)+" "+t._s(t.post.LastName))]),s("p",{staticClass:"subtitle is-6"},[t._v("("+t._s(t.post.PrimaryEmail)+")")])])]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.Text)+" "),s("time",{attrs:{datetime:t.post.created_at}},[t._v(t._s(t.post.created_at))])]),t._l(t.post.Comments,(function(e){return s("div",{key:e.id,staticClass:"media"},[s("div",{staticClass:"media-content"},[s("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),s("span",[t._v(t._s(e.Text))])])])}))],2),s("footer",{staticClass:"card-footer"},[s("div",{staticClass:"field has-addons",staticStyle:{width:"100%"}},[s("div",{staticClass:"control  is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[t._v(" Post ")])])])]),s("footer",{staticClass:"card-footer"},[t._m(1),t._m(2),s("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.react(e)}}},[t._m(3),t._v(" React ")])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"}),s("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-reply",attrs:{"aria-hidden":"true"}})]),t._v(" Reply ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-retweet",attrs:{"aria-hidden":"true"}})]),t._v(" Repost ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])}],v=(s("a9e3"),s("773f")),h=(s("5147"),function(){return Object(v["a"])("posts/byUser/1")});function _(t){return Object(v["a"])("reactions",{Post_id:t,Owner_id:1})}function b(t,e){return Object(v["a"])("comments",{Post_id:t,Owner_id:1,Text:e})}var C={data:function(){return{commentText:""}},props:{post:Object,i:Number},methods:{react:function(){var t=this;_(this.post.id).then((function(e){return t.post.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(t.post.id,t.commentText);case 2:s=e.sent,t.post.Comments.push(s);case 4:case"end":return e.stop()}}),e)})))()}}},g=C,w=(s("02b1"),Object(u["a"])(g,f,m,!1,null,null,null)),y=w.exports,x={data:function(){return{posts:[],fbPics:[]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t.posts=e.sent,FB.api("me/photos?fields=link,images,picture",(function(e){t.fbPics=e.data,console.log(e)}));case 4:case"end":return e.stop()}}),e)})))()},components:{Sidebar:p,Post:y},methods:{error:function(){},add:function(t){this.posts.push({URL:t.images[0].source})}}},k=x,E=(s("34c8"),Object(u["a"])(k,a,i,!1,null,null,null));e["default"]=E.exports},5147:function(t,e,s){"use strict";s("a434");var a={user:null,notifications:[],addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}};e["a"]=a},"53c4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),s("div",{staticClass:"container"},[s("Notifications"),s("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/exercises"}},[t._v("Exercises")]),t._m(1),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" Admin ")]),s("div",{staticClass:"navbar-dropdown"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Users")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/follow"}},[t._v("Follow")])],1)])],1),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("LoginBadge")],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:s("cf05"),height:"28"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" More ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[t._v(" About ")]),s("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),s("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),s("hr",{staticClass:"navbar-divider"}),s("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])])])}],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LoginBadge"}},[t.session.user?s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.session.user.profile,alt:"Placeholder image"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),s("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):s("div",{staticClass:"buttons"},[t._m(0),s("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[t._v(" Log in ")])],1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button"},[s("strong",[t._v("Sign up")])])}],u=s("5147"),d={data:function(){return{session:u["a"]}}},p=d,f=(s("2ab8"),s("2877")),m=Object(f["a"])(p,c,l,!1,null,null,null),v=m.exports,h={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:v}},_=h,b=Object(f["a"])(_,r,o,!1,null,null,null),C=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"notifications"}},t._l(t.session.notifications,(function(e,a){return s("div",{key:a,staticClass:"notification",class:"is-${x.type}"},[s("button",{staticClass:"delete",on:{click:function(e){return t.deleteNotification(a)}}}),t._v(" "+t._s(e.text)+" ")])})),0)},w=[],y={data:function(){return{session:u["a"]}},methods:{deleteNotification:function(t){u["a"].deleteNotification(t)}}},x=y,k=(s("cf45"),Object(f["a"])(x,g,w,!1,null,null,null)),E=k.exports,O={components:{Nav:C,Notifications:E}},j=O,$=Object(f["a"])(j,i,n,!1,null,null,null),P=$.exports,N=(s("d3b7"),s("8c4f")),L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"mt-5"},[s("h1",[t._v("Welcome to our home page")])]),s("h1",{staticClass:"title"},[t._v(" Hello World ")]),s("p",{staticClass:"subtitle"},[t._v(" My first website with "),s("strong",[t._v("Bulma")]),t._v("! ")])])}],R={name:"Home",components:{}},A=R,S=Object(f["a"])(A,L,T,!1,null,null,null),B=S.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level section"},[s("div",{staticClass:"level-item"},[s("form",[t._m(0),t._m(1),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")]),s("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.fbLogin(e)}}},[t._v(" FB Login ")]),s("button",{staticClass:"button is-warning",on:{click:function(e){return e.preventDefault(),t.googleLogin(e)}}},[t._v(" Google Login ")])])])])])])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})]),s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-check"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])])}],U=(s("b0c0"),s("96cf"),s("1da1")),D=null,z={methods:{login:function(){u["a"].user={name:"Gene Baybay",handle:"baybayg1",profile:"https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg"},u["a"].addNotification("Yay! You logged in","success"),this.$router.push("feed")},fbLogin:function(){var t=this;FB.login((function(e){console.log(e),FB.api("me?fields=id,name,email,picture",(function(e){u["a"].user={name:e.name,handle:e.email,profile:e.picture.data.url},u["a"].addNotification("Yay! You logged in","success"),t.$router.push("feed"),console.log(e)}))}),{scope:"public_profile,email,user_photos"})},googleLogin:function(){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.signIn();case 2:s=e.sent,console.log(s),a=s.getBasicProfile(),console.log(a),u["a"].user={name:a.getName(),handle:a.getEmail(),profile:a.getImageUrl()},u["a"].addNotification("Yay! You logged in","success"),t.$router.push("feed");case 9:case"end":return e.stop()}}),e)})))()}}};window.fbAsyncInit=function(){FB.init({appId:"212287283803661",cookie:!0,xfbml:!0,version:"v9.0"}),FB.AppEvents.logPageView()},function(t,e,s){var a,i=t.getElementsByTagName(e)[0];t.getElementById(s)||(a=t.createElement(e),a.id=s,a.src="https://connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk");var I=document.createElement("script");I.setAttribute("src","https://apis.google.com/js/api:client.js"),document.head.appendChild(I),I.onload=function(){gapi.load("auth2",(function(){D=gapi.auth2.init({client_id:"1006295774607-2r6l7avdhbmh67rrh9bntklqqdcagcr8.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email"})}))};var Y=z,q=(s("d6db"),Object(f["a"])(Y,F,M,!1,null,null,null)),H=q.exports,J=(s("4787"),s("b280"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"mt-5"},[s("h2",{staticClass:"title is-2"},[t._v("Users Page")]),s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(0),s("tbody",t._l(t.list,(function(e,a){return s("tr",{key:a,attrs:{i:a,post:e}},[s("th",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.FirstName))]),s("td",[t._v(t._s(e.LastName))]),s("td",[t._v(t._s(e.Password))]),s("td",[t._v(t._s(e.DOB))]),s("td",[t._v(t._s(e.Type))])])})),0)])])])}),W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("id")]),s("th",[t._v("First Name")]),s("th",[t._v("Last Name")]),s("th",[t._v("Password")]),s("th",[t._v("DOB")]),s("th",[t._v("Type")])])])}],G=s("773f");function Q(){return Object(G["a"])("http://localhost:3001/users")}var V={data:function(){return{list:[]}},created:function(){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{}},K=V,X=Object(f["a"])(K,J,W,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"mt-5"},[s("h2",{staticClass:"title is-2"},[t._v("Follow Page")]),s("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(0),s("tbody",t._l(t.list,(function(e,a){return s("tr",{key:a,attrs:{i:a,post:e}},[s("th",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.FirstName))])])})),0)])])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("id")]),s("th",[t._v("First Name")]),s("th",[t._v("Last Name")])])])}];function st(){return Object(G["a"])("http://localhost:3001/followers")}var at={data:function(){return{list:[]}},created:function(){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,st();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{}},it=at,nt=Object(f["a"])(it,tt,et,!1,null,null,null),rt=nt.exports;a["a"].use(N["a"]);var ot=[{path:"/",name:"Home",component:B},{path:"/login",name:"Login",component:H},{path:"/users",name:"Users",component:Z},{path:"/follow",name:"Follow",component:rt},{path:"/feed",name:"Feed",component:function(){return s.e("about").then(s.bind(null,"4787"))},beforeEnter:ut},{path:"/exercises",name:"Exercises",component:function(){return s.e("about").then(s.bind(null,"b280"))},beforeEnter:ut},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],ct=new N["a"]({mode:"history",base:"",routes:ot}),lt=ct;function ut(t,e,s){u["a"].user?s():s("Login")}s("5abe"),s("15f5");a["a"].config.productionTip=!1,new a["a"]({router:lt,render:function(t){return t(P)}}).$mount("#app")},"66e1":function(t,e,s){},"70d5":function(t,e,s){},"773f":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("d3b7");var a=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"/";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(a+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(a+t).then((function(t){return t.json()}))}},"7f46":function(t,e,s){},b280:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"dropdown is-active"},[s("div",{staticClass:"dropdown-trigger"},[s("div",{staticClass:"mt-5"},[s("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu4"},on:{click:function(e){t.isLeftOpen=!t.isLeftOpen}}},[s("span",[t._v("List of Exercises")]),t._m(0)])]),t._m(1)]),t.isLeftOpen?s("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu4",role:"menu"}},[t._m(2)]):t._e()]),s("div",{staticClass:"dropdown is-right is-active"},[s("div",{staticClass:"dropdown-trigger-right"},[s("div",{staticClass:"mt-5"},[s("button",{ref:"dropdownObj",staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu6"},on:{click:function(e){t.isRightOpen=!t.isRightOpen}}},[s("span",[t._v("Exercises Added")]),t._m(3)])])]),t.isRightOpen?s("div",{staticClass:"dropdown-menu-right",attrs:{id:"dropdown-menu6",role:"menu"}},[t._m(4)]):t._e()]),t._m(5),t._m(6),t._m(7),t._m(8)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"centersize"},[s("input",{staticClass:"button",attrs:{type:"submit",value:"Post Workout"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-content"},[s("hr",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#pushups"}},[t._v(" Push Ups ")]),s("hr",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#situps"}},[t._v(" Sit Ups ")]),s("hr",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#pullups"}},[t._v(" Pull Ups ")]),s("hr",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#planks"}},[t._v(" Planks ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-content"},[s("div",{staticClass:"dropdown-item"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pushups"},[s("span",{staticClass:"mt-5",attrs:{id:"pushups"}},[t._v(" hello "),s("br"),s("img",{staticStyle:{width:"500px",height:"300px"},attrs:{src:"https://upl.stack.com/wp-content/uploads/Quickly-Strengthen-Your-Upper-Body-With-Pyramid-Push-Ups.jpg",alt:"pushups"}}),s("br"),t._v(" This is a pushup! "),s("input",{staticClass:"button",attrs:{type:"submit",value:"Add pushup"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"situps"},[s("span",{staticClass:"mt-5",attrs:{id:"situps"}},[t._v(" hello "),s("br"),s("img",{staticStyle:{width:"1000px"},attrs:{src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bootcamp-situp-1441032989.jpg",alt:"situps"}}),s("br"),t._v(" This is a situp! "),s("input",{staticClass:"button",attrs:{type:"submit",value:"Add situp"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pullups"},[s("span",{staticClass:"mt-5",attrs:{id:"pullups"}},[t._v(" Hello "),s("br"),s("img",{staticStyle:{width:"1000px"},attrs:{src:"https://www.climbing.com/.image/t_share/MTM3MzI0NDMzMjY5MzM1MjA5/trainingperfectpullupsjpg.jpg",alt:"pullups"}}),s("br"),t._v(" This is a pullup! "),s("input",{staticClass:"button",attrs:{type:"submit",value:"Add pullup"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"planks"},[s("span",{staticClass:"mt-5",attrs:{id:"planks"}},[t._v(" Hello "),s("br"),s("img",{staticStyle:{width:"1000px"},attrs:{src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hdm119918mh15842-1545237096.png",alt:"planks"}}),s("br"),t._v(" This is a plank! "),s("input",{staticClass:"button",attrs:{type:"submit",value:"Add plank"}})])])}],n={data:function(){return{isLeftOpen:!1,isRightOpen:!1}},methods:{addItems:function(){this.$refs.dropdownObj.addItems()}}},r=n,o=(s("45b6"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},bec5:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},cf45:function(t,e,s){"use strict";var a=s("53c4"),i=s.n(a);i.a},d6db:function(t,e,s){"use strict";var a=s("e67a"),i=s.n(a);i.a},e67a:function(t,e,s){}});
//# sourceMappingURL=app.6c528857.js.map