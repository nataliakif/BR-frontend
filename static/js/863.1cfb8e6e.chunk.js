"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[863],{3986:function(e,n,t){t.d(n,{Z:function(){return be}});var o=t(9439),i=t(3366),r=t(7462),a=t(2791),s=t(7563);function l(e){return e&&e.ownerDocument||document}var c=t(8956);function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];e.apply(this,o),n.apply(this,o)}}),(function(){}))}var d=t(4419),f=t(4164),p=t(5721),v=t(2971),m=t(184);var h=a.forwardRef((function(e,n){var t=e.children,i=e.container,r=e.disablePortal,l=void 0!==r&&r,c=a.useState(null),u=(0,o.Z)(c,2),d=u[0],h=u[1],b=(0,s.Z)(a.isValidElement(t)?t.ref:null,n);return(0,p.Z)((function(){l||h(function(e){return"function"===typeof e?e():e}(i)||document.body)}),[i,l]),(0,p.Z)((function(){if(d&&!l)return(0,v.Z)(n,d),function(){(0,v.Z)(n,null)}}),[n,d,l]),l?a.isValidElement(t)?a.cloneElement(t,{ref:b}):t:(0,m.jsx)(a.Fragment,{children:d?f.createPortal(t,d):d})})),b=t(5671),y=t(3144),E=t(3433);function x(e){return l(e).defaultView||window}function g(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Z(e){return parseInt(x(e).getComputedStyle(e).paddingRight,10)||0}function S(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}function R(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,r=[n,t].concat((0,E.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===r.indexOf(e),t=!S(e);n&&t&&g(e,i)}))}function k(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function w(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=l(e);return n.body===e?x(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var i=function(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}(l(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(Z(o)+i,"px");var r=l(o).querySelectorAll(".mui-fixed");[].forEach.call(r,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(Z(e)+i,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=l(o).body;else{var s=o.parentElement,c=x(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===c.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var T=function(){function e(){(0,b.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,y.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&g(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);R(n,e.mount,e.modalRef,o,!0);var i=k(this.containers,(function(e){return e.container===n}));return-1!==i?(this.containers[i].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=k(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=w(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=k(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(t,1),0===i.modals.length)i.restore&&i.restore(),e.modalRef&&g(e.modalRef,n),R(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{var r=i.modals[i.modals.length-1];r.modalRef&&g(r.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),C=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function F(e){var n=[],t=[];return Array.from(e.querySelectorAll(C)).forEach((function(e,o){var i=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==i&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===i?n.push(e):t.push({documentOrder:o,tabIndex:i,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function A(){return!0}var N=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,i=e.disableEnforceFocus,r=void 0!==i&&i,c=e.disableRestoreFocus,u=void 0!==c&&c,d=e.getTabbable,f=void 0===d?F:d,p=e.isEnabled,v=void 0===p?A:p,h=e.open,b=a.useRef(),y=a.useRef(null),E=a.useRef(null),x=a.useRef(null),g=a.useRef(null),Z=a.useRef(!1),S=a.useRef(null),R=(0,s.Z)(n.ref,S),k=a.useRef(null);a.useEffect((function(){h&&S.current&&(Z.current=!o)}),[o,h]),a.useEffect((function(){if(h&&S.current){var e=l(S.current);return S.current.contains(e.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex",-1),Z.current&&S.current.focus()),function(){u||(x.current&&x.current.focus&&(b.current=!0,x.current.focus()),x.current=null)}}}),[h]),a.useEffect((function(){if(h&&S.current){var e=l(S.current),n=function(n){var t=S.current;if(null!==t)if(e.hasFocus()&&!r&&v()&&!b.current){if(!t.contains(e.activeElement)){if(n&&g.current!==n.target||e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(!Z.current)return;var o=[];if(e.activeElement!==y.current&&e.activeElement!==E.current||(o=f(S.current)),o.length>0){var i,a,s=Boolean((null==(i=k.current)?void 0:i.shiftKey)&&"Tab"===(null==(a=k.current)?void 0:a.key)),l=o[0],c=o[o.length-1];s?c.focus():l.focus()}else t.focus()}}else b.current=!1},t=function(n){k.current=n,!r&&v()&&"Tab"===n.key&&e.activeElement===S.current&&n.shiftKey&&(b.current=!0,E.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){"BODY"===e.activeElement.tagName&&n()}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,r,u,v,h,f]);var w=function(e){null===x.current&&(x.current=e.relatedTarget),Z.current=!0};return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)("div",{tabIndex:h?0:-1,onFocus:w,ref:y,"data-testid":"sentinelStart"}),a.cloneElement(n,{ref:R,onFocus:function(e){null===x.current&&(x.current=e.relatedTarget),Z.current=!0,g.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,m.jsx)("div",{tabIndex:h?0:-1,onFocus:w,ref:E,"data-testid":"sentinelEnd"})]})},M=t(5878),P=t(1217);function O(e){return(0,P.Z)("MuiModal",e)}(0,M.Z)("MuiModal",["root","hidden"]);var L=function(e){return"string"===typeof e};var I=t(8182);function j(e){if(void 0===e)return{};var n={};return Object.keys(e).filter((function(n){return!(n.match(/^on[A-Z]/)&&"function"===typeof e[n])})).forEach((function(t){n[t]=e[t]})),n}function D(e){var n=e.getSlotProps,t=e.additionalProps,o=e.externalSlotProps,i=e.externalForwardedProps,a=e.className;if(!n){var s=(0,I.Z)(null==i?void 0:i.className,null==o?void 0:o.className,a,null==t?void 0:t.className),l=(0,r.Z)({},null==t?void 0:t.style,null==i?void 0:i.style,null==o?void 0:o.style),c=(0,r.Z)({},t,i,o);return s.length>0&&(c.className=s),Object.keys(l).length>0&&(c.style=l),{props:c,internalRef:void 0}}var u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};var t={};return Object.keys(e).filter((function(t){return t.match(/^on[A-Z]/)&&"function"===typeof e[t]&&!n.includes(t)})).forEach((function(n){t[n]=e[n]})),t}((0,r.Z)({},i,o)),d=j(o),f=j(i),p=n(u),v=(0,I.Z)(null==p?void 0:p.className,null==t?void 0:t.className,a,null==i?void 0:i.className,null==o?void 0:o.className),m=(0,r.Z)({},null==p?void 0:p.style,null==t?void 0:t.style,null==i?void 0:i.style,null==o?void 0:o.style),h=(0,r.Z)({},p,t,f,d);return v.length>0&&(h.className=v),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:p.ref}}function B(e,n){return"function"===typeof e?e(n):e}var V=["elementType","externalSlotProps","ownerState"];function z(e){var n,t=e.elementType,o=e.externalSlotProps,a=e.ownerState,l=(0,i.Z)(e,V),c=B(o,a),u=D((0,r.Z)({},l,{externalSlotProps:c})),d=u.props,f=u.internalRef,p=(0,s.Z)(f,(0,s.Z)(null==c?void 0:c.ref,null==(n=e.additionalProps)?void 0:n.ref)),v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return L(e)?n:(0,r.Z)({},n,{ownerState:(0,r.Z)({},n.ownerState,t)})}(t,(0,r.Z)({},d,{ref:p}),a);return v}var H=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"];var K=new T,U=a.forwardRef((function(e,n){var t,f=e.children,p=e.classes,v=e.closeAfterTransition,b=void 0!==v&&v,y=e.component,E=void 0===y?"div":y,x=e.components,Z=void 0===x?{}:x,S=e.componentsProps,R=void 0===S?{}:S,k=e.container,w=e.disableAutoFocus,T=void 0!==w&&w,C=e.disableEnforceFocus,F=void 0!==C&&C,A=e.disableEscapeKeyDown,M=void 0!==A&&A,P=e.disablePortal,L=void 0!==P&&P,I=e.disableRestoreFocus,j=void 0!==I&&I,D=e.disableScrollLock,B=void 0!==D&&D,V=e.hideBackdrop,U=void 0!==V&&V,W=e.keepMounted,X=void 0!==W&&W,Y=e.manager,q=void 0===Y?K:Y,G=e.onBackdropClick,_=e.onClose,J=e.onKeyDown,Q=e.open,$=e.onTransitionEnter,ee=e.onTransitionExited,ne=(0,i.Z)(e,H),te=a.useState(!0),oe=(0,o.Z)(te,2),ie=oe[0],re=oe[1],ae=a.useRef({}),se=a.useRef(null),le=a.useRef(null),ce=(0,s.Z)(le,n),ue=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),de=null==(t=e["aria-hidden"])||t,fe=function(){return ae.current.modalRef=le.current,ae.current.mountNode=se.current,ae.current},pe=function(){q.mount(fe(),{disableScrollLock:B}),le.current.scrollTop=0},ve=(0,c.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(k)||l(se.current).body;q.add(fe(),e),le.current&&pe()})),me=a.useCallback((function(){return q.isTopModal(fe())}),[q]),he=(0,c.Z)((function(e){se.current=e,e&&(Q&&me()?pe():g(le.current,de))})),be=a.useCallback((function(){q.remove(fe(),de)}),[q,de]);a.useEffect((function(){return function(){be()}}),[be]),a.useEffect((function(){Q?ve():ue&&b||be()}),[Q,be,ue,b,ve]);var ye=(0,r.Z)({},e,{classes:p,closeAfterTransition:b,disableAutoFocus:T,disableEnforceFocus:F,disableEscapeKeyDown:M,disablePortal:L,disableRestoreFocus:j,disableScrollLock:B,exited:ie,hideBackdrop:U,keepMounted:X}),Ee=function(e){var n=e.open,t=e.exited,o=e.classes,i={root:["root",!n&&t&&"hidden"]};return(0,d.Z)(i,O,o)}(ye),xe={};void 0===f.props.tabIndex&&(xe.tabIndex="-1"),ue&&(xe.onEnter=u((function(){re(!1),$&&$()}),f.props.onEnter),xe.onExited=u((function(){re(!0),ee&&ee(),b&&be()}),f.props.onExited));var ge=Z.Root||E,Ze=z({elementType:ge,externalSlotProps:R.root,externalForwardedProps:ne,additionalProps:{ref:ce,role:"presentation",onKeyDown:function(e){J&&J(e),"Escape"===e.key&&me()&&(M||(e.stopPropagation(),_&&_(e,"escapeKeyDown")))}},className:Ee.root,ownerState:ye}),Se=Z.Backdrop,Re=z({elementType:Se,externalSlotProps:R.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),_&&_(e,"backdropClick"))},open:Q},ownerState:ye});return X||Q||ue&&!ie?(0,m.jsx)(h,{ref:he,container:k,disablePortal:L,children:(0,m.jsxs)(ge,(0,r.Z)({},Ze,{children:[!U&&Se?(0,m.jsx)(Se,(0,r.Z)({},Re)):null,(0,m.jsx)(N,{disableEnforceFocus:F,disableAutoFocus:T,disableRestoreFocus:j,isEnabled:me,open:Q,children:a.cloneElement(f,xe)})]}))}):null})),W=t(6863),X=t(8929),Y=t(4578),q=!1,G=t(5545),_="unmounted",J="exited",Q="entering",$="entered",ee="exiting",ne=function(e){function n(n,t){var o;o=e.call(this,n,t)||this;var i,r=t&&!t.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?r?(i=J,o.appearStatus=Q):i=$:i=n.unmountOnExit||n.mountOnEnter?_:J,o.state={status:i},o.nextCallback=null,o}(0,Y.Z)(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===_?{status:J}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==Q&&t!==$&&(n=Q):t!==Q&&t!==$||(n=ee)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,o=this.props.timeout;return e=n=t=o,null!=o&&"number"!==typeof o&&(e=o.exit,n=o.enter,t=void 0!==o.appear?o.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===Q){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this);t&&function(e){e.scrollTop}(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:_})},t.performEnter=function(e){var n=this,t=this.props.enter,o=this.context?this.context.isMounting:e,i=this.props.nodeRef?[o]:[f.findDOMNode(this),o],r=i[0],a=i[1],s=this.getTimeouts(),l=o?s.appear:s.enter;!e&&!t||q?this.safeSetState({status:$},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,a),this.safeSetState({status:Q},(function(){n.props.onEntering(r,a),n.onTransitionEnd(l,(function(){n.safeSetState({status:$},(function(){n.props.onEntered(r,a)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:f.findDOMNode(this);n&&!q?(this.props.onExit(o),this.safeSetState({status:ee},(function(){e.props.onExiting(o),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:J},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:J},(function(){e.props.onExited(o)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,n.nextCallback=null,e(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(t&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],r=i[0],a=i[1];this.props.addEndListener(r,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===_)return null;var n=this.props,t=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(G.Z.Provider,{value:null},"function"===typeof t?t(e,o):a.cloneElement(a.Children.only(t),o))},n}(a.Component);function te(){}ne.contextType=G.Z,ne.propTypes={},ne.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:te,onEntering:te,onEntered:te,onExit:te,onExiting:te,onExited:te},ne.UNMOUNTED=_,ne.EXITED=J,ne.ENTERING=Q,ne.ENTERED=$,ne.EXITING=ee;var oe=ne,ie=t(4142);function re(e,n){var t,o,i=e.timeout,r=e.easing,a=e.style,s=void 0===a?{}:a;return{duration:null!=(t=s.transitionDuration)?t:"number"===typeof i?i:i[n.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof r?r[n.mode]:r,delay:s.transitionDelay}}var ae=t(7933),se=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],le={entering:{opacity:1},entered:{opacity:1}},ce=a.forwardRef((function(e,n){var t=(0,ie.Z)(),o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,l=e.appear,c=void 0===l||l,u=e.children,d=e.easing,f=e.in,p=e.onEnter,v=e.onEntered,h=e.onEntering,b=e.onExit,y=e.onExited,E=e.onExiting,x=e.style,g=e.timeout,Z=void 0===g?o:g,S=e.TransitionComponent,R=void 0===S?oe:S,k=(0,i.Z)(e,se),w=a.useRef(null),T=(0,ae.Z)(u.ref,n),C=(0,ae.Z)(w,T),F=function(e){return function(n){if(e){var t=w.current;void 0===n?e(t):e(t,n)}}},A=F(h),N=F((function(e,n){!function(e){e.scrollTop}(e);var o=re({style:x,timeout:Z,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),p&&p(e,n)})),M=F(v),P=F(E),O=F((function(e){var n=re({style:x,timeout:Z,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),b&&b(e)})),L=F(y);return(0,m.jsx)(R,(0,r.Z)({appear:c,in:f,nodeRef:w,onEnter:N,onEntered:M,onEntering:A,onExit:O,onExited:L,onExiting:P,addEndListener:function(e){s&&s(w.current,e)},timeout:Z},k,{children:function(e,n){return a.cloneElement(u,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},le[e],x,u.props.style),ref:C},n))}}))}));function ue(e){return(0,P.Z)("MuiBackdrop",e)}(0,M.Z)("MuiBackdrop",["root","invisible"]);var de=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],fe=(0,W.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),pe=a.forwardRef((function(e,n){var t,o,a=(0,X.Z)({props:e,name:"MuiBackdrop"}),s=a.children,l=a.component,c=void 0===l?"div":l,u=a.components,f=void 0===u?{}:u,p=a.componentsProps,v=void 0===p?{}:p,h=a.className,b=a.invisible,y=void 0!==b&&b,E=a.open,x=a.transitionDuration,g=a.TransitionComponent,Z=void 0===g?ce:g,S=(0,i.Z)(a,de),R=(0,r.Z)({},a,{component:c,invisible:y}),k=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,d.Z)(t,ue,n)}(R);return(0,m.jsx)(Z,(0,r.Z)({in:E,timeout:x},S,{children:(0,m.jsx)(fe,{"aria-hidden":!0,as:null!=(t=f.Root)?t:c,className:(0,I.Z)(k.root,h),ownerState:(0,r.Z)({},R,null==(o=v.root)?void 0:o.ownerState),classes:k,ref:n,children:s})}))})),ve=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],me=(0,W.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),he=(0,W.ZP)(pe,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),be=a.forwardRef((function(e,n){var t,s,l=(0,X.Z)({name:"MuiModal",props:e}),c=l.BackdropComponent,u=void 0===c?he:c,d=l.BackdropProps,f=l.closeAfterTransition,p=void 0!==f&&f,v=l.children,h=l.component,b=l.components,y=void 0===b?{}:b,E=l.componentsProps,x=void 0===E?{}:E,g=l.disableAutoFocus,Z=void 0!==g&&g,S=l.disableEnforceFocus,R=void 0!==S&&S,k=l.disableEscapeKeyDown,w=void 0!==k&&k,T=l.disablePortal,C=void 0!==T&&T,F=l.disableRestoreFocus,A=void 0!==F&&F,N=l.disableScrollLock,M=void 0!==N&&N,P=l.hideBackdrop,O=void 0!==P&&P,I=l.keepMounted,j=void 0!==I&&I,D=l.theme,V=(0,i.Z)(l,ve),z=a.useState(!0),H=(0,o.Z)(z,2),K=H[0],W=H[1],Y={closeAfterTransition:p,disableAutoFocus:Z,disableEnforceFocus:R,disableEscapeKeyDown:w,disablePortal:C,disableRestoreFocus:A,disableScrollLock:M,hideBackdrop:O,keepMounted:j},q=(0,r.Z)({},l,Y,{exited:K}),G=function(e){return e.classes}(q),_=null!=(t=null!=(s=y.Root)?s:h)?t:me;return(0,m.jsx)(U,(0,r.Z)({components:(0,r.Z)({Root:_,Backdrop:u},y),componentsProps:{root:function(){return(0,r.Z)({},B(x.root,q),!L(_)&&{as:h,theme:D})},backdrop:function(){return(0,r.Z)({},d,B(x.backdrop,q))}},onTransitionEnter:function(){return W(!1)},onTransitionExited:function(){return W(!0)},ref:n},V,{classes:G},Y,{children:v}))}))},9868:function(e,n,t){t.d(n,{Z:function(){return z}});var o=t(9439),i=t(4942),r=t(3366),a=t(7462),s=t(2791),l=t.t(s,2),c=t(8182),u={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},d=t(4419),f=t(4142),p=0;var v=l.useId;var m=function(e){if(void 0!==v){var n=v();return null!=e?e:n}return function(e){var n=s.useState(e),t=(0,o.Z)(n,2),i=t[0],r=t[1],a=e||i;return s.useEffect((function(){null==i&&r("mui-".concat(p+=1))}),[i]),a}(e)},h=t(9853),b=t(4938),y=t(2763),E=t(7933),x=t(1245),g=t(184),Z=(0,x.Z)((0,g.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),S=(0,x.Z)((0,g.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),R=t(8929),k=t(6863),w=t(1217);function T(e){return(0,w.Z)("MuiRating",e)}var C=(0,t(5878).Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),F=["value"],A=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function N(e,n){if(null==e)return e;var t=Math.round(e/n)*n;return Number(t.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var M=(0,k.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,i.Z)({},"& .".concat(C.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,h.Z)(t.size))],t.readOnly&&n.readOnly]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,a.Z)((n={display:"inline-flex",position:"relative",fontSize:t.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,i.Z)(n,"&.".concat(C.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"}),(0,i.Z)(n,"&.".concat(C.focusVisible," .").concat(C.iconActive),{outline:"1px solid #999"}),(0,i.Z)(n,"& .".concat(C.visuallyHidden),u),n),"small"===o.size&&{fontSize:t.typography.pxToRem(18)},"large"===o.size&&{fontSize:t.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})})),P=(0,k.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){return n.label}})((function(e){var n=e.ownerState;return(0,a.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),O=(0,k.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var t=e.ownerState;return[n.icon,t.iconEmpty&&n.iconEmpty,t.iconFilled&&n.iconFilled,t.iconHover&&n.iconHover,t.iconFocus&&n.iconFocus,t.iconActive&&n.iconActive]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(n.vars||n).palette.action.disabled})})),L=(0,k.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,k.Dz)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var t=e.iconActive;return[n.decimal,t&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,a.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function I(e){var n=(0,r.Z)(e,F);return(0,g.jsx)("span",(0,a.Z)({},n))}function j(e){var n=e.classes,t=e.disabled,o=e.emptyIcon,i=e.focus,r=e.getLabelText,l=e.highlightSelectedOnly,u=e.hover,d=e.icon,f=e.IconContainerComponent,p=e.isActive,v=e.itemValue,h=e.labelProps,b=e.name,y=e.onBlur,E=e.onChange,x=e.onClick,Z=e.onFocus,S=e.readOnly,R=e.ownerState,k=e.ratingValue,w=l?v===k:v<=k,T=v<=u,C=v<=i,F=v===e.ratingValueRounded,A=m(),N=(0,g.jsx)(O,{as:f,value:v,className:(0,c.Z)(n.icon,w?n.iconFilled:n.iconEmpty,T&&n.iconHover,C&&n.iconFocus,p&&n.iconActive),ownerState:(0,a.Z)({},R,{iconEmpty:!w,iconFilled:w,iconHover:T,iconFocus:C,iconActive:p}),children:o&&!w?o:d});return S?(0,g.jsx)("span",(0,a.Z)({},h,{children:N})):(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)(P,(0,a.Z)({ownerState:(0,a.Z)({},R,{emptyValueFocused:void 0}),htmlFor:A},h,{children:[N,(0,g.jsx)("span",{className:n.visuallyHidden,children:r(v)})]})),(0,g.jsx)("input",{className:n.visuallyHidden,onFocus:Z,onBlur:y,onChange:E,onClick:x,disabled:t,value:v,id:A,type:"radio",name:b,checked:F})]})}var D=(0,g.jsx)(Z,{fontSize:"inherit"}),B=(0,g.jsx)(S,{fontSize:"inherit"});function V(e){return"".concat(e," Star").concat(1!==e?"s":"")}var z=s.forwardRef((function(e,n){var t=(0,R.Z)({name:"MuiRating",props:e}),i=t.className,l=t.defaultValue,u=void 0===l?null:l,p=t.disabled,v=void 0!==p&&p,x=t.emptyIcon,Z=void 0===x?B:x,S=t.emptyLabelText,k=void 0===S?"Empty":S,w=t.getLabelText,C=void 0===w?V:w,F=t.highlightSelectedOnly,O=void 0!==F&&F,z=t.icon,H=void 0===z?D:z,K=t.IconContainerComponent,U=void 0===K?I:K,W=t.max,X=void 0===W?5:W,Y=t.name,q=t.onChange,G=t.onChangeActive,_=t.onMouseLeave,J=t.onMouseMove,Q=t.precision,$=void 0===Q?1:Q,ee=t.readOnly,ne=void 0!==ee&&ee,te=t.size,oe=void 0===te?"medium":te,ie=t.value,re=(0,r.Z)(t,A),ae=m(Y),se=(0,b.Z)({controlled:ie,default:u,name:"Rating"}),le=(0,o.Z)(se,2),ce=le[0],ue=le[1],de=N(ce,$),fe=(0,f.Z)(),pe=s.useState({hover:-1,focus:-1}),ve=(0,o.Z)(pe,2),me=ve[0],he=me.hover,be=me.focus,ye=ve[1],Ee=de;-1!==he&&(Ee=he),-1!==be&&(Ee=be);var xe=(0,y.Z)(),ge=xe.isFocusVisibleRef,Ze=xe.onBlur,Se=xe.onFocus,Re=xe.ref,ke=s.useState(!1),we=(0,o.Z)(ke,2),Te=we[0],Ce=we[1],Fe=s.useRef(),Ae=(0,E.Z)(Re,Fe),Ne=(0,E.Z)(Ae,n),Me=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==he&&(n=he),ue(n),q&&q(e,n)},Pe=function(e){0===e.clientX&&0===e.clientY||(ye({hover:-1,focus:-1}),ue(null),q&&parseFloat(e.target.value)===de&&q(e,null))},Oe=function(e){Se(e),!0===ge.current&&Ce(!0);var n=parseFloat(e.target.value);ye((function(e){return{hover:e.hover,focus:n}}))},Le=function(e){if(-1===he){Ze(e),!1===ge.current&&Ce(!1);ye((function(e){return{hover:e.hover,focus:-1}}))}},Ie=s.useState(!1),je=(0,o.Z)(Ie,2),De=je[0],Be=je[1],Ve=(0,a.Z)({},t,{defaultValue:u,disabled:v,emptyIcon:Z,emptyLabelText:k,emptyValueFocused:De,focusVisible:Te,getLabelText:C,icon:H,IconContainerComponent:U,max:X,precision:$,readOnly:ne,size:oe}),ze=function(e){var n=e.classes,t=e.size,o=e.readOnly,i=e.disabled,r=e.emptyValueFocused,a=e.focusVisible,s={root:["root","size".concat((0,h.Z)(t)),i&&"disabled",a&&"focusVisible",o&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[r&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,d.Z)(s,T,n)}(Ve);return(0,g.jsxs)(M,(0,a.Z)({ref:Ne,onMouseMove:function(e){J&&J(e);var n,t=Fe.current,o=t.getBoundingClientRect(),i=o.right,r=o.left,a=t.firstChild.getBoundingClientRect().width;n="rtl"===fe.direction?(i-e.clientX)/(a*X):(e.clientX-r)/(a*X);var s=N(X*n+$/2,$);s=function(e,n,t){return e<n?n:e>t?t:e}(s,$,X),ye((function(e){return e.hover===s&&e.focus===s?e:{hover:s,focus:s}})),Ce(!1),G&&he!==s&&G(e,s)},onMouseLeave:function(e){_&&_(e);ye({hover:-1,focus:-1}),G&&-1!==he&&G(e,-1)},className:(0,c.Z)(ze.root,i),ownerState:Ve,role:ne?"img":null,"aria-label":ne?C(Ee):null},re,{children:[Array.from(new Array(X)).map((function(e,n){var t=n+1,o={classes:ze,disabled:v,emptyIcon:Z,focus:be,getLabelText:C,highlightSelectedOnly:O,hover:he,icon:H,IconContainerComponent:U,name:ae,onBlur:Le,onChange:Me,onClick:Pe,onFocus:Oe,ratingValue:Ee,ratingValueRounded:de,readOnly:ne,ownerState:Ve},i=t===Math.ceil(Ee)&&(-1!==he||-1!==be);if($<1){var r=Array.from(new Array(1/$));return(0,g.jsx)(L,{className:(0,c.Z)(ze.decimal,i&&ze.iconActive),ownerState:Ve,iconActive:i,children:r.map((function(e,n){var i=N(t-1+(n+1)*$,$);return(0,g.jsx)(j,(0,a.Z)({},o,{isActive:!1,itemValue:i,labelProps:{style:r.length-1===n?{}:{width:i===Ee?"".concat((n+1)*$*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),i)}))},t)}return(0,g.jsx)(j,(0,a.Z)({},o,{isActive:i,itemValue:t}),t)})),!ne&&!v&&(0,g.jsxs)(P,{className:(0,c.Z)(ze.label,ze.labelEmptyValue),ownerState:Ve,children:[(0,g.jsx)("input",{className:ze.visuallyHidden,value:"",id:"".concat(ae,"-empty"),type:"radio",name:ae,checked:null==de,onFocus:function(){return Be(!0)},onBlur:function(){return Be(!1)},onChange:Me}),(0,g.jsx)("span",{className:ze.visuallyHidden,children:k})]})]}))}))},4142:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var o=t(3459),i=t(4205);function r(){return(0,o.Z)(i.Z)}}}]);
//# sourceMappingURL=863.1cfb8e6e.chunk.js.map