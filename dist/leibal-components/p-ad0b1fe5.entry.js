import{r as t,h as i,H as o}from"./p-2cae6716.js";let s=class{constructor(i){t(this,i),this.bottomOffset=0,this.show=!1}handleMouseEnter(){this.show=!0}handleMouseLeave(){this.show=!1}handleResize(){this.calculateWrapperHeight()}componentDidLoad(){this.calculateWrapperHeight()}calculateWrapperHeight(){const{height:t}=this.wrapperEl.getBoundingClientRect();this.bottomOffset=t}render(){return i(o,null,i("div",{class:"tooltip"},i("div",{style:{bottom:this.bottomOffset-1+"px"},class:"tooltip__content "+(this.show?"tooltip__content--visible":"")},i("slot",{name:"content"})),i("div",{ref:t=>this.wrapperEl=t},i("slot",{name:"wrapper"}))))}};s.style=":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.tooltip{position:relative;width:100%}.tooltip__content{background-color:var(--color-light);border:1px solid var(--color-dark);left:0;margin-left:auto;margin-right:auto;opacity:0;padding:5rem;position:absolute;right:0;transition:visibility 0s ease-in-out .3s,opacity .3s ease-in-out;visibility:hidden;z-index:1}.tooltip__content--visible{opacity:1;transition-delay:0s;visibility:visible}";export{s as tool_tip}