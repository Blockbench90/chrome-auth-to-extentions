!function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=this["webpackJsonpchorome-auth-to-extension"]=this["webpackJsonpchorome-auth-to-extension"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;c.push([150,2]),n()}({139:function(e,t,n){e.exports={loginWrap:"LoginForm_loginWrap__3k2N6"}},14:function(e,t,n){e.exports={homeWrap:"Home_homeWrap__2filX",rate:"Home_rate__GViSZ",userWrap:"Home_userWrap__1KLS4",userInfo:"Home_userInfo__3rjUx",userName:"Home_userName__2kyo4",userReview:"Home_userReview__3lM8q",icon:"Home_icon__E75ca",like:"Home_like__23DyB",dislike:"Home_dislike__3-KOo",commentsWrap:"Home_commentsWrap__3eqRP",commentHeader:"Home_commentHeader__1BrkN",commentAvatar:"Home_commentAvatar__3X2ma",commentNickName:"Home_commentNickName__2Jl9n",commentAuthor:"Home_commentAuthor__370nf",commentContent:"Home_commentContent__2a1QO",commentTime:"Home_commentTime__M_m2N",commentFooterInfo:"Home_commentFooterInfo__2ZP8Y",commentFooter:"Home_commentFooter__2RBfr",error:"Home_error__1iJi7",editorWrap:"Home_editorWrap__2sGtN",commentSubmitButton:"Home_commentSubmitButton__2MZ-Y"}},150:function(e,t,n){e.exports=n(296)},160:function(e,t,n){},162:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(30),s=n.n(o),i=n(37),u=(n(160),n(161),n(162),n(6)),l=n(14),m=n.n(l),d=function(e){return e.user},j=n(145),p=n(131),b=n(132),O=n.n(b),_=n(5),f=function(e){var t=e.value,n=e.setError,r=e.onChangeValue;return Object(_.jsx)("div",{className:"Editor",children:Object(_.jsx)(p.CKEditor,{editor:O.a,data:t,config:{link:{addTargetToExternalLinks:!0}},onChange:function(e,t){n(!1);var a=t.getData();r(a)}})})},v=n(301),x=n(72),h=n.n(x),N=function(e){var t=e.nickName;return Object(_.jsxs)("div",{className:m.a.userWrap,children:[Object(_.jsx)("div",{children:Object(_.jsx)(v.a,{size:60,style:{backgroundColor:"#87d068"},src:"https://picsum.photos/100",icon:Object(_.jsx)(h.a,{})})}),Object(_.jsxs)("div",{className:m.a.userInfo,children:[Object(_.jsx)("div",{className:m.a.userName,children:Object(_.jsx)("span",{children:t})}),Object(_.jsxs)("div",{className:m.a.userScore,children:[Object(_.jsx)("span",{className:m.a.userReview,children:"Review Score:"}),Object(_.jsx)("span",{className:m.a.rate,children:"1.9K"})]})]})]})},E=n(304),k=n(305),g=n(306),y=n(307),S=n(299),T=function(e){var t=e.isLike,n=e.percent,r=e.onLike,a=e.onDislike;return Object(_.jsxs)(c.a.Fragment,{children:[Object(_.jsx)("div",{className:m.a.likeWrap,children:Object(_.jsxs)("div",{children:[t?Object(_.jsx)(E.a,{onClick:r,twoToneColor:"green",className:m.a.icon}):Object(_.jsx)(k.a,{className:m.a.icon,style:{color:"#62cdab"},onClick:r}),Object(_.jsx)("span",{className:m.a.like,children:"Like"}),t?Object(_.jsx)(g.a,{className:m.a.icon,style:{color:"#b64b63"},onClick:a}):Object(_.jsx)(y.a,{className:m.a.icon,twoToneColor:"green",onClick:a}),Object(_.jsx)("span",{className:m.a.dislike,children:"Dislike "})]})}),Object(_.jsx)("div",{className:m.a.rate,children:Object(_.jsx)(S.a,{percent:n,showInfo:!1,strokeColor:"#62cdab",trailColor:"#b64b63"})})]})},w=n(308),A=n(53),C=n(138),I=n.n(C),R=function(e){var t=e.comments,n=void 0===t?[]:t;return Object(_.jsx)("div",{className:m.a.commentsWrap,children:n.length?null===n||void 0===n?void 0:n.map((function(e,t){return Object(_.jsxs)("div",{className:m.a.commentWrap,children:[Object(_.jsxs)("div",{className:m.a.commentHeader,children:[Object(_.jsx)("div",{className:m.a.commentAvatar,children:Object(_.jsx)(v.a,{style:{backgroundColor:"#87d068"},src:"https://picsum.photos/100",icon:Object(_.jsx)(h.a,{})})}),Object(_.jsxs)("div",{className:m.a.commentNickName,children:[Object(_.jsx)("span",{className:m.a.commentAuthor,children:null===e||void 0===e?void 0:e.author}),Object(_.jsx)("span",{className:m.a.commentTime,children:I()(null===e||void 0===e?void 0:e.timestamp).fromNow()})]})]}),Object(_.jsx)("div",{className:m.a.commentContent,children:Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.text}})}),Object(_.jsxs)("div",{className:m.a.commentFooter,children:[Object(_.jsxs)("div",{className:m.a.commentFooterInfo,children:[Object(_.jsx)("div",{children:Object(_.jsx)("span",{children:"2 Likes"})}),Object(_.jsxs)("div",{children:[Object(_.jsx)(w.a,{})," ",Object(_.jsx)("span",{children:"Reply"})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(k.a,{className:m.a.icon,style:{color:"gray",marginRight:"5px",opacity:"0.5"}}),Object(_.jsx)(g.a,{className:m.a.icon,style:{color:"gray",opacity:"0.5"}})]})]})]},"".concat(null===e||void 0===e?void 0:e.timestamp,"_").concat(t))})):Object(_.jsx)(A.a,{description:!1})})};!function(e){e.SET_LOADING_STATE="user/SET_LOADING_STATE",e.SET_USER_DATA="user/SET_USER_DATA",e.SET_DOMAIN_DATA="user/SET_DOMAIN_DATA",e.FETCH_SIGN_IN="user/FETCH_SIGN_IN",e.FETCH_ME="user/FETCH_ME",e.GET_DOMAINS="user/GET_DOMAINS",e.CREATE_COMMENT="user/CREATE_COMMENT"}(r||(r={}));var D,M=function(e){return{type:r.SET_LOADING_STATE,payload:e}},H=function(e){return{type:r.FETCH_SIGN_IN,payload:e}},L=function(){return{type:r.FETCH_ME}},W=function(e){return{type:r.SET_USER_DATA,payload:e}},G=function(e){return{type:r.SET_DOMAIN_DATA,payload:e}},F=function(e){return{type:r.GET_DOMAINS,payload:e}},P=function(e){return{type:r.CREATE_COMMENT,payload:e}},U=function(){var e=Object(i.b)(),t=Object(i.c)(d),n=t.userData,r=t.domains,c=Object(a.useState)(),o=Object(u.a)(c,2),s=o[0],l=o[1],p=Object(a.useState)(!1),b=Object(u.a)(p,2),O=b[0],v=b[1],x=Object(a.useState)(),h=Object(u.a)(x,2),E=h[0],k=h[1];return Object(_.jsxs)("div",{className:m.a.homeWrap,children:[Object(_.jsx)(N,{nickName:null===n||void 0===n?void 0:n.nickName}),Object(_.jsx)(T,{isLike:E,percent:0===(null===r||void 0===r?void 0:r.like)?0:Math.round((null===r||void 0===r?void 0:r.like)/(null===r||void 0===r?void 0:r.likesCount)*100),onLike:function(){k(!0)},onDislike:function(){k(!1)}}),Object(_.jsx)(R,{comments:null===r||void 0===r?void 0:r.comments}),Object(_.jsxs)("div",{className:m.a.editorWrap,children:[O&&Object(_.jsx)("span",{className:m.a.error,children:"Editor is Empty!"}),Object(_.jsx)(f,{onChangeValue:l,value:s,setError:v}),Object(_.jsx)(j.a,{type:"primary",onClick:function(){if(s){var t={URL:null===r||void 0===r?void 0:r.URL,isLike:E,text:s,author:null===n||void 0===n?void 0:n.nickName};e(P(t)),l("")}else v(!0)},className:m.a.commentSubmitButton,children:"Send"})]})]})},B=n.p+"static/media/logo512.8252c429.png",V=n(298),q=n(300),X=n(302),J=n(139),K=n.n(J),z=function(){var e=Object(i.b)();return Object(_.jsx)("div",{className:K.a.loginWrap,children:Object(_.jsxs)(V.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e(H(t))},autoComplete:"off",children:[Object(_.jsx)(V.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your username!",type:"email"}],children:Object(_.jsx)(q.a,{})}),Object(_.jsx)(V.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(_.jsx)(q.a.Password,{})}),Object(_.jsx)(V.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(_.jsx)(X.a,{children:"Remember me"})}),Object(_.jsx)(V.a.Item,{wrapperCol:{offset:8,span:16},children:Object(_.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})},Z=n(52),Q=n.n(Z),Y=function(){return Object(_.jsxs)("div",{className:Q.a.mainWrap,children:[Object(_.jsx)("div",{className:Q.a.logoWrap,children:Object(_.jsx)("img",{src:B,alt:"as",className:Q.a.logo})}),Object(_.jsx)("div",{className:Q.a.title,children:"Welcome \ud83d\udc4b"}),Object(_.jsx)("div",{className:Q.a.description,children:"\ud83d\ude0a To leave comments, please sign in to your account"}),Object(_.jsx)(z,{})]})},$=n(13),ee=n(15),te=new(function(){function e(){Object($.a)(this,e)}return Object(ee.a)(e,[{key:"setToken",value:function(e){e&&window.localStorage.setItem("_token",e)}},{key:"getToken",value:function(){return window.localStorage.getItem("_token")}},{key:"removeToken",value:function(){window.localStorage.removeItem("_token")}},{key:"setErrorMessage",value:function(e){e&&window.localStorage.setItem("_m",e)}},{key:"getErrorMessage",value:function(){return window.localStorage.getItem("_m")}}]),e}());!function(e){e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e.NEVER="NEVER",e.SUCCESS="SUCCESS"}(D||(D={}));var ne=n(142);var re=function(){var e=Object(i.c)(d).status,t=Object(i.b)(),n=te.getToken();return Object(a.useEffect)((function(){chrome.tabs&&chrome.tabs.query({currentWindow:!0,active:!0},(function(e){t(F(e[0].url)),console.log(e[0].url)}))}),[t]),Object(a.useEffect)((function(){t(L())}),[t]),e===D.LOADING?Object(_.jsx)("div",{className:"preloader-wrap",children:Object(_.jsx)(ne.Messaging,{color:"#014B3E",width:"20px",height:"20px",duration:"1s"})}):Object(_.jsx)("div",{className:"app-wrap",children:n?Object(_.jsx)(U,{}):Object(_.jsx)(Y,{})})},ae=n(41),ce=n(146),oe=n(11),se=n.n(oe),ie=n(20),ue=n(32),le=n(80),me=n.n(le);me.a.interceptors.request.use((function(e){e.baseURL="http://localhost:3000/dev/";var t=window.localStorage.getItem("_token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),me.a.interceptors.response.use((function(e){return e}),(function(e){if(400===e.response.status){var t=Object.values(e.response.data)[0];te.setErrorMessage(t),alert(t)}return 401===e.response.status&&te.removeToken(),403===e.response.status&&(te.setErrorMessage(e.response.data.error.message),console.log("error 403:",e.response.data.error.message)),404===e.response.status&&console.log("404 Server not found!"),e}));var de=me.a,je=function(e){return Object(ue.a)(se.a.mark((function t(){var n,r;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.post("login",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},pe=function(){return Object(ue.a)(se.a.mark((function e(){var t,n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.get("me");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},be=function(e){return Object(ue.a)(se.a.mark((function t(){var n,r;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.post("domains",{URL:e});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},Oe=function(e){return Object(ue.a)(se.a.mark((function t(){var n;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.post("comment",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},_e=se.a.mark(Ne),fe=se.a.mark(Ee),ve=se.a.mark(ke),xe=se.a.mark(ge),he=se.a.mark(ye);function Ne(e){var t,n;return se.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(ie.c)(M(D.LOADING));case 4:return r.next=6,Object(ie.b)(je,t);case 6:return n=r.sent,te.setToken(n.token),r.next=10,Object(ie.c)(W(n.user));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(ie.c)(M(D.ERROR));case 16:case"end":return r.stop()}}),_e,null,[[1,12]])}function Ee(){var e;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ie.c)(M(D.LOADING));case 3:return t.next=5,Object(ie.b)(pe);case 5:return e=t.sent,t.next=8,Object(ie.c)(W(e.data));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(ie.c)(M(D.ERROR));case 14:case"end":return t.stop()}}),fe,null,[[0,10]])}function ke(e){var t,n;return se.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(ie.c)(M(D.LOADING));case 4:return r.next=6,Object(ie.b)(be,t);case 6:return n=r.sent,r.next=9,Object(ie.c)(G(n.body));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(ie.c)(M(D.ERROR));case 15:case"end":return r.stop()}}),ve,null,[[1,11]])}function ge(e){var t,n;return se.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(ie.c)(M(D.LOADING));case 4:return r.next=6,Object(ie.b)(Oe,t);case 6:if(200!==r.sent.status){r.next=15;break}return r.next=10,Object(ie.b)(be,t.URL);case 10:return n=r.sent,r.next=13,Object(ie.c)(G(n.body));case 13:r.next=17;break;case 15:return r.next=17,Object(ie.c)(M(D.ERROR));case 17:r.next=23;break;case 19:return r.prev=19,r.t0=r.catch(1),r.next=23,Object(ie.c)(M(D.ERROR));case 23:case"end":return r.stop()}}),xe,null,[[1,19]])}function ye(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.d)(r.FETCH_SIGN_IN,Ne);case 2:return e.next=4,Object(ie.d)(r.FETCH_ME,Ee);case 4:return e.next=6,Object(ie.d)(r.GET_DOMAINS,ke);case 6:return e.next=8,Object(ie.d)(r.CREATE_COMMENT,ge);case 8:case"end":return e.stop()}}),he)}var Se=se.a.mark(Te);function Te(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([ye()]);case 2:case"end":return e.stop()}}),Se)}var we=n(143),Ae={userData:null,domains:null,status:D.NEVER},Ce=Object(we.a)((function(e,t){switch(t.type){case r.SET_USER_DATA:e.userData=t.payload,e.status=D.SUCCESS;break;case r.SET_DOMAIN_DATA:e.domains=t.payload,e.status=D.SUCCESS}}),Ae),Ie=Object(ae.b)({user:Ce}),Re="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.c,De=Object(ce.a)(),Me=Object(ae.d)(Ie,Re(Object(ae.a)(De)));De.run(Te),s.a.render(Object(_.jsx)(i.a,{store:Me,children:Object(_.jsx)(re,{})}),document.getElementById("root"))},52:function(e,t,n){e.exports={signIn:"Main_signIn__188d8",logoWrap:"Main_logoWrap__379Bz",logo:"Main_logo__34wXF",title:"Main_title__2BP-I",description:"Main_description__2dQBs"}}});
//# sourceMappingURL=main.js.map