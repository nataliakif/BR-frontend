"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[251],{7609:function(e,a,t){t(2791);a.Z=t.p+"static/media/sprite.eae12e22071ff6adf3410e6ca45f2db7.svg"},3087:function(e,a,t){t.d(a,{Z:function(){return l}});var n="Container_container__VVOCq",r=t(184),l=function(e){var a=e.children;return(0,r.jsx)("div",{className:n,children:a})}},1251:function(e,a,t){t.r(a),t.d(a,{default:function(){return Be}});var n=t(3087),r=t(885),l=t(2791),s=t(5705),o="InputBook_form__dAEEg",i="InputBook_form__container__wbTGf",c="InputBook_label__0B4lt",d="InputBook_button__VauTs",u="InputBook_title__fB1S8",h="InputBook_author__1z94P",_="InputBook_yearPages__QnfhL",m="InputBook_bookError__XRet7",x=t(1724),p=x.Ry().shape({title:x.Z_().min(2,"The title of the book is short.").max(50,"The title is too long.").matches(/\S\w/,"Cannot start with a space and hyphen").required("Enter the title of the book.").typeError("Enter the title of the book from 1 to 50 characters."),author:x.Z_().required("Enter the author of the book.").matches(/\S\D/,"Cannot start with a space and number").min(2,"The author's name is short.").max(50,"The author's name is too long.").typeError("Enter the author of the book from 2 to 150 characters."),publishYear:x.Rx().integer("Enter an integer.").min(1e3,"Are you reading the manuscript?").max(2023,"This book has not yet appeared.").typeError("Enter the year of publication of the book from 1000 to 2022."),pagesTotal:x.Rx("Enter a number").integer("Enter an integer.").min(1,"The number of pages is more than 1.").max(99999,"The number of pages is less than 99999.").required("Fill in the number of pages.").typeError("Enter the number of pages from 1 to 99999.")}),g=t(7020),j=t(184),b={title:"",author:"",publishYear:"",pagesTotal:""};var f=function(){var e=(0,g.RQ)(),a=(0,r.Z)(e,2),t=a[0],n=a[1].isLoading;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(s.J9,{initialValues:b,validationSchema:p,children:function(e){var a=e.values,r=e.handleChange,l=e.handleBlur,x=e.resetForm;e.isValid;return(0,j.jsxs)(s.l0,{className:o,action:"submit",onSubmit:function(e){e.preventDefault(),t({bookTitle:a.title,author:a.author,publicationDate:a.publishYear,amountOfPages:a.pagesTotal}),x()},children:[(0,j.jsxs)("div",{className:i,children:[(0,j.jsxs)("label",{className:c,children:["Book title",(0,j.jsx)(s.gN,{id:"title",className:u,type:"text",name:"title",autoComplete:"off",onChange:r,onBlur:l,placeholder:"...",value:a.title,required:!0}),(0,j.jsx)(s.Bc,{component:"div",name:"title",className:m})]}),(0,j.jsxs)("label",{className:c,children:["Author",(0,j.jsx)(s.gN,{id:"author",className:h,type:"text",name:"author",autoComplete:"off",onChange:r,onBlur:l,placeholder:"...",value:a.author,required:!0}),(0,j.jsx)(s.Bc,{component:"div",name:"author",className:m})]}),(0,j.jsxs)("label",{className:c,children:["Publication date",(0,j.jsx)(s.gN,{id:"year",className:_,type:"number",name:"publishYear",autoComplete:"off",onChange:r,onBlur:l,placeholder:"...",value:a.publishYear}),(0,j.jsx)(s.Bc,{component:"div",name:"publishYear",className:m})]}),(0,j.jsxs)("label",{className:c,children:["Amount of page",(0,j.jsx)(s.gN,{id:"pages",className:_,type:"number",name:"pagesTotal",autoComplete:"off",onChange:r,onBlur:l,placeholder:"...",value:a.pagesTotal,required:!0}),(0,j.jsx)(s.Bc,{component:"div",name:"pagesTotal",className:m})]})]}),(0,j.jsx)("button",{className:d,type:"submit",disabled:n,children:"Add"})]})}})})},N="ContainerLibrary_container__2qaIS",R=function(e){var a=e.children;return(0,j.jsx)("div",{className:N,children:a})},T=t(6809),v=t(3986),y={modal:"StartModal_modal__Sgez+",firstTitle:"StartModal_firstTitle__MR+ii",firstStep:"StartModal_firstStep__+Rnc1",firstDesc:"StartModal_firstDesc__bkKfu",firstStepIcon:"StartModal_firstStepIcon__C4wOQ",firstStepIconDesc:"StartModal_firstStepIconDesc__nx0cK",secondTitle:"StartModal_secondTitle__6YZ35",secondStep:"StartModal_secondStep__nVjTT",secondStepDesc:"StartModal_secondStepDesc__e99Vt",secondStepIcon:"StartModal_secondStepIcon__ii-6U",secondStepIconDesc:"StartModal_secondStepIconDesc__PSf8H",stepWrapper:"StartModal_stepWrapper__Vbzcp",okBtn:"StartModal_okBtn__yAfx4"};var B=t.p+"static/media/symbol-defs.7c43a5741b2c0a3a6cc4b52856d6d726.svg";var k=function(){var e=(0,l.useState)(!0),a=(0,r.Z)(e,2),t=a[0],n=a[1],s=function(){return n(!1)};return(0,j.jsx)("div",{className:y.buttonWrapper,children:(0,j.jsx)(v.Z,{open:t,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsxs)(T.Z,{onClose:s,className:y.modal,children:[(0,j.jsxs)("div",{className:y.firstStepWrapper,children:[(0,j.jsx)("p",{className:y.firstTitle,children:"Step1."}),(0,j.jsx)("svg",{className:y.firstStepIcon,width:"22px",height:"17px",children:(0,j.jsx)("use",{href:"".concat(B,"#icon-flat-grey")})}),(0,j.jsx)("p",{className:y.firstStep,children:"Create your own library"}),(0,j.jsx)("svg",{className:y.firstStepIconDesc,width:"10px",height:"12px",children:(0,j.jsx)("use",{href:"".concat(B,"#icon-Vector")})}),(0,j.jsx)("p",{className:y.firstDesc,children:"Add there books which you are going to read"})]}),(0,j.jsxs)("div",{className:y.stepWrapper,children:[(0,j.jsx)("p",{className:y.secondTitle,children:"Step2."}),(0,j.jsx)("svg",{className:y.secondStepIcon,width:"22px",height:"17px",children:(0,j.jsx)("use",{href:"".concat(B,"#icon-flag")})}),(0,j.jsx)("p",{className:y.secondStep,children:"Create your first training"}),(0,j.jsx)("svg",{className:y.secondStepIconDesc,width:"10px",height:"12px",children:(0,j.jsx)("use",{href:"".concat(B,"#icon-Vector")})}),(0,j.jsx)("p",{className:y.secondStepDesc,children:"Set a goal, choose period, start training"})]}),(0,j.jsx)("button",{onClose:s,className:y.okBtn,children:"Ok"})]})})})},M={goingToReadMobilesection:"GoingToReadMobile_goingToReadMobilesection__6ylnL",title:"GoingToReadMobile_title__awc0D",card:"GoingToReadMobile_card__hdQlz",cardBook:"GoingToReadMobile_cardBook__7mLXA",cardBookWrapper:"GoingToReadMobile_cardBookWrapper__mAKyB",cardTitle:"GoingToReadMobile_cardTitle__Y-Pv3",cardTableBody:"GoingToReadMobile_cardTableBody__VpC0J",tableTitle:"GoingToReadMobile_tableTitle__oBgyF",tableContent:"GoingToReadMobile_tableContent__5J2vg"},w=function(e){var a=e.goingToReadListBooks;return(0,j.jsxs)("section",{className:M.goingToReadMobilesection,children:[(0,j.jsx)("h2",{className:M.title,children:"Going to read "}),(0,j.jsx)("ul",{className:M.card,children:a.map((function(e){var a=e._id,t=e.bookTitle,n=e.author,r=e.publicationDate,l=e.amountOfPages;return(0,j.jsx)("li",{className:M.cardBook,children:(0,j.jsxs)("div",{className:M.cardBookWrapper,children:[(0,j.jsx)("h3",{className:M.cardTitle,children:t}),(0,j.jsx)("table",{className:M.cardTable,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{className:M.cardTableBody,children:[(0,j.jsx)("th",{className:M.tableTitle,children:"Author:"}),(0,j.jsx)("td",{className:M.tableContent,children:n})]}),(0,j.jsxs)("tr",{className:M.cardTableBody,children:[(0,j.jsx)("th",{className:M.tableTitle,children:"Year:"}),(0,j.jsx)("td",{className:M.tableContent,children:r})]}),(0,j.jsxs)("tr",{className:M.cardTableBody,children:[(0,j.jsx)("th",{className:M.tableTitle,children:"Pages:"}),(0,j.jsx)("td",{className:M.tableContent,children:l})]})]})})]})},a)}))})]})},C=t(9023),S=function(e,a){var t=e.split(" ").filter((function(e){return e})).join(" ");if(t.length>a){var n=t.substring(0,a);return n.substring(0,Math.max(n.lastIndexOf(" "),n.lastIndexOf(",")+1))+" ..."}return t},A="GoingToReadMain_title__c8CCa",Z="GoingToReadMain_titleBookWrapper__J01T1",W="GoingToReadMain_titleBook__aFC4g",D="GoingToReadMain_iconWrapper__QJi-i",V="GoingToReadMain_icon__x7wPW",P="GoingToReadMain_table__dbBhY",G="GoingToReadMain_tableTitleCell__X64jP",L="GoingToReadMain_tablerow__0+leZ",I="GoingToReadMain_style__PCB1g",E=t(7609),O=function(e){var a=e.goingToReadListBooks,t=a,n=(0,C.createColumnHelper)(a),r=[n.accessor("bookTitle",{cell:function(e){return(0,j.jsx)("i",{children:(0,j.jsxs)("div",{className:Z,children:[(0,j.jsx)("div",{className:D,children:(0,j.jsxs)("svg",{className:V,width:"22",height:"17",children:[(0,j.jsx)("use",{href:E.Z+"#icon-open-book"})," "]})}),(0,j.jsx)("div",{className:W,children:S(e.getValue(),77)})]})})},header:function(){return(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:"Book title"})})}}),n.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Author"})}}),n.accessor("publicationDate",{header:function(){return(0,j.jsx)("span",{children:"Year"})},cell:function(e){return e.renderValue()}}),n.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Pages"})}})],l=(0,C.useReactTable)({data:t,columns:r,getCoreRowModel:(0,C.getCoreRowModel)()});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:A,children:"Going to read "}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("table",{className:P,children:[(0,j.jsx)("colgroup",{children:(0,j.jsx)("col",{span:"1",className:I})}),(0,j.jsx)("thead",{children:l.getHeaderGroups().map((function(e){return(0,j.jsx)("tr",{children:e.headers.map((function(e){return(0,j.jsx)("th",{className:G,children:e.isPlaceholder?null:(0,C.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,j.jsx)("tbody",{children:l.getRowModel().rows.map((function(e){return(0,j.jsx)("tr",{className:L,children:e.getVisibleCells().map((function(e){return(0,j.jsx)("td",{children:(0,C.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,j.jsx)("div",{})]})]})},Y=function(){return window.innerWidth<=767};var z=function(){var e=(0,l.useState)(Y()),a=(0,r.Z)(e,2),t=a[0],n=a[1];return(0,l.useEffect)((function(){var e=function(){n(Y())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t},F=function(e){var a=e.goingToReadListBooks,t=z();return(0,j.jsx)(j.Fragment,{children:t?(0,j.jsx)(w,{goingToReadListBooks:a}):(0,j.jsx)(O,{goingToReadListBooks:a})})},q={readingNowMobileSection:"ReadingNowMobile_readingNowMobileSection__dvP+8",title:"ReadingNowMobile_title__MRzr7",cardBook:"ReadingNowMobile_cardBook__fsWst",cardBookWrapper:"ReadingNowMobile_cardBookWrapper__eNq+j",cardTitle:"ReadingNowMobile_cardTitle__OI9yS",cardTableBody:"ReadingNowMobile_cardTableBody__QEZ0r",tableTitle:"ReadingNowMobile_tableTitle__wvBHI",tableContent:"ReadingNowMobile_tableContent__VmLjs"},H=function(e){var a=e.readingNowListBooks;return(0,j.jsxs)("section",{className:q.readingNowMobileSection,children:[(0,j.jsx)("h2",{className:q.title,children:"Reading now"}),(0,j.jsx)("ul",{className:q.card,children:a.map((function(e){var a=e._id,t=e.bookTitle,n=e.author,r=e.publicationDate,l=e.amountOfPages;return(0,j.jsx)("li",{className:q.cardBook,children:(0,j.jsxs)("div",{className:q.cardBookWrapper,children:[(0,j.jsx)("h3",{className:q.cardTitle,children:t}),(0,j.jsx)("table",{className:q.cardTable,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{className:q.cardTableBody,children:[(0,j.jsx)("th",{className:q.tableTitle,children:"Author:"}),(0,j.jsx)("td",{className:q.tableContent,children:n})]}),(0,j.jsxs)("tr",{className:q.cardTableBody,children:[(0,j.jsx)("th",{className:q.tableTitle,children:"Year:"}),(0,j.jsx)("td",{className:q.tableContent,children:r})]}),(0,j.jsxs)("tr",{className:q.cardTableBody,children:[(0,j.jsx)("th",{className:q.tableTitle,children:"Pages:"}),(0,j.jsx)("td",{className:q.tableContent,children:l})]})]})})]})},a)}))})]})},J="ReadingNowMain_title__QWui1",Q="ReadingNowMain_titleBookWrapper__1GNvZ",K="ReadingNowMain_titleBook__jpar2",X="ReadingNowMain_iconWrapper__7hc92",U="ReadingNowMain_icon__Kg1+R",$="ReadingNowMain_table__zHvdb",ee="ReadingNowMain_tableTitleCell__-S+oz",ae="ReadingNowMain_tablerow__Dgznn",te="ReadingNowMain_style__NGItl",ne=function(e){var a=e.readingNowListBooks,t=a,n=(0,C.createColumnHelper)(a),r=[n.accessor("bookTitle",{cell:function(e){return(0,j.jsx)("i",{children:(0,j.jsxs)("div",{className:Q,children:[(0,j.jsx)("div",{className:X,children:(0,j.jsxs)("svg",{className:U,width:"22",height:"17",children:[(0,j.jsx)("use",{href:E.Z+"#icon-open-book"})," "]})}),(0,j.jsx)("div",{className:K,children:S(e.getValue(),77)})]})})},header:function(){return(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:"Book title"})})}}),n.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Author"})}}),n.accessor("publicationDate",{header:function(){return(0,j.jsx)("span",{children:"Year"})},cell:function(e){return e.renderValue()}}),n.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Pages"})}})],l=(0,C.useReactTable)({data:t,columns:r,getCoreRowModel:(0,C.getCoreRowModel)()});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:J,children:"Reading now"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("table",{className:$,children:[(0,j.jsx)("colgroup",{children:(0,j.jsx)("col",{span:"1",className:te})}),(0,j.jsx)("thead",{children:l.getHeaderGroups().map((function(e){return(0,j.jsx)("tr",{children:e.headers.map((function(e){return(0,j.jsx)("th",{className:ee,children:e.isPlaceholder?null:(0,C.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,j.jsx)("tbody",{children:l.getRowModel().rows.map((function(e){return(0,j.jsx)("tr",{className:ae,children:e.getVisibleCells().map((function(e){return(0,j.jsx)("td",{children:(0,C.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,j.jsx)("div",{})]})]})},re=function(e){var a=e.readingNowListBooks,t=z();return(0,j.jsx)(j.Fragment,{children:t?(0,j.jsx)(H,{readingNowListBooks:a}):(0,j.jsx)(ne,{readingNowListBooks:a})})},le=t(1413),se=t(5987),oe=t(9868),ie="ResumeModal_box__Kol9A",ce="ResumeModal_title__4GcvR",de="ResumeModal_textAreaBox__1DZ43",ue="ResumeModal_buttonList__YSWG6",he="ResumeModal_titleTextarea__zhmCi",_e="ResumeModal_buttonOpen__EKxhM",me="ResumeModal_buttonWrapper__aN5-u",xe="ResumeModal_buttonBack__3vz49",pe="ResumeModal_buttonSave__z06zV",ge=["field","form"],je=function(e){var a=e.field,t=(e.form,(0,se.Z)(e,ge));return(0,j.jsx)("textarea",(0,le.Z)((0,le.Z)({},a),t))},be=function(e){var a=e.row,t=(0,l.useState)(!1),n=(0,r.Z)(t,2),o=n[0],i=n[1],c=(0,l.useState)(),d=(0,r.Z)(c,2),u=d[0],h=d[1],_=(0,g.jd)(),m=(0,r.Z)(_,1)[0],x=function(){i(!1),h({})};return(0,j.jsxs)("div",{className:me,children:[(0,j.jsx)("button",{className:_e,onClick:function(){i(!0),h(a)},children:"Resume"}),(0,j.jsx)(v.Z,{open:o,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsx)("div",{className:ie,children:(0,j.jsxs)(T.Z,{children:[(0,j.jsx)("h3",{className:ce,children:"Choose rating of the book"}),(0,j.jsx)(s.J9,{initialValues:{rating:2},onSubmit:function(e){m((0,le.Z)((0,le.Z)({},u),{},{id:u._id})),i(!1)},children:function(e){e.errors,e.touched,e.isValidating;return(0,j.jsxs)(s.l0,{children:[(0,j.jsx)(oe.Z,{name:"rating",value:u.rating,size:"small",onChange:function(e,a){h((0,le.Z)((0,le.Z)({},u),{},{rating:a}))},precision:1}),(0,j.jsx)("p",{className:he,children:"Resume"}),(0,j.jsx)(s.gN,{value:u.review,name:"review",placeholder:"...",className:de,component:je,onChange:function(e){h((0,le.Z)((0,le.Z)({},u),{},{review:e.target.value}))}}),(0,j.jsxs)("ul",{className:ue,children:[(0,j.jsx)("li",{children:(0,j.jsx)("button",{className:xe,type:"submit",onClick:x,children:"Back"})}),(0,j.jsx)("li",{children:(0,j.jsx)("button",{className:pe,type:"submit",children:"Save"})})]})]})}})]})})})]})},fe={cardBookWrapper:"AlreadyReadMobile_cardBookWrapper__QXEC7",title:"AlreadyReadMobile_title__1WKye",cardBook:"AlreadyReadMobile_cardBook__6zRTB",cardTitleBook:"AlreadyReadMobile_cardTitleBook__O4pcJ",cardTitle:"AlreadyReadMobile_cardTitle__z3umE",cardTableBody:"AlreadyReadMobile_cardTableBody__pPYAH",tableTitle:"AlreadyReadMobile_tableTitle__VFg-7",tableContent:"AlreadyReadMobile_tableContent__6aeST",buttonWrapper:"AlreadyReadMobile_buttonWrapper__MIWC3"},Ne=function(e){var a=e.alreadyReadListBooks,t=(0,g.jd)(),n=(0,r.Z)(t,1)[0];return(0,j.jsxs)("section",{className:fe.listAlreadyRead,children:[(0,j.jsx)("h2",{className:fe.title,children:"Already read"}),(0,j.jsx)("ul",{className:fe.card,children:a.map((function(e){var a=e._id,t=e.bookTitle,r=e.author,l=e.publicationDate,s=e.amountOfPages,o=e.review,i=e.rating,c={_id:a,bookTitle:t,author:r,publicationDate:l,amountOfPages:s,review:o,rating:i};return(0,j.jsxs)("li",{className:fe.cardBook,children:[(0,j.jsxs)("div",{className:fe.cardBookWrapper,children:[(0,j.jsx)("h3",{className:fe.cardTitle,children:t}),(0,j.jsx)("div",{className:fe.cardTableBook,children:(0,j.jsx)("table",{className:fe.cardTable,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{className:fe.cardTableBody,children:[(0,j.jsx)("th",{className:fe.tableTitle,children:"Author:"}),(0,j.jsx)("td",{className:fe.tableContent,children:r})]}),(0,j.jsxs)("tr",{className:fe.cardTableBody,children:[(0,j.jsx)("th",{className:fe.tableTitle,children:"Year:"}),(0,j.jsx)("td",{className:fe.tableContent,children:l})]}),(0,j.jsxs)("tr",{className:fe.cardTableBody,children:[(0,j.jsx)("th",{className:fe.tableTitle,children:"Pages:"}),(0,j.jsx)("td",{className:fe.tableContent,children:s})]}),(0,j.jsxs)("tr",{className:fe.cardTableBody,children:[(0,j.jsx)("th",{className:fe.tableTitle,children:"Rating:"}),(0,j.jsx)("td",{className:fe.tableContent,children:(0,j.jsx)(oe.Z,{name:"simple-controlled",value:i,precision:.5,onChange:function(e,i){n({id:a,bookTitle:t,author:r,publicationDate:l,amountOfPages:s,review:o,rating:i})}})})]})]})})})]}),(0,j.jsx)("div",{className:fe.buttonWrapper,children:(0,j.jsx)(be,{row:c})})]},a)}))})]})},Re={title:"AlreadyReadMain_title__qnR58",titleBookWrapper:"AlreadyReadMain_titleBookWrapper__359Wu",titleBook:"AlreadyReadMain_titleBook__6TV4D",iconWrapper:"AlreadyReadMain_iconWrapper__vWqv5",icon:"AlreadyReadMain_icon__Jlwwx",table:"AlreadyReadMain_table__KrrJV",tableTitleCell:"AlreadyReadMain_tableTitleCell__L3tjB",tableRow:"AlreadyReadMain_tableRow__NeCX8",styleTitleBook:"AlreadyReadMain_styleTitleBook__v06o2",styleAuthor:"AlreadyReadMain_styleAuthor__3+hSX",styleColums:"AlreadyReadMain_styleColums__D1eYO",styleRating:"AlreadyReadMain_styleRating__P7mUI",stylyResume:"AlreadyReadMain_stylyResume__+vZUG"},Te=function(e){var a=e.step,t=e.openedBook,n=(0,g.jd)(),l=(0,r.Z)(n,1)[0],s=t._id,o=t.bookTitle,i=t.author,c=t.publicationDate,d=t.amountOfPages,u=t.review;return(0,j.jsx)(oe.Z,{name:"simple-controlled",value:t.rating,precision:a,onChange:function(e,a){l({id:s,bookTitle:o,author:i,publicationDate:c,amountOfPages:d,review:u,rating:a})}})},ve=function(e){var a=e.alreadyReadListBooks,t=a,n=(0,C.createColumnHelper)(a),r=[n.accessor("bookTitle",{cell:function(e){return(0,j.jsx)("i",{children:(0,j.jsxs)("div",{className:Re.titleBookWrapper,children:[(0,j.jsx)("div",{className:Re.iconWrapper,children:(0,j.jsxs)("svg",{className:Re.icon,width:"22",height:"17",children:[(0,j.jsx)("use",{href:E.Z+"#icon-open-book"})," "]})}),(0,j.jsx)("div",{className:Re.titleBook,children:S(e.getValue(),25)})]})})},header:function(){return(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:"Book title"})})}}),n.accessor("author",{id:"author",cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Author"})}}),n.accessor("publicationDate",{header:function(){return(0,j.jsx)("span",{children:"Year"})},cell:function(e){return e.renderValue()}}),n.accessor("amountOfPages",{cell:function(e){return e.getValue()},header:function(){return(0,j.jsx)("span",{children:"Pages"})}}),n.accessor("rating",{cell:function(e){return(0,j.jsx)("i",{children:(0,j.jsx)(Te,{step:.5,openedBook:e.row.original})})},header:"Rating"}),n.accessor("action",{cell:function(e){return(0,j.jsx)("i",{children:(0,j.jsx)(be,{row:e.row.original})})},header:""})],l=(0,C.useReactTable)({data:t,columns:r,getCoreRowModel:(0,C.getCoreRowModel)()});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:Re.title,children:"Already read"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("table",{className:Re.table,children:[(0,j.jsxs)("colgroup",{children:[(0,j.jsx)("col",{span:"1",className:Re.styleTitleBook}),(0,j.jsx)("col",{span:"1",className:Re.styleAuthor}),(0,j.jsx)("col",{span:"2",className:Re.styleColums}),(0,j.jsx)("col",{span:"1",className:Re.styleRating}),(0,j.jsx)("col",{span:"1",className:Re.styleResume})]}),(0,j.jsx)("thead",{children:l.getHeaderGroups().map((function(e){return(0,j.jsx)("tr",{children:e.headers.map((function(e){return(0,j.jsx)("th",{className:Re.tableTitleCell,children:e.isPlaceholder?null:(0,C.flexRender)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,j.jsx)("tbody",{children:l.getRowModel().rows.map((function(e){return(0,j.jsx)("tr",{className:Re.tableRow,children:e.getVisibleCells().map((function(e){return(0,j.jsx)("td",{children:(0,C.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)}))})]}),(0,j.jsx)("div",{})]})]})},ye=function(e){var a=e.alreadyReadListBooks,t=z();return(0,j.jsx)(j.Fragment,{children:t?(0,j.jsx)(Ne,{alreadyReadListBooks:a}):(0,j.jsx)(ve,{alreadyReadListBooks:a})})},Be=function(){var e=(0,g.QJ)(),a=e.data,t=e.isLoading,r=null===a||void 0===a?void 0:a.filter((function(e){return"finished"===e.status})),l=null===a||void 0===a?void 0:a.filter((function(e){return"reading_now"===e.status})),s=null===a||void 0===a?void 0:a.filter((function(e){return"going_to_read"===e.status}));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(n.Z,{children:(0,j.jsx)(f,{})}),!(null!==a&&void 0!==a&&a.length)&&!t&&(0,j.jsx)(k,{}),a&&(0,j.jsxs)(R,{children:[r.length>0&&(0,j.jsx)(ye,{alreadyReadListBooks:r}),l.length>0&&(0,j.jsx)(re,{readingNowListBooks:l}),s.length>0&&(0,j.jsx)(F,{goingToReadListBooks:s})]})]})}}}]);
//# sourceMappingURL=251.465adb91.chunk.js.map