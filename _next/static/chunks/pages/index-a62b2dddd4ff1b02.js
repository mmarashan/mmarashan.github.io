(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1854)}])},7740:function(t,e,i){"use strict";i.d(e,{Z:function(){return g}});var n=i(5893),s=i(1664),a=i.n(s),r=i(8352),o=i(7550),c=i(7715),l=i.n(c);i(7294);var u=t=>{let{dateString:e}=t;try{let t=(0,r.Z)(e);return(0,n.jsx)("time",{className:l().date,dateTime:e,children:(0,o.Z)(t,"dd.MM.yyyy")})}catch(t){return console.error(t),(0,n.jsx)("p",{children:e})}},d=i(4145),_=i.n(d),h=i(9181),m=i(7251);function p(t){let{tags:e}=t;return(0,n.jsx)(m.Z,{direction:"row",spacing:1,children:e.map(t=>(0,n.jsx)(h.Z,{label:t,size:"small",variant:"outlined"},t))})}function x(t){return(0,n.jsxs)("div",{className:_().showcaseCard,children:[(0,n.jsx)("img",{className:_().showcaseCardImage,src:t.poster,alt:t.title,loading:"lazy"}),(0,n.jsxs)("div",{className:_().showcaseCardData,children:[(0,n.jsx)(a(),{href:t.link,children:t.title}),(0,n.jsx)("br",{}),(0,n.jsx)(u,{dateString:t.date}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:_().showcaseCardTags,children:(0,n.jsx)(p,{tags:t.tags})})]})]},t.id)}function g(t){let{posts:e,postLinkPrefix:i}=t;return(0,n.jsx)("ul",{className:l().list,children:e.map(t=>(0,n.jsx)("li",{className:l().listItem,children:(0,n.jsx)(x,{id:t.id,date:t.date,title:t.title,poster:t.poster,tags:t.tags,link:"/".concat(i,"/").concat(t.id)})},t.id))})}},7444:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var n=i(5893),s=i(9008),a=i.n(s),r=i(4145),o=i.n(r),c=i(4002),l=i(7294),u=i(9332),d=i(4298),_=i.n(d);function h(t){let{id:e}=t,i=(0,u.usePathname)(),s=(0,u.useSearchParams)();return(0,l.useEffect)(()=>{ym(e,"hit",window.location.href)},[i,s]),(0,n.jsx)(_(),{id:"yandex-metrika",children:'\n        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n        m[i].l=1*new Date();\n        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n        ym($ID, "init", {\n            clickmap:true,\n            trackLinks:true,\n            accurateTrackBounce:true\n        });  \n      '.replace("$ID",e)})}var m=i(7715),p=i.n(m),x=i(1664),g=i.n(x),j=()=>(0,n.jsx)("div",{className:o().siteFooter,children:(0,n.jsx)("div",{className:o().horizontalContainer,children:(0,n.jsx)(g(),{className:"".concat(p().footerText," ").concat(p().paddingHorizontal8px),href:"/owner",children:c.eI.aboutOwner})})}),f=i(5675),D=i.n(f),w=i(724),y=t=>(0,n.jsx)("h1",{children:t.showTitle&&(0,n.jsxs)("div",{className:"".concat(p().textAlignCenter),children:[(0,n.jsxs)("div",{className:o().horizontalContainer,children:[(0,n.jsx)(D(),{priority:!0,src:c._B.siteIcon,alt:c.eI.siteHost,className:p().borderCircle,height:40,width:40}),(0,n.jsx)(w.Z,{axis:"horizontal",size:16}),(0,n.jsx)(g(),{href:"/",className:"".concat(p().siteTitle),children:c.eI.siteTitle})]}),t.showSubitleWithTitle&&(0,n.jsx)("p",{className:p().siteDescription,children:c.eI.siteDescription})]})});function b(t){let{children:e,showTitle:i,showFooter:s,showSubitleWithTitle:r}=t;return(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,n.jsx)("meta",{name:c.eI.siteDescription,content:c.eI.siteTitle})]}),(0,n.jsx)(y,{showTitle:i,showSubitleWithTitle:r}),(0,n.jsxs)("main",{children:[e,(0,n.jsx)(l.Suspense,{children:(0,n.jsx)(h,{id:c._B.metricaId})})]}),(0,n.jsx)("footer",{children:s&&(0,n.jsx)(j,{})})]})}},2897:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(5893);i(7294);var s=i(4593);function a(t){let{title:e,description:i,url:a,image:r,siteName:o}=t;return(0,n.jsxs)(s.q,{children:[(0,n.jsx)("meta",{property:"og:title",content:e}),(0,n.jsx)("meta",{property:"og:description",content:i}),(0,n.jsx)("meta",{property:"og:url",content:a}),(0,n.jsx)("meta",{property:"og:image",content:r}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),o&&(0,n.jsx)("meta",{property:"og:site_name",content:o}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:e}),(0,n.jsx)("meta",{name:"twitter:description",content:i}),(0,n.jsx)("meta",{name:"twitter:image",content:r})]})}},724:function(t,e,i){"use strict";var n=i(5893);i(7294),e.Z=t=>{let{size:e,axis:i,style:s={},...a}=t,r="vertical"===i?1:e,o="horizontal"===i?1:e;return(0,n.jsx)("span",{style:{display:"block",width:r,minWidth:r,height:o,minHeight:o,...s},...a})}},1854:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return d},default:function(){return _}});var n=i(5893),s=i(9008),a=i.n(s),r=i(7444),o=i(2897),c=i(4002),l=i(724),u=i(7740),d=!0;function _(t){let{posts:e}=t;return(0,n.jsxs)(r.Z,{showTitle:!0,showFooter:!0,showSubitleWithTitle:!1,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:c.eI.siteTitle}),(0,n.jsx)(o.Z,{title:c.eI.siteTitle,description:c.eI.siteDescription,url:c.eI.siteHost,image:c.IX.photoPath,siteName:c.eI.siteTitle})]}),(0,n.jsx)(l.Z,{axis:"vertical",size:32}),(0,n.jsx)("section",{children:(0,n.jsx)(u.Z,{posts:e,postLinkPrefix:"blog"})})]})}},4002:function(t,e,i){"use strict";i.d(e,{IX:function(){return s},K4:function(){return r},_B:function(){return a},eI:function(){return n}});let n={siteHost:"marashan.ru",siteTitle:"Атмосфера Ботаника",siteDescription:"Заметки и база знаний про все, что интересно",aboutOwner:"Об авторе → \uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB",blogTitle:'\uD83D\uDE80 Блог "Атмосфера Ботаника"',portfolioTitle:"\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB Портфолио",backToHome:"\uD83C\uDFE0 На главную"};class s{}s.nameWithSurname="Максим Марашан",s.about="Программист с опытом работы 9 лет. Запускал продукты в fintech \uD83E\uDDF0, voice assistant \uD83E\uDD16, computer vision \uD83E\uDDFF, legal \uD83D\uDEE1️, funtech \uD83C\uDFAC",s.photoPath="/images/ava.webp";let a={siteIcon:"/images/nerd-vibe-icon.jpeg",metricaId:98989423},r=[{title:"E-mail",icon:"/images/yandex_mail_icon.svg",url:"mailto:marashanmv@yandex.ru"},{title:"Github",icon:"/images/github-mark.svg",url:"https://github.com/mmarashan"},{title:"Хабр",icon:"/images/habr_icon.png",url:"https://habr.com/ru/users/mmarashan/publications/articles"},{title:"Хабр Карьера",icon:"/images/habr_carrer.jpg",url:"https://career.habr.com/mmarashan"},{title:"LinkedIn",icon:"/images/linkedin-icon.svg",url:"https://www.linkedin.com/in/marashan/"}]},4145:function(t){t.exports={container:"layout_container__FUycR",header:"layout_header__SFlEE",backToHome:"layout_backToHome__D9QFr",showcaseCardTags:"layout_showcaseCardTags__IpTdw",siteFooter:"layout_siteFooter__JRi_y",horizontalContainer:"layout_horizontalContainer__vPctR",showcaseCard:"layout_showcaseCard__HLeiq",showcaseCardImage:"layout_showcaseCardImage__mWsZd",showcaseCardData:"layout_showcaseCardData__uj4le",button:"layout_button__Z_ieV",buttonIcon:"layout_buttonIcon__03dY6",tooltip:"layout_tooltip__fAo1P"}},7715:function(t){t.exports={heading2Xl:"utils_heading2Xl__oxFoJ",headingXl:"utils_headingXl__zlq1q",headingLg:"utils_headingLg__RYtYb",headingMd:"utils_headingMd__XQE5B",siteTitle:"utils_siteTitle__xFrV_",siteDescription:"utils_siteDescription__iNYHT",myDescription:"utils_myDescription__eTFE3",date:"utils_date__1OYny",textAlignCenter:"utils_textAlignCenter__9jdFJ",borderCircle:"utils_borderCircle__zmKqF",colorInherit:"utils_colorInherit__Jz9NS",padding1px:"utils_padding1px__Ov2XA",paddingHorizontal8px:"utils_paddingHorizontal8px__DuJpW",list:"utils_list__zR_Au",listItem:"utils_listItem__6FEiz",lightText:"utils_lightText__B_gv3",footerText:"utils_footerText__t_ClQ"}}},function(t){t.O(0,[996,426,316,275,888,774,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);