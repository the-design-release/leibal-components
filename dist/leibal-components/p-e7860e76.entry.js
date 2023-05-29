import{r as i,h as e,g as t,H as a}from"./p-fa07a3fd.js";let n=class{constructor(e){i(this,e),this.isOpen=!0,this.platform="blog",this.isShowingLinks=!1,this.linksType="blog"}showLinks(i){this.isShowingLinks=!0,this.linksType=i}hideLinks(){this.isShowingLinks=!1}render(){return e(a,null,e("div",{class:"mobile-nav-bar"},e("div",{class:"mobile-nav-bar__icons "+(this.isOpen?"mobile-nav-bar__icons--open":"")},e("div",null,e("img",this.isOpen?{class:"mobile-nav-bar__icon",src:t("./assets/close.png"),alt:"Close Menu",style:{width:"0.88rem",height:"0.88rem"},onClick:()=>this.isOpen=!1}:{class:"mobile-nav-bar__icon",src:t("./assets/hamburger.png"),alt:"Open Menu",style:{width:"1.13rem",height:"1.13rem",marginLeft:"-0.13rem"},onClick:()=>this.isOpen=!0})),e("div",{style:{display:"flex"}},e("img",{class:"mobile-nav-bar__icon",src:t("./assets/shopping-bag.png"),alt:"Cart",style:{paddingRight:"0rem"}}),e("img",{class:"mobile-nav-bar__icon",src:t("./assets/user.png"),alt:"Account",style:{width:"0.9rem",height:"0.9rem"}}))),e("div",{class:"mobile-nav-bar__menu "+(this.isOpen?"mobile-nav-bar__menu--open":"")},e("img",{class:"mobile-nav-bar__logo",src:t("./assets/leibal-logo.png"),alt:"Logo"}),e("div",{style:{position:"relative"}},e("div",{class:"mobile-nav-bar__menu-links-container "+(this.isShowingLinks?"mobile-nav-bar__menu-links-container--open":"")},"blog"===this.linksType&&e("div",{class:"mobile-nav-bar__menu-links"},e("div",{onClick:()=>this.hideLinks(),style:{display:"flex",alignItems:"center",marginBottom:".5rem"}},e("img",{src:t("./assets/arrow.png"),style:{width:"1rem",filter:"invert(1)",transform:"rotate(-180deg)",marginRight:"0.5rem"}})," ","Stories"),e("div",null,e("div",null,e("a",{href:"#"},"Architecture")),e("div",null,e("a",{href:"#"},"Interiors")),e("div",null,e("a",{href:"#"},"Furniture")),e("div",null,e("a",{href:"#"},"Lighting")),e("div",null,e("a",{href:"#"},"Objects")),e("div",null,e("a",{href:"#"},"Travel")))),"store"===this.linksType&&e("div",{class:"mobile-nav-bar__menu-links"},e("div",{onClick:()=>this.hideLinks(),style:{display:"flex",alignItems:"center",marginBottom:"1.5rem"}},e("img",{src:t("./assets/arrow.png"),style:{width:"1rem",filter:"invert(1)",transform:"rotate(-180deg)",marginRight:"0.5rem"}})," ","Store"),e("div",null,e("div",null,e("a",{href:"#"},"Sofas")),e("div",null,e("a",{href:"#"},"Lighting")),e("div",null,e("a",{href:"#"},"Accessories")),e("div",null,e("a",{href:"#"},"Lighting")),e("div",null,e("a",{href:"#"},"Objects")),e("div",null,e("a",{href:"#"},"Trinkets"))))),e("div",{class:"mobile-nav-bar__menu-items"},e("div",{class:"mobile-nav-bar__menu-item",onClick:()=>{this.showLinks("blog")}},"Stories >"),e("div",{class:"mobile-nav-bar__menu-item",onClick:()=>{this.showLinks("store")}},"Store >")),e("div",{class:"mobile-nav-bar__submenu-items"},e("div",{class:"mobile-nav-bar__submenu-item"},"Submit"),e("div",{class:"mobile-nav-bar__submenu-item"},"Subscribe"),e("div",{class:"mobile-nav-bar__submenu-item"},"Account"),e("div",{class:"mobile-nav-bar__submenu-item"},"Cart")),e("div",{class:"mobile-nav-bar__newsletter"},e("div",{class:"mobile-nav-bar__newsletter__header"},"Newsletter"),e("div",{class:"mobile-nav-bar__newsletter__input"},e("input",{type:"text"}),e("button",null,"Send")))),e("div",{class:"mobile-nav-bar__links"},e("div",null,e("div",{class:"mobile-nav-bar__link-header"},"About"),e("div",{class:"mobile-nav-bar__link-item"},"Contact Us"),e("div",{class:"mobile-nav-bar__link-item"},"Submit"),e("div",{class:"mobile-nav-bar__link-item"},"FAQ"),e("div",{class:"mobile-nav-bar__link-item"},"Privacy"),e("div",{class:"mobile-nav-bar__link-item"},"Terms & Conditions"),e("div",{class:"mobile-nav-bar__link-item"},"Trade Program")),e("div",null,e("div",{class:"mobile-nav-bar__link-header"},"Connect"),e("div",{class:"mobile-nav-bar__link-item"},"Pinterest"),e("div",{class:"mobile-nav-bar__link-item"},"Instagram"),e("div",{class:"mobile-nav-bar__link-item"},"Facebook"),e("div",{class:"mobile-nav-bar__link-item"},"Twitter"),e("div",{class:"mobile-nav-bar__link-item"},"Tumblr"),e("div",{class:"mobile-nav-bar__link-item"},"LinkedIn"))))))}static get assetsDirs(){return["assets"]}};n.style=":host{display:block}.mobile-nav-bar{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));font-weight:300;left:0;position:fixed;right:0;top:0}.mobile-nav-bar__icons{align-items:center;border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-around;opacity:0;padding:calc(50px + 3.5rem) 1rem 3.5rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:13px;font-weight:300;margin-bottom:.5rem;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{font-size:13px;margin-bottom:.25rem}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:13px;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:400;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{font-size:12px}";export{n as mobile_nav_bar}