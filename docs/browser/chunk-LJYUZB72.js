import{a as ie,b as ne,c as re,d as oe,e as se,f as ae,g as le}from"./chunk-XYAN7CBK.js";import{a as me,b as de}from"./chunk-FAFWVACD.js";import{a as M}from"./chunk-DYZ3K4WC.js";import{e as Q}from"./chunk-EHYA6QV2.js";import{a as ee}from"./chunk-XZ7AJCHR.js";import{a as X,b as J,c as z,d as G,e as K,f as Y,g as Z,h as I,i as $}from"./chunk-VRWHQ3CM.js";import{d as ce}from"./chunk-KB3GMRUO.js";import{a as te}from"./chunk-S2DW6XOG.js";import{E as l,Ea as B,F as E,Fa as U,Ga as W,H as T,L as w,La as y,N as m,P,Qa as q,S as o,T as r,U as u,Ua as x,V as A,W as V,Y as b,Z as C,_ as d,fa as D,ga as H,ha as N,ja as a,ka as f,la as L,n as _,na as k,oa as j,pa as F,q as g,r as v,u as p,v as h,x as R}from"./chunk-LDCFWZ36.js";var pe=(()=>{let t=class t{constructor(){this.dataSource=ie,this.columns=Q,this.searchItemInterface=ne,this.searchItemDataSource=re}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g({type:t,selectors:[["app-search-api"]],decls:37,vars:13,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OSearchModule } from 'obelisco-angular/search';",3,"lang"],[1,"section-selector"],[1,"section-properties"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["highlight-js","",3,"lang"]],template:function(e,s){e&1&&(o(0,"section",0)(1,"div",1)(2,"h2",2),a(3,"Referencia de API para el componente Galer\xEDa de Obelisco"),r(),o(4,"div",3),u(5,"code",4),r()(),o(6,"h2",2),a(7,"Etiqueta"),r(),u(8,"hr"),o(9,"div",5)(10,"p"),a(11,"Selector: "),o(12,"strong"),a(13,"o-search"),r()(),o(14,"div",6)(15,"h2",2),a(16,"Propiedades"),r(),u(17,"o-table",7),r()(),o(18,"h2",2),a(19,"Tipos de datos"),r(),u(20,"hr"),o(21,"div",8)(22,"h3"),a(23,"SearchbarItems"),r(),o(24,"p"),a(25," Permite establecer los valores de la propiedad "),o(26,"strong"),a(27,"searchbarItems"),r(),a(28,". "),r(),o(29,"div",9)(30,"div")(31,"code",10),a(32),r()(),o(33,"div",6)(34,"h4"),a(35,"Propiedades"),r(),u(36,"o-table",7),r()()()()),e&2&&(l(5),m("lang","ts"),l(12),m("isScrollable",!0)("columns",s.columns)("dataSource",s.dataSource)("isStriped",!0)("isBordered",!0),l(14),m("lang","ts"),l(),f(s.searchItemInterface),l(4),m("isScrollable",!0)("columns",s.columns)("dataSource",s.searchItemDataSource)("isStriped",!0)("isBordered",!0))},dependencies:[me,I]});let i=t;return i})();var ve=["inputElement"];function Ce(i,t){if(i&1){let c=b();o(0,"div",12),C("click",function(){let e=p(c).$implicit,s=d(3);return h(s.goTo(e))}),a(1),r()}if(i&2){let c=t.$implicit,n=t.index,e=d(3);P("selected-search-item",n===e.selectedIndex)("first-search-item",n===e.selectedIndex&&!e.isHover),l(),L(" ",c.title," ")}}function xe(i,t){if(i&1&&(A(0),w(1,Ce,2,5,"div",11),V()),i&2){let c=d(2);l(),m("ngForOf",c.filteredResults)}}function Se(i,t){i&1&&(o(0,"div",13),a(1,"No se encontraron resultados\u{1F622}."),r())}function Ee(i,t){if(i&1){let c=b();o(0,"div",2)(1,"form",3)(2,"div",4)(3,"label",5),a(4,"Buscador"),r(),o(5,"input",6,0),F("ngModelChange",function(e){p(c);let s=d();return j(s.term,e)||(s.term=e),h(e)}),C("input",function(){p(c);let e=d();return h(e.search())})("keydown.enter",function(){p(c);let e=d();return h(e.onEnter())})("keydown.ArrowUp",function(){p(c);let e=d();return h(e.onUp())})("keydown.ArrowDown",function(){p(c);let e=d();return h(e.onDown())}),r(),o(7,"button",7),C("click",function(){p(c);let e=d();return h(e.resetSearch())}),r()()(),o(8,"div",8),C("mouseenter",function(){p(c);let e=d();return h(e.onMouseEnter())})("mouseleave",function(){p(c);let e=d();return h(e.onMouseLeave())}),w(9,xe,2,1,"ng-container",9)(10,Se,2,0,"div",10),r()()}if(i&2){let c=d();l(5),m("ngClass",c.type?"bg-"+c.type:"")("placeholder",c.placeholder),k("ngModel",c.term),l(4),m("ngIf",c.filteredResults.length>0),l(),m("ngIf",c.noResults)}}var he=(()=>{let t=class t{constructor(n,e,s){this.router=n,this.elementRef=e,this.renderer=s,this.maxLengthResults=10,this.placeholder="Buscar...",this.type="",this.term="",this.isHover=!1,this.noResults=!1,this.filteredResults=[],this.selectedIndex=0}adjustResultsWidth(){let n=this.inputElement.nativeElement.getBoundingClientRect().width,e=this.elementRef.nativeElement.querySelector(".search-results"),s=this.elementRef.nativeElement.querySelector(".no-results");e&&s&&n>0&&(this.renderer.setStyle(e,"width",n+"px"),this.renderer.setStyle(s,"width",n+"px"))}search(){this.term===""?this.resetSearch():(this.filteredResults=this.searchbarItems.filter(n=>n.title.toLowerCase().includes(this.term.toLowerCase())).slice(0,this.maxLengthResults),this.noResults=this.filteredResults.length===0)}ngAfterViewInit(){this.adjustResultsWidth()}resetSearch(){this.term="",this.isHover=!1,this.noResults=!1,this.filteredResults=[],this.selectedIndex=0}goTo(n){this.onSelectItem?this.onSelectItem(n):this.router.navigate([n.route]),this.resetSearch()}onEnter(){this.filteredResults.length>0&&this.goTo(this.filteredResults[this.selectedIndex])}onUp(){this.selectedIndex>0&&(this.selectedIndex--,this.isHover=!1)}onDown(){this.selectedIndex<this.filteredResults.length-1&&(this.selectedIndex++,this.isHover=!1)}onMouseEnter(){this.isHover=!0}onMouseLeave(){this.isHover=!1}};t.\u0275fac=function(e){return new(e||t)(E(q),E(R),E(T))},t.\u0275cmp=g({type:t,selectors:[["o-search"]],viewQuery:function(e,s){if(e&1&&D(ve,5),e&2){let O;H(O=N())&&(s.inputElement=O.first)}},inputs:{searchbarItems:"searchbarItems",maxLengthResults:"maxLengthResults",placeholder:"placeholder",type:"type",onSelectItem:"onSelectItem"},decls:1,vars:1,consts:[["inputElement",""],["class","navbar-search",4,"ngIf"],[1,"navbar-search"],[1,"form-search"],[1,"form-group"],["for","search-input",1,"sr-only"],["type","search","id","name-input","name","name","aria-label","Ingrese su b\xFAsqueda",1,"form-control","input-search",3,"ngModelChange","input","keydown.enter","keydown.ArrowUp","keydown.ArrowDown","ngClass","placeholder","ngModel"],["type","reset","aria-label","Borrar",1,"reset",3,"click"],[1,"search-results",3,"mouseenter","mouseleave"],[4,"ngIf"],["class","no-results",4,"ngIf"],["class","search-item",3,"selected-search-item","first-search-item","click",4,"ngFor","ngForOf"],[1,"search-item",3,"click"],[1,"no-results"]],template:function(e,s){e&1&&w(0,Ee,11,5,"div",1),e&2&&m("ngIf",s.searchbarItems)},dependencies:[B,U,W,Y,X,J,z,K,G],styles:[".navbar-search[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:0px}.navbar-search[_ngcontent-%COMP%]   .form-search[_ngcontent-%COMP%]{width:100%}.navbar-search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{text-transform:capitalize}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{z-index:999;background-color:#f3f6f9;border-bottom-left-radius:8px;border-bottom-right-radius:8px;width:98%;margin-top:8px}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]:hover{cursor:pointer;color:#007bc7}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .first-search-item[_ngcontent-%COMP%], .navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .selected-search-item[_ngcontent-%COMP%]{color:#007bc7}"]});let i=t;return i})();var ue=(()=>{let t=class t{constructor(){this.searchExampleHtml=ae,this.searchExampleTs=le,this.searchSimpleExampleHtml=oe,this.searchSimpleExampleTs=se,this.routes=[{title:"Inicio",route:"/"},{title:"Introducci\xF3n",route:"/get-started"},{title:"Componentes",route:"/components"},{title:"Buscador",route:"/components/search"}]}handleSelectItem(n){console.log("Item seleccionado:",n.title)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g({type:t,selectors:[["app-search-examples"]],decls:27,vars:11,consts:[[1,"section-example"],["title","Simple","id","example-directive",3,"isNavCode"],["component","",1,"search-container"],[3,"searchbarItems","onSelectItem"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard"],["highlight-js",""],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Con redireccionamiento","id","example-directive",3,"isNavCode"],[3,"searchbarItems"]],template:function(e,s){e&1&&(o(0,"section",0)(1,"app-viewer",1)(2,"div",2),u(3,"o-search",3),r(),o(4,"div",4)(5,"button",5),a(6,"Copiar"),r(),o(7,"code",6),a(8),r()(),o(9,"div",7)(10,"button",5),a(11,"Copiar"),r(),o(12,"code",8),a(13),r()()(),o(14,"app-viewer",9)(15,"div",2),u(16,"o-search",10),r(),o(17,"div",4)(18,"button",5),a(19,"Copiar"),r(),o(20,"code",6),a(21),r()(),o(22,"div",7)(23,"button",5),a(24,"Copiar"),r(),o(25,"code",8),a(26),r()()()()),e&2&&(l(),m("isNavCode",!0),l(2),m("searchbarItems",s.routes)("onSelectItem",s.handleSelectItem),l(5),f(s.searchExampleHtml),l(4),m("lang","ts"),l(),f(s.searchExampleTs),l(),m("isNavCode",!0),l(2),m("searchbarItems",s.routes),l(5),f(s.searchExampleHtml),l(4),m("lang","ts"),l(),f(s.searchExampleTs))},dependencies:[M,I,ee,he],styles:[".search-container[_ngcontent-%COMP%]{max-width:400px;width:100%}"]});let i=t;return i})();var ye=[{path:"api",component:pe},{path:"examples",component:ue},{path:"**",pathMatch:"full",redirectTo:"api"}],fe=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[x.forChild(ye),x]});let i=t;return i})();var _e=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[y,x,Z]});let i=t;return i})();var st=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[y,fe,ce,de,M,$,te,_e]});let i=t;return i})();export{st as SearchModule};