(this["webpackJsonpali-fe"]=this["webpackJsonpali-fe"]||[]).push([[0],{65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l);a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66),a(67),a(70),a(71),a(72);var s=a(53),c=a(10),i=a(24),u=a(12),m=a(8),d=a(14),p=a(2),h="SHOW_NEWS_DETAIL",g=a(26),f=a.n(g),b=a(40),v=a(25),E=a.n(v),y="https://alinewsapi.herokuapp.com",O="https://alinewsapi.herokuapp.com/api/v2";function w(e){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,e.next=4,E.a.get(t);case 4:n=e.sent,a.data=n.data,a.statusCode=n.status||500,a.isSuccess=!0,e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),a.statusCode=e.t0.response&&e.t0.response.status||500,a.message=e.t0.message||"",a.isSuccess=!1;case 15:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function C(){return(C=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y+t,e.next=3,w(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O+t,e.next=3,w(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k="REQUEST_NEWS_RELOAD_TRENDING",R="RECEIVE_NEWS_RELOAD_TRENDING",x="REQUEST_NEWS_LOAD_MORE_TRENDING",T="RECEIVE_NEWS_LOAD_MORE_TRENDING";function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:R,list:e,statusCode:t,message:a}}function L(e){return e&&0!==e?function(t){return t({type:x}),N("/news?page="+(e+1)).then((function(a){return t(function(){return{type:T,page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,list:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],statusCode:arguments.length>2?arguments[2]:void 0,message:arguments.length>3?arguments[3]:void 0}}(e+1,a.data,a.statusCode,a.message))}))}:function(e){return e({type:k}),N("/news").then((function(t){t.isSuccess?e(_(t.data,t.statusCode,t.message)):N.get("/news").then((function(a){return e(_(t.data,t.statusCode,t.message))}))}))}}var D={list:[],page:1,isFetching:!1,hasMore:!0,statusCode:0,message:""};var I="REQUEST_NEWS_RELOAD_HEADLINES",A="RECEIVE_NEWS_RELOAD_HEADLINES",M="REQUEST_NEWS_LOAD_MORE_HEADLINES",U="RECEIVE_NEWS_LOAD_MORE_HEADLINES";function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:A,list:e,statusCode:t,message:a}}function P(e){return e&&0!=e?function(t){return t({type:M}),N("/news/feed/similarity?page="+(e+1)).then((function(a){return t(function(){return{type:U,page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,list:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],statusCode:arguments.length>2?arguments[2]:void 0,message:arguments.length>3?arguments[3]:void 0}}(e+1,a.data,a.statusCode,a.message))}))}:function(e){return e({type:I}),N("/news/feed/similarity").then((function(t){t.isSuccess?e(F(t.data,t.statusCode,t.message)):N("/news/feed/similarity").then((function(t){return e(F(t.data,t.statusCode,t.message))}))}))}}var H={list:[],page:1,isFetching:!1,hasMore:!0,statusCode:0,message:""};var B="REQUEST_DATA_MAPS",V="RECEIVE_DATA_MAPS";function W(){return{type:B}}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:V,data:e}}function z(){return function(e){return e(W()),function(e){return C.apply(this,arguments)}("/api/statistics/map").then((function(t){return e(Q(t.data))}))}}var G={data:[],isLoading:!1};var q=a(55),Z=function(e){var t;if(e)try{t=Object(q.a)(e)}catch(a){}return t},X="RECEIVE_LOGIN",K="RECEIVE_REGISTER",$="REQUEST_LOGIN",J="REQUEST_REGISTER",Y="REQUEST_SAVED_USER",ee="RECEIVE_SAVED_USER",te="REQUEST_LOGOUT",ae="RECEIVE_LOGOUT",ne=function(){return{type:$}},re=function(){return{type:K}},le=function(e){return{type:X,payload:e}},oe=function(e){return{type:X,payload:e}},se=function(){return{type:te}},ce=function(){return{type:ae}},ie=localStorage.getItem("token"),ue=Z(ie),me={authData:ue&&ue.name&&ue.email&&ue.username?{user:ue}:void 0,isSuccess:!0,isFetching:!1};var de="RECEIVE_BRAND_INFO",pe="RECEIVE_SITE_VISIBILITY";var he={showFooter:!0,showHeader:!0,brandLogo:"",brandName:"Tin \u0111\u1ecba ph\u01b0\u01a1ng",subBrandName:"Qu\u1eadn 9"};var ge=Object(i.c)({trendingFeedsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case R:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,page:1,hasMore:t.list&&t.list.length>0,list:Object(d.a)(t.list),statusCode:t.statusCode,message:t.message});case T:return console.log("state: "),console.log(e),console.log("list: "),console.log(t.list),Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,page:e.page+1,hasMore:t.list&&t.list.length>0,list:[].concat(Object(d.a)(e.list),Object(d.a)(t.list)),statusCode:t.statusCode,message:t.message});case x:case k:return Object.assign({},e,{isFetching:!0});case h:default:return e}},headlinesFeedsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case A:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,page:1,hasMore:t.list&&t.list.length>0,list:Object(d.a)(t.list),statusCode:t.statusCode,message:t.message});case U:return console.log("state: "),console.log(e),console.log("list: "),console.log(t.list),Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,page:e.page+1,hasMore:t.list&&t.list.length>0,list:[].concat(Object(d.a)(e.list),Object(d.a)(t.list)),statusCode:t.statusCode,message:t.message});case M:case I:return Object.assign({},e,{isFetching:!0});case h:default:return e}},mapsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case V:return Object(p.a)(Object(p.a)({},e),{},{data:t.data,isLoading:!1});case B:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:case J:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!0});case X:case K:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,authData:t.payload});case ee:var a=t.payload?{user:t.payload}:e.authData;return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,authData:a});case Y:return e;case ae:case te:return e.authData=null,e.isSuccess=!1,e;default:return e}},siteWrapperReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(p.a)({},e);case pe:return Object(p.a)(Object(p.a)({},e),{},{showHeader:t.showHeader||e.showHeader,showFooter:t.showFooter||e.showFooter});default:return e}}}),fe=a(4),be=a(5),ve=a(7),Ee=a(6),ye=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){var e;Object(fe.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={url:null},e}return Object(be.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.id.id;E.a.post("server",{id:t}).then((function(t){e._asyncRequest=null,e.setState({url:t.url})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.url;return n.createElement(m.c,{url:e||"link"})}}]),a}(n.Component);var Oe=a(1),we=function(e){return n.createElement("a",{className:"header-brand nav-link pr-0 leading-none",href:e.href},n.createElement("img",{src:e.src,className:"header-brand-img",alt:e.alt}),n.createElement("span",{className:"m1-2 d-lg-block"},n.createElement("span",{className:"text-default font-weight-bold"},e.title),n.createElement("small",{className:"text-blue d-block mt-1 dt",style:{fontSize:"1rem"}},e.description)))};we.displayName="AliLogo";var je=we,Ce=function(e){var t=e.children,a=e.href,r=e.align,l=e.imageURL,o=e.alt,s=e.title,c=e.description,i=e.notificationsTray,u=e.accountDropdown,m=e.navItems,d=e.onMenuToggleClick,p=i&&n.createElement(Oe.k.Tray,i),h=u&&n.createElement(Oe.a,u);return n.createElement("div",{className:"header py-4"},n.createElement(Oe.d,{className:r},n.createElement("div",{className:"d-flex"},t||n.createElement(n.Fragment,null,n.createElement(je,{href:a,alt:o,src:l,title:s,description:c}),n.createElement("div",{className:"d-flex order-lg-2 ml-auto"},m,p,h),n.createElement("a",{className:"header-toggler d-lg-none ml-3 ml-lg-0",onClick:d},n.createElement("span",{className:"header-toggler-icon"}))))))};Ce.displayName="Ali.Header";var Ne=Ce,Se=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){var e;Object(fe.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={collapseMobileMenu:!0},e.handleCollapseMobileMenu=function(){e.setState((function(e){return{collapseMobileMenu:!e.collapseMobileMenu}}))},e}return Object(be.a)(a,[{key:"render",value:function(){var e=this.props,t=e.headerProps,a=e.navProps,r=e.footerProps,l=e.children,o=e.routerContextComponentType,s=Object(p.a)(Object(p.a)({},t),{},{onMenuToggleClick:this.handleCollapseMobileMenu}),c=n.createElement(Ne,s),i=Object(p.a)(Object(p.a)({},a),{},{collapse:this.state.collapseMobileMenu,routerContextComponentType:o}),u=n.createElement(Oe.n.Nav,i),m=n.createElement(Oe.n.Footer,r);return n.createElement(Oe.l,null,n.createElement(Oe.l.Main,null,c,u,l),m)}}]),a}(n.PureComponent);Se.displayName="AliWrapper";var ke=Se,Re=[{value:"Trang ch\u1ee7",to:"/",icon:"home",LinkComponent:Object(m.o)(u.NavLink),useExact:!0},{value:"Xu h\u01b0\u1edbng",icon:"trending-up",to:"/trendings",LinkComponent:Object(m.o)(u.NavLink),useExact:!0},{value:"B\u1ea3n \u0111\u1ed3 tin t\u1ee9c",icon:"map-pin",to:"/maps",LinkComponent:Object(m.o)(u.NavLink),useExact:!0}],xe=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){var e;Object(fe.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={notificationsObjects:[]},e}return Object(be.a)(a,[{key:"render",value:function(){var e,t,a=this.props,r=a.dispatch,l=a.currentUser,o=function(){r((function(e){e(se()),localStorage.removeItem("token"),e(ce())}))};(this.state.notificationsObjects||[]).reduce((function(e,t){return e||t.unread}),!1);return this.props.showFooter&&(e={copyright:n.createElement(n.Fragment,null,"Copyright \xa9 2020",n.createElement("a",{href:"."}," Ali-Kit"))}),n.createElement(ke,{headerProps:{href:"/",alt:"Tin dia phuong",imageURL:"./images/local_news.svg",title:"Tin \u0111\u1ecba ph\u01b0\u01a1ng",description:"Qu\u1eadn 9",accountDropdown:(t=l,t?{avatarURL:"https://s120-ava-talk.zadn.vn/4/c/d/3/0/120/09f385d32d7677e9ff00099536a7d200.jpg",name:t.name,description:"Qu\u1eadn 9, Tp. Hcm",options:[{icon:"send",value:"dashboard",active:1===t.role,to:"/dashboard",LinkComponent:Object(m.o)(u.NavLink),useExact:!0},{isDivider:!0},{icon:"log-out",value:n.createElement("span",{onClick:o},"logout"),to:"/",LinkComponent:Object(m.o)(u.NavLink),useExact:!0}]}:{avatarURL:"./images/default_avatar.jpg",name:"\u0110\u0103ng nh\u1eadp",options:[{icon:"user",value:"\u0110\u0103ng nh\u1eadp",to:"#/login",LinkComponent:Object(m.o)(u.NavLink),useExact:!0},{isDivider:!0},{icon:"user-plus",value:"\u0110\u0103ng k\xfd",to:"#/register",LinkComponent:Object(m.o)(u.NavLink),useExact:!0}]})},navProps:{itemsObjects:Re},routerContextComponentType:Object(m.o)(Oe.m),footerProps:e},this.props.children)}}]),a}(n.Component),Te=a(35);function _e(e,t){return{name:e,image:"/images/source_logos/"+t}}var Le=[_e("tuoitre.vn","tuoi_tre.webp"),_e("vnexpress.net","vnexpress.webp"),_e("plo.vn","phap_luat_online.webp"),_e("zingnews.vn","zing.webp"),_e("vtc.vn","vtc.webp"),_e("baotintuc.vn","tin_tuc.jpg"),_e("nguoidothi.net.vn","nguoi_do_thi.jpg"),_e("baophapluat.vn","phap_luat_viet_nam.webp"),_e("vietnamplus.vn","viet_nam_plus.jpg"),_e("thanhnien.vn","thanhnien2.png"),_e("dantri.com.vn","dantri.png"),_e("nld.com.vn","nguoilaodong.jpg"),_e("anninhthudo.vn","anninhthudo.png"),_e("baogiaothong.vn","baogiaothong.png"),_e("vietnamnet.vn","vietnamnet.png"),_e("tienphong.vn","tienphong.png")];function De(e){var t=Le.find((function(t){return t.name===e}));return t?t.image:"/images/source_logos/rss.jpg"}var Ie=a(36),Ae=a.n(Ie);a(96);function Me(e){return Ae()(e).locale("vi").fromNow()}var Ue=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"erb text-blue"},n.createElement("div",{className:"wrapper"},n.createElement("h1",null,"Hmm"),n.createElement("p",null,"M\xe1y ch\u1ee7 hi\u1ec7n kh\xf4ng ph\u1ea3n h\u1ed3i, vui l\xf2ng th\u1eed l\u1ea1i l\u1ea7n n\u1eefa. "),n.createElement("div",{className:"buttons"},n.createElement("a",{href:"",onClick:this.props.onButtonClick},"Th\u1eed l\u1ea1i"))))}}]),a}(n.Component),Fe=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){var e;Object(fe.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).loadMoreData=function(){var t=e.props.dispatch,a=1,n=e.props.trendingFeedsReducer;n&&n.page&&(a=n.page),a<1&&(a=1),t(L(a))},e}return Object(be.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(L())}},{key:"render",value:function(){var e,t,a,r=this.props.trendingFeedsReducer,l=Object(d.a)(r.list||[]),o=[],s=[];if(0===l.length);else if(l.length<=7)for(var c=0;c<l.length;c++){var i=l[c];o.push(n.createElement(Oe.i.Col,{width:12},n.createElement(Oe.b,{imgSrc:i.thumbnail,imgAlt:i.summary,title:i.title,description:i.summary,profileHref:i.source.baseUrl,postHref:i.source.url,authorName:i.source.displayName,avatarImgSrc:De(i.source.name),date:Me(i.publicationDate),iconName:"arrow-right"})))}else{o.push(n.createElement(Oe.i.Col,{width:12,lg:9,md:12},n.createElement(Oe.b,{imgSrc:l[0].thumbnail,imgAlt:l[0].summary,title:l[0].title,description:l[0].summary,postHref:l[0].source.url,profileHref:l[0].source.baseUrl,authorName:l[0].source.displayName,avatarImgSrc:De(l[0].source.name),date:Me(l[0].publicationDate),iconName:"arrow-right"}))),o.push(n.createElement(Oe.i.Col,{width:12,lg:3,md:12},n.createElement(Oe.i.Row,null,n.createElement(Oe.i.Col,{width:12,lg:12,md:6},n.createElement(Oe.b,{imgSrc:l[1].thumbnail,title:l[1].title,postHref:l[1].source.url,profileHref:l[1].source.baseUrl,authorName:l[1].source.displayName,avatarImgSrc:De(l[1].source.name),date:Me(l[1].publicationDate),iconName:"arrow-right"})),n.createElement(Oe.i.Col,{width:12,lg:12,md:6},n.createElement(Oe.b,{imgSrc:l[2].thumbnail,title:l[2].title,postHref:l[2].source.url,profileHref:l[2].source.baseUrl,authorName:l[2].source.displayName,avatarImgSrc:De(l[2].source.name),date:Me(l[2].publicationDate),iconName:"arrow-right"})))));for(var u=3;u<7;u++){var m=l[u];o.push(n.createElement(Oe.i.Col,{width:12,lg:6,xl:3,md:6},n.createElement(Oe.b,{imgSrc:m.thumbnail,title:m.title,description:m.summary,postHref:m.source.url,profileHref:m.source.baseUrl,authorName:m.source.displayName,avatarImgSrc:De(m.source.name),date:Me(m.publicationDate),iconName:"arrow-right"})))}for(var p=6;p<l.length;p++){var h=l[p];s.push(n.createElement(Oe.i.Col,{width:12},n.createElement(Oe.b,{aside:!0,imgSrc:h.thumbnail,imgAlt:h.summary,postHref:h.source.url,title:h.title,description:h.summary,profileHref:h.source.baseUrl,authorName:h.source.displayName,avatarImgSrc:De(h.source.name),date:(e=h.publicationDate,Ae()(e).locale("vi").calendar()),iconName:"arrow-right"})))}}if(r.hasMore||0===l.length||(t=n.createElement("div",{class:"col-12 d-flex justify-content-center"},n.createElement("div",{class:"text-muted bold",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}},"Oop! H\u1ebft tin r\u1ed3i, quay l\u1ea1i sau nh\xe9!"))),0!==l.length)a=n.createElement(Oe.l.Content,{title:"Xu hu\u1edbng"},n.createElement(Oe.i.Row,{cards:!0,deck:!0},o),n.createElement(Oe.i.Row,null,n.createElement(Oe.l.Header,{title:"Tin kh\xe1c"}),n.createElement(Te.a,{dataLength:l.length,next:this.loadMoreData,hasMore:r.hasMore,loader:n.createElement("div",{class:"col-12 d-flex justify-content-center"},n.createElement("div",{class:"loader card",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}}))},s,t)));else{var g=r&&r.isFetching?n.createElement("div",{className:"p-empty-body col-12 d-flex justify-content-center"},n.createElement("div",{className:"loader card",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}})):n.createElement(Ue,{onButtonClick:this.loadMoreData});a=n.createElement(Oe.l.Content,null,g)}return a}}]),a}(n.Component);var Pe=Object(c.b)((function(e){return{trendingFeedsReducer:e.trendingFeedsReducer,authReducer:e.authReducer}}))(Fe),He=a(56),Be=a.n(He);var Ve=function(e){var t=e.className,a=(e.children,e.imageUrl,e.date),r=e.title,l=(e.description,e.sourceImageUrl,e.sourceName),o=e.sourceUrl,s=e.sourceBaseUrl;return e.subs,n.createElement(Oe.j.ListItem,{className:t},n.createElement(Oe.j.Body,{className:"subheadline"},n.createElement("span",{className:"middle-dot-headline text-default text-bl"},"\u2b24"),n.createElement("span",null,n.createElement("a",{href:o,className:"text-bl text-default txt-subheadline",target:"_blank",rel:"noopener noreferrer"},n.createElement("strong",null,r)),n.createElement("div",{className:"div-subheadline-source"},n.createElement("a",{className:"text-default text-bl txt-headline-source",href:s},l),n.createElement("span",{className:"middle-dot-headline text-default text-bl"},"\u2b24"),n.createElement("span",{className:"text-default text-bl txt-headline-source"},a)))))};function We(e){var t=e.className,a=(e.children,e.imageUrl),r=e.date,l=e.title,o=e.description,s=e.sourceImageUrl,c=e.sourceName,i=e.sourceUrl,u=e.sourceBaseUrl,m=e.subs,d=Be()("p-5 no-outline",t);return n.createElement(Oe.c,null,n.createElement(Oe.j,{className:d},n.createElement("img",{src:a,href:i,className:"img-headline img-center-crop ",target:"_blank",rel:"noopener noreferrer"}),n.createElement(Oe.j.Body,null,n.createElement(Oe.j.Heading,null,n.createElement("div",{className:"div-headline-source"},n.createElement("img",{src:s,href:u,className:"img-headline-sourcelogo",target:"_blank",rel:"noopener noreferrer"}),n.createElement("a",{className:"text-default text-bl txt-headline-source",href:u},c),n.createElement("span",{className:"middle-dot-headline text-default text-bl"},"\u2b24"),n.createElement("span",{className:"text-default text-bl txt-headline-source"},r),n.createElement("a",{href:i,className:"h4 fe fe-activity float-right text-muted"})),n.createElement("a",{href:i,className:"text-default text-bl",target:"_blank",rel:"noopener noreferrer"},n.createElement("h4",{className:"headline"},l))),n.createElement("div",{className:"text-description-headline"},o),m&&n.createElement(Oe.j.List,null,m))))}We.Sub=Ve;var Qe=We,ze=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(e){var n;return Object(fe.a)(this,a),(n=t.call(this,e)).loadMoreData=function(){var e=n.props.dispatch,t=1,a=n.props.headlinesFeedsReducer;a&&a.page&&(t=a.page),t<1&&(t=1),e(P(t))},n}return Object(be.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(P())}},{key:"render",value:function(){var e=this.props,t=e.headlinesFeedsReducer,a=e.authReducer,r=Object(d.a)(t.list);console.log("is Fetching = "+t.isFetching),console.log("statusCode = "+t.statusCode),console.log("message = "+t.message);var l,o,s=[];if(0===r.length);else for(var c=0;c<r.length;c++){var i=r[c].data.slice(0,r.length>5?5:r.length);if(0===i.length)break;var u=i.shift();s.push(n.createElement(Oe.i.Col,{key:u.source.url+u.title,width:12},n.createElement(Qe,{title:u.title,sourceUrl:u.source.url,description:u.summary,imageUrl:u.thumbnail,date:Me(u.publicationDate),sourceBaseUrl:u.source.baseUrl,sourceName:u.source.displayName,sourceImageUrl:De(u.source.name),subs:i&&i.length>0&&n.createElement(n.Fragment,null,i.map((function(e,t){return n.createElement(Qe.Sub,{key:e.source.url+e.title,title:e.title,sourceUrl:e.source.url,sourceName:e.source.displayName,sourceBaseUrl:e.source.baseUrl,sourceImageUrl:De(e.source.name),date:Me(e.publicationDate)})})))})))}if(t.hasMore||0===r.length||(l=n.createElement("div",{class:"col-12 d-flex justify-content-center"},n.createElement("div",{class:"text-muted bold",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}},"Oop! H\u1ebft tin r\u1ed3i, quay l\u1ea1i sau nh\xe9!"))),0!==r.length)o=n.createElement(Oe.l.Content,{title:"Tin Ch\xednh"},n.createElement(Te.a,{style:{height:"auto",overflow:"disabled"},dataLength:r.length,next:this.loadMoreData,hasMore:t.hasMore,loader:n.createElement("div",{className:"col-12 d-flex justify-content-center"},n.createElement("div",{className:"loader card",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}}))},n.createElement(Oe.i.Row,null,s),l));else{var m=t&&t.isFetching?n.createElement("div",{className:"p-empty-body col-12 d-flex justify-content-center"},n.createElement("div",{className:"loader card",style:{backgroundColor:"transparent",backgroundClip:"unset",border:"0",borderRadius:"0",boxShadow:"none"}})):n.createElement(Ue,{onButtonClick:this.loadMoreData});o=n.createElement(Oe.l.Content,null,m)}a&&a.authData&&a.authData.user&&a.authData.user;return o}}]),a}(n.Component);var Ge=Object(c.b)((function(e){return{headlinesFeedsReducer:e.headlinesFeedsReducer,authReducer:e.authReducer}}))(ze),qe=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"render",value:function(){this.props.match;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Overview"),r.a.createElement("hr",null),r.a.createElement(m.d,{exact:!0,path:"".concat(this.props.match.url,"/analytics"),component:Xe}),r.a.createElement(m.d,{exact:!0,path:"".concat(this.props.match.url,"/"),component:Ze})))}}]),a}(r.a.PureComponent);var Ze=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}}]),a}(r.a.PureComponent),Xe=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"AnalyticsPage")))}}]),a}(r.a.PureComponent),Ke=Object(c.b)((function(e){return{authReducer:e.authReducer}}))(qe),$e=a(60),Je=a(30),Ye=a(57),et=[10.832171,106.776889],tt=["places"],at={width:"100%",height:"100vh"},nt={lat:et[0],lng:et[1]},rt={position:"absolute",zIndex:1e5},lt={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0};function ot(){var e=Object(Ye.a)({requestOptions:{location:{lat:function(){return et[0]},lng:function(){return et[1]}},radius:2e5}}),t=(e.ready,e.value,e.suggestions);t.status,t.data,e.setValue,e.clearSuggesetions;return r.a.createElement("div",null)}function st(e){var t=e&&e.data&&e.data.numOfArticles?e.data.numOfArticles:0,a=t<10?t/10*35+15:50;return{url:"/circle.svg",scaledSize:new window.google.maps.Size(a,a),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(a/2,a/2)}}var ct=Object(c.b)((function(e){return{mapsReducer:e.mapsReducer}}))((function(e){var t=Object(Je.d)({googleMapsApiKey:"AIzaSyAr95iF4la1cc3iF_6xwKsmM55zEWITLAU",libraries:tt}),a=t.isLoaded,l=t.loadError,o=Object(n.useState)(null),s=Object($e.a)(o,2),c=s[0],i=s[1],u=e.dispatch;Object(n.useEffect)((function(){u(z())}),[]);var m=e.mapsReducer,p=m?m.data:[],h=Object(n.useCallback)((function(e){u(function(e){return function(t){return t(W()),t(Q(e))}}([].concat(Object(d.a)(p),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])))}),[]),g=Object(n.useRef)(),f=Object(n.useCallback)((function(e){return g.current=e}),[]);return l?"error loading map":a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:rt},r.a.createElement("h1",null,"Qu\u1eadn 9")),r.a.createElement(ot,null),r.a.createElement(Je.a,{mapContainerStyle:at,zoom:12,center:nt,options:lt,onClick:h,onLoad:f},p.map((function(e){return r.a.createElement(Je.c,{key:e&&e.time?e.time.toISOString():"",position:{lat:e.lat,lng:e.lng},icon:st(e),onClick:function(){return i(e)}})})),c?r.a.createElement(Je.b,{position:{lat:c.lat,lng:c.lng},onCloseClick:function(){return i(null)}},r.a.createElement("div",null,r.a.createElement("h4",null,c.data.name),r.a.createElement("p",null,c.data.numOfArticles),r.a.createElement("p",null,c.data.time.toISOString()),r.a.createElement("button",null,'xem chi ti\u1ebft ("/tags?place=',c.data.name,'")'))):null)):"loading map"}));var it=function(e){var t=e.title,a=void 0===t?"404":t,r=e.subtitle,l=void 0===r?"Oops... You just found an error page...":r,o=e.details,s=void 0===o?"We are sorry but the page you have requested can not be found...":o,c=e.action;return n.createElement(Oe.e,{title:a,subtitle:l,details:s,action:c})},ut=a(12),mt=ut.Route,dt=(ut.HashRouter,ut.Switch),pt=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.siteWrapperReducer,a=e.authReducer,n=e.match,l=a&&a.authData&&a.authData.user?a.authData.user:void 0;return r.a.createElement(xe,{showFooter:t&&t.showFooter,currentUser:l},r.a.createElement(dt,null,r.a.createElement(mt,{exact:!0,path:"/trendings",component:Pe}),r.a.createElement(mt,{exact:!0,path:"/management",component:Ke}),r.a.createElement(mt,{exact:!0,path:"/maps",component:ct}),r.a.createElement(mt,{exact:!0,path:["".concat(n.url,"/"),"".concat(n.url,"/headlines")],component:Ge}),r.a.createElement(mt,{component:it})))}}]),a}(r.a.PureComponent);var ht=Object(c.b)((function(e){return{authReducer:e.authReducer}}))(pt),gt=a(39),ft=a(34);function bt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a.reduce((function(a,n){return Object.assign(a,Object(ft.a)({},n,e&&e[n]&&t?t[n]:""))}),{})}var vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){return function(a){var r=bt(a.touched,a.errors,e);return n.createElement(t,Object.assign({},a,{errors:r}))}}},Et={title:"Login to your account",buttonText:"Login",emailLabel:"Email",emailPlaceholder:"Enter email",passwordLabel:"Password",passwordPlaceholder:"Password"};var yt=vt(["email","password"])((function(e){var t=e.action,a=e.method,r=e.onSubmit,l=e.onChange,o=e.onBlur,s=e.values,c=e.strings,i=void 0===c?{}:c,u=e.errors,m=e.message;return n.createElement(Oe.o,{imageURL:"./images/local_news.svg"},n.createElement(Oe.f,{buttonText:i.buttonText||Et.buttonText,title:i.title||Et.title,onSubmit:r,action:t,method:a},n.createElement(Oe.h,{name:"email",label:i.emailLabel||Et.emailLabel,placeholder:i.emailPlaceholder||Et.emailPlaceholder,onChange:l,onBlur:o,value:s&&s.email,error:u&&u.email}),n.createElement(Oe.h,{name:"password",type:"password",label:i.passwordLabel||Et.passwordLabel,placeholder:i.passwordPlaceholder||Et.passwordPlaceholder,onChange:l,onBlur:o,value:s&&s.password,error:u&&u.password}),m&&n.createElement("span",{className:"invalid-message"},m)))})),Ot=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(e){return Object(fe.a)(this,a),t.call(this,e)}return Object(be.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.isFetching,r=e.authData;if(r&&r.success)return n.createElement(m.c,{to:"/"});var l=r&&!1===r.success?r.message||"Something went wrong":void 0;return n.createElement(gt.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,n){var r;n.setSubmitting,n.setErrors;a||t((r=e,function(e){return e(ne()),E.a.post("https://alinewsapi.herokuapp.com/auth/login",{email:r.email,password:r.password}).then((function(t){var a=t.data;a&&(a.success?(localStorage.setItem("token",a.token.split(" ")[1]),e(le(a))):(console.log(a.message),e(oe({message:a.message}))))})).catch((function(t){console.log(t),t&&t.response&&t.response.data?e(le(t.response.data)):e(le({message:t.message}))}))}))},render:function(e){var t=e.values,a=e.errors,r=e.touched,o=e.handleChange,s=e.handleBlur,c=e.handleSubmit;e.strings,e.isSubmitting;return n.createElement(yt,{onSubmit:c,onChange:o,onBlur:s,values:t,errors:a,touched:r,message:l})}})}}]),a}(n.Component);var wt=Object(c.b)((function(e){return{authReducer:e.authReducer}}))(Ot),jt={title:"Create New Account",buttonText:"Create Account",usernameLabel:"Username",usernamePlaceholder:"Enter username",nameLabel:"Name",namePlaceholder:"Enter name",emailLabel:"Email Address",emailPlaceholder:"Enter email",passwordLabel:"Password",passwordPlaceholder:"Password",termsLabel:"Agree to the terms and policy"};var Ct=vt(["name","email","email","password","terms"])((function(e){var t=e.action,a=e.method,r=e.onSubmit,l=e.onChange,o=e.onBlur,s=e.values,c=e.strings,i=void 0===c?{}:c,u=e.errors;return n.createElement(Oe.o,{imageURL:"./images/local_news.svg"},n.createElement(Oe.f,{buttonText:i.buttonText||jt.buttonText,title:i.title||jt.title,onSubmit:r,action:t,method:a},n.createElement(Oe.h,{name:"name",label:i.nameLabel||jt.nameLabel,placeholder:i.namePlaceholder||jt.namePlaceholder,onChange:l,onBlur:o,value:s&&s.name,error:u&&u.name}),n.createElement(Oe.h,{name:"email",label:i.emailLabel||jt.emailLabel,placeholder:i.emailPlaceholder||jt.emailPlaceholder,onChange:l,onBlur:o,value:s&&s.email,error:u&&u.email}),n.createElement(Oe.h,{name:"username",label:i.usernamePlaceholder||jt.usernameLabel,placeholder:i.usernamePlaceholder||jt.usernamePlaceholder,onChange:l,onBlur:o,value:s&&s.username,error:u&&u.username}),n.createElement(Oe.h,{name:"password",type:"password",label:i.passwordLabel||jt.passwordLabel,placeholder:i.passwordPlaceholder||jt.passwordPlaceholder,onChange:l,onBlur:o,value:s&&s.password,error:u&&u.password}),n.createElement(Oe.g,{onChange:l,onBlur:o,value:s&&s.terms,name:"terms",label:i.termsLabel||jt.termsLabel})))})),Nt=function(e){Object(ve.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(fe.a)(this,a),t.apply(this,arguments)}return Object(be.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.isFetching,r=e.authData;return r&&r.user&&r.user.email?n.createElement(m.c,{to:"/"}):n.createElement(gt.a,{initialValues:{email:"",password:"",name:"",terms:!1,username:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,n){var r;n.setSubmitting,n.setErrors;a||t((r=e,function(e){e(re());var t={username:r.username,password:r.password,email:r.email,name:r.name};return E.a.post("https://alinewsapi.herokuapp.com/auth/register",t).then((function(t){var a=t.data;a&&(a.success?(localStorage.setItem("token",a.token),e(oe(a))):(console.log(a.message),e(oe({message:a.message}))))})).catch((function(t){console.log(t),t&&t.response&&t.response.data?e(oe(t.response.data)):e(oe({message:t.message}))}))}))},render:function(e){var t=e.values,a=e.errors,r=e.touched,l=e.handleChange,o=e.handleBlur,s=e.handleSubmit;e.strings,e.isSubmitting;return n.createElement(Ct,{onSubmit:s,onChange:l,onBlur:o,values:t,errors:a,touched:r})}})}}]),a}(n.Component);var St=Object(c.b)((function(e){return e.authReducers}))(Nt),kt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Rt=Object(i.e)(ge,kt(Object(i.a)(s.a)));var xt=function(e){return n.createElement(n.StrictMode,null,n.createElement(c.a,{store:Rt},n.createElement(u.HashRouter,null,n.createElement(m.g,null,n.createElement(m.d,{exact:!0,path:"/login",component:wt}),n.createElement(m.d,{exact:!0,path:"/register",component:St}),n.createElement(m.d,{exact:!0,path:"/detail/:id",component:ye}),n.createElement(m.d,{path:"/",component:ht})))))},Tt=document.getElementById("root");if(!Tt)throw new Error("Could not find root element to mount to!");o.a.render(r.a.createElement(xt,null),Tt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[97,1,2]]]);
//# sourceMappingURL=main.9cdfa8b4.chunk.js.map