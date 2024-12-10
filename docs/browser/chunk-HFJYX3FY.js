import{a as p}from"./chunk-S2DW6XOG.js";import{E as r,N as i,Pa as l,S as o,T as c,U as a,q as s}from"./chunk-LDCFWZ36.js";var u=[{title:"Api",route:"/components/banner/api"},{title:"Ejemplos",route:"/components/banner/examples"}],d=[{name:{data:"@Input() <br/> isDark: boolean",customClasses:""},description:{data:"Se utiliza para establecer el color de fondo del banner. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> content: string",customClasses:""},description:{data:"Se utiliza para establecer el contenido del banner.",customClasses:""}},{name:{data:"@Input() <br/> icon: string",customClasses:""},description:{data:"Se utiliza para definir el \xEDcono del banner. Se debe utilizar \xEDconos de boxicons o material icons round.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],N=[{name:{data:"o-banner-text",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el texto del banner.",customClasses:""}},{name:{data:"o-banner-icon",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el \xEDcono del banner.",customClasses:""}},{name:{data:"o-banner-actions",customClasses:"font-italic"},description:{data:"Se utiliza como contenedor para los botones.",customClasses:""}}],x=`
<o-banner [isDark]="true">
  <o-banner-icon>
    <span class="material-symbols-rounded o-icon" aria-hidden="true">cookie</span>
  </o-banner-icon>
  <o-banner-text>
    Este banner tiene dos botones y <strong>puede tener \xE9nfasis</strong>. Se truncan los textos que superen m\xE1s de
    una l\xEDnea de texto.
  </o-banner-text>
  <o-banner-actions>
    <o-button size="sm" type="primary" link="#">Bot\xF3n</o-button>
    <o-button size="sm" type="light" [isOutline]="true" link="#">Bot\xF3n</o-button>
  </o-banner-actions>
</o-banner>
`,C='Esta descripci\xF3n de banner <strong>puede tener \xE9nfasis</strong> y <a href="#" target="_blank" rel="noreferrer">enlace</a>.',E=`
<o-banner [content]="content"></o-banner>

<o-banner [content]="content" [isDark]="true"></o-banner>
`,f=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public content = 'Esta descripci\xF3n de banner <strong>puede tener \xE9nfasis</strong> y
  <a href="#" target="_blank" rel="noreferrer">enlace</a>.';
}`,T="Este banner tiene un solo bot\xF3n y <strong>puede tener \xE9nfasis</strong>. Se truncan los textos que superen m\xE1s de una l\xEDnea de texto.",B="departure_board",_="cookie",y=`
<o-banner [content]="content" [icon]="icon">
  <o-button #children size="sm" type="primary" link="#">Bot\xF3n</o-button>
</o-banner>

<o-banner [content]="content" [icon]="icon" [isDark]="true">
  <o-button #children size="sm" type="primary" link="#">Bot\xF3n</o-button>
</o-banner>
`,S=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public content = 'Este banner tiene un solo bot\xF3n y <strong>puede tener \xE9nfasis</strong>. Se truncan los textos que superen m\xE1s de una l\xEDnea de texto.';
}`,g=`
<o-banner [content]="content" [icon]="iconCookie">
  <o-button #children size="sm" type="primary" link="#">Bot\xF3n</o-button>
  <o-button #children size="sm" type="primary" [isOutline]="true" link="#">Bot\xF3n</o-button>
</o-banner>

<o-banner [content]="content" [icon]="iconCookie" [isDark]="true">
  <o-button #children size="sm" type="primary" link="#">Bot\xF3n</o-button>
  <o-button #children size="sm" type="light" [isOutline]="true" link="#">Bot\xF3n</o-button>
</o-banner>
`;var h=(()=>{let e=class e{constructor(){this.bannerNavigation=u}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-banner"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(n,b){n&1&&(o(0,"section",0),a(1,"app-tabs-link",1),o(2,"div",2),a(3,"router-outlet"),c()()),n&2&&(r(),i("routes",b.bannerNavigation))},dependencies:[l,p]});let t=e;return t})();export{d as a,N as b,x as c,C as d,E as e,f,T as g,B as h,_ as i,y as j,S as k,g as l,h as m};
