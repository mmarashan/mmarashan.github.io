(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978],{7546:(t,e,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/[id]",function(){return i(2870)}])},157:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var n=i(4848),s=i(6146),a=i.n(s),r=i(1943),o=i.n(r),l=i(6540);let c=function(t){let{cursorPosition:e,text:i}=t,[s,a]=(0,l.useState)({x:0,y:0});return(0,l.useEffect)(()=>{a(e)},[e]),(0,n.jsx)("p",{style:{position:"absolute",left:"".concat(s.x,"px"),top:"".concat(s.y,"px")},className:o().tooltip,children:i})},u=function(t){let{icon:e,onClick:i,backgroundColor:s,alt:a}=t,[r,u]=(0,l.useState)(""),[d,_]=(0,l.useState)({x:0,y:0});return(0,n.jsxs)("button",{className:o().button,style:{backgroundColor:s||"transparent"},onClick:i,onMouseMove:function(t){_({x:t.clientX,y:t.clientY+window.scrollY})},children:[(0,n.jsx)("img",{className:o().buttonIcon,src:e,alt:a,onMouseOver:()=>{u(a)},onMouseOut:()=>{u("")}}),r&&(0,n.jsx)(c,{cursorPosition:d,text:r})]})};function d(t){let{contacts:e}=t;return(0,n.jsx)("div",{className:o().horizontalContainer,children:e.map(t=>(0,n.jsx)("div",{className:a().paddingHorizontal16px,children:(0,n.jsx)(u,{icon:t.icon,backgroundColor:"transparent",alt:t.title,onClick:()=>window.open(t.url)})},t.title))})}},7466:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var n=i(4848),s=i(1516),a=i(8314),r=i(6146),o=i.n(r);i(6540);let l=t=>{let{dateString:e}=t;try{let t=(0,s.A)(e);return(0,n.jsx)("time",{className:o().date,dateTime:e,children:(0,a.A)(t,"dd.MM.yyyy")})}catch(t){return console.error(t),(0,n.jsx)("p",{children:e})}}},5552:(t,e,i)=>{"use strict";i.d(e,{A:()=>T});var n=i(4848),s=i(3368),a=i.n(s),r=i(1943),o=i.n(r),l=i(6298),c=i(6540),u=i(6424),d=i(8133),_=i.n(d);function m(t){let{id:e}=t,i=(0,u.usePathname)(),s=(0,u.useSearchParams)();return(0,c.useEffect)(()=>{ym(e,"hit",window.location.href)},[i,s]),(0,n.jsx)(_(),{id:"yandex-metrika",children:'\n        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n        m[i].l=1*new Date();\n        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n        ym($ID, "init", {\n            clickmap:true,\n            trackLinks:true,\n            accurateTrackBounce:true\n        });  \n      '.replace("$ID",e)})}var h=i(157);let p=()=>(0,n.jsx)("div",{className:o().siteFooter,children:(0,n.jsx)("div",{className:o().horizontalContainer,children:(0,n.jsx)(h.A,{contacts:l.lh})})});var x=i(6146),g=i.n(x),j=i(1106),y=i.n(j),w=i(9965),v=i.n(w),b=i(9352);let f=t=>(0,n.jsx)("h1",{children:t.showTitle&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:o().horizontalContainer,children:[(0,n.jsx)(v(),{priority:!0,src:l.EC.siteIcon,alt:l.DH.siteHost,className:g().borderCircle,height:40,width:40}),(0,n.jsx)(b.A,{axis:"horizontal",size:16}),(0,n.jsx)(y(),{href:"/",className:"".concat(g().siteTitle),children:l.DH.siteTitle})]}),t.showSubitleWithTitle&&(0,n.jsx)("p",{className:g().siteDescription,children:l.DH.siteDescription})]})});function T(t){let{children:e,showTitle:i,showFooter:s,showSubitleWithTitle:r}=t;return(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,n.jsx)("meta",{name:l.DH.siteDescription,content:l.DH.siteTitle})]}),(0,n.jsx)(f,{showTitle:i,showSubitleWithTitle:r}),(0,n.jsxs)("main",{children:[e,(0,n.jsx)(c.Suspense,{children:(0,n.jsx)(m,{id:l.EC.metricaId})})]}),(0,n.jsx)("footer",{children:s&&(0,n.jsx)(p,{})})]})}},6499:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var n=i(4848);i(6540);var s=i(8154);function a(t){let{title:e,description:i,url:a,image:r,siteName:o}=t;return(0,n.jsxs)(s.m,{children:[(0,n.jsx)("meta",{property:"og:title",content:e}),(0,n.jsx)("meta",{property:"og:description",content:i}),(0,n.jsx)("meta",{property:"og:url",content:a}),(0,n.jsx)("meta",{property:"og:image",content:r}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),o&&(0,n.jsx)("meta",{property:"og:site_name",content:o}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:e}),(0,n.jsx)("meta",{name:"twitter:description",content:i}),(0,n.jsx)("meta",{name:"twitter:image",content:r})]})}},9352:(t,e,i)=>{"use strict";i.d(e,{A:()=>s});var n=i(4848);i(6540);let s=t=>{let{size:e,axis:i,style:s={},...a}=t,r="vertical"===i?1:e,o="horizontal"===i?1:e;return(0,n.jsx)("span",{style:{display:"block",width:r,minWidth:r,height:o,minHeight:o,...s},...a})}},2870:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__N_SSG:()=>m,default:()=>h});var n=i(4848),s=i(5552),a=i(6499),r=i(3368),o=i.n(r),l=i(7466),c=i(6146),u=i.n(c),d=i(6715),_=i(6298),m=!0;function h(t){let{postData:e}=t,i=(0,d.useRouter)().url;return(0,n.jsxs)(s.A,{showFooter:!0,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:e.title}),(0,n.jsx)(a.A,{title:e.title,description:e.title,url:i,image:e.poster,siteName:_.DH.siteTitle})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)("h1",{className:u().headingXl,children:e.title}),(0,n.jsx)("div",{className:u().lightText,children:(0,n.jsx)(l.A,{dateString:e.date})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.contentHtml}})]})]})}},6298:(t,e,i)=>{"use strict";i.d(e,{DH:()=>n,EC:()=>a,Sp:()=>r,lh:()=>o,wB:()=>s});let n={siteHost:"marashan.ru",siteTitle:"Атмосфера Ботаника",siteDescription:"Заметки и база знаний про все, что интересно",aboutOwner:"Об авторе → \uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB",blogTitle:'\uD83D\uDE80 Блог "Атмосфера Ботаника"',portfolioTitle:"\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB Портфолио",backToHome:"\uD83C\uDFE0 На главную"};class s{}s.nameWithSurname="Максим Марашан",s.about="Программист с опытом работы 9 лет. Запускал продукты в fintech \uD83E\uDDF0, voice assistant \uD83E\uDD16, computer vision \uD83E\uDDFF, legal \uD83D\uDEE1️, funtech \uD83C\uDFAC",s.photoPath="/images/ava.webp";let a={siteIcon:"/images/nerd-vibe-icon.jpeg",metricaId:0x5e6756f},r=[{title:"E-mail",icon:"/images/yandex_mail_icon.svg",url:"mailto:marashanmv@yandex.ru"},{title:"Github",icon:"/images/github-mark.svg",url:"https://github.com/mmarashan"},{title:"Хабр",icon:"/images/habr_icon.png",url:"https://habr.com/ru/users/mmarashan/publications/articles"},{title:"Хабр Карьера",icon:"/images/habr_carrer.jpg",url:"https://career.habr.com/mmarashan"},{title:"LinkedIn",icon:"/images/linkedin-icon.svg",url:"https://www.linkedin.com/in/marashan/"}],o=[{title:"Telegram-канал 'Атмосфера Ботаника'",icon:"/images/telegram_icon.svg",url:"https://t.me/nerd_vibe"},{title:"Об авторе",icon:"/images/programmer_icon.png",url:"/owner"}]},1943:t=>{t.exports={container:"layout_container__FUycR",header:"layout_header__SFlEE",backToHome:"layout_backToHome__D9QFr",showcaseCardTags:"layout_showcaseCardTags__IpTdw",siteFooter:"layout_siteFooter__JRi_y",horizontalContainer:"layout_horizontalContainer__vPctR",showcaseCard:"layout_showcaseCard__HLeiq",showcaseCardImage:"layout_showcaseCardImage__mWsZd",showcaseCardData:"layout_showcaseCardData__uj4le",button:"layout_button__Z_ieV",buttonIcon:"layout_buttonIcon__03dY6",tooltip:"layout_tooltip__fAo1P"}},6146:t=>{t.exports={heading2Xl:"utils_heading2Xl__oxFoJ",headingXl:"utils_headingXl__zlq1q",headingLg:"utils_headingLg__RYtYb",headingMd:"utils_headingMd__XQE5B",siteTitle:"utils_siteTitle__xFrV_",siteDescription:"utils_siteDescription__iNYHT",myDescription:"utils_myDescription__eTFE3",date:"utils_date__1OYny",textAlignCenter:"utils_textAlignCenter__9jdFJ",borderCircle:"utils_borderCircle__zmKqF",colorInherit:"utils_colorInherit__Jz9NS",padding1px:"utils_padding1px__Ov2XA",paddingHorizontal8px:"utils_paddingHorizontal8px__DuJpW",paddingHorizontal16px:"utils_paddingHorizontal16px__3DoA_",list:"utils_list__zR_Au",listItem:"utils_listItem__6FEiz",lightText:"utils_lightText__B_gv3",footerText:"utils_footerText__t_ClQ"}},6715:(t,e,i)=>{t.exports=i(8440)}},t=>{var e=e=>t(t.s=e);t.O(0,[601,535,636,593,792],()=>e(7546)),_N_E=t.O()}]);