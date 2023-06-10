import{r as o,c as t,h as s,H as e,a as r}from"./p-fa07a3fd.js";let i=class{constructor(s){o(this,s),this.openMoodsGallery=t(this,"openMoodsGallery",7),this.boardId="",this.wpNonce=null,this.imageList=[],this.sortBy="timestamp",this.sortOrder="desc"}setSort(o,t){this.sortBy=o,this.sortOrder=t}sortSelectedClass(o,t){return this.sortBy==o&&this.sortOrder==t?"moods-board__sort-by--selected":""}componentWillLoad(){this.imageList=JSON.parse(this.images)}removeOverlayHandler(o){const t=o.detail.payload,s=new FormData;s.append("id",this.boardId),s.append("image_url",t.imageUrl),fetch("/wp-json/moods/v1/remove-from-board",{method:"POST",headers:{"X-WP-Nonce":this.wpNonce},body:s}).then((o=>o.json())).then((()=>{this.imageList=this.imageList.filter((o=>o.imageUrl!=t.imageUrl))}))}render(){let o=this.imageList.map(((o,t)=>Object.assign({index:t},o)));o=this.imageList.sort(((o,t)=>"asc"==this.sortOrder?o[this.sortBy]>t[this.sortBy]?1:-1:o[this.sortBy]<t[this.sortBy]?1:-1));const t=[];for(let s=0;s<4;s++)t.push(o.filter(((o,t)=>t%4==s)));return s(e,null,s("div",{class:"moods-board"},s("div",{class:"moods-board__sidebar"},s("sticky-scroller",{startOffset:130},s("div",null,s("div",{class:"moods-board__create-board"},"Export Collection"),s("div",{class:"moods-board__sort"},s("div",{class:"moods-board__sort__header"},"Sort Saved"),s("div",{class:"moods-board__sort-by "+this.sortSelectedClass("timestamp","desc"),onClick:()=>this.setSort("timestamp","desc")},"Latest"),s("div",{class:"moods-board__sort-by "+this.sortSelectedClass("timestamp","asc"),onClick:()=>this.setSort("timestamp","asc")},"Oldest"),s("div",{class:"moods-board__sort-by "+this.sortSelectedClass("postTitle","asc"),onClick:()=>this.setSort("postTitle","asc")},"A - Z"),s("div",{class:"moods-board__sort-by "+this.sortSelectedClass("postTitle","desc"),onClick:()=>this.setSort("postTitle","desc")},"Z - A"))))),s("div",{class:"moods-board__contents"},t.map((o=>s("div",null,o.map((o=>s("div",{class:"moods-board__content",onClick:()=>{this.openMoodsGallery.emit(o)}},s("div",{style:{position:"relative",lineHeight:"0"}},s("img",{class:"moods-board__content__image",src:o.imageUrl,alt:o.postTitle}),s("remove-overlay",{payload:JSON.stringify(o),name:"Image"})),s("div",{class:"moods-board__content__title"},o.postTitle),s("div",{class:"moods-board__content__subtitle"},o.postSubtitle))))))))))}get el(){return r(this)}};i.style=":host{display:block}.moods-board{cursor:default;display:block;font-size:13px}@media (min-width:768px){.moods-board{display:grid;gap:1rem;grid-template-columns:repeat(10,minmax(0,1fr))}.moods-board__sidebar{grid-column:span 2/span 2}}.moods-board__contents{display:block;gap:2rem}@media (min-width:768px){.moods-board__contents{display:grid;grid-column:span 8/span 8;grid-template-columns:repeat(4,minmax(0,1fr))}}.moods-board__content{cursor:pointer;margin-bottom:4rem}.moods-board__content__image{width:100%}.moods-board__content__title{font-size:9px;margin-bottom:.25rem;margin-top:1rem;text-transform:uppercase}.moods-board__content__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.moods-board__create-board{cursor:pointer;margin-bottom:.5rem;padding-bottom:.5rem;padding-top:.5rem}.moods-board__create-board:hover{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.moods-board__sort__header{margin-bottom:.5rem}.moods-board__sort-by{cursor:pointer;margin-bottom:.5rem;margin-left:1.5rem}.moods-board__sort-by--selected{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}";export{i as moods_board}