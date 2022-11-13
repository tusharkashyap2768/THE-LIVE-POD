(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{27:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(15),s=n.n(c),r=n(3),i=n.n(r),o=n(5),l=n(6),d=n(12),u=n(10),j=n(2),b=function(e,t){switch(t.type){case"SET":return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.payload.name,t.payload.data));case"ADD_TO_SAVED_VIDEOS":return Object(j.a)(Object(j.a)({},e),{},{saved:[].concat(Object(d.a)(e.saved),[{video:t.payload}])});case"REMOVE_FROM_SAVED_VIDEOS":return Object(j.a)(Object(j.a)({},e),{},{saved:e.saved.filter((function(e){return e.video.videoId!==t.payload.videoId}))});case"ADD_TO_LIKED_VIDEOS":return Object(j.a)(Object(j.a)({},e),{},{liked:[].concat(Object(d.a)(e.liked),[{video:t.payload}])});case"REMOVE_FROM_LIKED_VIDEOS":return Object(j.a)(Object(j.a)({},e),{},{liked:e.liked.filter((function(e){return e.video.videoId!==t.payload.videoId}))});case"ADD_NOTE":return Object(j.a)(Object(j.a)({},e),{},{notes:[].concat(Object(d.a)(e.notes),[t.payload])});case"UPDATE_NOTE":return Object(j.a)(Object(j.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"DELETE_NOTE":return Object(j.a)(Object(j.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.payload}))});case"ADD_HISTORY":return Object(j.a)(Object(j.a)({},e),{},{history:[{video:t.payload}].concat(Object(d.a)(e.history))})}},O=n(11),p=n.n(O),v="https://the-live-pod.herokuapp.com",f=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,c,s,r,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=o.length>2&&void 0!==o[2]?o[2]:null,e.t0=t,e.next="GET"===e.t0?4:"POST"===e.t0?15:"DELETE"===e.t0?26:36;break;case 4:return e.prev=4,e.next=7,p.a.get("".concat(v,"/").concat(n));case 7:if(200!=(c=e.sent).status){e.next=10;break}return e.abrupt("return",c.data);case 10:e.next=15;break;case 12:return e.prev=12,e.t1=e.catch(4),e.abrupt("return",{success:!1,error:e.t1});case 15:return e.prev=15,e.next=18,p.a.post("".concat(v,"/").concat(n),a);case 18:return s=e.sent,console.log(s),e.abrupt("return",s.data);case 23:return e.prev=23,e.t2=e.catch(15),e.abrupt("return",{success:!1,error:e.t2});case 26:return e.prev=26,e.next=29,p.a.delete("".concat(v,"/").concat(n));case 29:return r=e.sent,e.abrupt("return",r.data);case 33:return e.prev=33,e.t3=e.catch(26),e.abrupt("return",{success:!1,error:e.t3});case 36:return e.abrupt("return","Not a valid call");case 37:case"end":return e.stop()}}),e,null,[[4,12],[15,23],[26,33]])})));return function(t,n){return e.apply(this,arguments)}}(),h=n(0),x=Object(a.createContext)(),m=function(e){var t=e.children,n=Object(a.useState)(!0),c=Object(l.a)(n,2),s=c[0],r=c[1],d=Object(a.useReducer)(b,{videos:[],latest:[],saved:[],playlist:[],liked:[],notes:[],history:[]}),u=Object(l.a)(d,2),j=u[0],O=u[1],p=Object(a.useState)(j.videos),v=Object(l.a)(p,2),m=v[0],y=v[1];Object(a.useEffect)((function(){r(!0),Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("GET","videos");case 3:t=e.sent,y(t.videos),O({type:"SET",payload:{name:"videos",data:t.videos}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[]);return Object(h.jsx)(x.Provider,{value:{state:j,dispatch:O,ifPresentInSaved:function(e){return j.saved.some((function(t){return t.video.videoId===e}))},ifPresentInLikeVideos:function(e){return j.liked.some((function(t){return t.video.videoId===e}))},videoData:m,setVideoData:y,onSearchData:function(e){var t=j.videos.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));y(t)},getVideoData:function(e){return j.videos.find((function(t){return t.videoId==e}))},loading:s,setLoading:r},children:t})},y=function(){return Object(a.useContext)(x)},g=function(e,t){switch(t.type){case"SET_PLAYLIST":return{MyPlaylists:t.payload};case"ADD_PLAYLIST":return{MyPlaylists:e.MyPlaylists.concat(t.payload)};case"ADD_TO_PLAYLIST":return{MyPlaylists:e.MyPlaylists.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{videos:[].concat(Object(d.a)(e.videos),[{video:t.payload.video}])}):e}))};case"REMOVE_FROM_PLAYLIST":return console.log(e.MyPlaylists),{MyPlaylists:e.MyPlaylists.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{videos:e.videos.filter((function(e){return e.video.videoId!==t.payload.videoId}))}):e}))};case"DELETE_PLAYLIST":return{MyPlaylists:e.MyPlaylists.filter((function(e){return e.id!==t.payload}))};default:return e}},E=Object(a.createContext)(),k=[],N=function(e){var t=e.children,n=Object(a.useReducer)(g,{MyPlaylists:k}),c=Object(l.a)(n,2),s=c[0],r=c[1];return Object(h.jsx)(E.Provider,{value:{state:s,dispatchPlaylist:r,ifPresentInPlaylist:function(e,t){return console.log(t),s.MyPlaylists.find((function(t){return t.id===e})).videos.some((function(e){return e.video.videoId===t}))}},children:t})},w=function(){return Object(a.useContext)(E)},I=n(7),S=n(4),T=n(13),P=(n(54),function(e){return T.a.success(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}),D=function(e){return T.a.info(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},C=function(e){return T.a.dark(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},L=Object(a.createContext)(),A=function(e){var t,n=e.children,c=Object(a.useState)(!1),s=Object(l.a)(c,2),r=s[0],d=s[1],u=JSON.parse(null===(t=localStorage)||void 0===t?void 0:t.getItem("login"))||{isUserLoggedIn:!1,token:null},j=u.isUserLoggedIn,b=u.userId,O=(u.name,u.token),v=Object(a.useState)(j),x=Object(l.a)(v,2),m=x[0],y=x[1],g=Object(a.useState)(O),E=Object(l.a)(g,2),k=E[0],N=E[1],w=Object(S.h)(),I=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,f("POST","login",t);case 4:(a=e.sent).success&&(T(a.response),w(n)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("wwookkkakakaka"),P("Invalid Credentials."),console.log(e.t0);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,8,13,16]])})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e){y(!0),D(e.token),localStorage.setItem("login",JSON.stringify({isUserLoggedIn:!0,userId:e.userId,name:e.name,token:e.token})),P("successfully logged in!"),N(e.token)};function D(e){if(e)return p.a.defaults.headers.common.Authorization="Bearer ".concat(e);delete p.a.defaults.headers.common.Authorization}var C=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,f("POST","signup",t);case 4:e.sent.success&&(P("successfully signed up!"),w("/login")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(L.Provider,{value:{isUserLogIn:m,setIsUserLogIn:y,authenticateUser:I,token:k,logOut:function(){N(null),D(null),localStorage.removeItem("login"),y(!1)},userId:b,createUserCredentials:C,setupAuthHeaderForServiceCalls:D,loading:r},children:n})},_=function(){return Object(a.useContext)(L)},M=(n(57),function(){var e=y().onSearchData;return Object(h.jsx)(I.b,{to:"/",className:"link-box",children:Object(h.jsx)("input",{className:"search-bar",placeholder:"Search for Videos",onChange:e})})}),V=function(e){var t=e.setOpenBars,n=_(),a=n.isUserLogIn,c=n.logOut;return Object(h.jsx)("div",{className:"nav-box",children:Object(h.jsxs)("div",{className:"navigation-bar",children:[Object(h.jsx)("div",{className:"main-heading",children:"The Live Pod"}),Object(h.jsx)(M,{}),Object(h.jsx)("div",{children:a?Object(h.jsx)("button",{className:"logout-btn",onClick:function(){return c()},children:"Logout"}):Object(h.jsxs)("div",{className:"login-div",children:[Object(h.jsx)(I.b,{className:"link-btn",to:"/login",children:"Log In "}),"|",Object(h.jsx)(I.b,{className:"link-btn",to:"/signup",children:" Sign Up"})]})}),Object(h.jsx)("div",{onClick:function(){t((function(e){return!e}))},id:"menu",className:"menu-bar",children:Object(h.jsx)("i",{className:"fad fa-bars"})})]})})},R=function(e){var t=e.openBars,n=e.setOpenBars;return Object(h.jsx)("div",{className:"sidebar ".concat(t?"sidebar-left":""),children:Object(h.jsxs)("div",{className:"side-nav-btn",children:[Object(h.jsxs)(I.c,{onClick:function(){n((function(e){return!e}))},end:!0,activeClassName:"selected",className:"btn",to:"/",children:[Object(h.jsx)("i",{className:"far fa-home-lg"}),Object(h.jsx)("span",{children:"Home"})]}),Object(h.jsxs)(I.c,{onClick:function(){n((function(e){return!e}))},activeClassName:"selected",className:"btn",to:"/saved",children:[Object(h.jsx)("i",{className:"far fa-bookmark"}),Object(h.jsx)("span",{children:"Saved"})]}),Object(h.jsxs)(I.c,{onClick:function(){n((function(e){return!e}))},activeClassName:"selected",className:"btn",to:"/my-playlist",children:[Object(h.jsx)("i",{className:"fal fa-bars"}),Object(h.jsx)("span",{children:"Playlist"})]}),Object(h.jsxs)(I.c,{onClick:function(){n((function(e){return!e}))},activeClassName:"selected",className:"btn",to:"/liked-videos",children:[Object(h.jsx)("i",{className:"far fa-thumbs-up"}),Object(h.jsx)("span",{children:"Liked "})]}),Object(h.jsxs)(I.c,{onClick:function(){n((function(e){return!e}))},activeClassName:"selected",className:"btn",to:"/history",children:[Object(h.jsx)("i",{className:"far fa-history"}),Object(h.jsx)("span",{children:"History"})]})]})})};function U(e){var t=e.id,n="https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg");return Object(h.jsx)("figure",{className:"fixedratio",style:{backgroundImage:"url('".concat(n,"')")}})}var Y=function(e){var t=e.video,n=y().dispatch,a=(_().userId,function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("POST","history",{videoId:t.id});case 2:e.sent.success&&n({type:"ADD_HISTORY",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I.b,{style:{textDecoration:"none"},to:"/video/".concat(t.videoId),children:Object(h.jsxs)("div",{className:"card",onClick:function(){a()},children:[Object(h.jsx)(U,{id:t.videoId}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)("img",{className:"avatar",src:"https://yt3.ggpht.com/ytc/AAUvwnhpNjTTcnunYN6sA0COpo4a1XScMe9cTeP-45fPzw=s176-c-k-c0x00ffffff-no-rj",alt:"",srcSet:""}),Object(h.jsxs)("div",{className:"card-description",children:[Object(h.jsx)("div",{style:{color:"white",fontSize:"1rem"},children:t.name}),Object(h.jsx)("p",{className:"grey-text",children:t.creator})]})]})]})})})},z=(n(58),function(){return Object(h.jsx)("div",{id:"preloader",children:Object(h.jsx)("div",{id:"loader"})})}),F=function(){var e=y(),t=e.state,n=e.loading;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Liked Videos"}),n?Object(h.jsx)(z,{}):Object(h.jsx)("div",{className:"videos-section",children:t.liked.map((function(e){var t=e.video;return Object(h.jsx)(Y,{video:t},t.id)}))})]})},B=function(e){var t=e.video,n=y().dispatch,a=(_().userId,function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("POST","history/",{videoId:t.id});case 2:e.sent.success&&n({type:"ADD_HISTORY",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I.b,{style:{textDecoration:"none"},to:"/video/".concat(t.videoId),children:Object(h.jsxs)("div",{className:"card",onClick:function(){a()},children:[Object(h.jsx)(U,{id:t.videoId}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)("img",{className:"avatar",src:"https://yt3.ggpht.com/ytc/AAUvwnhpNjTTcnunYN6sA0COpo4a1XScMe9cTeP-45fPzw=s176-c-k-c0x00ffffff-no-rj",alt:"",srcSet:""}),Object(h.jsxs)("div",{className:"card-description",children:[Object(h.jsx)("div",{style:{color:"white",fontSize:"1rem"},children:t.name}),Object(h.jsx)("p",{className:"grey-text",children:t.creator})]})]})]})})})},H=function(){var e=y(),t=e.videoData,n=e.loading;return Object(h.jsx)("div",{className:"videos-section",children:n?Object(h.jsx)(z,{}):t.map((function(e){return Object(h.jsx)(B,{video:e},e.id)}))})},Z=function(){return Object(h.jsx)("div",{children:"this is latest"})},G=function(){var e=y(),t=e.state,n=e.loading;return Object(h.jsxs)("div",{className:"main-div",children:[Object(h.jsx)("h1",{children:"Saved Videos"}),n?Object(h.jsx)(z,{}):Object(h.jsx)("div",{className:"videos-section",children:t.saved.map((function(e){var t=e.video;return Object(h.jsx)(Y,{video:t},t.id)}))})]})},$=(n(59),function(e){var t=w().dispatchPlaylist,n=(_().userId,function(){var e=Object(o.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("DELETE","playlist/".concat(n));case 2:e.sent.success&&t({type:"DELETE_PLAYLIST",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(h.jsx)("div",{children:Object(h.jsx)("i",{onClick:function(){n(e.id)},class:"fas fa-trash grey-text trash-can"})})}),J=function(){var e=w(),t=e.state,n=(e.dispatchPlaylist,y().loading);return Object(h.jsxs)("div",{className:"utility-page",children:[Object(h.jsx)("h1",{children:"My Playlist"}),n?Object(h.jsx)(z,{}):Object(h.jsx)("div",{children:t.MyPlaylists.map((function(e){return Object(h.jsxs)("div",{className:"playlists-div",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("div",{className:"sub-title",children:e.title}),"Watch later"!==e.title&&Object(h.jsx)($,Object(j.a)({},e),e.id)]}),Object(h.jsx)("div",{className:"videos-section",children:e.videos.map((function(e){var t=e.video;return Object(h.jsx)(Y,{video:t},t.id)}))})]})}))})]})},K=function(){var e=y(),t=e.state,n=e.loading;return console.log("final",t.history),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Watch History"}),n?Object(h.jsx)(z,{}):Object(h.jsx)("div",{className:"videos-section",children:t.history.map((function(e){var t=e.video;return Object(h.jsx)(Y,{video:t})}))})]})};n(60);function X(e){var t=e.id;return Object(h.jsx)("div",{className:"iframe-container",children:Object(h.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(t),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})})}n(61);var W=function(e){var t=e.showModal,n=e.setShowModal,c=Object(S.i)().videoId,s=y().getVideoData,r=Object(a.useState)(""),d=Object(l.a)(r,2),u=d[0],j=d[1],b=Object(a.useState)(!1),O=Object(l.a)(b,2),p=O[0],v=O[1],x=w(),m=x.state,g=x.dispatchPlaylist,E=x.ifPresentInPlaylist,k=s(c),N=Object(a.useRef)(null);_().userId;Object(a.useEffect)((function(){N.current.focus()}));var I=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E(t,k.videoId)){e.next=8;break}return e.next=3,f("DELETE","playlist/".concat(t,"/").concat(k.id));case 3:e.sent.success&&(g({type:"REMOVE_FROM_PLAYLIST",payload:{id:t,videoId:k.videoId}}),C("Removed from playlist!")),e.next=12;break;case 8:return e.next=10,f("POST","playlist/".concat(t),{videoId:k.id});case 10:e.sent.success&&(g({type:"ADD_TO_PLAYLIST",payload:{id:t,video:k}}),C("Added to playlist!"));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("POST","playlist",{playlistName:u,videoId:k.id});case 2:(t=e.sent).success&&(g({type:"SET_PLAYLIST",payload:t.response.playlists}),n((function(e){return!e})),v((function(e){return!e})),C("Video added to Playlist!"),j(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"modal-bg ".concat(t?"":"hide"," "),children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsxs)("div",{class:"modal-heading",children:["Save to...",Object(h.jsx)("i",{onClick:function(){n((function(e){return!e})),v(p?function(e){return!e}:function(e){return e})},class:"fas fa-times"})]}),Object(h.jsx)("div",{className:"modal-playlists",children:m.MyPlaylists.map((function(e){var t=e.id,n=e.title;return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{checked:E(t,k.videoId),onClick:function(){return I(t)},type:"checkbox"}),Object(h.jsx)("label",{children:n})]})}))}),Object(h.jsxs)("div",{className:"modal-add",children:[Object(h.jsxs)("div",{onClick:function(){v((function(e){return!e}))},className:"".concat(p?"hide":""),children:[Object(h.jsx)("i",{class:"fas fa-plus"}),Object(h.jsx)("span",{children:"Create new playlist"})]}),Object(h.jsxs)("div",{className:"".concat(p?"":"hide"),children:[Object(h.jsx)("input",{ref:N,value:u,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){T()},disabled:!u,children:"Create"})]})]})]})})},q=(n(62),{id:"",videoId:"",title:"",description:""}),Q=function(e,t){var n=t.type,a=t.payload;switch(n){case"SET_ID":return Object(j.a)(Object(j.a)({},e),{},{_id:a});case"SET_TITLE":return Object(j.a)(Object(j.a)({},e),{},{title:a,id:5});case"SET_DESCRIPTION":return Object(j.a)(Object(j.a)({},e),{},{description:a});case"CLEAR_FIELDS":return{initialNoteState:q};default:return e}},ee=function(e){var t=e.note,n=void 0===t?q:t,c=e.videoId,s=e.editMode,r=void 0!==s&&s,d=e.setEditMode,u=Object(a.useReducer)(Q,n),j=Object(l.a)(u,2),b=j[0],O=j[1],p=y().dispatch,v=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("Adding Toast..."),e.next=3,f("POST","notes/".concat(c),{title:t.title,description:t.description});case 3:(n=e.sent).success&&p({type:"ADD_NOTE",payload:n.response});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("Updating Toast..."),e.next=3,f("POST","notes/".concat(c,"/").concat(n.id),{title:t.title,description:t.description});case 3:(a=e.sent).success&&(p({type:"UPDATE_NOTE",payload:a.response}),d(!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"notes-div",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{placeholder:"Title",value:b.title,onChange:function(e){return O({type:"SET_TITLE",payload:e.target.value})}}),Object(h.jsx)("button",{onClick:function(){r?x(b):v(b)},className:"note-btn",children:Object(h.jsx)("i",{class:"fad fa-plus-circle"})})]}),Object(h.jsx)("textarea",{placeholder:"Description",value:b.description,onChange:function(e){O({type:"SET_DESCRIPTION",payload:e.target.value})}})]})},te=function(e){var t=e.note,n=Object(a.useState)(!1),c=Object(l.a)(n,2),s=c[0],r=c[1],d=y().dispatch,u=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("Deleting Toast..."),e.next=3,f("DELETE","notes/".concat(t.videoId,"/").concat(t.id));case 3:e.sent.success&&d({type:"DELETE_NOTE",payload:t.id});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s?Object(h.jsx)(ee,{note:t,editMode:s,setEditMode:r}):Object(h.jsxs)("div",{class:"saved-note",children:[Object(h.jsxs)("div",{class:"note-header",children:[Object(h.jsx)("div",{className:"note-title",children:t.title}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return u(t.id)},className:"note-btn note-sub",children:Object(h.jsx)("i",{class:"fad fa-trash"})}),Object(h.jsx)("button",{onClick:function(){return r(!0)},className:"note-btn note-sub",children:Object(h.jsx)("i",{class:"fad fa-edit"})})]})]}),Object(h.jsx)("div",{className:"note-description",children:t.description})]})},ne=n.p+"static/media/notesLogin.ad1f7101.png",ae=function(e){var t=e.videoId,n=y(),c=n.state,s=(n.loading,n.dispatch),r=(n.setLoading,_().isUserLogIn);return Object(a.useEffect)((function(){return Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("GET","notes/".concat(t));case 2:n=e.sent,console.log(n),n&&s({type:"SET",payload:{name:"notes",data:n.response}});case 5:case"end":return e.stop()}}),e)})))(),function(){s({type:"SET",payload:{name:"notes",data:[]}})}}),[t]),Object(h.jsx)(h.Fragment,{children:r?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{style:{color:"white"},children:"Notes.."}),Object(h.jsx)(ee,{videoId:t}),Object(h.jsx)("div",{children:c.notes.map((function(e){return Object(h.jsx)(te,{note:e})}))})]}):Object(h.jsxs)("div",{className:"Login-notes",children:[Object(h.jsx)("img",{src:ne,alt:"",srcSet:""}),Object(h.jsx)("button",{onClick:function(){return D("Login to add Notes!")},children:"Add Notes"})]})})},ce=function(){var e=_().isUserLogIn,t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(S.i)().videoId,d=y(),u=d.getVideoData,j=d.dispatch,b=d.ifPresentInSaved,O=d.ifPresentInLikeVideos,p=d.loading,v=u(r),x=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O(v.videoId)){e.next=7;break}return e.next=3,f("DELETE","likedvideos/".concat(v.id));case 3:e.sent.success&&(j({type:"REMOVE_FROM_LIKED_VIDEOS",payload:v}),C("Removed from liked videos")),e.next=11;break;case 7:return e.next=9,f("POST","likedvideos",{videoId:v.id});case 9:e.sent.success&&(j({type:"ADD_TO_LIKED_VIDEOS",payload:v}),C("Added to liked videos"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b(v.videoId)){e.next=7;break}return e.next=3,f("DELETE","savedvideos/".concat(v.id));case 3:e.sent.success&&(j({type:"REMOVE_FROM_SAVED_VIDEOS",payload:v}),C("Removed from saved videos")),e.next=11;break;case 7:return e.next=9,f("POST","savedvideos",{videoId:v.id});case 9:e.sent.success&&(j({type:"ADD_TO_SAVED_VIDEOS",payload:v}),C("Added to saved videos"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return D("Please Login first!")};return Object(h.jsx)("div",{className:"videopage",children:p?Object(h.jsx)(z,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(X,{id:v.videoId}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)("img",{className:"avatar",src:"https://yt3.ggpht.com/ytc/AAUvwnhpNjTTcnunYN6sA0COpo4a1XScMe9cTeP-45fPzw=s176-c-k-c0x00ffffff-no-rj",alt:"",srcSet:""}),Object(h.jsxs)("div",{className:"card-description",children:[Object(h.jsx)("h4",{style:{color:"white"},children:v.name}),Object(h.jsx)("p",{className:"grey-text",children:v.creator}),Object(h.jsx)("div",{children:v.description})]})]}),Object(h.jsxs)("div",{className:"func-icon",children:[Object(h.jsx)("i",{style:{color:O(v.videoId)?"skyblue":"grey"},onClick:function(){return e?x():g()},className:"far fa-thumbs-up"}),Object(h.jsx)("i",{onClick:function(){e?s((function(e){return!e})):g()},className:"fal fa-bars",style:{color:"grey"}}),Object(h.jsx)("i",{style:{color:b(v.videoId)?"red":"grey"},onClick:function(){return e?m():g()},className:"far fa-bookmark"}),Object(h.jsx)(W,{showModal:c,setShowModal:s})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)(ae,{videoId:v.id})})]})})},se=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{className:"center-text",children:"404 Error. Page not found"})})},re=(n(27),function(){var e=_(),t=e.createUserCredentials,n=e.loading,c=Object(a.useState)({name:"",email:"",password:""}),s=Object(l.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)({name:"",email:"",password:""}),d=Object(l.a)(o,2),b=d[0],O=d[1],p=function(){O({name:"",email:"",password:""});var e=!0;return r.password&&new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(r.password)||(O((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:"Enter a valid password, Password must contain minimum 8 characters with both lower, upper, number and special characters"})})),e=!1),r.email&&new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(r.email)||(O((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:"Enter a valid email"})})),e=!1),r.name||(O((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:"Enter a valid name"})})),e=!1),e},v=function(e){var t=e.target,n=t.value,a=t.name;i((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,n))}))};return Object(h.jsx)("div",{children:n?Object(h.jsx)(z,{}):Object(h.jsxs)("div",{className:"container utility-page",children:[Object(h.jsx)("h2",{children:"Sign Up"}),Object(h.jsxs)("div",{className:"box ",children:[Object(h.jsx)("i",{className:"fa fa-user"}),Object(h.jsx)("input",{type:"name",name:"name",value:r.name,onChange:v,id:"name",placeholder:"Enter Your Name"})]}),Object(h.jsx)("span",{children:b.name}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("i",{className:"fa fa-envelope"}),Object(h.jsx)("input",{type:"email",name:"email",value:r.email,onChange:v,id:"email",placeholder:"Enter Your Email"})]}),Object(h.jsx)("span",{children:b.email}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("i",{className:"fa fa-key"}),Object(h.jsx)("input",{type:"password",name:"password",value:r.password,onChange:v,id:"password",placeholder:"Enter Your Password"})]}),Object(h.jsx)("span",{children:b.password}),Object(h.jsx)("button",{onClick:function(){p()&&t(r)},className:"btn",children:"Sign Up"})]})})}),ie=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({email:"",password:""}),r=Object(l.a)(s,2),i=r[0],o=r[1],d=_(),b=d.authenticateUser,O=d.loading,p=Object(S.g)().state,v=function(){o({email:"",password:""});var e=!0;return n.password||(o((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:"Enter a valid password"})})),e=!1),n.email&&new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(n.email)||(o((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:"Enter a valid email"})})),e=!1),e},f=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},n,a))}))};return Object(h.jsx)("div",{children:O?Object(h.jsx)(z,{}):Object(h.jsxs)("div",{className:"container utility-page",children:[Object(h.jsx)("h2",{children:"Log In"}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("i",{className:"fa fa-envelope"}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",value:n.email,onChange:f,placeholder:"Enter Your Email"})]}),Object(h.jsx)("span",{children:i.email}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("i",{className:"fa fa-key"}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",value:n.password,onChange:f,placeholder:"Enter Your Password"})]}),Object(h.jsx)("span",{children:i.password}),Object(h.jsx)("br",{}),Object(h.jsx)(I.b,{to:"/signup",children:"don't have an account? Click here."}),Object(h.jsx)("button",{onClick:function(){!function(){if(v()){var e=(null===p||void 0===p?void 0:p.from)?p.from:"/";b(n,e)}}()},className:"btn",children:"Sign In"})]})})},oe=n(28),le=function(e){var t=e.path,n=Object(oe.a)(e,["path"]);return _().isUserLogIn?Object(h.jsx)(S.b,Object(j.a)(Object(j.a)({},n),{},{path:t})):Object(h.jsx)(S.a,{state:{from:t},replace:!0,to:"/login"})},de=function(e){var t=Object.assign({},e);return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(R,Object(j.a)({className:"sidebar"},t)),Object(h.jsx)("div",{className:"main-content",children:Object(h.jsxs)(S.d,{children:[Object(h.jsx)(S.b,{path:"/",element:Object(h.jsx)(H,{})}),Object(h.jsx)(S.b,{path:"/latest",element:Object(h.jsx)(Z,{})}),Object(h.jsx)(S.b,{path:"/login",element:Object(h.jsx)(ie,{})}),Object(h.jsx)(S.b,{path:"/signup",element:Object(h.jsx)(re,{})}),Object(h.jsx)(S.b,{path:"/video/:videoId",element:Object(h.jsx)(ce,{})}),Object(h.jsx)(le,{path:"/saved",element:Object(h.jsx)(G,{})}),Object(h.jsx)(le,{path:"/my-playlist",element:Object(h.jsx)(J,{})}),Object(h.jsx)(le,{path:"/liked-videos",element:Object(h.jsx)(F,{})}),Object(h.jsx)(le,{path:"/history",element:Object(h.jsx)(K,{})}),Object(h.jsx)(S.b,{path:"/*",element:Object(h.jsx)(se,{})})]})})]})};function ue(){var e=w().dispatchPlaylist,t=y(),n=t.dispatch,c=t.setLoading,s=_(),r=s.isUserLogIn,d=s.token,u=s.setupAuthHeaderForServiceCalls;Object(a.useEffect)((function(){console.log("hi1"),u(d)}),[]),Object(a.useEffect)((function(){console.log("hi2"),r&&(c(!0),Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("GET","savedvideos");case 3:t=e.sent,n({type:"SET",payload:{name:"saved",data:t.response.savedVideos}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,c(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))())}),[d]),Object(a.useEffect)((function(){console.log("hi3"),r&&(c(!0),Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("GET","likedVideos");case 3:t=e.sent,n({type:"SET",payload:{name:"liked",data:t.response.likedVideos}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,c(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))())}),[d]),Object(a.useEffect)((function(){console.log("hi4"),r&&(c(!0),Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("GET","history");case 3:t=e.sent,n({type:"SET",payload:{name:"history",data:t.response.historyVideos}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,c(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))())}),[d]),Object(a.useEffect)((function(){console.log("hi5"),r&&(c(!0),Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f("GET","playlist");case 3:n=t.sent,e({type:"SET_PLAYLIST",payload:n.response.playlists}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.prev=10,c(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))())}),[d]);var j=Object(a.useState)(!1),b=Object(l.a)(j,2),O=b[0],p=b[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(V,{setOpenBars:p}),Object(h.jsx)(de,{setOpenBars:p,openBars:O})]})}T.a.configure();var je=document.getElementById("root");s.a.render(Object(h.jsx)(a.StrictMode,{children:Object(h.jsx)(I.a,{children:Object(h.jsx)(A,{children:Object(h.jsx)(N,{children:Object(h.jsx)(m,{children:Object(h.jsx)(ue,{})})})})})}),je)}},[[63,1,2]]]);
//# sourceMappingURL=main.eebbbcc4.chunk.js.map