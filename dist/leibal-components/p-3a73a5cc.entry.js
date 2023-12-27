import{r as o,h as s,H as t,a as i}from"./p-fa07a3fd.js";let e=class{constructor(s){o(this,s),this.open=!1,this.imageUrl="",this.postId=null,this.boards="",this.moodsApiUrl="",this.wpApiNonce="",this.isAuthenticated=!1}componentWillLoad(){document.addEventListener("openMoodsModal",(o=>{this.open=!0,this.imageUrl=o.detail.imageUrl,this.postId=o.detail.postId,this.isAuthenticated||setTimeout((()=>{this.open=!1,document.location.href="/subscription/subscribe"}),1e3)}))}componentDidLoad(){this.container.addEventListener("keydown",(o=>{"Escape"===o.key&&(this.open=!1)})),document.addEventListener("moodsBoardPicked",(o=>{if(""===this.moodsApiUrl)return void console.error("moodsApiUrl prop is not set.");if(""===this.wpApiNonce)return void console.error("wpApiNonce prop is not set.");const s=o.detail.board,t=new FormData;t.append("id",s.id||null),t.append("post_id",this.postId.toString()),t.append("name",s.name),t.append("image_url",this.imageUrl),fetch(this.moodsApiUrl,{method:"POST",headers:{"X-WP-Nonce":this.wpApiNonce},body:t}).then((o=>{if(200===o.status){let o=JSON.parse(this.boards);o.push(s),this.boards=JSON.stringify(o)}})).catch((o=>{console.error(o)})),document.querySelector(".moods-modal__success").classList.add("moods-modal__success--visible"),setTimeout((()=>{this.open=!1}),1e3),setTimeout((()=>{document.querySelector(".moods-modal__success").classList.remove("moods-modal__success--visible")}),1500)}))}stopBodyScroll(){document.body.style.overflow=!0===this.open?"hidden":"inherit"}clampBodyWhenOpen(o,s){o!==s&&o&&this.container.focus()}render(){return s(t,null,s("tele-portal",null,s("div",{ref:o=>{this.container=o},tabIndex:-1,class:"moods-modal "+(this.open?"moods-modal--visible":"")},s("div",{class:"moods-modal__content"},s("div",{class:"moods-modal__left"},s("img",{src:this.imageUrl})),s("div",{class:"moods-modal__right"},s("div",{class:"moods-modal__success"},s("div",{class:"moods-modal__success__text"},"Saved!")),s("div",{class:"moods-modal__close",onClick:()=>this.open=!1},"Close"),s("div",{class:"moods-modal__picker"},s("div",null,s("div",{class:"moods-modal__text"},"Choose A Board"),s("moods-board-picker",{boards:this.boards}))))))))}get el(){return i(this)}static get watchers(){return{open:["stopBodyScroll","clampBodyWhenOpen"]}}};e.style=":host{display:block}.moods-modal{height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1000}.moods-modal>*{box-sizing:border-box}.moods-modal{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.moods-modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-modal__content{display:block;height:100%}@media (min-width:768px){.moods-modal__content{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}.moods-modal__left{display:flex;flex-direction:column;justify-content:center;padding:3rem;z-index:20}@media (min-width:1024px){.moods-modal__left{padding:8rem}}.moods-modal__left{background:#f5f5f5}.moods-modal__left>*{max-height:40vh}@media (min-width:1024px){.moods-modal__left>*{max-height:60vh}}.moods-modal__left>*{-o-object-fit:contain;object-fit:contain}.moods-modal__right{padding:3rem;position:relative}.moods-modal__close{cursor:pointer;font-size:.6rem;font-weight:200;padding:1rem;position:absolute;right:0;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0}.moods-modal__picker{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.moods-modal__picker>*{max-width:409px;width:100%}.moods-modal__text{margin-bottom:2rem}.moods-modal__success{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:10}.moods-modal__success,.moods-modal__success--visible{transition:transform .3s ease-in-out}.moods-modal__success--visible{transform:translateX(0)}.moods-modal__success__text{font-size:1.25rem;line-height:1.75rem}";export{e as moods_modal}