import{G as R,I as O,J as W,K as L,L as q,M as G,N as U,O as j,P as b,b as J,Q as K,h as c,R as $,S as C,c as w,s as N,f as u,T as E,V as Q,W as X,a as k,X as D,Y as M,Z,_ as x,$ as z,a0 as ee,a1 as re,a2 as te,e as ae,B as ne,C as ie,i as se}from"./runtime.qd1stXu0.js";const oe=["touchstart","touchmove"];function ue(e){return oe.includes(e)}function de(e){var r=W,t=L;R(null),O(null);try{return e()}finally{R(r),O(t)}}const fe=new Set,V=new Set;function le(e,r,t,i){function n(a){if(i.capture||T.call(r,a),!a.cancelBubble)return de(()=>t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?G(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function pe(e,r,t,i,n){var a={capture:i,passive:n},s=le(e,r,t,a);(r===document.body||r===window||r===document)&&q(()=>{r.removeEventListener(e,s,a)})}function T(e){var P;var r=this,t=r.ownerDocument,i=e.type,n=((P=e.composedPath)==null?void 0:P.call(e))||[],a=n[0]||e.target,s=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var m=n.indexOf(r);if(m===-1)return;f<=m&&(s=f)}if(a=n[s]||e.target,a!==r){U(e,"currentTarget",{configurable:!0,get(){return a||t}});var A=W,h=L;R(null),O(null);try{for(var o,d=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+i];if(y!==void 0&&!a.disabled)if(j(y)){var[F,...Y]=y;F.apply(a,[e,...Y])}else y.call(a,e)}catch(S){o?d.push(S):o=S}if(e.cancelBubble||p===r||p===null)break;a=p}if(o){for(let S of d)queueMicrotask(()=>{throw S});throw o}}finally{e.__root=r,delete e.currentTarget,R(A),O(h)}}}let l;function ce(){l=void 0}function ye(e){let r=null,t=c;var i;if(c){for(r=u,l===void 0&&(l=E(document.head));l!==null&&(l.nodeType!==8||l.data!==$);)l=C(l);l===null?w(!1):l=N(C(l))}c||(i=document.head.appendChild(b()));try{J(()=>e(i),K)}finally{t&&(w(!0),l=u,N(r))}}function H(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=L;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function me(e,r){var t=(r&Q)!==0,i=(r&X)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return v(u,null),u;n===void 0&&(n=H(a?e:"<!>"+e),t||(n=E(n)));var s=i?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=E(s),f=s.lastChild;v(_,f)}else v(s,s);return s}}function ge(e,r,t="svg"){var i=!e.startsWith("<!>"),n=`<${t}>${i?e:"<!>"+e}</${t}>`,a;return()=>{if(c)return v(u,null),u;if(!a){var s=H(n),_=E(s);a=E(_)}var f=a.cloneNode(!0);return v(f,f),f}}function we(e=""){if(!c){var r=b(e+"");return v(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=b()),N(t)),v(t,t),t}function Ee(){if(c)return v(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=b();return e.append(r,t),v(r,t),e}function Te(e,r){if(c){L.nodes_end=u,k();return}e!==null&&e.before(r)}function be(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function _e(e,r){return B(e,r)}function Ne(e,r){D(),r.intro=r.intro??!1;const t=r.target,i=c,n=u;try{for(var a=E(t);a&&(a.nodeType!==8||a.data!==$);)a=C(a);if(!a)throw M;w(!0),N(a),k();const s=B(e,{...r,anchor:a});if(u===null||u.nodeType!==8||u.data!==Z)throw x(),M;return w(!1),s}catch(s){if(s===M)return r.recover===!1&&z(),D(),ee(t),w(!1),_e(e,r);throw s}finally{w(i),N(n),ce()}}const g=new Map;function B(e,{target:r,anchor:t,props:i={},events:n,context:a,intro:s=!0}){D();var _=new Set,f=h=>{for(var o=0;o<h.length;o++){var d=h[o];if(!_.has(d)){_.add(d);var p=ue(d);r.addEventListener(d,T,{passive:p});var y=g.get(d);y===void 0?(document.addEventListener(d,T,{passive:p}),g.set(d,1)):g.set(d,y+1)}}};f(re(fe)),V.add(f);var m=void 0,A=te(()=>{var h=t??r.appendChild(b());return ae(()=>{if(a){ne({});var o=se;o.c=a}n&&(i.$$events=n),c&&v(h,null),m=e(h,i)||{},c&&(L.nodes_end=u),a&&ie()}),()=>{var p;for(var o of _){r.removeEventListener(o,T);var d=g.get(o);--d===0?(document.removeEventListener(o,T),g.delete(o)):g.set(o,d)}V.delete(f),h!==t&&((p=h.parentNode)==null||p.removeChild(h))}});return I.set(m,A),m}let I=new WeakMap;function Le(e,r){const t=I.get(e);return t?(I.delete(e),t(r)):Promise.resolve()}const he="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(he);export{Te as a,Ne as b,Ee as c,we as d,pe as e,ye as h,_e as m,ge as n,be as s,me as t,Le as u};
