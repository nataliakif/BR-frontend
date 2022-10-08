"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[363],{7609:function(e,a,t){t(2791);a.Z=t.p+"static/media/sprite.82316d5e6fc127c69796e12e77373b14.svg"},9894:function(e,a,t){t.d(a,{Z:function(){return r}});var l={main:"Button_main__uCMI5",transparent:"Button_transparent__33FBX Button_main__uCMI5"},n=t(184),r=function(e){var a=e.className,t=e.type,r=void 0===t?"button":t,i=e.text,s=e.onClick,o=e.disabled,c=void 0!==o&&o,d=e.tabIndex,u=e.autoFocus;return(0,n.jsx)("button",{className:"".concat(l[a]),type:r,onClick:s||null,disabled:c,tabIndex:d,autoFocus:u,children:i})}},6174:function(e,a){a.Z=function(e,a){var t=e.split(" ").filter((function(e){return e})).join(" ");if(t.length>a){var l=t.substring(0,a);return l.substring(0,Math.max(l.lastIndexOf(" "),l.lastIndexOf(",")+1))+" ..."}return t}},97:function(e,a,t){var l=t(9439),n=t(2791),r=function(){return window.innerWidth<=767};a.Z=function(){var e=(0,n.useState)(r()),a=(0,l.Z)(e,2),t=a[0],i=a[1];return(0,n.useEffect)((function(){var e=function(){i(r())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t}},4363:function(e,a,t){t.r(a),t.d(a,{default:function(){return ke}});var l=t(3168),n=t(9439),r=t(2791),i=t(5705),s=t(1724),o=/^[^\s-]/,c=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,d=function(e,a){return s.Ry().shape({title:s.Z_().min(2,e("validation.bookTitle")).max(50,e("validation.titleMax")).matches("ua"===a?/^[\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404a-zA-Z0-9]/:/^[a-zA-Z0-9]/,e("validation.latinLetters")).matches("ua"===a?/^[\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404a-zA-Z0-9]/:/^[^\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404]*$/,e("validation.latinLetters")).matches(o,e("validation.titleSpace")).required(e("validation.enterTitle")).typeError(e("validation.titleError")),author:s.Z_().required(e("validation.enterAuthor")).matches(c,e("validation.authorSpace")).matches("ua"===a?/^[\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404a-zA-Z0-9]/:/^[a-zA-Z0-9]/,e("validation.latinLetters")).matches("ua"===a?/^[\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404a-zA-Z0-9]/:/^[^\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404]*$/,e("validation.latinLetters")).min(2,e("validation.authorMin")).max(50,e("validation.authorMax")).typeError(e("validation.authorCharacters")),publishYear:s.Rx().min(1890,e("validation.yearMin")).max(2022,e("validation.yearMax")).typeError(e("validation.yearError")),pagesTotal:s.Rx().min(1,e("validation.pagesMin")).max(2e3,e("validation.pagesMax")).required(e("validation.pagesFill")).typeError(e("validation.pagesError"))})},u=t(7020),h=t(5985),_=t(5048),m=t(7193),x="InputBook_form__dAEEg",b="InputBook_form__container__wbTGf",p="InputBook_label__0B4lt",j="InputBook_button__VauTs",g="InputBook_title__fB1S8",f="InputBook_author__1z94P",N="InputBook_yearPages__QnfhL",y="InputBook_bookError__XRet7",v=t(184),T={title:"",author:"",publishYear:"",pagesTotal:""};var R=function(e){var a=e.addedBookTitles,t=(0,_.v9)(m.VQ),r=(0,l.$)().t,s=(0,u.RQ)(),o=(0,n.Z)(s,1)[0];return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(i.J9,{initialValues:T,validationSchema:d(r,t),children:function(e){var t=e.values,l=e.handleChange,n=e.handleBlur,s=e.resetForm,c=e.isValid;return(0,v.jsxs)(i.l0,{className:x,action:"submit",onSubmit:function(e){e.preventDefault(),a.includes(t.title)?h.Am.warning("".concat(r("toast.bookWarning")).concat(t.title)):(o({bookTitle:t.title,author:t.author,publicationDate:t.publishYear,amountOfPages:t.pagesTotal}),h.Am.success("".concat(r("toast.addBook")).concat(t.title).concat(r("toast.addBookSuccess"))),s())},children:[(0,v.jsxs)("div",{className:b,children:[(0,v.jsxs)("label",{className:p,children:[r("library.bookTitle"),(0,v.jsx)(i.gN,{id:"title",className:g,type:"text",name:"title",autoComplete:"off",onChange:l,onBlur:n,placeholder:"...",value:t.title,required:!0}),(0,v.jsx)(i.Bc,{component:"div",name:"title",className:y})]}),(0,v.jsxs)("label",{className:p,children:[r("library.author"),(0,v.jsx)(i.gN,{id:"author",className:f,type:"text",name:"author",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:l,onBlur:n,placeholder:"...",value:t.author,required:!0}),(0,v.jsx)(i.Bc,{component:"div",name:"author",className:y})]}),(0,v.jsxs)("label",{className:p,children:[r("library.publicationDate"),(0,v.jsx)(i.gN,{id:"year",className:N,type:"number",name:"publishYear",autoComplete:"off",onChange:l,onBlur:n,placeholder:"...",value:t.publishYear}),(0,v.jsx)(i.Bc,{component:"div",name:"publishYear",className:y})]}),(0,v.jsxs)("label",{className:p,children:[r("library.amount"),(0,v.jsx)(i.gN,{id:"pages",className:N,type:"number",name:"pagesTotal",autoComplete:"off",onChange:l,onBlur:n,placeholder:"...",value:t.pagesTotal,required:!0}),(0,v.jsx)(i.Bc,{component:"div",name:"pagesTotal",className:y})]})]}),(0,v.jsx)("button",{className:j,type:"submit",disabled:!c,children:r("library.add")})]})}})})},M="ContainerLibrary_container__2qaIS",B=function(e){var a=e.children;return(0,v.jsx)("div",{className:M,children:a})},k=t(6809),C=t(3986);var w=t.p+"static/media/symbol-defs.7c43a5741b2c0a3a6cc4b52856d6d726.svg",A={modal:"StartModal_modal__Sgez+",firstTitle:"StartModal_firstTitle__MR+ii",firstStep:"StartModal_firstStep__+Rnc1",firstDesc:"StartModal_firstDesc__bkKfu",firstStepIcon:"StartModal_firstStepIcon__C4wOQ",firstStepIconDesc:"StartModal_firstStepIconDesc__nx0cK",secondTitle:"StartModal_secondTitle__6YZ35",secondStep:"StartModal_secondStep__nVjTT",secondStepDesc:"StartModal_secondStepDesc__e99Vt",secondStepIcon:"StartModal_secondStepIcon__ii-6U",secondStepIconDesc:"StartModal_secondStepIconDesc__PSf8H",stepWrapper:"StartModal_stepWrapper__Vbzcp",okBtn:"StartModal_okBtn__yAfx4"};var S=function(){var e=(0,r.useState)(!0),a=(0,n.Z)(e,2),t=a[0],i=a[1],s=function(){return i(!1)},o=(0,l.$)().t;return(0,v.jsx)("div",{className:A.buttonWrapper,children:(0,v.jsx)(C.Z,{open:t,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsxs)(k.Z,{onClose:s,className:A.modal,children:[(0,v.jsxs)("div",{className:A.firstStepWrapper,children:[(0,v.jsxs)("p",{className:A.firstTitle,children:[o("modal.step"),"1."]}),(0,v.jsx)("svg",{className:A.firstStepIcon,width:"22px",height:"17px",children:(0,v.jsx)("use",{href:"".concat(w,"#icon-flat-grey")})}),(0,v.jsx)("p",{className:A.firstStep,children:o("modal.createLibrary")}),(0,v.jsx)("svg",{className:A.firstStepIconDesc,width:"10px",height:"12px",children:(0,v.jsx)("use",{href:"".concat(w,"#icon-Vector")})}),(0,v.jsx)("p",{className:A.firstDesc,children:o("modal.addBooks")})]}),(0,v.jsxs)("div",{className:A.stepWrapper,children:[(0,v.jsxs)("p",{className:A.secondTitle,children:[o("modal.step"),"2."]}),(0,v.jsx)("svg",{className:A.secondStepIcon,width:"22px",height:"17px",children:(0,v.jsx)("use",{href:"".concat(w,"#icon-flag")})}),(0,v.jsx)("p",{className:A.secondStep,children:o("modal.createTraining")}),(0,v.jsx)("svg",{className:A.secondStepIconDesc,width:"10px",height:"12px",children:(0,v.jsx)("use",{href:"".concat(w,"#icon-Vector")})}),(0,v.jsx)("p",{className:A.secondStepDesc,children:o("modal.setAGoal")})]}),(0,v.jsx)("button",{onClose:s,className:A.okBtn,tabIndex:0,autoFocus:!0,children:o("modal.ok")})]})})})},Z={goingToReadMobilesection:"GoingToReadMobile_goingToReadMobilesection__6ylnL",title:"GoingToReadMobile_title__awc0D",cardBook:"GoingToReadMobile_cardBook__7mLXA",cardBookWrapper:"GoingToReadMobile_cardBookWrapper__mAKyB",cardTitle:"GoingToReadMobile_cardTitle__Y-Pv3",cardTableBody:"GoingToReadMobile_cardTableBody__VpC0J",tableTitle:"GoingToReadMobile_tableTitle__oBgyF",tableContent:"GoingToReadMobile_tableContent__5J2vg"},W=function(e){var a=e.goingToReadListBooks,t=(0,l.$)().t;return(0,v.jsxs)("section",{className:Z.goingToReadMobilesection,children:[(0,v.jsx)("h2",{className:Z.title,children:t("library.going")}),(0,v.jsx)("ul",{className:Z.card,children:a.map((function(e){var a=e._id,l=e.bookTitle,n=e.author,r=e.publicationDate,i=e.amountOfPages;return(0,v.jsx)("li",{className:Z.cardBook,children:(0,v.jsxs)("div",{className:Z.cardBookWrapper,children:[(0,v.jsx)("h3",{className:Z.cardTitle,children:l}),(0,v.jsx)("table",{className:Z.cardTable,children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{className:Z.cardTableBody,children:[(0,v.jsxs)("th",{className:Z.tableTitle,children:[t("library.author"),":"]}),(0,v.jsx)("td",{className:Z.tableContent,children:n})]}),(0,v.jsxs)("tr",{className:Z.cardTableBody,children:[(0,v.jsxs)("th",{className:Z.tableTitle,children:[t("library.year"),":"]}),(0,v.jsx)("td",{className:Z.tableContent,children:r})]}),(0,v.jsxs)("tr",{className:Z.cardTableBody,children:[(0,v.jsxs)("th",{className:Z.tableTitle,children:[t("library.pages"),":"]}),(0,v.jsx)("td",{className:Z.tableContent,children:i})]})]})})]})},a)}))})]})},D=t(9023),L=t(6174),V=t(7609),z="GoingToReadMain_title__c8CCa",I="GoingToReadMain_titleBookWrapper__J01T1",G="GoingToReadMain_titleBook__aFC4g",E="GoingToReadMain_iconWrapper__QJi-i",F="GoingToReadMain_icon__x7wPW",O="GoingToReadMain_table__dbBhY",P="GoingToReadMain_tableTitleCell__X64jP",Y="GoingToReadMain_tablerow__0+leZ",$="GoingToReadMain_styleTitleBook__tW6Bz",H="GoingToReadMain_styleAuthor__kVAOb",q="GoingToReadMain_styleColums__yf89r",J=function(e){var a=e.goingToReadListBooks,t=(0,l.$)().t,n=a,r=(0,D.createColumnHelper)(a),i=[r.accessor("bookTitle",{cell:function(e){return(0,v.jsx)("i",{children:(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("div",{className:E,children:(0,v.jsxs)("svg",{className:F,width:"22",height:"17",children:[(0,v.jsx)("use",{href:V.Z+"#icon-open-book"})," "]})}),(0,v.jsx)("div",{className:G,children:(0,L.Z)(e.getValue(),77)})]})})},header:function(){return(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,v.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.pages")})}})],s=(0,D.useReactTable)({data:n,columns:i,getCoreRowModel:(0,D.getCoreRowModel)()});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:z,children:t("library.going")}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("table",{className:O,children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{span:"1",className:$}),(0,v.jsx)("col",{span:"1",className:H}),(0,v.jsx)("col",{span:"2",className:q})]}),(0,v.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,v.jsx)("tr",{children:e.headers.map((function(e){return(0,v.jsx)("th",{className:P,children:e.isPlaceholder?null:(0,D.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,v.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,v.jsx)("tr",{className:Y,children:e.getVisibleCells().map((function(e){return(0,v.jsx)("td",{children:(0,D.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,v.jsx)("div",{})]})]})},Q=t(97),K=function(e){var a=e.goingToReadListBooks,t=(0,Q.Z)();return(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(W,{goingToReadListBooks:a}):(0,v.jsx)(J,{goingToReadListBooks:a})})},X=t(7689),U={readingNowMobileSection:"ReadingNowMobile_readingNowMobileSection__dvP+8",title:"ReadingNowMobile_title__MRzr7",cardBook:"ReadingNowMobile_cardBook__fsWst",cardBookWrapper:"ReadingNowMobile_cardBookWrapper__eNq+j",cardTitle:"ReadingNowMobile_cardTitle__OI9yS",cardTableBody:"ReadingNowMobile_cardTableBody__QEZ0r",tableTitle:"ReadingNowMobile_tableTitle__wvBHI",tableContent:"ReadingNowMobile_tableContent__VmLjs"},ee=function(e){var a=e.readingNowListBooks,t=(0,l.$)().t;return(0,v.jsxs)("section",{className:U.readingNowMobileSection,children:[(0,v.jsx)("h2",{className:U.title,children:t("library.reading")}),(0,v.jsx)("ul",{className:U.card,children:a.map((function(e){var a=e._id,l=e.bookTitle,n=e.author,r=e.publicationDate,i=e.amountOfPages;return(0,v.jsx)("li",{className:U.cardBook,children:(0,v.jsxs)("div",{className:U.cardBookWrapper,children:[(0,v.jsx)("h3",{className:U.cardTitle,children:l}),(0,v.jsx)("table",{className:U.cardTable,children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{className:U.cardTableBody,children:[(0,v.jsxs)("th",{className:U.tableTitle,children:[t("library.author"),":"]}),(0,v.jsx)("td",{className:U.tableContent,children:n})]}),(0,v.jsxs)("tr",{className:U.cardTableBody,children:[(0,v.jsxs)("th",{className:U.tableTitle,children:[t("library.year"),":"]}),(0,v.jsx)("td",{className:U.tableContent,children:r})]}),(0,v.jsxs)("tr",{className:U.cardTableBody,children:[(0,v.jsxs)("th",{className:U.tableTitle,children:[t("library.pages"),":"]}),(0,v.jsx)("td",{className:U.tableContent,children:i})]})]})})]})},a)}))})]})},ae="ReadingNowMain_title__QWui1",te="ReadingNowMain_titleBookWrapper__1GNvZ",le="ReadingNowMain_titleBook__jpar2",ne="ReadingNowMain_iconWrapper__7hc92",re="ReadingNowMain_icon__Kg1+R",ie="ReadingNowMain_table__zHvdb",se="ReadingNowMain_tableTitleCell__-S+oz",oe="ReadingNowMain_tablerow__Dgznn",ce="ReadingNowMain_styleTitleBook__Hzsar",de="ReadingNowMain_styleAuthor__hSmju",ue="ReadingNowMain_styleColums__H+vYg",he=function(e){var a=e.readingNowListBooks,t=(0,l.$)().t,n=a,r=(0,D.createColumnHelper)(a),i=[r.accessor("bookTitle",{cell:function(e){return(0,v.jsx)("i",{children:(0,v.jsxs)("div",{className:te,children:[(0,v.jsx)("div",{className:ne,children:(0,v.jsxs)("svg",{className:re,width:"22",height:"17",children:[(0,v.jsx)("use",{href:V.Z+"#icon-open-book"})," "]})}),(0,v.jsx)("div",{className:le,children:(0,L.Z)(e.getValue(),77)})]})})},header:function(){return(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,v.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.pages")})}})],s=(0,D.useReactTable)({data:n,columns:i,getCoreRowModel:(0,D.getCoreRowModel)()});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:ae,children:t("library.reading")}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("table",{className:ie,children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{span:"1",className:ce}),(0,v.jsx)("col",{span:"1",className:de}),(0,v.jsx)("col",{span:"2",className:ue})]}),(0,v.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,v.jsx)("tr",{children:e.headers.map((function(e){return(0,v.jsx)("th",{className:se,children:e.isPlaceholder?null:(0,D.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,v.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,v.jsx)("tr",{className:oe,children:e.getVisibleCells().map((function(e){return(0,v.jsx)("td",{children:(0,D.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,v.jsx)("div",{})]})]})},_e=function(e){var a=e.readingNowListBooks,t=(0,Q.Z)();return(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(ee,{readingNowListBooks:a}):(0,v.jsx)(he,{readingNowListBooks:a})})},me=t(9868),xe=t(1413),be=t(5987),pe={box:"ResumeModal_box__Kol9A",title:"ResumeModal_title__4GcvR",label:"ResumeModal_label__AcR7v",textAreaEmpty:"ResumeModal_textAreaEmpty__3VzAS",textAreaFilled:"ResumeModal_textAreaFilled__uYMCD ResumeModal_textAreaEmpty__3VzAS",buttonList:"ResumeModal_buttonList__YSWG6",titleTextarea:"ResumeModal_titleTextarea__zhmCi",buttonOpen:"ResumeModal_buttonOpen__EKxhM",buttonBack:"ResumeModal_buttonBack__3vz49",buttonSave:"ResumeModal_buttonSave__z06zV",textAreaBox:"ResumeModal_textAreaBox__1DZ43",buttonWrapper:"ResumeModal_buttonWrapper__aN5-u"},je=["field"],ge=function(e){var a=e.field,t=(0,be.Z)(e,je);return(0,v.jsx)("textarea",(0,xe.Z)((0,xe.Z)({},a),t))},fe=function(e){var a=e.row,t=(0,r.useState)(!1),s=(0,n.Z)(t,2),o=s[0],c=s[1],d=(0,r.useState)(),h=(0,n.Z)(d,2),_=h[0],m=h[1],x=(0,r.useState)("textAreaEmpty"),b=(0,n.Z)(x,2),p=b[0],j=b[1],g=(0,l.$)().t,f=(0,u.jd)(),N=(0,n.Z)(f,1)[0],y=function(){c(!1),m({})};return(0,v.jsxs)("div",{className:pe.buttonWrapper,children:[(0,v.jsx)("button",{className:pe.buttonOpen,onClick:function(){c(!0),m(a)},children:g("library.resume")}),(0,v.jsx)(C.Z,{open:o,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsx)("div",{className:pe.box,children:(0,v.jsxs)(k.Z,{children:[(0,v.jsx)("h3",{className:pe.title,children:g("library.choose")}),(0,v.jsx)(i.J9,{initialValues:{rating:2},onSubmit:function(e){N((0,xe.Z)((0,xe.Z)({},_),{},{id:_._id})),c(!1)},children:function(e){e.errors,e.touched,e.isValidating;return(0,v.jsxs)(i.l0,{children:[(0,v.jsx)(me.Z,{name:"rating",value:_.rating,size:"small",onChange:function(e,a){m((0,xe.Z)((0,xe.Z)({},_),{},{rating:a}))},precision:1}),(0,v.jsx)("p",{className:pe.titleTextarea,children:g("library.resume")}),(0,v.jsx)(i.gN,{value:_.review,name:"review",maxLength:"1000",placeholder:"...",className:pe[p],component:ge,onChange:function(e){e.preventDefault(),j(e.target.value?"textAreaFilled":"textAreaEmpty"),m((0,xe.Z)((0,xe.Z)({},_),{},{review:e.target.value}))}}),(0,v.jsxs)("ul",{className:pe.buttonList,children:[(0,v.jsx)("li",{children:(0,v.jsx)("button",{className:pe.buttonBack,type:"submit",onClick:y,children:g("modal.back")})}),(0,v.jsx)("li",{children:(0,v.jsx)("button",{className:pe.buttonSave,type:"submit",tabIndex:0,autoFocus:!0,children:g("library.save")})})]})]})}})]})})})]})},Ne={cardBookWrapper:"AlreadyReadMobile_cardBookWrapper__QXEC7",title:"AlreadyReadMobile_title__1WKye",cardBook:"AlreadyReadMobile_cardBook__6zRTB",cardTitleBook:"AlreadyReadMobile_cardTitleBook__O4pcJ",cardTitle:"AlreadyReadMobile_cardTitle__z3umE",cardTableBody:"AlreadyReadMobile_cardTableBody__pPYAH",tableTitle:"AlreadyReadMobile_tableTitle__VFg-7",tableContent:"AlreadyReadMobile_tableContent__6aeST",buttonWrapper:"AlreadyReadMobile_buttonWrapper__MIWC3"},ye=function(e){var a=e.alreadyReadListBooks,t=(0,u.jd)(),r=(0,n.Z)(t,1)[0],i=(0,l.$)().t;return(0,v.jsxs)("section",{className:Ne.listAlreadyRead,children:[(0,v.jsx)("h2",{className:Ne.title,children:i("library.already")}),(0,v.jsx)("ul",{className:Ne.card,children:a.map((function(e){var a=e._id,t=e.bookTitle,l=e.author,n=e.publicationDate,s=e.amountOfPages,o=e.review,c=e.rating,d={_id:a,bookTitle:t,author:l,publicationDate:n,amountOfPages:s,review:o,rating:c};return(0,v.jsxs)("li",{className:Ne.cardBook,children:[(0,v.jsxs)("div",{className:Ne.cardBookWrapper,children:[(0,v.jsx)("h3",{className:Ne.cardTitle,children:t}),(0,v.jsx)("div",{className:Ne.cardTableBook,children:(0,v.jsx)("table",{className:Ne.cardTable,children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{className:Ne.cardTableBody,children:[(0,v.jsxs)("th",{className:Ne.tableTitle,children:[i("library.author"),":"]}),(0,v.jsx)("td",{className:Ne.tableContent,children:l})]}),(0,v.jsxs)("tr",{className:Ne.cardTableBody,children:[(0,v.jsxs)("th",{className:Ne.tableTitle,children:[i("library.year"),":"]}),(0,v.jsx)("td",{className:Ne.tableContent,children:n})]}),(0,v.jsxs)("tr",{className:Ne.cardTableBody,children:[(0,v.jsxs)("th",{className:Ne.tableTitle,children:[i("library.pages"),":"]}),(0,v.jsx)("td",{className:Ne.tableContent,children:s})]}),(0,v.jsxs)("tr",{className:Ne.cardTableBody,children:[(0,v.jsxs)("th",{className:Ne.tableTitle,children:[i("library.rating"),":"]}),(0,v.jsx)("td",{className:Ne.tableContent,children:(0,v.jsx)(me.Z,{name:"simple-controlled",value:c,size:"small",readOnly:!0,precision:.5,onChange:function(e,i){r({id:a,bookTitle:t,author:l,publicationDate:n,amountOfPages:s,review:o,rating:i})}})})]})]})})})]}),(0,v.jsx)("div",{className:Ne.buttonWrapper,children:(0,v.jsx)(fe,{row:d})})]},a)}))})]})},ve={title:"AlreadyReadMain_title__qnR58",titleBookWrapper:"AlreadyReadMain_titleBookWrapper__359Wu",titleBook:"AlreadyReadMain_titleBook__6TV4D",iconWrapper:"AlreadyReadMain_iconWrapper__vWqv5",icon:"AlreadyReadMain_icon__Jlwwx",table:"AlreadyReadMain_table__KrrJV",tableTitleCell:"AlreadyReadMain_tableTitleCell__L3tjB",tableRow:"AlreadyReadMain_tableRow__NeCX8",styleTitleBook:"AlreadyReadMain_styleTitleBook__v06o2",styleAuthor:"AlreadyReadMain_styleAuthor__3+hSX",styleColums:"AlreadyReadMain_styleColums__D1eYO",styleRating:"AlreadyReadMain_styleRating__P7mUI",stylyResume:"AlreadyReadMain_stylyResume__+vZUG"},Te=function(e){var a=e.alreadyReadListBooks,t=(0,l.$)().t,n=a,r=(0,D.createColumnHelper)(a),i=[r.accessor("bookTitle",{cell:function(e){return(0,v.jsx)("i",{children:(0,v.jsxs)("div",{className:ve.titleBookWrapper,children:[(0,v.jsx)("div",{className:ve.iconWrapper,children:(0,v.jsxs)("svg",{className:ve.icon,width:"22",height:"17",children:[(0,v.jsx)("use",{href:V.Z+"#icon-open-book"})," "]})}),(0,v.jsx)("div",{className:ve.titleBook,children:(0,L.Z)(e.getValue(),25)})]})})},header:function(){return(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,v.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,v.jsx)("span",{children:t("library.pages")})}}),r.accessor("rating",{cell:function(e){return(0,v.jsx)("i",{children:(0,v.jsx)(me.Z,{name:"simple-controlled",value:e.getValue(),size:"small",readOnly:!0})})},header:t("library.rating")}),r.accessor("action",{cell:function(e){return(0,v.jsx)("i",{children:(0,v.jsx)(fe,{row:e.row.original})})},header:""})],s=(0,D.useReactTable)({data:n,columns:i,getCoreRowModel:(0,D.getCoreRowModel)()});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:ve.title,children:t("library.already")}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("table",{className:ve.table,children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{span:"1",className:ve.styleTitleBook}),(0,v.jsx)("col",{span:"1",className:ve.styleAuthor}),(0,v.jsx)("col",{span:"2",className:ve.styleColums}),(0,v.jsx)("col",{span:"1",className:ve.styleRating}),(0,v.jsx)("col",{span:"1",className:ve.styleResume})]}),(0,v.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,v.jsx)("tr",{children:e.headers.map((function(e){return(0,v.jsx)("th",{className:ve.tableTitleCell,children:e.isPlaceholder?null:(0,D.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,v.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,v.jsx)("tr",{className:ve.tableRow,children:e.getVisibleCells().map((function(e){return(0,v.jsx)("td",{children:(0,D.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,v.jsx)("div",{})]})]})},Re=function(e){var a=e.alreadyReadListBooks,t=(0,Q.Z)();return(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(ye,{alreadyReadListBooks:a}):(0,v.jsx)(Te,{alreadyReadListBooks:a})})},Me=t(9962),Be=t(9894),ke=function(){var e=(0,u.QJ)(),a=e.data,t=e.isLoading,n=(0,l.$)().t,r=null===a||void 0===a?void 0:a.filter((function(e){return"finished"===e.status})),i=null===a||void 0===a?void 0:a.filter((function(e){return"reading_now"===e.status})),s=null===a||void 0===a?void 0:a.filter((function(e){return"going_to_read"===e.status})),o=(0,X.s0)();return t?(0,v.jsx)(Me.Z,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(R,{addedBookTitles:null===a||void 0===a?void 0:a.map((function(e){return e.bookTitle}))}),!(null!==a&&void 0!==a&&a.length)&&!t&&(0,v.jsx)(S,{}),a&&(0,v.jsxs)(B,{children:[r.length>0&&(0,v.jsx)(Re,{alreadyReadListBooks:r}),i.length>0&&(0,v.jsx)(_e,{readingNowListBooks:i}),s.length>0&&(0,v.jsx)(K,{goingToReadListBooks:s}),s.length>0&&(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"40px"},children:(0,v.jsx)(Be.Z,{type:"submit",className:"main",text:n("library.myTraining"),onClick:function(){o("/training")}})})]})]})}}}]);
//# sourceMappingURL=363.847d2852.chunk.js.map