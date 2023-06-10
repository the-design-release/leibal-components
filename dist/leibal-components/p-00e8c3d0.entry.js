import{r as o,c as t,h as r,g as i,H as e,a as s}from"./p-fa07a3fd.js";class n{static getDescendantProperty(o,t,r=[]){let i,e,s,a,d,c;if(t){if(s=t.indexOf("."),-1===s?i=t:(i=t.slice(0,s),e=t.slice(s+1)),a=o[i],null!=a)if(e||"string"!=typeof a&&"number"!=typeof a)if("[object Array]"===Object.prototype.toString.call(a))for(d=0,c=a.length;d<c;d++)n.getDescendantProperty(a[d],e,r);else e&&n.getDescendantProperty(a,e,r);else r.push(a)}else r.push(o);return r}}class a{constructor(o=[],t=[],r={}){Array.isArray(t)||(r=t,t=[]),this.haystack=o,this.keys=t,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}search(o=""){if(""===o)return this.haystack;const t=[];for(let r=0;r<this.haystack.length;r++){const i=this.haystack[r];if(0===this.keys.length){const r=a.isMatch(i,o,this.options.caseSensitive);r&&t.push({item:i,score:r})}else for(let r=0;r<this.keys.length;r++){const e=n.getDescendantProperty(i,this.keys[r]);let s=!1;for(let r=0;r<e.length;r++){const n=a.isMatch(e[r],o,this.options.caseSensitive);if(n){s=!0,t.push({item:i,score:n});break}}if(s)break}}return this.options.sort&&t.sort(((o,t)=>o.score-t.score)),t.map((o=>o.item))}static isMatch(o,t,r){o=String(o),t=String(t),r||(o=o.toLocaleLowerCase(),t=t.toLocaleLowerCase());const i=a.nearestIndexesFor(o,t);return!!i&&(o===t?1:i.length>1?i[i.length-1]-i[0]+2:2+i[0])}static nearestIndexesFor(o,t){const r=t.split("");let i=[];return a.indexesOfFirstLetter(o,t).forEach(((t,e)=>{let s=t+1;i[e]=[t];for(let t=1;t<r.length;t++){if(s=o.indexOf(r[t],s),-1===s){i[e]=!1;break}i[e].push(s),s++}})),i=i.filter((o=>!1!==o)),!!i.length&&i.sort(((o,t)=>1===o.length?o[0]-t[0]:(o=o[o.length-1]-o[0])-(t=t[t.length-1]-t[0])))[0]}static indexesOfFirstLetter(o,t){const r=t[0];return o.split("").map(((o,t)=>o===r&&t)).filter((o=>!1!==o))}}let d=class{constructor(r){o(this,r),this.moodsBoardPicked=t(this,"moodsBoardPicked",7),this.boards="",this.open=!1,this.moodBoards=[],this.inputValue="",this.newBoardName=""}componentDidLoad(){try{this.moodBoards=JSON.parse(this.boards)}finally{this.searcher=new a(this.moodBoards,["name"],{caseSensitive:!1})}document.addEventListener("click",(o=>{this.el.contains(o.target)||(this.open=!1)}))}toggleOpen(){this.open=!this.open}onInputKeyDown(o){return"Enter"===o.key?(this.selectedMoodBoard||(this.selectedMoodBoard=this.moodBoards[0]),void this.toggleOpen()):"Escape"===o.key?(o.stopPropagation(),o.preventDefault(),void(this.open=!1)):void(this.open||(this.open=!0))}onInputInput(o){this.inputValue=o.target.value,this.moodBoards=this.inputValue?this.searcher.search(this.inputValue):JSON.parse(this.boards)}selectedMoodBoardChanged(o,t){o!==t&&(this.inputValue=o.name)}handleNewBoardInput(o){this.newBoardName=o.target.value}handleNewBoardClick(){this.selectedMoodBoard={postId:null,name:this.newBoardName},this.newBoardName="",this.open=!1}handleBoardClick(){this.moodsBoardPicked.emit({board:this.selectedMoodBoard})}render(){return r(e,null,r("div",{class:"moods-board-picker"},r("div",{onClick:()=>this.toggleOpen(),class:"moods-board-picker__container"},r("div",{class:"moods-board-picker__title"},"Save Into:"),r("div",{class:"moods-board-picker__selected"},r("input",{class:"moods-board-picker__input",type:"text",value:this.inputValue,onKeyDown:this.onInputKeyDown.bind(this),onInput:this.onInputInput.bind(this),onClick:o=>{if(this.open)return o.stopImmediatePropagation(),!1},placeholder:"Search..."}),r("span",{class:"moods-board-picker__selected__arrow "+(this.open?"moods-board-picker__selected__arrow--open":"")},"▼"))),r("div",{class:"moods-board-picker__options "+(this.open?"moods-board-picker__options--visible":"")},r("div",{class:"moods-board-picker__new-board"},r("div",null,r("div",{class:"moods-board-picker__title"},"Create New Board:"),r("input",{class:"moods-board-picker__input moods-board-picker__new-board-input",type:"text",placeholder:"Start Typing...",onInput:this.handleNewBoardInput.bind(this),onKeyDown:o=>{"Enter"===o.key&&this.handleNewBoardClick()},value:this.newBoardName})),r("div",{onClick:this.handleNewBoardClick.bind(this)},r("img",{class:"moods-board-picker__new-board-icon",src:i("./assets/plus.png")}))),0===this.moodBoards.length&&r("div",{class:"moods-board-picker__option moods-board-picker__option--no-results"},"No results"),this.moodBoards.map((o=>r("div",{class:"moods-board-picker__option",onClick:()=>{this.selectedMoodBoard=o,this.toggleOpen()}},o.name)))),r("simple-button",{theme:"dark",onClick:()=>{this.handleBoardClick()},class:"moods-board-picker__button"},"Save")))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{selectedMoodBoard:["selectedMoodBoardChanged"]}}};d.style=":host{display:block}.moods-board-picker{display:block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.moods-board-picker__container{background:#fff;border:1px solid #000;padding:1rem 1.5rem;position:relative}.moods-board-picker__selected{display:flex;width:100%}.moods-board-picker__selected__arrow{cursor:pointer}.moods-board-picker__selected__arrow,.moods-board-picker__selected__arrow--open{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__selected__arrow--open{transform:rotate(180deg)}.moods-board-picker__title{font-size:9px;font-weight:300;margin-bottom:.5rem;text-transform:uppercase;width:100%}.moods-board-picker__input{border-width:0;display:block;font-weight:300;padding:0;width:100%}.moods-board-picker__input,.moods-board-picker__input:focus{outline:2px solid transparent;outline-offset:2px}.moods-board-picker__input{background:none;font-size:1rem;letter-spacing:1.5px}.moods-board-picker__input::-moz-placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input:-ms-input-placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::-moz-selection{background:none}.moods-board-picker__input::selection{background:none}.moods-board-picker__options{background:#fff;border:1px solid #000;left:0;margin-top:-1px;max-height:275px;opacity:0;overflow-x:hidden;overflow-y:auto;position:absolute;right:0;scrollbar-width:none;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:10}.moods-board-picker__options--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-board-picker__options::-webkit-scrollbar{display:none}.moods-board-picker__option{cursor:pointer;display:block;padding:.75rem 1.5rem;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.moods-board-picker__option:first-child{padding-top:0}.moods-board-picker__option:hover{background:#000;color:#fff;transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__option--no-results{cursor:default!important;text-decoration:none!important}.moods-board-picker__new-board{align-items:center;display:flex;justify-content:space-between;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem}.moods-board-picker__new-board>:first-child{width:100%}.moods-board-picker__new-board>:last-child{cursor:pointer;margin-left:1.5rem}.moods-board-picker__new-board-icon{width:1.5rem}.moods-board-picker__new-board-input{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(0 0 0/var(--tw-border-opacity));margin-bottom:.5rem;padding-bottom:1rem}.moods-board-picker__button{margin-top:2rem;width:100%}";export{d as moods_board_picker}