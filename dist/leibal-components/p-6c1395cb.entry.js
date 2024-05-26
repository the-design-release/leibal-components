import{r as t,h as o,H as e,a as i}from"./p-fa07a3fd.js";const s=t=>{let o=t.parentNode;for(;o&&"contents"===getComputedStyle(o,null).getPropertyValue("display");)o=o.parentNode;return o||window};let n=null;"undefined"!=typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?n="sticky":CSS.supports("position","-webkit-sticky")&&(n="-webkit-sticky"));let l=!1;try{var r=Object.defineProperty({},"passive",{get(){l={passive:!0}}});window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}catch(t){}let c=class{constructor(o){t(this,o),this.startOffset=0,this.endOffset=0,this.bottom=!1,this.mode="relative",this.argsRef={offsetTop:this.startOffset,offsetBottom:this.endOffset,bottom:this.bottom,mode:this.mode}}componentDidLoad(){((t,{offsetTop:o,offsetBottom:e,bottom:i})=>{const r=(t=>{let o=t;for(;o=o.parentElement;){const t=getComputedStyle(o,null).getPropertyValue("overflow-y");if(o===document.body)return window;if("auto"===t||"scroll"===t)return o}return window})(t);let c=r===window?window.scrollY:r.scrollTop;const a=[];let d,p,w,u,f,m,h;const y=()=>"relative"===d?p:"stickyTop"===d?Math.max(0,m+c-u+o):"stickyBottom"===d?Math.max(0,m+c+h-(u+w+e)):void 0,v=t=>{t+m+h>=u+w+p+e&&k("stickyBottom")},k=s=>{if(d=s,t.style.display="block","relative"===s)if(t.style.position="relative",i){const o=Math.max(0,f-w-p);t.style.bottom=`${o}px`}else t.style.top=`${p}px`;else t.style.position=n,"stickyBottom"===s?i?t.style.bottom=`${e}px`:t.style.top=h-w-e+"px":i?t.style.bottom=h-w-e+"px":t.style.top=`${o}px`;p=y()},S=()=>{i?"stickyBottom"!==d&&k("stickyBottom"):"stickyTop"!==d&&k("stickyTop")},B=(t,o,e,i)=>{t.addEventListener(o,e,i),a.push((()=>t.removeEventListener(o,e)))},b=()=>{const t=r===window?window.scrollY:r.scrollTop;if(t===c)return;if(w+o+e<=h)return S(),void(c=t);const i=t-c;p=y(),i>0?"stickyTop"===d?t+m+o>u&&k(t+m+h<=u+w+p+e?"relative":"stickyBottom"):"relative"===d&&v(t):"stickyBottom"===d?m+t+h<u+f+e&&k(m+t+o>=u+p?"relative":"stickyTop"):"relative"===d&&m+t+o<u+p&&k("stickyTop"),c=t},T=()=>{h=window.innerHeight,m=0,b()},g=()=>{h=r.offsetHeight,m=r.firstChild.offsetParent===r?r.getBoundingClientRect().top:0,b()},x=()=>{const o=s(t),e=getComputedStyle(o,null),n=parseInt(e.getPropertyValue("padding-top"),10),l=n+parseInt(e.getPropertyValue("padding-bottom"),10);u=((t,o)=>{let e=t,i=0;o.firstChild&&o.firstChild.offsetParent!==o&&(i+=t.offsetTop-o.offsetTop,o=t.offsetParent,i+=-t.offsetTop);do{i+=e.offsetTop,e=e.offsetParent}while(e&&e!==o);return i})(o,r)+n+m;const a=f;f=o.getBoundingClientRect().height-l,"relative"===d&&(i?k("relative"):a>f&&v(c)),a!==f&&"relative"===d&&(c=Number.POSITIVE_INFINITY,b())},C=({initial:s}={initial:!1})=>{const n=w;if(w=t.getBoundingClientRect().height,!s&&n!==w){if(w+o+e<=h)return d=void 0,void S();{const t=n-w,o=Math.min(f-w,y()+(i?t:0));p=Math.max(0,o),i&&"stickyBottom"===d||k("relative")}}},M=(t,o)=>{const e=new ResizeObserver(o);e.observe(t),a.push((()=>e.disconnect()))};B(r,"scroll",b,l),B(r,"mousewheel",b,l),r===window?(B(window,"resize",T),T()):(M(r,g),g()),M(s(t),x),x(),M(t,C),setTimeout((()=>{C({initial:!0})}),1e3),C({initial:!0}),S()})(this.el,this.argsRef)}componentShouldUpdate(){this.argsRef={offsetTop:this.startOffset,offsetBottom:this.endOffset,bottom:this.bottom,mode:this.mode}}render(){return o(e,null,o("slot",null))}get el(){return i(this)}};export{c as sticky_scroller}