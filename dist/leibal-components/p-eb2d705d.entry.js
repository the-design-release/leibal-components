import{r as t,c as e,h as i,g as o,H as a,a as r}from"./p-fa07a3fd.js";let n=class{constructor(i){t(this,i),this.openMoodsModal=e(this,"openMoodsModal",7),this.imageUrl="",this.postId=null,this.disabled=!1,this.theme="light",this.showOnHover=!1,this.contentLocation="left",this.hidden=!1}openMoodsModalHandler(){this.imageUrl&&this.postId&&this.openMoodsModal.emit({imageUrl:this.imageUrl,postId:this.postId})}componentDidLoad(){if(!this.showOnHover)return;this.hidden=!0;const t=this.el.parentElement;if(!t)return;let e=this.el.shadowRoot.querySelector(".add-to-moods-button__content-left"),i=this.el.shadowRoot.querySelector(".add-to-moods-button__content-right"),o=this.el.shadowRoot.querySelector("img");o.addEventListener("mouseenter",(()=>{e&&e.classList.add("add-to-moods-button__content-left--hover"),i&&i.classList.add("add-to-moods-button__content-right--hover")})),o.addEventListener("mouseleave",(()=>{e&&e.classList.remove("add-to-moods-button__content-left--hover"),i&&i.classList.remove("add-to-moods-button__content-right--hover")})),t.addEventListener("mouseenter",(()=>{this.hidden=!1})),t.addEventListener("mouseleave",(()=>{this.hidden=!0}))}render(){return i(a,null,i("div",{class:"add-to-moods-button "+(this.showOnHover?"add-to-moods-button--show-on-hover ":" ")+(!this.hidden&&this.showOnHover?"add-to-moods-button--show-on-hover--hover ":" "),onClick:()=>this.openMoodsModalHandler()},"left"===this.contentLocation&&i("div",{class:"add-to-moods-button__content-left"},i("slot",null)),i("img",{src:o("light"==this.theme?"./assets/add-icon.png":"./assets/add-icon-dark.png"),alt:"Add To MOODS"}),"right"===this.contentLocation&&i("div",{class:"add-to-moods-button__content-right"},i("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return r(this)}};n.style=":host{display:block}.add-to-moods-button{align-items:center;cursor:pointer;display:flex;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{opacity:0;transition:opacity .2s ease-in-out}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover,.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity .2s ease-in-out}.add-to-moods-button img{margin-top:-.1rem;width:1.5rem}";let s=class{constructor(e){t(this,e),this.theme="light",this.cardType="normal",this.bottomTitleName="",this.bottomSubtitleName="",this.images="",this.linkTo="#"}watchImages(t){this._images="string"==typeof t?JSON.parse(t):t}componentWillLoad(){this.watchImages(this.images)}render(){return i(a,null,"normal"===this.cardType?i("a",{href:this.linkTo,class:"display-card"},i("div",{class:"display-card__image"},i("img",{src:this._images[0],loading:"lazy"}),i("img",{src:this._images[1],loading:"lazy"})),i("div",{class:"display-card__top"},i("div",{class:"display-card__top__title"},i("slot",{name:"top-title"})),i("div",{class:"display-card__top__subtitle"},i("slot",{name:"top-subtitle"}))),i("div",{class:"display-card__bottom"},i("div",{class:"display-card__bottom__title"},i("slot",{name:"bottom-title"})),i("div",{class:"display-card__bottom__subtitle"},i("slot",{name:"bottom-subtitle"})))):i("a",{href:this.linkTo,class:"display-card--featured"},i("div",{class:"col-span-4 display-card__image"},i("img",{src:this._images[0],loading:"lazy"}),i("img",{src:this._images[1],loading:"lazy"})),i("div",{class:"display-card--featured__right"},i("div",{class:"display-card--featured__top"},i("div",{class:"display-card--featured__top__title"},i("slot",{name:"top-title"})),i("div",{class:"display-card--featured__top__subtitle"},i("slot",{name:"top-subtitle"}))),i("div",{class:"display-card--featured__bottom"},i("div",{class:"display-card--featured__bottom__title"},i("div",{class:"display-card--featured__bottom__title__name"},this.bottomTitleName),i("slot",{name:"bottom-title"})),i("div",{class:"display-card--featured__bottom__subtitle"},i("div",{class:"display-card--featured__bottom__subtitle__name"},this.bottomSubtitleName),i("slot",{name:"bottom-subtitle"}))))))}static get watchers(){return{images:["watchImages"]}}};s.style='/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b{font-weight:bolder}code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}button,input,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img,video{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%;z-index:1}.display-card__image>:first-child{opacity:1}.display-card__image:hover>:nth-child(2){opacity:1;z-index:2}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:9px;font-weight:400;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.display-card__bottom__title{font-size:13px;font-weight:400;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:9px;font-weight:300}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:400;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:300;line-height:1.5rem}.display-card--featured__bottom__title{font-size:9px;font-weight:400;line-height:0px;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{margin-bottom:.25rem}.display-card--featured__bottom__subtitle,.display-card--featured__bottom__subtitle__name,.display-card--featured__bottom__title__name{font-size:9px;font-weight:300;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{margin-bottom:.25rem}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}';let d=class{constructor(e){t(this,e),this.isModalOpen=!1,this.formState={firstName:"",lastName:"",email:"",location:"",moreText:""},this.renderEnquireCard=()=>i("div",{class:"col-span-3 w-full cursor-pointer enquire-card",onClick:this.handleEnquireClick.bind(this)},i("div",{class:"enquire-card__preview-image"},i("div",{style:{backgroundImage:`url(${this.previewImage})`}})),i("div",{class:"enquire-card__info"},i("div",{class:"mb-8"},i("div",{class:"enquire-card__info__enquire"},"Enquire About"),i("div",{class:"enquire-card__info__title"},this.postTitle)),i("div",null,"Find out more information regarding purchasing, dimensions or lead times.")),i("div",{class:"text-xl enquire-card__button"},i("simple-button",null,"Enquire")))}componentWillLoad(){window.addEventListener("scroll",this.handleScroll.bind(this))}componentDidLoad(){window.dispatchEvent(new Event("scroll"))}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll.bind(this))}getContentPageOffset(){const t=window.getComputedStyle(this.contentElement.querySelector("div")),e=parseFloat(t.paddingTop.replace("px",""));return this.el.getBoundingClientRect().top-e}handleScroll(){const t=this.getContentPageOffset();this.contentElement.style.top=t+"px",this.isModalOpen&&(t<-this.contentElement.clientHeight||t+this.contentElement.clientHeight>window.innerHeight+this.contentElement.clientHeight)&&(this.isModalOpen=!1)}handleEnquireClick(){if(this.isModalOpen=!this.isModalOpen,this.isModalOpen){const t=this.getContentPageOffset();t<=5?window.scrollBy({behavior:"smooth",top:t-64,left:0}):t+this.contentElement.clientHeight>=window.innerHeight+5&&window.scrollBy({behavior:"smooth",top:t-this.contentElement.clientHeight+64,left:0})}}handleFormChange(t){this.formState=Object.assign(Object.assign({},this.formState),{[t.target.name]:t.target.value})}handleFormSubmit(t){t.preventDefault(),t.stopPropagation();let e="Hello,%0D%0A%0D%0A";e+=`My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle}.%0D%0A%0D%0A`,e+=`I am currently located in ${this.formState.location}.%0D%0A%0D%0A`,e+=`${this.formState.moreText.replace("\n","%0D%0A")}`;const i=document.createElement("a");return i.href=`mailto:sales@leibal.com?subject=Enquiry about ${this.postTitle}&body=${e}`,i.click(),!1}clampBodyScroll(t,e){}render(){return i(a,null,this.renderEnquireCard(),i("tele-portal",null,i("div",{class:this.isModalOpen?"enquire-modal__modal enquire-modal__modal--visible":"enquire-modal__modal",onClick:()=>{this.isModalOpen=!1}},i("form",{class:"enquire-modal__modal__content",onClick:t=>t.stopImmediatePropagation(),ref:t=>this.contentElement=t,onInput:this.handleFormChange.bind(this),onSubmit:this.handleFormSubmit.bind(this)},this.renderEnquireCard(),i("div",{class:"enquire-modal__modal__form"},i("div",null,i("simple-input",{type:"text",name:"firstName",placeholder:"First Name",required:!0}),i("simple-input",{type:"text",name:"lastName",placeholder:"Last Name",required:!0}),i("simple-input",{type:"text",name:"email",placeholder:"Email Address",required:!0}),i("simple-input",{type:"text",name:"location",placeholder:"Location",required:!0}),i("div",{class:"enquire-modal__modal__form__message"},i("div",{class:"enquire-modal__modal__form__message__title"},"Message"),i("div",{class:"enquire-modal__modal__form__message__body"},i("p",null,"Hello,"),i("p",null,"My name is ",i("u",null,this.formState.firstName||"...")," ",i("u",null,this.formState.lastName||"..."),", and I would like additional information regarding ",i("u",null,this.postTitle),"."),i("p",null,"I am currently located in ",i("u",null,this.formState.location||"..."),"."),i("div",{class:"grow-wrap"},i("textarea",{class:"enquire-modal__modal__form__message__more-text",placeholder:"Type to add more to your request.",name:"moreText",onInput:function(){this.parentNode.dataset.replicatedValue=this.value}})))))),i("div",{class:"enquire-modal__modal__submit"},i("div",{class:"enquire-modal__modal__submit__disclaimer"},"By sending this message your agree to our ",i("a",{href:"#"},"Terms and Conditions"),". For more information regarding how your data is processed, please view of ",i("a",{href:"#"},"Privacy Policy"),"."),i("div",null,i("simple-button",{theme:"dark",onClick:t=>{t.target.nextSibling.click()}},"Send"),i("button",{type:"submit",style:{display:"none"}}))),i("div",{class:"enquire-modal__modal__close",onClick:()=>{this.isModalOpen=!1}},i("img",{src:o("./assets/close-icon.png")}))))))}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{isModalOpen:["clampBodyScroll"]}}};d.style='.enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:9px;font-weight:300;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:400;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:13px;font-weight:300;margin-bottom:1rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:13px;font-weight:300;letter-spacing:.05em;line-height:1.5rem;max-height:185px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:9px;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:300;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) " ";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:300;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}';export{n as add_to_moods_button,s as display_card,d as enquire_modal}