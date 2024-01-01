import{r as e,h as i,g as t,H as o,a as r,F as s,c as a}from"./p-fa07a3fd.js";import{S as n,B as l}from"./p-9851a4b8.js";let d=class{constructor(t){e(this,t),this.isModalOpen=!1,this.formState={firstName:"",lastName:"",email:"",location:"",moreText:""},this.renderEnquireCard=()=>i("div",{class:"col-span-3 w-full cursor-pointer enquire-card",onClick:this.handleEnquireClick.bind(this)},i("div",{class:"enquire-card__preview-image"},i("div",{style:{backgroundImage:`url(${this.previewImage})`}})),i("div",{class:"enquire-card__info"},i("div",{class:"mb-8"},i("div",{class:"enquire-card__info__enquire"},"Enquire About"),i("div",{class:"enquire-card__info__title"},this.postTitle)),i("div",null,"Find out more information regarding purchasing, dimensions or lead times.")),i("div",{class:"text-xl enquire-card__button"},i("simple-button",null,"Enquire")))}componentWillLoad(){window.addEventListener("scroll",this.handleScroll.bind(this))}componentDidLoad(){window.dispatchEvent(new Event("scroll"))}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll.bind(this))}getContentPageOffset(){const e=window.getComputedStyle(this.contentElement.querySelector("div")),i=parseFloat(e.paddingTop.replace("px",""));return this.el.getBoundingClientRect().top-i}handleScroll(){const e=this.getContentPageOffset();this.contentElement.style.top=e+"px",this.isModalOpen&&(e<-this.contentElement.clientHeight||e+this.contentElement.clientHeight>window.innerHeight+this.contentElement.clientHeight)&&(this.isModalOpen=!1)}handleEnquireClick(){if(this.isModalOpen=!this.isModalOpen,this.isModalOpen){const e=this.getContentPageOffset();e<=5?window.scrollBy({behavior:"smooth",top:e-64,left:0}):e+this.contentElement.clientHeight>=window.innerHeight+5&&(window.innerWidth<768?window.scrollBy({behavior:"smooth",top:e-64,left:0}):window.scrollBy({behavior:"smooth",top:e-this.contentElement.clientHeight+64,left:0}))}}handleFormChange(e){this.formState=Object.assign(Object.assign({},this.formState),{[e.target.name]:e.target.value})}handleFormSubmit(e){e.preventDefault(),e.stopPropagation();let i="Hello,%0D%0A%0D%0A";i+=`My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle} (https://leibal.com${this.postUrl}).%0D%0A%0D%0A`,i+=`I am currently located in ${this.formState.location}.%0D%0A%0D%0A`,i+=`${this.formState.moreText.replace("\n","%0D%0A")}`;const t=document.createElement("a");return t.href=`mailto:sales@leibal.com?subject=Enquiry about ${this.postTitle}&body=${i}`,t.click(),!1}clampBodyScroll(e,i){}render(){return i(o,null,this.renderEnquireCard(),i("tele-portal",null,i("div",{class:this.isModalOpen?"enquire-modal__modal enquire-modal__modal--visible":"enquire-modal__modal",onClick:()=>{this.isModalOpen=!1}},i("form",{class:"enquire-modal__modal__content",onClick:e=>e.stopImmediatePropagation(),ref:e=>this.contentElement=e,onInput:this.handleFormChange.bind(this),onSubmit:this.handleFormSubmit.bind(this)},this.renderEnquireCard(),i("div",{class:"enquire-modal__modal__form"},i("div",null,i("simple-input",{type:"text",name:"firstName",placeholder:"First Name",required:!0}),i("simple-input",{type:"text",name:"lastName",placeholder:"Last Name",required:!0}),i("simple-input",{type:"text",name:"email",placeholder:"Email Address",required:!0}),i("simple-input",{type:"text",name:"location",placeholder:"Location",required:!0}),i("div",{class:"enquire-modal__modal__form__message"},i("div",{class:"enquire-modal__modal__form__message__title"},"Message"),i("div",{class:"enquire-modal__modal__form__message__body"},i("p",null,"Hello,"),i("p",null,"My name is ",i("u",null,this.formState.firstName||"...")," ",i("u",null,this.formState.lastName||"..."),", and I would like additional information regarding ",i("u",null,this.postTitle)," (https://leibal.com",this.postUrl,")."),i("p",null,"I am currently located in ",i("u",null,this.formState.location||"..."),"."),i("div",{class:"grow-wrap"},i("textarea",{class:"enquire-modal__modal__form__message__more-text",placeholder:"Type to add more to your request.",name:"moreText",onInput:function(){this.parentNode.dataset.replicatedValue=this.value}})))))),i("div",{class:"enquire-modal__modal__submit"},i("div",{class:"enquire-modal__modal__submit__disclaimer"},"By sending this message your agree to our ",i("a",{href:"#"},"Terms and Conditions"),". For more information regarding how your data is processed, please view of ",i("a",{href:"#"},"Privacy Policy"),"."),i("div",null,i("simple-button",{theme:"dark",onClick:e=>{e.target.nextSibling.click()}},"Send"),i("button",{type:"submit",style:{display:"none"}}))),i("div",{class:"enquire-modal__modal__close",onClick:()=>{this.isModalOpen=!1}},i("img",{src:t("./assets/close-icon.png")}))))))}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{isModalOpen:["clampBodyScroll"]}}};d.style='.enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:.6rem;font-weight:200;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:300;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:.88rem;font-weight:200;margin-bottom:1rem;margin-top:3rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:.88rem;font-weight:200;letter-spacing:.05em;line-height:1.5rem;max-height:212px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:.6rem;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:200;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) " ";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:200;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}';let m=class{constructor(i){e(this,i),this.authenticated=!1,this.platform="blog",this.isSearchOpen=!1,this.currentMenu=null,this.searchText=""}platformSpecificLink(e,i){return this.platform===e?i:new URL(i,"store"===e?n:l).toString()}render(){return i(o,null,i("div",{class:"container"},i("div",{class:"menu"},i("div",{class:"logo"},i("img",{src:t("./assets/leibal-logo.png"),alt:"logo",onClick:()=>{window.location.href=this.platformSpecificLink(this.platform,"/")}})),i("div",{class:`master-link ${"read"==this.currentMenu&&"master-link--active"}`,onClick:()=>{this.currentMenu="read"==this.currentMenu?null:"read"}},"Read"),i("div",{class:`master-link ${"shop"==this.currentMenu&&"master-link--active"}`,onClick:()=>{this.currentMenu="shop"==this.currentMenu?null:"shop"}},"Shop"),i("div",{class:"empty-space"}),"blog"==this.platform&&i(s,null,i("div",{class:"master-link"},i("a",{href:"/submissions-form"},"Submit")),i("div",{class:"master-link moods"},this.authenticated?i("a",{href:this.platformSpecificLink("blog","/moods")},i("img",{src:t("./assets/moods.png"),alt:"MOODS"})):i("a",{href:this.platformSpecificLink("blog","/subscription/subscribe")},"Sign Up"))),"store"==this.platform&&i(s,null,i("div",{class:"master-link"},i("a",{href:"https://leibal.com/info/#trades"},"Trade")),i("div",{class:"master-link"},i("a",{href:this.platformSpecificLink("store","/cart")},"Cart"))),i("div",{class:"master-link search",onClick:()=>{null!=this.currentMenu&&(this.currentMenu=null),this.isSearchOpen=!this.isSearchOpen,console.log(this.searchInput),this.searchInput.focus()}},"Search"),i("div",{class:`menu search-bar ${this.isSearchOpen&&"search-bar--open"}`},i("div",{class:"search-bar-container"},i("input",{ref:e=>this.searchInput=e,class:"navbar__search__input",onInput:e=>{this.searchText=e.target.value},onKeyPress:e=>{"Enter"===e.key&&(this.searchInput.blur(),this.isSearchOpen=!1,window.location.href="blog"===this.platform?this.platformSpecificLink("blog",`/?s=${this.searchText}`):this.platformSpecificLink("store",`/search?q=${this.searchText}`))},type:"text",placeholder:"Start Typing..."})))),i("div",{class:`menu submenu ${"read"==this.currentMenu&&"submenu--open"}`},i("div",null),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/")},"Read All")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/architecture")},"Architecture")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/interiors")},"Interiors")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/furniture")},"Furniture")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/lighting")},"Lighting")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/products")},"Objects")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("blog","/category/travel")},"Travel")),i("div",{class:"sub-link inactive"}),i("div",null)),i("div",{class:`menu submenu ${"shop"==this.currentMenu&&"submenu--open"}`},i("div",null),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/all")},"Shop All")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/seating")},"Seating")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/tables")},"Tables")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/lighting")},"Lighting")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/storage")},"Storage")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/outdoor")},"Outdoor")),i("div",{class:"sub-link"},i("a",{href:this.platformSpecificLink("store","/collections/accessories")},"Accessories")),i("div",{class:"sub-link"}),i("div",null))))}};m.style=":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#ddd;--color-dark:#222;display:block;font-family:var(--font-family)}.container{left:0;position:fixed;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:500}.menu{grid-gap:2rem;background:var(--color-white);border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:repeat(10,1fr);height:4.375rem;padding:0 3.75rem;position:relative;z-index:500}.moods img{display:inline-block;max-width:4rem}.logo{align-items:center;cursor:pointer;display:flex}.logo img{height:auto;width:100%;width:5.2rem}.master-link{align-items:center;color:#000;display:flex;font-size:.9375rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal}.master-link:hover{cursor:pointer}.master-link--active{text-decoration:underline;text-decoration-color:var(--color-dim);text-decoration-thickness:.025rem;text-underline-offset:.1rem;text-underline-position:under}.master-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.master-link a:hover{cursor:pointer;text-decoration:underline}.sub-link{align-items:center;color:#000;display:flex;font-size:.8rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal;padding:1.81rem 0!important}.sub-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.sub-link a:hover{cursor:pointer;text-decoration:underline}.sub-link .inactive{color:#aaa}.empty-space{grid-column:span 4/span 4}.search{align-items:center;background:var(--color-dark);border-left:1px solid var(--color-white);color:var(--color-white);display:flex;justify-content:center;position:relative;width:calc(100% + 3.75rem);z-index:2500}.submenu{left:0;position:fixed;right:0;transform:translateY(-100%);transition:transform .2s ease-in-out;z-index:100}.submenu--open{transform:translateY(0)}.search-bar{background:var(--color-dark);color:var(--color-white);left:0;position:fixed;right:0;transform:translateX(100%);transition:transform .3s ease-in-out;z-index:2000}.search-bar--open{transform:translateX(0)}.search-bar input{all:unset;border-left:1px solid #fff;display:block;font-weight:200;padding-left:.5rem;width:100%}.search-bar input::-moz-placeholder{color:#fff;font-weight:200;opacity:1}.search-bar input::placeholder{color:#fff;font-weight:200;opacity:1}.search-bar-container{align-items:center;display:flex;grid-column:span 9/span 9;justify-content:center}";let c=class{constructor(i){e(this,i),this.theme="light",this.fillWidth=!1,this.disabled=!1}render(){return i(o,null,i("div",{class:"simple-button "+(this.fillWidth?"simple-button--full-width ":" ")+("dark"==this.theme?"simple-button--dark ":" ")+(this.disabled?"simple-button--disabled":" "),role:"button","aria-pressed":"false",tabindex:"0"},i("div",{class:"simple-button__icon"},i("slot",{name:"icon"})),i("div",{class:"simple-button__text"},i("slot",null))))}};c.style=":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;font-weight:200;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";const u=["text","password","email","number","tel","url"];let h=class{constructor(t){e(this,t),this.valueChanged=a(this,"valueChanged",7),this.placeholder="Text here...",this.required=!1,this.input=()=>{let e=this.placeholder;return this.required&&(e+=" *"),i("input",{class:"simple-input--text",name:this.name,onInput:this.onInputChangeValue.bind(this),value:this.value,type:this.type,placeholder:e,required:this.required})}}onInputChangeValue(e){this.value=e.target.value,this.valueChanged.emit(this.value)}renderInputOutsideShadowRoot(e,i,t){let o=e.querySelector("input.hidden-input");o||(o=e.ownerDocument.createElement("input"),o.type="hidden",o.classList.add("hidden-input"),e.appendChild(o)),o.name=i,o.value=t||""}render(){const{el:e,value:t,name:r}=this;return this.renderInputOutsideShadowRoot(e,r,t),i(o,null,i("div",{class:"simple-input"},u.includes(this.type)&&this.input()))}get el(){return r(this)}};h.style=":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;--color-gray:#ddd;display:block;font-family:var(--font-family)}.simple-input,.simple-input--text{display:block}.simple-input--text{border:none;border-bottom:1px solid var(--color-gray);letter-spacing:.05em;outline:none;padding-bottom:1rem;width:100%}.simple-input--text::-moz-placeholder{color:#999;font-family:var(--font-family);font-weight:300;letter-spacing:.05em;opacity:1!important}.simple-input--text::placeholder{color:#999;font-family:var(--font-family);font-weight:300;letter-spacing:.05em;opacity:1!important}";let p=class{constructor(i){e(this,i)}createPortal(){this.portal=document.createElement("div"),document.body.prepend(this.portal)}moveElementToPortal(){this.portal.appendChild(this.el)}componentWillLoad(){this.createPortal()}componentDidLoad(){this.moveElementToPortal()}disconnectCallback(){this.portal.remove()}render(){return i(o,null,i("slot",null))}get el(){return r(this)}};export{d as enquire_modal,m as nav_bar_v2,c as simple_button,h as simple_input,p as tele_portal}