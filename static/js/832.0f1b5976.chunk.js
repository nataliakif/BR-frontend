"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[832],{9894:function(e,t,a){a.d(t,{Z:function(){return i}});var n={main:"Button_main__uCMI5",transparent:"Button_transparent__33FBX"},s=a(184),i=function(e){var t=e.className,a=e.type,i=void 0===a?"button":a,r=e.text,o=e.onClick,l=e.disabled,d=void 0!==l&&l;return(0,s.jsx)("button",{className:"".concat(n[t]),type:i,onClick:o||null,disabled:d,children:r})}},3263:function(e,t,a){a.d(t,{k:function(){return u}});var n=a(2982),s="Chart_container__F837V",i="Chart_chart__title__2Sd6S",r="Chart_trainigPlan__title__pR5-M",o=a(6305),l=a(9683),d=a(184);o.kL.register(o.uw,o.f$,o.od,o.jn,o.Dx,o.u,o.De);var c={id:"customLegend",afterDraw:function(e,t,a){var n,s,i=e._metasets,r=e.ctx;r.font="bold 12px Montserat",r.textBaseLine="middle",r.textAlign="center",i.forEach((function(e){r.fillStyle=e._dataset.borderColor,n=e.data[e.data.length-1].x-5*e._dataset.label.length,s=e.data[e.data.length-1].y-10,r.fillText(e._dataset.label,n,s)})),r.fillStyle="#091E3F",r.fillText("TIME",n,e.chartArea.height+23)}},u=function(e){var t=e.plan,a=e.readingStatistics,o=a.map((function(e){return e.date})),u=a.map((function(e){return e.pageAmount})),_=1===u.length?[].concat((0,n.Z)(u),(0,n.Z)(u)):u,h=Math.max.apply(Math,(0,n.Z)(_)),m=[t,t];1===o.length&&(m=[].concat((0,n.Z)(o),(0,n.Z)(o))),o.length>1&&(m=o);var x=2*t>h?2*t:h+=.1*h,p={responsive:!0,maintainAspectRatio:!1,layout:{padding:{bottom:20}},plugins:{legend:{display:!1}},scales:{x:{ticks:{display:!1}},y:{min:0===t?-5:1,max:0===t?5:x,ticks:{display:!1},grid:{display:!1}}}},f={labels:m,datasets:[{label:"PLAN",data:_.length>0?(0,n.Z)(_.map((function(e){return t}))):[t,t],backgroundColor:"#F5F7FA",borderColor:"rgb(0, 0, 0)",pointBorderColor:"rgb(0, 0, 0)",pointBorderWidth:4}]};return _.length>0&&f.datasets.push({label:"ACT",data:_,backgroundColor:"#F5F7FA",borderColor:"#FF6B08",pointBorderColor:"#FF6B08",pointBorderWidth:4,tension:.3}),(0,d.jsxs)("div",{className:s,children:[(0,d.jsxs)("p",{className:i,children:["Amont of pages / DAY"," ",(0,d.jsx)("span",{className:r,children:t})]}),(0,d.jsx)(l.x1,{options:p,data:f,plugins:[c]})]})}},3087:function(e,t,a){a.d(t,{Z:function(){return i}});var n="Container_container__VVOCq",s=a(184),i=function(e){var t=e.children;return(0,s.jsx)("div",{className:n,children:t})}},9321:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(2791),s=a(4164),i="Modal_modal__DJDMv",r="Modal_overlay__r63M6",o=a(184),l=function(e){var t=e.open,a=e.onClose,l=e.children,d=(0,n.useRef)(document.getElementById("modal-root"));(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return t&&(0,s.createPortal)((0,o.jsx)("div",{className:r,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,o.jsx)("div",{className:i,children:l})}),d.current)}},8641:function(e,t,a){a.d(t,{Z:function(){return o}});var n={containerTwoGoals:"MyGoals_containerTwoGoals__01LkU",containerThreeGoals:"MyGoals_containerThreeGoals__1EOIQ MyGoals_containerTwoGoals__01LkU MyGoals_containerTwoGoals__01LkU",allTwoGoals:"MyGoals_allTwoGoals__BdKM6",allThreeGoals:"MyGoals_allThreeGoals__RIe0G MyGoals_allTwoGoals__BdKM6",twoGoals:"MyGoals_twoGoals__5FwJw",threeGoals:"MyGoals_threeGoals__J44wd"},s=a(184),i=function(e){var t=e.header,a=e.amount;return(0,s.jsxs)("div",{className:n.twoGoals,children:[(0,s.jsx)("p",{children:a}),(0,s.jsx)("h4",{children:t})]})},r=function(e){var t=e.header,a=e.amount;return(0,s.jsxs)("div",{className:n.threeGoals,children:[(0,s.jsx)("p",{children:a}),(0,s.jsx)("h4",{children:t})]})},o=function(e){var t=e.bookAmount,a=void 0===t?0:t,o=e.daysAmount,l=void 0===o?0:o,d=e.booksLeft,c=void 0===d?0:d,u=e.showBooksLeft,_=void 0!==u&&u,h=c>0?"containerThreeGoals":"containerTwoGoals",m=_?"allThreeGoals":"allTwoGoals";return(0,s.jsxs)("div",{className:n[h],children:[(0,s.jsx)("h2",{children:"My goals"}),(0,s.jsx)("div",{className:n[m],children:_?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{header:"Amount of books",amount:a}),(0,s.jsx)(r,{header:"Amount of days",amount:l}),(0,s.jsx)(r,{header:"Books left",amount:c})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{header:"Amount of books",amount:a}),(0,s.jsx)(i,{header:"Amount of days",amount:l})]})})]})}},6640:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(6809),s=a(6580),i=a(184);function r(){return(0,i.jsx)(n.Z,{sx:{marginTop:20,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(s.Z,{})})}},4215:function(e,t){t.Z=function(e,t){return(new Date(t)-new Date(e))/864e5}},1832:function(e,t,a){a.r(t),a.d(t,{default:function(){return _e}});var n=a(885),s=a(1413),i=a(3087),r=a(2791),o=function(e){var t=new Date(e).getTime(),a=(0,r.useState)(t-(new Date).getTime()),s=(0,n.Z)(a,2),i=s[0],o=s[1];return(0,r.useEffect)((function(){var e=setInterval((function(){o(t-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}),[t]),l(i)},l=function(e){return[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]},d="CountdownTimers_countdownTimers__65svO",c="CountdownTimers_countdownTimer__fLLw2",u="CountdownTimers_showCounter__92KaE",_="CountdownTimers_countdown__e4ucU",h=a(184),m=function(e){var t=e.value,a=e.type;return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("p",{children:function(e){return("0"+e).slice(-2)}(t)}),(0,h.jsx)("span",{children:a})]})},x=function(e){var t=e.header,a=e.days,n=e.hours,s=e.minutes,i=e.seconds;return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("h3",{children:t}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)(m,{value:a,type:"DAYS"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(m,{value:n,type:"HRS"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(m,{value:s,type:"MINS"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(m,{value:i,type:"SECS"})]})]})},p=function(e){var t=e.targetDate,a=o(Date.parse(new Date((new Date).getFullYear()+1,0,1))),s=(0,n.Z)(a,4),i=s[0],r=s[1],l=s[2],c=s[3],u=o(t),_=(0,n.Z)(u,4),m=_[0],p=_[1],f=_[2],g=_[3];return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)(x,{header:"Years countdown",days:i,hours:r,minutes:l,seconds:c}),(0,h.jsx)(x,{header:"Goals countdown",days:m,hours:p,minutes:f,seconds:g})]})},f=a(8641),g=a(2982),j="AddResult_form__U0FlF",v="AddResult_error__khE7D AddResult_name__343Jd",w="AddResult_title__6tx4a",b="AddResult_wrapper__ewCKK",N="AddResult_name__343Jd",y="AddResult_iconSvg__ZUEQV",A="AddResult_fieldWrapper__hR3R1",T="AddResult_input__XbO5A",Z="AddResult_button__U2YeA",D="AddResult_statisticsTitle__3pFEj",k="AddResult_statistics__vn51X",S="AddResult_item__qy6EO",C="AddResult_data__xRDFO",R="AddResult_day__Ym6uC AddResult_data__xRDFO",F="AddResult_pages__rynsr AddResult_data__xRDFO",M=a(9894);var G=a.p+"static/media/sprite.f42120851c40e3eba5a3e0c92334d786.svg",L=a(5705),B=(a(8639),a(9513)),E=a.n(B),O=function(e){var t=Object.assign({},e),a=(0,L.u6)().setFieldValue,i=(0,L.U$)(t),r=(0,n.Z)(i,1)[0];return(0,h.jsx)(E(),(0,s.Z)((0,s.Z)((0,s.Z)({},r),t),{},{selected:r.value&&new Date(r.value)||null,onChange:function(e){a(r.name,e)}}))},P=a(9321);var I=a.p+"static/media/sprite.ac6b92002578bf2eee8d8e944eec9102.svg",K="DoingFineModal_wrapper__oHZXm",U="DoingFineModal_wrapper_svg__t5wB+",Y="DoingFineModal_wrapper_text__rO6Sl",V="DoingFineModal_buttons__7qAtX",W=function(e){var t=e.open,a=e.onClose;e.onNewTraining;return(0,h.jsx)(P.Z,{open:t,onClose:a,children:(0,h.jsxs)("div",{className:K,children:[(0,h.jsx)("svg",{className:U,children:(0,h.jsx)("use",{href:"".concat(I,"#icon-thumb_up")})}),(0,h.jsx)("p",{className:Y,children:"Well done! but you need to be a little bit faster. You can do it"}),(0,h.jsx)("div",{className:V,children:(0,h.jsx)(M.Z,{className:"main",text:"Ok",onClick:a})})]})})},J=a(1724),X=function(e){var t=e.data,a=e.updateResult,i=e.hideAddBtn,o=void 0!==i&&i;console.log(t);var l=t.goalPerDay,d=t.startDate,c=t.finishDate,u=t.readStatistics,_=(0,r.useState)(!1),m=(0,n.Z)(_,2),x=m[0],p=m[1],f=(0,g.Z)(u).sort((function(e,t){return new Date(t.dateTime)-new Date(e.dateTime)}));console.log(u);var B=J.Ry().shape({pages:J.Rx().integer("Enter an integer.").positive("The number of pages is more than 1").min(1,"May not be less then 1").max(t.trainingPagesAmount,"More then the pages in training").required("Fill the number of read pages.").typeError("The number of pages must be from 1 to 1000")});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(L.J9,{initialValues:{date:new Date,pages:""},onSubmit:function(e){a((0,s.Z)((0,s.Z)({},t),{},{trainingId:t._id,readStatistics:[].concat((0,g.Z)(t.readStatistics),[{dateTime:e.date,pageAmount:e.pages}])})),l&&l>e.pages&&p(!0)},validationSchema:B,children:function(e){e.values;return(0,h.jsxs)(L.l0,{className:j,children:[(0,h.jsx)("h2",{className:w,children:"Result"}),(0,h.jsxs)("div",{className:b,children:[(0,h.jsxs)("div",{className:A,children:[(0,h.jsx)("p",{className:N,children:"Date"}),(0,h.jsx)(O,{name:"date",className:T,minDate:new Date(d),maxDate:new Date(c)}),(0,h.jsx)("svg",{className:y,style:{width:"24px"},children:(0,h.jsx)("use",{href:"".concat(G,"#icon-Polygon")})})]}),(0,h.jsxs)("div",{className:A,children:[(0,h.jsx)("p",{className:N,children:"Amount of pages"}),(0,h.jsx)(L.gN,{className:T,type:"number",name:"pages"}),(0,h.jsx)("span",{className:v,children:(0,h.jsx)(L.Bc,{name:"pages"})})]})]}),(0,h.jsx)("div",{className:Z,children:(0,h.jsx)(M.Z,{type:"submit",disabled:o,className:"main",text:"AddResult"})}),(0,h.jsx)("h2",{className:D,children:"STATISTICS"}),u&&(0,h.jsx)("ul",{className:k,children:f.map((function(e,t){var a=e.pageAmount,n=e.dateTime;return(0,h.jsxs)("li",{className:S,children:[(0,h.jsx)("p",{className:R,children:new Date(n).toLocaleDateString()}),(0,h.jsx)("p",{className:C,children:new Date(n).toLocaleTimeString()}),(0,h.jsxs)("p",{className:F,children:[a,(0,h.jsx)("span",{children:"pages"})]})]},t)}))})]})}}),(0,h.jsx)(W,{open:x,onClose:function(){p(!1)}})]})},q="StatisticView_statistics__3pyfn",H="StatisticView_leftWrapper__XlUj4",Q=a(657),$=a(7689),z=a(6640),ee={listHeader:"StatisticsList_listHeader__7UiOe",header:"StatisticsList_header__IBz-r",item:"StatisticsList_item__jsgp0",list:"StatisticsList_list__4lB1N",itemBook:"StatisticsList_itemBook__c3YZk",icon:"StatisticsList_icon__AYGpy",dots:"StatisticsList_dots__WeG-w",author:"StatisticsList_author__V0CdK",trainingWrapper:"StatisticsList_trainingWrapper__atNbt",title:"StatisticsList_title__fRRww"},te=a(1614),ae=function(e){var t=e.books;return(0,h.jsxs)("div",{className:ee.trainingWrapper,children:[(0,h.jsx)("ul",{className:ee.header,children:["Title","Author","Year","Pages"].map((function(e){return(0,h.jsx)("li",{className:ee.header_item,children:e},e)}))}),(0,h.jsx)("ul",{className:ee.list,children:null===t||void 0===t?void 0:t.map((function(e){var t=e._id,a=e.bookTitle,n=e.author,s=e.alreadyFinished,i=e.amountOfPages,r=e.publicationDate;return(0,h.jsxs)("li",{className:ee.item,children:[(0,h.jsxs)("div",{className:ee.title,children:[(0,h.jsx)(te.Z,{checked:s,name:t}),(0,h.jsx)("p",{children:a})]}),(0,h.jsx)("p",{children:n}),(0,h.jsx)("p",{children:r}),(0,h.jsx)("p",{children:i})," "]},t)}))})]})},ne=a(4215),se=a(3263),ie=function(e){var t=(0,g.Z)(new Set(e.map((function(e){return e.dateTime.slice(0,10)})))).map((function(t){return{date:t,pageAmount:e.filter((function(e){return e.dateTime.slice(0,10)===t})).reduce((function(e,t){return e+Number.parseInt(t.pageAmount)}),0)}}));return null!==t&&void 0!==t?t:[]},re=a(7020),oe="TrainingExecutedModal_wrapper__+K-Zi",le="TrainingExecutedModal_wrapper_svg__e03MA",de="TrainingExecutedModal_wrapper_text__KaKml",ce="TrainingExecutedModal_buttons__bqRmK",ue=function(e){var t=e.isLoading,a=e.handleCloseOfTraining,s=(0,r.useState)(!0),i=(0,n.Z)(s,2),o=i[0],l=i[1],d=function(){return l(!1)};return(0,h.jsx)(P.Z,{onClose:d,open:o,children:(0,h.jsxs)("div",{className:oe,children:[(0,h.jsx)("svg",{className:le,children:(0,h.jsx)("use",{href:"".concat(I,"#icon-thumb_up")})}),(0,h.jsx)("p",{className:de,children:"Congratulations! All books have been read!"}),(0,h.jsxs)("div",{className:ce,children:[(0,h.jsx)(M.Z,{className:"main",text:"NewTraining",onClick:a,disabled:t}),(0,h.jsx)(M.Z,{className:"transparent",text:"Back",onClick:d})]})]})})},_e=function(){var e,t,a=(0,Q.FR)(),o=a.data,l=a.isLoading,d=(0,Q.gZ)(),c=(0,n.Z)(d,2),u=c[0],_=c[1].isLoading,m=(0,re.jd)(),x=(0,n.Z)(m,1)[0],g=(0,$.s0)(),j=(0,r.useState)(null),v=(0,n.Z)(j,2),w=v[0],b=v[1],N=(0,Q.t_)(),y=(0,n.Z)(N,1)[0],A=null!==(e=(null===w||void 0===w?void 0:w.alreadyReadPages)>=(null===w||void 0===w?void 0:w.trainingPagesAmount))&&void 0!==e&&e;(0,r.useEffect)((function(){if(o){var e,t=o.startDate,a=o.finishDate,n=o.books,i=o.readStatistics,r=o._id,l=(0,ne.Z)(t,a),d=null!==(e=n.reduce((function(e,t){return e+Number.parseInt(t.amountOfPages)}),0))&&void 0!==e?e:0,c=o.readStatistics.reduce((function(e,t){return e+Number.parseInt(t.pageAmount)}),0),u=function(e,t){for(var a=t,n=e.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{alreadyFinished:!1})})),i=0;i<n.length;i+=1)n[i].amountOfPages<=a&&(n[i].alreadyFinished=!0),a-=n[i].amountOfPages;return n}(n,c),_=u.filter((function(e){return!e.alreadyFinished})).length;b((function(e){return{_id:r,startDate:t,finishDate:a,readStatistics:i,trainingDaysAmount:l,trainingPagesAmount:d,goalPerDay:Math.round(d/l),alreadyReadPages:c,books:u,notFinishedBooksAmount:_,userHadReadNewBook:_<(null===e||void 0===e?void 0:e.notFinishedBooksAmount)}}))}else g("/training")}),[g,o]);return l?(0,h.jsx)(z.Z,{}):w&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{children:(0,h.jsxs)("div",{className:q,children:[(0,h.jsxs)("div",{className:H,children:[(0,h.jsx)(p,{targetDate:new Date(w.finishDate).getTime()}),(0,h.jsx)(ae,{books:w.books})]}),(0,h.jsx)(f.Z,{bookAmount:w.books.length,daysAmount:w.trainingDaysAmount,booksLeft:w.notFinishedBooksAmount,showBooksLeft:!0})]})}),(0,h.jsx)(i.Z,{children:(0,h.jsxs)("div",{className:q,children:[(0,h.jsx)("div",{className:H,children:(0,h.jsx)(se.k,{plan:w.goalPerDay,readingStatistics:ie(null!==(t=w.readStatistics)&&void 0!==t?t:[])})}),(0,h.jsx)(X,{data:w,updateResult:y,hideAddBtn:A})]})}),A&&(0,h.jsx)(ue,{handleCloseOfTraining:function(){w.books.forEach((function(e){x((0,s.Z)((0,s.Z)({},e),{},{id:e._id,status:"finished"}))})),u(o._id)},isLoading:_})," "]})}}}]);
//# sourceMappingURL=832.0f1b5976.chunk.js.map