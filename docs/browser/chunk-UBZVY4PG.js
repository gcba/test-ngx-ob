import{a as D}from"./chunk-DEL2CTOF.js";import{b as I}from"./chunk-FAFWVACD.js";import{a as u}from"./chunk-DYZ3K4WC.js";import{a as S}from"./chunk-XZ7AJCHR.js";import{h as p,i as b}from"./chunk-VRWHQ3CM.js";import{a as y}from"./chunk-S2DW6XOG.js";import{E as m,La as E,N as v,S as t,T as i,U as r,Ua as x,ja as e,ka as f,n as o,q as s,r as c}from"./chunk-LDCFWZ36.js";var C=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=s({type:a,selectors:[["app-default-image-api"]],decls:63,vars:1,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { ODefaultImageDirective } from 'obelisco-angular/directives'",3,"lang"],[1,"section-selector"]],template:function(l,g){l&1&&(t(0,"section",0)(1,"div",1)(2,"h2",2),e(3," Referencia de API para la directiva oDefaultImage de Obelisco "),i(),t(4,"div",3),r(5,"code",4),i()(),r(6,"hr"),t(7,"div",5)(8,"p"),e(9," La directiva "),t(10,"code"),e(11,"oDefaultImage"),i(),e(12," en Angular se utiliza para proporcionar una imagen predeterminada en caso de que la imagen original no se cargue correctamente. "),i(),r(13,"br"),t(14,"h2",2),e(15,"Uso:"),i(),t(16,"p"),e(17," Agrega el atributo "),t(18,"code"),e(19,"oDefaultImage"),i(),e(20," a la etiqueta "),t(21,"code"),e(22,"<img>"),i(),e(23," en tu plantilla HTML. La directiva se encargar\xE1 autom\xE1ticamente de cambiar la imagen en caso de error de carga. "),i(),r(24,"br"),t(25,"h2",2),e(26,"Reglas y Consideraciones:"),i(),t(27,"ul")(28,"li"),e(29," La directiva "),t(30,"code"),e(31,"oDefaultImage"),i(),e(32," debe ser aplicada \xFAnicamente a elementos "),t(33,"code"),e(34,"<img>"),i(),e(35,". "),i(),t(36,"li"),e(37," La directiva debe estar disponible en el m\xF3dulo de Angular donde se utilizar\xE1. Aseg\xFArate de importar y declarar la directiva en el m\xF3dulo correspondiente. "),i(),t(38,"li"),e(39," La imagen predeterminada que se mostrar\xE1 en caso de error puede ser definida mediante la propiedad "),t(40,"code"),e(41,"defaultImageUrl"),i(),e(42," en la etiqueta "),t(43,"code"),e(44,"<img>"),i(),e(45,", permitiendo as\xED la flexibilidad de usar cualquier imagen deseada. "),i()(),r(46,"br"),t(47,"h2",2),e(48,"Componentes con Directiva oDefaultImage Integrada:"),i(),t(49,"p"),e(50," Algunos componentes de Angular, como "),t(51,"code"),e(52,"OCard"),i(),e(53,", "),t(54,"code"),e(55,"OGallery"),i(),e(56," y "),t(57,"code"),e(58,"OHighlighted"),i(),e(59,", ya vienen con la directiva "),t(60,"code"),e(61,"oDefaultImage"),i(),e(62," integrada. Puedes utilizar estos componentes directamente en tu aplicaci\xF3n sin necesidad de agregar la directiva manualmente a las im\xE1genes dentro de ellos. "),i()()()),l&2&&(m(5),v("lang","ts"))},dependencies:[p]});let n=a;return n})();var j=(()=>{let a=class a{constructor(){this.imageDefaultExample=`
<div class="card">
  <img oDefaultImage src="cards/*" class="card-img-top" alt="descripci\xF3n de imagen" />
  <div class="card-body">
    <p class="card-headline">sobrelinea</p>
    <h3 class="card-title">
      <a href="#" class="card-title-link">T\xEDtulo de la tarjeta</a>
    </h3>
    <p class="card-text">Descripci\xF3n de la tarjeta</p>
    <div class="card-info">
      <div class="pt-2">
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span>
          Lun 01/1
        </small>
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span>
          17 | 18 | 19 hs
        </small>
      </div>
    </div>
  </div>
</div>
  `,this.imageDefaultUrlExample=`
<div class="card">
  <img
    oDefaultImage
    defaultImageUrl="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
    src="cards/*"
    class="card-img-top"
    alt="descripci\xF3n de imagen"
  />
  <div class="card-body">
    <p class="card-headline">sobrelinea</p>
    <h3 class="card-title">
      <a href="#" class="card-title-link">T\xEDtulo de la tarjeta</a>
    </h3>
    <p class="card-text">Descripci\xF3n de la tarjeta</p>
    <div class="card-info">
      <div class="pt-2">
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span>
          Lun 01/1
        </small>
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span>
          17 | 18 | 19 hs
        </small>
      </div>
    </div>
  </div>
</div>
  `}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=s({type:a,selectors:[["app-default-image-examples"]],decls:53,vars:2,consts:[[1,"section-example"],["title","Selecci\xF3n \xFAnica"],["component","",2,"max-width","340px"],[1,"card"],["oDefaultImage","","src","cards/*","alt","descripci\xF3n de imagen",1,"card-img-top"],[1,"card-body"],[1,"card-headline"],[1,"card-title"],["href","#",1,"card-title-link"],[1,"card-text"],[1,"card-info"],[1,"pt-2"],["aria-hidden","true",1,"material-symbols-rounded","o-icon"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],["oDefaultImage","","defaultImageUrl","https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg","src","cards/*","alt","descripci\xF3n de imagen",1,"card-img-top"]],template:function(l,g){l&1&&(t(0,"section",0)(1,"app-viewer",1)(2,"div",2)(3,"div",3),r(4,"img",4),t(5,"div",5)(6,"p",6),e(7,"sobrelinea"),i(),t(8,"h3",7)(9,"a",8),e(10,"T\xEDtulo de la tarjeta"),i()(),t(11,"p",9),e(12,"Descripci\xF3n de la tarjeta"),i(),t(13,"div",10)(14,"div",11)(15,"small")(16,"span",12),e(17,"calendar_today"),i(),e(18," Lun 01/1 "),i(),t(19,"small")(20,"span",12),e(21,"watch_later"),i(),e(22," 17 | 18 | 19 hs "),i()()()()()(),t(23,"div",13),r(24,"button",14),t(25,"code",15),e(26),i()()(),t(27,"app-viewer",1)(28,"div",2)(29,"div",3),r(30,"img",16),t(31,"div",5)(32,"p",6),e(33,"sobrelinea"),i(),t(34,"h3",7)(35,"a",8),e(36,"T\xEDtulo de la tarjeta"),i()(),t(37,"p",9),e(38,"Descripci\xF3n de la tarjeta"),i(),t(39,"div",10)(40,"div",11)(41,"small")(42,"span",12),e(43,"calendar_today"),i(),e(44," Lun 01/1 "),i(),t(45,"small")(46,"span",12),e(47,"watch_later"),i(),e(48," 17 | 18 | 19 hs "),i()()()()()(),t(49,"div",13),r(50,"button",14),t(51,"code",15),e(52),i()()()()),l&2&&(m(26),f(g.imageDefaultExample),m(26),f(g.imageDefaultExample))},dependencies:[u,S,p,D]});let n=a;return n})();var A=[{path:"api",component:C},{path:"examples",component:j},{path:"**",pathMatch:"full",redirectTo:"api"}],F=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=c({type:a}),a.\u0275inj=o({imports:[x.forChild(A),x]});let n=a;return n})();var Z=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=c({type:a}),a.\u0275inj=o({imports:[E,F,I,u,b,y]});let n=a;return n})();export{Z as DefaultImageModule};
