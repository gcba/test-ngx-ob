import{a as l}from"./chunk-S2DW6XOG.js";import{E as i,N as n,Pa as d,S as s,T as c,U as o,q as r}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/card/api"},{title:"Ejemplos",route:"/components/card/examples"}],C=[{name:{data:"@Input() <br/> isHorizontal: boolean",customClasses:""},description:{data:"Indica si el componente tendr\xE1 una direcci\xF3n horizontal. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> isBordered: boolean",customClasses:""},description:{data:"Indica si el componente tendr\xE1 borde. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> isThemeCard: boolean",customClasses:""},description:{data:"Indica si el componente es horizontal tem\xE1tica. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> title: string",customClasses:""},description:{data:"Establece el t\xEDtulo de la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> isTitleTruncate: boolean",customClasses:""},description:{data:"Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Define el contenido de texto principal de la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> link: string",customClasses:""},description:{data:"Establece un enlace URL para la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> route: string",customClasses:""},description:{data:"Especifica la ruta de navegaci\xF3n para la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> icon: string",customClasses:""},description:{data:"Define el \xEDcono que se mostrar\xE1 en la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> image: MediaImage",customClasses:""},description:{data:"Define la imagen principal de la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> headline: string",customClasses:""},description:{data:"Establece el titular del evento o componente.",customClasses:""}},{name:{data:"@Input() <br/> cardBadges: CardBadge[]",customClasses:""},description:{data:'Define las etiquetas del componente. Debe ser un arreglo de objetos CardBadge. Por defecto type es "secondary".',customClasses:""}}],g=`
  interface CardBadge {
    text: string;
    type: BadgeTypes;
    link: string;
    route: string;
  }
`,T=[{name:{data:"text: string",customClasses:""},description:{data:"Se utiliza para definir el texto de la etiqueta.",customClasses:""}},{name:{data:"type: BadgeTypes",customClasses:""},description:{data:"Se utiliza para definir el tipo de etiqueta.",customClasses:""}},{name:{data:"link: string",customClasses:""},description:{data:"Se utiliza para definir enlace o URL.",customClasses:""}},{name:{data:"route: string",customClasses:""},description:{data:"Se utiliza para definir una ruta de navegaci\xF3n interna.",customClasses:""}}],b=`
interface Media {
  src: string;
}

interface MediaImage extends Media {
  alt: string;
}
`,f=[{name:{data:"src: string"},description:{data:"Se utiliza para definir la url del elemento multimedia."}},{name:{data:"alt: string"},description:{data:"Se utiliza para definir el texto alternativo de la imagen."}}],A=[{name:{data:"o-card-header",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte superior del componente.",customClasses:""}},{name:{data:"o-card-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-card-header, para establecer el t\xEDtulo.",customClasses:""}},{name:{data:"o-card-headline",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-card-header, para establecer el titular.",customClasses:""}},{name:{data:"o-card-badges",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-card-header, para definir las etiquetas.",customClasses:""}},{name:{data:"o-card-content",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el contenido del componente.",customClasses:""}},{name:{data:"o-card-description",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-card-content, para establecer el texto descriptivo.",customClasses:""}},{name:{data:"o-card-image",customClasses:"font-italic"},description:{data:"Se utiliza para establecer la imagen del componente.",customClasses:""}},{name:{data:"o-card-icon",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el \xEDcono del componente.",customClasses:""}},{name:{data:"o-card-footer",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte inferior del componente.",customClasses:""}}],x=[{name:{data:"@Input() <br/> isTruncate: boolean",customClasses:""},description:{data:"Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> link: string",customClasses:""},description:{data:"Establece un enlace URL para la tarjeta.",customClasses:""}},{name:{data:"@Input() <br/> route: string",customClasses:""},description:{data:"Especifica la ruta interna de navegaci\xF3n para la tarjeta.",customClasses:""}}],D=[{name:{data:"@Input() <br/> image: MediaImage",customClasses:""},description:{data:"Define la imagen principal de la tarjeta.",customClasses:""}}],j=`
<o-card [isBordered]="true">
  <o-card-header>
    <o-card-badges>
      <o-badge>Etiqueta 1</o-badge>
      <o-badge>Etiqueta 2</o-badge>
    </o-card-badges>
    <o-card-title route="/components" [isTruncate]="true">
      T\xEDtulo de la tarjeta Noticias truncado con texto extendido que supera
      las tres l\xEDneas de longitud.
    </o-card-title>
  </o-card-header>
  <o-card-image [image]="imageVertical"></o-card-image>
  <o-card-content>
    <o-card-description>Descripci\xF3n de la tarjeta</o-card-description>
  </o-card-content>
  <o-card-footer><small>Fecha de publicaci\xF3n</small></o-card-footer>
