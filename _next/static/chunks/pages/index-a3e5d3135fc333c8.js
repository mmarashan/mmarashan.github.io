(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2931)}])},8156:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});var i=n(5893),r=n(9008),a=n.n(r),s=n(4145),o=n.n(s),c=n(8067),l=n(7715),u=n.n(l),m=n(1664),d=n.n(m),_=n(7294),h=n(9332),p=n(4298),x=n.n(p);function g(t){let{id:e}=t,n=(0,h.usePathname)(),r=(0,h.useSearchParams)();return(0,_.useEffect)(()=>{ym(e,"hit",window.location.href)},[n,r]),(0,i.jsx)(x(),{id:"yandex-metrika",children:'\n        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n        m[i].l=1*new Date();\n        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n        ym($ID, "init", {\n            clickmap:true,\n            trackLinks:true,\n            accurateTrackBounce:true\n        });  \n      '.replace("$ID",e)})}function j(t){let{children:e,showTitle:n}=t;return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,i.jsx)("meta",{name:"description",content:c.j2.siteTitle})]}),(0,i.jsx)("h1",{className:"".concat(u().headingMd," ").concat(u().textAlignCenter),children:n&&(0,i.jsx)(d(),{href:"/",className:u().siteTitle,children:c.j2.siteTitle})}),(0,i.jsxs)("main",{children:[e,(0,i.jsx)(_.Suspense,{children:(0,i.jsx)(g,{id:c.Jb.metricaId})})]})]})}},2897:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5893);n(7294);var r=n(4593);function a(t){let{title:e,description:n,url:a,image:s,siteName:o}=t;return(0,i.jsxs)(r.q,{children:[(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"og:url",content:a}),(0,i.jsx)("meta",{property:"og:image",content:s}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),o&&(0,i.jsx)("meta",{property:"og:site_name",content:o}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:e}),(0,i.jsx)("meta",{name:"twitter:description",content:n}),(0,i.jsx)("meta",{name:"twitter:image",content:s})]})}},2931:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var i=n(5893),r=n(9008),a=n.n(r),s=n(8156),o=n(2897),c=n(7715),l=n.n(c),u=n(4145),m=n.n(u),d=n(8067),_=n(5071),h=n(1664),p=n.n(h),x=n(5675),g=n.n(x),j=n(7294),f=t=>{let{size:e,axis:n,style:r={},...a}=t,s="vertical"===n?1:e,o="horizontal"===n?1:e;return(0,i.jsx)("span",{style:{display:"block",width:s,minWidth:s,height:o,minHeight:o,...r},...a})},y=function(t){let{cursorPosition:e,text:n}=t,[r,a]=(0,j.useState)({x:0,y:0});return(0,j.useEffect)(()=>{a(e)},[e]),(0,i.jsx)("p",{style:{position:"absolute",left:"".concat(r.x,"px"),top:"".concat(r.y,"px")},className:m().tooltip,children:n})},D=function(t){let{icon:e,onClick:n,backgroundColor:r,alt:a}=t,[s,o]=(0,j.useState)(""),[c,l]=(0,j.useState)({x:0,y:0});return(0,i.jsxs)("button",{className:m().button,style:{backgroundColor:r||"transparent"},onClick:n,onMouseMove:function(t){l({x:t.clientX,y:t.clientY})},children:[(0,i.jsx)("img",{className:m().buttonIcon,src:e,alt:a,onMouseOver:()=>{o(a)},onMouseOut:()=>{o("")}}),s&&(0,i.jsx)(y,{cursorPosition:c,text:s})]})};function b(t){let{contacts:e}=t;return(0,i.jsx)("div",{className:m().horizontalContainer,children:e.map(t=>(0,i.jsx)("div",{className:l().paddingHorizontal8px,children:(0,i.jsx)(D,{icon:t.icon,backgroundColor:"transparent",alt:t.title,onClick:()=>window.open(t.url)})},t.title))})}function C(){return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:d.j2.siteTitle}),(0,i.jsx)(o.Z,{title:d.j2.siteTitle,description:d.j2.siteTitle,url:d.j2.siteHost,image:"/images/profile.webp",siteName:d.j2.siteTitle})]}),(0,i.jsx)(f,{axis:"vertical",size:32}),(0,i.jsxs)("header",{className:m().header,children:[(0,i.jsx)(g(),{priority:!0,src:"/images/profile.webp",className:l().borderCircle,height:144,width:144,alt:d.j2.myName}),(0,i.jsx)("h1",{className:l().heading2Xl,children:d.j2.myName})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{className:"".concat(l().myDescription," ").concat(l().textAlignCenter),children:d.j2.myDescription}),(0,i.jsx)(b,{contacts:d.K4})]}),(0,i.jsx)(_.Z,{"aria-hidden":"true"}),(0,i.jsxs)("section",{className:"".concat(l().headingMd," ").concat(l().textAlignCenter),children:[(0,i.jsx)("p",{children:(0,i.jsx)(p(),{href:"/blog",children:d.j2.blogTitle})}),(0,i.jsx)("p",{children:(0,i.jsx)(p(),{href:"/portfolio",children:d.j2.portfolioTitle})})]})]})}},8067:function(t,e,n){"use strict";n.d(e,{Jb:function(){return r},K4:function(){return a},j2:function(){return i}});let i={siteHost:"marashan.ru",siteTitle:"\uD83D\uDE80 Yet another programmer's blog",myName:"Максим Марашан",myDescription:"Инженер-разработчик с опытом разработки fintech-приложений \uD83E\uDDF0, голосовых ассистентов \uD83E\uDD16, корпоративного софта в legal \uD83D\uDEE1️, funtech-приложений \uD83C\uDFAC",blogTitle:"\uD83D\uDCDD Блог",portfolioTitle:"\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB Портфолио",backToHome:"\uD83C\uDFE0 На главную"},r={metricaId:98989423},a=[{title:"E-mail",icon:"/images/yandex_mail_icon.svg",url:"mailto:marashanmv@yandex.ru"},{title:"Github",icon:"/images/github-mark.svg",url:"https://github.com/mmarashan"},{title:"Хабр",icon:"/images/habr_icon.png",url:"https://habr.com/ru/users/mmarashan/publications/articles"},{title:"Хабр Карьера",icon:"/images/habr_carrer.jpg",url:"https://career.habr.com/mmarashan"}]},4145:function(t){t.exports={container:"layout_container__FUycR",header:"layout_header__SFlEE",backToHome:"layout_backToHome__D9QFr",showcaseCardImage:"layout_showcaseCardImage__mWsZd",showcaseCardTags:"layout_showcaseCardTags__IpTdw",horizontalContainer:"layout_horizontalContainer__vPctR",button:"layout_button__Z_ieV",buttonIcon:"layout_buttonIcon__03dY6",tooltip:"layout_tooltip__fAo1P"}},7715:function(t){t.exports={heading2Xl:"utils_heading2Xl__oxFoJ",headingXl:"utils_headingXl__zlq1q",headingLg:"utils_headingLg__RYtYb",headingMd:"utils_headingMd__XQE5B",siteTitle:"utils_siteTitle__xFrV_",myDescription:"utils_myDescription__eTFE3",date:"utils_date__1OYny",textAlignCenter:"utils_textAlignCenter__9jdFJ",borderCircle:"utils_borderCircle__zmKqF",colorInherit:"utils_colorInherit__Jz9NS",padding1px:"utils_padding1px__Ov2XA",paddingHorizontal8px:"utils_paddingHorizontal8px__DuJpW",list:"utils_list__zR_Au",listItem:"utils_listItem__6FEiz",lightText:"utils_lightText__B_gv3"}}},function(t){t.O(0,[253,316,593,1,888,774,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);