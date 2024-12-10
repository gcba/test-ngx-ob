import{a as N,b as D,c as k,d as O,e as H,f as P,g as R,h as w,i as F,j,k as X,l as U,m as q,n as V}from"./chunk-C2DAMO5T.js";import{a as h,b as z}from"./chunk-FAFWVACD.js";import{a as v}from"./chunk-DYZ3K4WC.js";import{e as L}from"./chunk-EHYA6QV2.js";import{a as I}from"./chunk-XZ7AJCHR.js";import{h as E,i as M}from"./chunk-VRWHQ3CM.js";import{d as J}from"./chunk-KB3GMRUO.js";import{a as B}from"./chunk-S2DW6XOG.js";import{E as a,Fa as A,L as g,La as _,N as l,S as e,T as t,U as r,Ua as f,Z as y,ja as i,ka as c,la as S,n as p,q as b,r as u,sa as T}from"./chunk-LDCFWZ36.js";var K=(()=>{let n=class n{constructor(){this.dataSource=N,this.columns=L,this.dataSourceMethods=D,this.dsColumnInterface=k,this.dsDataSourceInterface=O,this.dsTableCheckboxInterface=H,this.exampleColumnInterface=P,this.exampleDataSourceInterface=R,this.exampleTableCheckboxInterface=w}};n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=b({type:n,selectors:[["app-table-api"]],decls:75,vars:32,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OTableModule } from 'obelisco-angular/table';",3,"lang"],[1,"section-selector"],[1,"section-properties"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["highlight-js","",3,"lang"],[3,"isScrollable","dataSource","columns","isBordered","isStriped"]],template:function(d,o){d&1&&(e(0,"section",0)(1,"div",1)(2,"h2",2),i(3,"Referencia de API para el componente Tabla de Obelisco"),t(),e(4,"div",3),r(5,"code",4),t()(),e(6,"h2",2),i(7,"Etiqueta"),t(),r(8,"hr"),e(9,"div",5)(10,"p"),i(11,"Selector: "),e(12,"strong"),i(13,"o-table"),t()(),e(14,"div",6)(15,"h2",2),i(16,"Propiedades"),t(),r(17,"o-table",7),t(),e(18,"div",6)(19,"h2",2),i(20,"M\xE9todos"),t(),r(21,"o-table",7),t()(),e(22,"h2",2),i(23,"Tipos de datos"),t(),r(24,"hr"),e(25,"div",8)(26,"h3"),i(27,"Column"),t(),e(28,"p"),i(29," Permite establecer los valores de la propiedad "),e(30,"strong"),i(31,"columns"),t(),i(32,". "),t(),e(33,"div",9)(34,"div",3)(35,"code",10),i(36),t()(),e(37,"div",6)(38,"h4"),i(39,"Propiedades"),t(),r(40,"o-table",11),t()(),r(41,"br")(42,"br"),e(43,"h3"),i(44,"DataSource"),t(),e(45,"p"),i(46," Permite establecer los valores de la propiedad "),e(47,"strong"),i(48,"dataSource"),t(),i(49,". "),t(),e(50,"div",9)(51,"div",3)(52,"code",10),i(53),t()(),e(54,"div",6)(55,"h4"),i(56,"Propiedades"),t(),r(57,"o-table",11),t()(),r(58,"br")(59,"br"),e(60,"h3"),i(61,"TableCheckbox"),t(),e(62,"p"),i(63," Permite establecer los valores de la propiedad "),e(64,"strong"),i(65,"checkbox"),t(),i(66,". "),t(),e(67,"div",9)(68,"div",3)(69,"code",10),i(70),t()(),e(71,"div",6)(72,"h4"),i(73,"Propiedades"),t(),r(74,"o-table",11),t()()()()),d&2&&(a(5),l("lang","ts"),a(12),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSource)("isStriped",!0)("isBordered",!0),a(4),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSourceMethods)("isStriped",!0)("isBordered",!0),a(14),l("lang","ts"),a(),c(o.exampleColumnInterface),a(4),l("isScrollable",!0)("dataSource",o.dsColumnInterface)("columns",o.columns)("isBordered",!0)("isStriped",!0),a(12),l("lang","ts"),a(),c(o.exampleDataSourceInterface),a(4),l("isScrollable",!0)("dataSource",o.dsDataSourceInterface)("columns",o.columns)("isBordered",!0)("isStriped",!0),a(12),l("lang","ts"),a(),c(o.exampleTableCheckboxInterface),a(4),l("isScrollable",!0)("dataSource",o.dsTableCheckboxInterface)("columns",o.columns)("isBordered",!0)("isStriped",!0))},dependencies:[h,E]});let s=n;return s})();var Z=()=>({title:"Checkbox",isAllSelectable:!0});function ee(s,n){if(s&1&&(e(0,"div",15)(1,"p")(2,"strong"),i(3),t()(),e(4,"p"),i(5),t(),e(6,"p"),i(7),t(),r(8,"hr"),t()),s&2){let C=n.$implicit,m=n.index;a(3),S("Datos de la fila N\xB0",m+1,": "),a(2),S("Numbero: ",C.number.data,""),a(2),S("Texto: ",C.text.data,"")}}var $=(()=>{let n=class n{constructor(){this.exampleNormalHTML=F,this.exampleNormalTS=q,this.exampleBorderedHTML=j,this.exampleStripedHTML=X,this.exampleSelectableHTML=U,this.exampleSelectableTS=V,this.columns=[{key:"number",value:"N\xFAmero",customClasses:"tb-number"},{key:"text",value:"Texto",customClasses:"tb-text"},{key:"link",value:"Enlace",customClasses:"tb-link"},{key:"button",value:"Bot\xF3n",customClasses:"tb-button"},{key:"tag",value:"Etiqueta",customClasses:"tb-tag"},{key:"icon",value:"B\xF3ton con \xEDcono",customClasses:"tb-button "}],this.dataSource=[{number:{data:"1",customClasses:"text-right"},text:{data:"Juan"},link:{data:'<a href="#" target="_blank" rel="noreferrer">Enlace</a>'},button:{data:`
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            bot\xF3n
          </button>`},tag:{data:'<span class="badge badge-secondary">Etiqueta 1</span>'},icon:{data:`
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`}},{number:{data:"2",customClasses:"text-right"},text:{data:"Maria"},link:{data:'<a href="#" target="_blank" rel="noreferrer">Enlace</a>'},button:{data:`
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            bot\xF3n
          </button>`},tag:{data:'<span class="badge badge-secondary">Etiqueta 1</span>'},icon:{data:`
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`}},{number:{data:"3",customClasses:"text-right"},text:{data:"Esther"},link:{data:'<a href="#" target="_blank" rel="noreferrer">Enlace</a>'},button:{data:`
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            bot\xF3n
          </button>`},tag:{data:'<span class="badge badge-secondary">Etiqueta 1</span>'},icon:{data:`
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`}},{number:{data:"4",customClasses:"text-right"},text:{data:"Jos\xE9"},link:{data:'<a href="#" target="_blank" rel="noreferrer">Enlace</a>'},button:{data:`
          <button type="button" class="btn btn-primary btn-icon">
            <i class="bx bxs-info-circle"></i>
            bot\xF3n
          </button>`},tag:{data:'<span class="badge badge-secondary">Etiqueta 1</span>'},icon:{data:`
          <div class="actions-table">
            <button class="btn button-actions-table" aria-label="Editar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
            </button>
            <button class="btn button-actions-table" aria-label="Visualizar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
            </button>
            <button class="btn button-actions-table" aria-label="Descargar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
            </button>
            <button class="btn button-actions-table" aria-label="Eliminar">
              <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
            </button>
          </div>`}}]}onDataSelectedChange(m){console.log("Datos seleccionados:",m),this.outputData=m}};n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=b({type:n,selectors:[["app-table-examples"]],decls:42,vars:33,consts:[[1,"section-example"],["title","Sin separadores",3,"isNavCode"],["component","",3,"isScrollable","columns","dataSource"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Con separadores",3,"isNavCode"],["component","",3,"isScrollable","columns","dataSource","isBordered"],["title","Con patron cebra",3,"isNavCode"],["component","",3,"isScrollable","columns","dataSource","isStriped"],["title","Con checkbox",3,"isNavCode"],["component","","id","table-checkbox-test",3,"dataSelectedChange","isScrollable","columns","dataSource","checkbox"],["class","mt-3","component","",4,"ngFor","ngForOf"],["component","",1,"mt-3"]],template:function(d,o){d&1&&(e(0,"section",0)(1,"app-viewer",1),r(2,"o-table",2),e(3,"div",3),r(4,"button",4),e(5,"code",5),i(6),t()(),e(7,"div",6),r(8,"button",4),e(9,"code",7),i(10),t()()(),e(11,"app-viewer",8),r(12,"o-table",9),e(13,"div",3),r(14,"button",4),e(15,"code",5),i(16),t()(),e(17,"div",6),r(18,"button",4),e(19,"code",7),i(20),t()()(),e(21,"app-viewer",10),r(22,"o-table",11),e(23,"div",3),r(24,"button",4),e(25,"code",5),i(26),t()(),e(27,"div",6),r(28,"button",4),e(29,"code",7),i(30),t()()(),e(31,"app-viewer",12)(32,"o-table",13),y("dataSelectedChange",function(Q){return o.onDataSelectedChange(Q)}),t(),g(33,ee,9,3,"div",14),e(34,"div",3),r(35,"button",4),e(36,"code",5),i(37),t()(),e(38,"div",6),r(39,"button",4),e(40,"code",7),i(41),t()()()()),d&2&&(a(),l("isNavCode",!0),a(),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSource),a(4),c(o.exampleNormalHTML),a(3),l("lang","ts"),a(),c(o.exampleNormalTS),a(),l("isNavCode",!0),a(),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSource)("isBordered",!0),a(4),c(o.exampleBorderedHTML),a(3),l("lang","ts"),a(),c(o.exampleNormalTS),a(),l("isNavCode",!0),a(),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSource)("isStriped",!0),a(4),c(o.exampleStripedHTML),a(3),l("lang","ts"),a(),c(o.exampleNormalTS),a(),l("isNavCode",!0),a(),l("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSource)("checkbox",T(32,Z)),a(),l("ngForOf",o.outputData),a(4),c(o.exampleSelectableHTML),a(3),l("lang","ts"),a(),c(o.exampleSelectableTS))},dependencies:[A,h,v,I,E],styles:[".ngx__table-container[_ngcontent-%COMP%]{max-width:500px}"]});let s=n;return s})();var te=[{path:"api",component:K},{path:"examples",component:$},{path:"**",pathMatch:"full",redirectTo:"api"}],G=(()=>{let n=class n{};n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=u({type:n}),n.\u0275inj=p({imports:[f.forChild(te),f]});let s=n;return s})();var Be=(()=>{let n=class n{};n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=u({type:n}),n.\u0275inj=p({imports:[_,G,J,z,v,M,B]});let s=n;return s})();export{Be as TableModule};