</o-card>
`,_=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public imageVertical: MediaImage = {
    src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
    alt: 'descripci\xF3n de imagen'
  };
}
`,I=`
<o-card [isHorizontal]="true" [isBordered]="true">
  <o-card-icon>
    <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
  </o-card-icon>
  <o-card-header>
    <o-card-title route="/components">
      T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea
    </o-card-title>
  </o-card-header>
  <o-card-content>
    <o-card-description>Descripci\xF3n de la tarjeta</o-card-description>
  </o-card-content>
</o-card>
`,E={src:"/assets/cards/img-left.jpg",alt:"descripci\xF3n de imagen"},R={src:"/assets/cards/home.svg",alt:"descripci\xF3n de imagen"},S={src:"/assets/cards/img-top.jpg",alt:"descripci\xF3n de imagen"},h=`
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/home.svg',
    alt: 'descripci\xF3n de imagen'
  }"
  [isThemeCard]="true"
></o-card>
`,H=`
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  icon="bx bxs-info-circle"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  icon="info"
  [isHorizontal]="true"
></o-card>
`,z=`
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-left.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-left.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
  [isHorizontal]="true"
></o-card>
`,O=`
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [isHorizontal]="true"
  [isBordered]="true"
></o-card>
<o-card
  title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [isHorizontal]="true"
></o-card>
`,B=`
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  icon="bx bxs-info-circle"
  [isBordered]="true"
></o-card>
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  icon="info"
></o-card>
`,M=`
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
  [isBordered]="true"
></o-card>
`,L=`
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
  [cardBadges]="[{text: 'Etiqueta 1'}, {text: 'Etiqueta 2'}]"
  [isBordered]="true"
>
  <small #info>Fecha de publicaci\xF3n</small>
</o-card>
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
  [cardBadges]="[{text: 'Etiqueta 1'}, {text: 'Etiqueta 2'}]"
  [isTitleTruncate]="true"
  [isBordered]="true"
>
  <small #info>Fecha de publicaci\xF3n</small>
</o-card>
`,v=`
<o-card
  title="T\xEDtulo de la tarjeta"
  description="Descripci\xF3n de la tarjeta"
  route="/components"
  headline="sobrelinea"
  [isBordered]="true"
  [image]="{
    src: '/assets/cards/img-top.jpg',
    alt: 'descripci\xF3n de imagen'
  }"
>
  <div class="pt-2" #info>
    <small><span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span> Lun 01/1</small>
    <small><span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span> 17 | 18 | 19 hs</small>
  </div>
</o-card>
`,N=`
<div class="card-deck card-column max-cards-3">
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`,y=`
<div class="card-deck card-column max-cards-2">
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="T\xEDtulo de la tarjeta con m\xE1s de una l\xEDnea"
    description="Descripci\xF3n de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`;var F=(()=>{let e=class e{constructor(){this.navigation=p}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=r({type:e,selectors:[["app-card"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,m){a&1&&(s(0,"section",0),o(1,"app-tabs-link",1),s(2,"div",2),o(3,"router-outlet"),c()()),a&2&&(i(),n("routes",m.navigation))},dependencies:[d,l]});let t=e;return t})();export{C as a,g as b,T as c,b as d,f as e,A as f,x as g,D as h,j as i,_ as j,I as k,E as l,R as m,S as n,h as o,H as p,z as q,O as r,B as s,M as t,L as u,v,N as w,y as x,F as y};
