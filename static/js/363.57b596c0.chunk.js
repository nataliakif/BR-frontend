"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[363],{7609:function(e,a,t){t(2791);a.Z=t.p+"static/media/sprite.82316d5e6fc127c69796e12e77373b14.svg"},3087:function(e,a,t){t.d(a,{Z:function(){return n}});var l="Container_container__VVOCq",r=t(184),n=function(e){var a=e.children;return(0,r.jsx)("div",{className:l,children:a})}},6174:function(e,a){a.Z=function(e,a){var t=e.split(" ").filter((function(e){return e})).join(" ");if(t.length>a){var l=t.substring(0,a);return l.substring(0,Math.max(l.lastIndexOf(" "),l.lastIndexOf(",")+1))+" ..."}return t}},97:function(e,a,t){var l=t(9439),r=t(2791),n=function(){return window.innerWidth<=767};a.Z=function(){var e=(0,r.useState)(n()),a=(0,l.Z)(e,2),t=a[0],s=a[1];return(0,r.useEffect)((function(){var e=function(){s(n())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t}},4363:function(e,a,t){t.r(a),t.d(a,{default:function(){return Re}});var l=t(3087),r=t(9439),n=t(2791),s=t(5705),i=t(1724),o=/^[^\s-]/,c=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,d=function(e){return i.Ry().shape({title:i.Z_().min(2,e("validation.bookTitle")).max(50,e("validation.titleMax")).matches(o,e("validation.titleSpace")).required(e("validation.enterTitle")).typeError(e("validation.titleError")),author:i.Z_().required(e("validation.enterAuthor")).matches(c,e("validation.authorSpace")).min(2,e("validation.authorMin")).max(50,e("validation.authorMax")).typeError(e("validation.authorCharacters")),publishYear:i.Rx().min(1890,e("validation.yearMin")).max(2022,e("validation.yearMax")).typeError(e("validation.yearError")),pagesTotal:i.Rx().min(1,e("validation.pagesMin")).max(2e3,e("validation.pagesMax")).required(e("validation.pagesFill")).typeError(e("validation.pagesError"))})},u=t(7020),h=t(3168),_=t(5985),m="InputBook_form__dAEEg",x="InputBook_form__container__wbTGf",b="InputBook_label__0B4lt",p="InputBook_button__VauTs",j="InputBook_title__fB1S8",g="InputBook_author__1z94P",f="InputBook_yearPages__QnfhL",N="InputBook_bookError__XRet7",y=t(184),v={title:"",author:"",publishYear:"",pagesTotal:""};var T=function(e){var a=e.addedBookTitles,t=(0,h.$)().t,l=(0,u.RQ)(),n=(0,r.Z)(l,1)[0];return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(s.J9,{initialValues:v,validationSchema:d(t),children:function(e){var l=e.values,r=e.handleChange,i=e.handleBlur,o=e.resetForm,c=e.isValid;return(0,y.jsxs)(s.l0,{className:m,action:"submit",onSubmit:function(e){e.preventDefault(),a.includes(l.title)?_.Am.warning("".concat(t("toast.bookWarning")).concat(l.title)):(n({bookTitle:l.title,author:l.author,publicationDate:l.publishYear,amountOfPages:l.pagesTotal}),_.Am.success("".concat(t("toast.addBook")).concat(l.title).concat(t("toast.addBookSuccess"))),o())},children:[(0,y.jsxs)("div",{className:x,children:[(0,y.jsxs)("label",{className:b,children:[t("library.bookTitle"),(0,y.jsx)(s.gN,{id:"title",className:j,type:"text",name:"title",autoComplete:"off",onChange:r,onBlur:i,placeholder:"...",value:l.title,required:!0}),(0,y.jsx)(s.Bc,{component:"div",name:"title",className:N})]}),(0,y.jsxs)("label",{className:b,children:[t("library.author"),(0,y.jsx)(s.gN,{id:"author",className:g,type:"text",name:"author",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:r,onBlur:i,placeholder:"...",value:l.author,required:!0}),(0,y.jsx)(s.Bc,{component:"div",name:"author",className:N})]}),(0,y.jsxs)("label",{className:b,children:[t("library.publicationDate"),(0,y.jsx)(s.gN,{id:"year",className:f,type:"number",name:"publishYear",autoComplete:"off",onChange:r,onBlur:i,placeholder:"...",value:l.publishYear}),(0,y.jsx)(s.Bc,{component:"div",name:"publishYear",className:N})]}),(0,y.jsxs)("label",{className:b,children:[t("library.amount"),(0,y.jsx)(s.gN,{id:"pages",className:f,type:"number",name:"pagesTotal",autoComplete:"off",onChange:r,onBlur:i,placeholder:"...",value:l.pagesTotal,required:!0}),(0,y.jsx)(s.Bc,{component:"div",name:"pagesTotal",className:N})]})]}),(0,y.jsx)("button",{className:p,type:"submit",disabled:!c,children:t("library.add")})]})}})})},R="ContainerLibrary_container__2qaIS",M=function(e){var a=e.children;return(0,y.jsx)("div",{className:R,children:a})},B=t(6809),k=t(3986);var w=t.p+"static/media/symbol-defs.7c43a5741b2c0a3a6cc4b52856d6d726.svg",C={modal:"StartModal_modal__Sgez+",firstTitle:"StartModal_firstTitle__MR+ii",firstStep:"StartModal_firstStep__+Rnc1",firstDesc:"StartModal_firstDesc__bkKfu",firstStepIcon:"StartModal_firstStepIcon__C4wOQ",firstStepIconDesc:"StartModal_firstStepIconDesc__nx0cK",secondTitle:"StartModal_secondTitle__6YZ35",secondStep:"StartModal_secondStep__nVjTT",secondStepDesc:"StartModal_secondStepDesc__e99Vt",secondStepIcon:"StartModal_secondStepIcon__ii-6U",secondStepIconDesc:"StartModal_secondStepIconDesc__PSf8H",stepWrapper:"StartModal_stepWrapper__Vbzcp",okBtn:"StartModal_okBtn__yAfx4"};var S=function(){var e=(0,n.useState)(!0),a=(0,r.Z)(e,2),t=a[0],l=a[1],s=function(){return l(!1)},i=(0,h.$)().t;return(0,y.jsx)("div",{className:C.buttonWrapper,children:(0,y.jsx)(k.Z,{open:t,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(B.Z,{onClose:s,className:C.modal,children:[(0,y.jsxs)("div",{className:C.firstStepWrapper,children:[(0,y.jsxs)("p",{className:C.firstTitle,children:[i("modal.step"),"1."]}),(0,y.jsx)("svg",{className:C.firstStepIcon,width:"22px",height:"17px",children:(0,y.jsx)("use",{href:"".concat(w,"#icon-flat-grey")})}),(0,y.jsx)("p",{className:C.firstStep,children:i("modal.createLibrary")}),(0,y.jsx)("svg",{className:C.firstStepIconDesc,width:"10px",height:"12px",children:(0,y.jsx)("use",{href:"".concat(w,"#icon-Vector")})}),(0,y.jsx)("p",{className:C.firstDesc,children:i("modal.addBooks")})]}),(0,y.jsxs)("div",{className:C.stepWrapper,children:[(0,y.jsxs)("p",{className:C.secondTitle,children:[i("modal.step"),"2."]}),(0,y.jsx)("svg",{className:C.secondStepIcon,width:"22px",height:"17px",children:(0,y.jsx)("use",{href:"".concat(w,"#icon-flag")})}),(0,y.jsx)("p",{className:C.secondStep,children:i("modal.createTraining")}),(0,y.jsx)("svg",{className:C.secondStepIconDesc,width:"10px",height:"12px",children:(0,y.jsx)("use",{href:"".concat(w,"#icon-Vector")})}),(0,y.jsx)("p",{className:C.secondStepDesc,children:i("modal.setAGoal")})]}),(0,y.jsx)("button",{onClose:s,className:C.okBtn,tabIndex:0,autoFocus:!0,children:i("modal.ok")})]})})})},A={goingToReadMobilesection:"GoingToReadMobile_goingToReadMobilesection__6ylnL",title:"GoingToReadMobile_title__awc0D",cardBook:"GoingToReadMobile_cardBook__7mLXA",cardBookWrapper:"GoingToReadMobile_cardBookWrapper__mAKyB",cardTitle:"GoingToReadMobile_cardTitle__Y-Pv3",cardTableBody:"GoingToReadMobile_cardTableBody__VpC0J",tableTitle:"GoingToReadMobile_tableTitle__oBgyF",tableContent:"GoingToReadMobile_tableContent__5J2vg"},Z=function(e){var a=e.goingToReadListBooks,t=(0,h.$)().t;return(0,y.jsxs)("section",{className:A.goingToReadMobilesection,children:[(0,y.jsx)("h2",{className:A.title,children:t("library.going")}),(0,y.jsx)("ul",{className:A.card,children:a.map((function(e){var a=e._id,l=e.bookTitle,r=e.author,n=e.publicationDate,s=e.amountOfPages;return(0,y.jsx)("li",{className:A.cardBook,children:(0,y.jsxs)("div",{className:A.cardBookWrapper,children:[(0,y.jsx)("h3",{className:A.cardTitle,children:l}),(0,y.jsx)("table",{className:A.cardTable,children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{className:A.cardTableBody,children:[(0,y.jsxs)("th",{className:A.tableTitle,children:[t("library.author"),":"]}),(0,y.jsx)("td",{className:A.tableContent,children:r})]}),(0,y.jsxs)("tr",{className:A.cardTableBody,children:[(0,y.jsxs)("th",{className:A.tableTitle,children:[t("library.year"),":"]}),(0,y.jsx)("td",{className:A.tableContent,children:n})]}),(0,y.jsxs)("tr",{className:A.cardTableBody,children:[(0,y.jsxs)("th",{className:A.tableTitle,children:[t("library.pages"),":"]}),(0,y.jsx)("td",{className:A.tableContent,children:s})]})]})})]})},a)}))})]})},W=t(9023),V=t(6174),D=t(7609),L="GoingToReadMain_title__c8CCa",I="GoingToReadMain_titleBookWrapper__J01T1",z="GoingToReadMain_titleBook__aFC4g",G="GoingToReadMain_iconWrapper__QJi-i",E="GoingToReadMain_icon__x7wPW",O="GoingToReadMain_table__dbBhY",P="GoingToReadMain_tableTitleCell__X64jP",F="GoingToReadMain_tablerow__0+leZ",Y="GoingToReadMain_styleTitleBook__tW6Bz",H="GoingToReadMain_styleAuthor__kVAOb",q="GoingToReadMain_styleColums__yf89r",$=function(e){var a=e.goingToReadListBooks,t=(0,h.$)().t,l=a,r=(0,W.createColumnHelper)(a),n=[r.accessor("bookTitle",{cell:function(e){return(0,y.jsx)("i",{children:(0,y.jsxs)("div",{className:I,children:[(0,y.jsx)("div",{className:G,children:(0,y.jsxs)("svg",{className:E,width:"22",height:"17",children:[(0,y.jsx)("use",{href:D.Z+"#icon-open-book"})," "]})}),(0,y.jsx)("div",{className:z,children:(0,V.Z)(e.getValue(),77)})]})})},header:function(){return(0,y.jsx)("div",{children:(0,y.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,y.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.pages")})}})],s=(0,W.useReactTable)({data:l,columns:n,getCoreRowModel:(0,W.getCoreRowModel)()});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:L,children:t("library.going")}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("table",{className:O,children:[(0,y.jsxs)("colgroup",{children:[(0,y.jsx)("col",{span:"1",className:Y}),(0,y.jsx)("col",{span:"1",className:H}),(0,y.jsx)("col",{span:"2",className:q})]}),(0,y.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,y.jsx)("tr",{children:e.headers.map((function(e){return(0,y.jsx)("th",{className:P,children:e.isPlaceholder?null:(0,W.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,y.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,y.jsx)("tr",{className:F,children:e.getVisibleCells().map((function(e){return(0,y.jsx)("td",{children:(0,W.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,y.jsx)("div",{})]})]})},J=t(97),K=function(e){var a=e.goingToReadListBooks,t=(0,J.Z)();return(0,y.jsx)(y.Fragment,{children:t?(0,y.jsx)(Z,{goingToReadListBooks:a}):(0,y.jsx)($,{goingToReadListBooks:a})})},Q={readingNowMobileSection:"ReadingNowMobile_readingNowMobileSection__dvP+8",title:"ReadingNowMobile_title__MRzr7",cardBook:"ReadingNowMobile_cardBook__fsWst",cardBookWrapper:"ReadingNowMobile_cardBookWrapper__eNq+j",cardTitle:"ReadingNowMobile_cardTitle__OI9yS",cardTableBody:"ReadingNowMobile_cardTableBody__QEZ0r",tableTitle:"ReadingNowMobile_tableTitle__wvBHI",tableContent:"ReadingNowMobile_tableContent__VmLjs"},X=function(e){var a=e.readingNowListBooks,t=(0,h.$)().t;return(0,y.jsxs)("section",{className:Q.readingNowMobileSection,children:[(0,y.jsx)("h2",{className:Q.title,children:t("library.reading")}),(0,y.jsx)("ul",{className:Q.card,children:a.map((function(e){var a=e._id,l=e.bookTitle,r=e.author,n=e.publicationDate,s=e.amountOfPages;return(0,y.jsx)("li",{className:Q.cardBook,children:(0,y.jsxs)("div",{className:Q.cardBookWrapper,children:[(0,y.jsx)("h3",{className:Q.cardTitle,children:l}),(0,y.jsx)("table",{className:Q.cardTable,children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{className:Q.cardTableBody,children:[(0,y.jsxs)("th",{className:Q.tableTitle,children:[t("library.author"),":"]}),(0,y.jsx)("td",{className:Q.tableContent,children:r})]}),(0,y.jsxs)("tr",{className:Q.cardTableBody,children:[(0,y.jsxs)("th",{className:Q.tableTitle,children:[t("library.year"),":"]}),(0,y.jsx)("td",{className:Q.tableContent,children:n})]}),(0,y.jsxs)("tr",{className:Q.cardTableBody,children:[(0,y.jsxs)("th",{className:Q.tableTitle,children:[t("library.pages"),":"]}),(0,y.jsx)("td",{className:Q.tableContent,children:s})]})]})})]})},a)}))})]})},U="ReadingNowMain_title__QWui1",ee="ReadingNowMain_titleBookWrapper__1GNvZ",ae="ReadingNowMain_titleBook__jpar2",te="ReadingNowMain_iconWrapper__7hc92",le="ReadingNowMain_icon__Kg1+R",re="ReadingNowMain_table__zHvdb",ne="ReadingNowMain_tableTitleCell__-S+oz",se="ReadingNowMain_tablerow__Dgznn",ie="ReadingNowMain_styleTitleBook__Hzsar",oe="ReadingNowMain_styleAuthor__hSmju",ce="ReadingNowMain_styleColums__H+vYg",de=function(e){var a=e.readingNowListBooks,t=(0,h.$)().t,l=a,r=(0,W.createColumnHelper)(a),n=[r.accessor("bookTitle",{cell:function(e){return(0,y.jsx)("i",{children:(0,y.jsxs)("div",{className:ee,children:[(0,y.jsx)("div",{className:te,children:(0,y.jsxs)("svg",{className:le,width:"22",height:"17",children:[(0,y.jsx)("use",{href:D.Z+"#icon-open-book"})," "]})}),(0,y.jsx)("div",{className:ae,children:(0,V.Z)(e.getValue(),77)})]})})},header:function(){return(0,y.jsx)("div",{children:(0,y.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,y.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.pages")})}})],s=(0,W.useReactTable)({data:l,columns:n,getCoreRowModel:(0,W.getCoreRowModel)()});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:U,children:t("library.reading")}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("table",{className:re,children:[(0,y.jsxs)("colgroup",{children:[(0,y.jsx)("col",{span:"1",className:ie}),(0,y.jsx)("col",{span:"1",className:oe}),(0,y.jsx)("col",{span:"2",className:ce})]}),(0,y.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,y.jsx)("tr",{children:e.headers.map((function(e){return(0,y.jsx)("th",{className:ne,children:e.isPlaceholder?null:(0,W.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,y.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,y.jsx)("tr",{className:se,children:e.getVisibleCells().map((function(e){return(0,y.jsx)("td",{children:(0,W.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,y.jsx)("div",{})]})]})},ue=function(e){var a=e.readingNowListBooks,t=(0,J.Z)();return(0,y.jsx)(y.Fragment,{children:t?(0,y.jsx)(X,{readingNowListBooks:a}):(0,y.jsx)(de,{readingNowListBooks:a})})},he=t(9868),_e=t(1413),me=t(5987),xe={box:"ResumeModal_box__Kol9A",title:"ResumeModal_title__4GcvR",label:"ResumeModal_label__AcR7v",textAreaEmpty:"ResumeModal_textAreaEmpty__3VzAS",textAreaFilled:"ResumeModal_textAreaFilled__uYMCD ResumeModal_textAreaEmpty__3VzAS",buttonList:"ResumeModal_buttonList__YSWG6",titleTextarea:"ResumeModal_titleTextarea__zhmCi",buttonOpen:"ResumeModal_buttonOpen__EKxhM",buttonBack:"ResumeModal_buttonBack__3vz49",buttonSave:"ResumeModal_buttonSave__z06zV",textAreaBox:"ResumeModal_textAreaBox__1DZ43",buttonWrapper:"ResumeModal_buttonWrapper__aN5-u"},be=["field"],pe=function(e){var a=e.field,t=(0,me.Z)(e,be);return(0,y.jsx)("textarea",(0,_e.Z)((0,_e.Z)({},a),t))},je=function(e){var a=e.row,t=(0,n.useState)(!1),l=(0,r.Z)(t,2),i=l[0],o=l[1],c=(0,n.useState)(),d=(0,r.Z)(c,2),_=d[0],m=d[1],x=(0,n.useState)("textAreaEmpty"),b=(0,r.Z)(x,2),p=b[0],j=b[1],g=(0,h.$)().t,f=(0,u.jd)(),N=(0,r.Z)(f,1)[0],v=function(){o(!1),m({})};return(0,y.jsxs)("div",{className:xe.buttonWrapper,children:[(0,y.jsx)("button",{className:xe.buttonOpen,onClick:function(){o(!0),m(a)},children:g("library.resume")}),(0,y.jsx)(k.Z,{open:i,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsx)("div",{className:xe.box,children:(0,y.jsxs)(B.Z,{children:[(0,y.jsx)("h3",{className:xe.title,children:g("library.choose")}),(0,y.jsx)(s.J9,{initialValues:{rating:2},onSubmit:function(e){N((0,_e.Z)((0,_e.Z)({},_),{},{id:_._id})),o(!1)},children:function(e){e.errors,e.touched,e.isValidating;return(0,y.jsxs)(s.l0,{children:[(0,y.jsx)(he.Z,{name:"rating",value:_.rating,size:"small",onChange:function(e,a){m((0,_e.Z)((0,_e.Z)({},_),{},{rating:a}))},precision:1}),(0,y.jsx)("p",{className:xe.titleTextarea,children:g("library.resume")}),(0,y.jsx)(s.gN,{value:_.review,name:"review",maxLength:"1000",placeholder:"...",className:xe[p],component:pe,onChange:function(e){e.preventDefault(),j(e.target.value?"textAreaFilled":"textAreaEmpty"),m((0,_e.Z)((0,_e.Z)({},_),{},{review:e.target.value}))}}),(0,y.jsxs)("ul",{className:xe.buttonList,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:xe.buttonBack,type:"submit",onClick:v,children:g("modal.back")})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:xe.buttonSave,type:"submit",tabIndex:0,autoFocus:!0,children:g("library.save")})})]})]})}})]})})})]})},ge={cardBookWrapper:"AlreadyReadMobile_cardBookWrapper__QXEC7",title:"AlreadyReadMobile_title__1WKye",cardBook:"AlreadyReadMobile_cardBook__6zRTB",cardTitleBook:"AlreadyReadMobile_cardTitleBook__O4pcJ",cardTitle:"AlreadyReadMobile_cardTitle__z3umE",cardTableBody:"AlreadyReadMobile_cardTableBody__pPYAH",tableTitle:"AlreadyReadMobile_tableTitle__VFg-7",tableContent:"AlreadyReadMobile_tableContent__6aeST",buttonWrapper:"AlreadyReadMobile_buttonWrapper__MIWC3"},fe=function(e){var a=e.alreadyReadListBooks,t=(0,u.jd)(),l=(0,r.Z)(t,1)[0],n=(0,h.$)().t;return(0,y.jsxs)("section",{className:ge.listAlreadyRead,children:[(0,y.jsx)("h2",{className:ge.title,children:n("library.already")}),(0,y.jsx)("ul",{className:ge.card,children:a.map((function(e){var a=e._id,t=e.bookTitle,r=e.author,s=e.publicationDate,i=e.amountOfPages,o=e.review,c=e.rating,d={_id:a,bookTitle:t,author:r,publicationDate:s,amountOfPages:i,review:o,rating:c};return(0,y.jsxs)("li",{className:ge.cardBook,children:[(0,y.jsxs)("div",{className:ge.cardBookWrapper,children:[(0,y.jsx)("h3",{className:ge.cardTitle,children:t}),(0,y.jsx)("div",{className:ge.cardTableBook,children:(0,y.jsx)("table",{className:ge.cardTable,children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{className:ge.cardTableBody,children:[(0,y.jsxs)("th",{className:ge.tableTitle,children:[n("library.author"),":"]}),(0,y.jsx)("td",{className:ge.tableContent,children:r})]}),(0,y.jsxs)("tr",{className:ge.cardTableBody,children:[(0,y.jsxs)("th",{className:ge.tableTitle,children:[n("library.year"),":"]}),(0,y.jsx)("td",{className:ge.tableContent,children:s})]}),(0,y.jsxs)("tr",{className:ge.cardTableBody,children:[(0,y.jsxs)("th",{className:ge.tableTitle,children:[n("library.pages"),":"]}),(0,y.jsx)("td",{className:ge.tableContent,children:i})]}),(0,y.jsxs)("tr",{className:ge.cardTableBody,children:[(0,y.jsxs)("th",{className:ge.tableTitle,children:[n("library.rating"),":"]}),(0,y.jsx)("td",{className:ge.tableContent,children:(0,y.jsx)(he.Z,{name:"simple-controlled",value:c,size:"small",readOnly:!0,precision:.5,onChange:function(e,n){l({id:a,bookTitle:t,author:r,publicationDate:s,amountOfPages:i,review:o,rating:n})}})})]})]})})})]}),(0,y.jsx)("div",{className:ge.buttonWrapper,children:(0,y.jsx)(je,{row:d})})]},a)}))})]})},Ne={title:"AlreadyReadMain_title__qnR58",titleBookWrapper:"AlreadyReadMain_titleBookWrapper__359Wu",titleBook:"AlreadyReadMain_titleBook__6TV4D",iconWrapper:"AlreadyReadMain_iconWrapper__vWqv5",icon:"AlreadyReadMain_icon__Jlwwx",table:"AlreadyReadMain_table__KrrJV",tableTitleCell:"AlreadyReadMain_tableTitleCell__L3tjB",tableRow:"AlreadyReadMain_tableRow__NeCX8",styleTitleBook:"AlreadyReadMain_styleTitleBook__v06o2",styleAuthor:"AlreadyReadMain_styleAuthor__3+hSX",styleColums:"AlreadyReadMain_styleColums__D1eYO",styleRating:"AlreadyReadMain_styleRating__P7mUI",stylyResume:"AlreadyReadMain_stylyResume__+vZUG"},ye=function(e){var a=e.alreadyReadListBooks,t=(0,h.$)().t,l=a,r=(0,W.createColumnHelper)(a),n=[r.accessor("bookTitle",{cell:function(e){return(0,y.jsx)("i",{children:(0,y.jsxs)("div",{className:Ne.titleBookWrapper,children:[(0,y.jsx)("div",{className:Ne.iconWrapper,children:(0,y.jsxs)("svg",{className:Ne.icon,width:"22",height:"17",children:[(0,y.jsx)("use",{href:D.Z+"#icon-open-book"})," "]})}),(0,y.jsx)("div",{className:Ne.titleBook,children:(0,V.Z)(e.getValue(),25)})]})})},header:function(){return(0,y.jsx)("div",{children:(0,y.jsx)("span",{children:t("library.bookTitle")})})}}),r.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.author")})}}),r.accessor("publicationDate",{header:function(){return(0,y.jsx)("span",{children:t("library.year")})},cell:function(e){return e.renderValue()}}),r.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,y.jsx)("span",{children:t("library.pages")})}}),r.accessor("rating",{cell:function(e){return(0,y.jsx)("i",{children:(0,y.jsx)(he.Z,{name:"simple-controlled",value:e.getValue(),size:"small",readOnly:!0})})},header:t("library.rating")}),r.accessor("action",{cell:function(e){return(0,y.jsx)("i",{children:(0,y.jsx)(je,{row:e.row.original})})},header:""})],s=(0,W.useReactTable)({data:l,columns:n,getCoreRowModel:(0,W.getCoreRowModel)()});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:Ne.title,children:t("library.already")}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("table",{className:Ne.table,children:[(0,y.jsxs)("colgroup",{children:[(0,y.jsx)("col",{span:"1",className:Ne.styleTitleBook}),(0,y.jsx)("col",{span:"1",className:Ne.styleAuthor}),(0,y.jsx)("col",{span:"2",className:Ne.styleColums}),(0,y.jsx)("col",{span:"1",className:Ne.styleRating}),(0,y.jsx)("col",{span:"1",className:Ne.styleResume})]}),(0,y.jsx)("thead",{children:s.getHeaderGroups().map((function(e){return(0,y.jsx)("tr",{children:e.headers.map((function(e){return(0,y.jsx)("th",{className:Ne.tableTitleCell,children:e.isPlaceholder?null:(0,W.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,y.jsx)("tbody",{children:s.getRowModel().rows.map((function(e){return(0,y.jsx)("tr",{className:Ne.tableRow,children:e.getVisibleCells().map((function(e){return(0,y.jsx)("td",{children:(0,W.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,y.jsx)("div",{})]})]})},ve=function(e){var a=e.alreadyReadListBooks,t=(0,J.Z)();return(0,y.jsx)(y.Fragment,{children:t?(0,y.jsx)(fe,{alreadyReadListBooks:a}):(0,y.jsx)(ye,{alreadyReadListBooks:a})})},Te=t(9962),Re=function(){var e=(0,u.QJ)(),a=e.data,t=e.isLoading,r=null===a||void 0===a?void 0:a.filter((function(e){return"finished"===e.status})),n=null===a||void 0===a?void 0:a.filter((function(e){return"reading_now"===e.status})),s=null===a||void 0===a?void 0:a.filter((function(e){return"going_to_read"===e.status}));return t?(0,y.jsx)(Te.Z,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{children:(0,y.jsx)(T,{addedBookTitles:null===a||void 0===a?void 0:a.map((function(e){return e.bookTitle}))})}),!(null!==a&&void 0!==a&&a.length)&&!t&&(0,y.jsx)(S,{}),a&&(0,y.jsxs)(M,{children:[r.length>0&&(0,y.jsx)(ve,{alreadyReadListBooks:r}),n.length>0&&(0,y.jsx)(ue,{readingNowListBooks:n}),s.length>0&&(0,y.jsx)(K,{goingToReadListBooks:s})]})]})}}}]);
//# sourceMappingURL=363.57b596c0.chunk.js.map