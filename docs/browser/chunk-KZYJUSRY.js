import{a as c}from"./chunk-S2DW6XOG.js";import{E as o,N as l,Pa as p,S as i,T as r,U as n,q as s}from"./chunk-LDCFWZ36.js";var d=[{title:"Api",route:"/components/panel/api"},{title:"Ejemplos",route:"/components/panel/examples"}],g={src:"https://gcba.github.io/Obelisco/cards/paseobajo-wide.png",alt:"descripci\xF3n de imagen"},b={src:"https://gcba.github.io/Obelisco/cards/paseobajo-wide.png",alt:"descripci\xF3n de imagen",size:"lg"},A=[{name:{data:"@Input() <br/> title: string",customClasses:""},description:{data:"Propiedad de entrada para el t\xEDtulo del panel peque\xF1o.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Propiedad de entrada para la descripci\xF3n del panel peque\xF1o.",customClasses:""}},{name:{data:"@Input() <br/> image: MediaPanel",customClasses:""},description:{data:"Define la imagen principal del destacado.",customClasses:""}},{name:{data:"@Input() <br/> isBgWhite: boolean",customClasses:""},description:{data:"Propiedad de entrada para indicar si el fondo del panel peque\xF1o es blanco.",customClasses:""}},{name:{data:"@Input() <br/> isBgLight: boolean",customClasses:""},description:{data:"Propiedad de entrada para indicar si el fondo del panel peque\xF1o es claro.",customClasses:""}},{name:{data:"@Input() <br/> isVertical: boolean",customClasses:""},description:{data:"Propiedad de entrada para indicar si el panel peque\xF1o es vertical. Por defecto es horizontal",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],L=`
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image">
</o-panel-small>
`,E=`
import { Component } from '@angular/core';
import { MediaSizes, MediaPanel } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Nombre del titular';

  public description: string = 'Descripci\xF3n de hasta 3 l\xEDneas para mantener los est\xE1ndares de lectura en los componentes de Obelisco.';

  public image: MediaPanel = {
    src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
    alt: 'descripci\xF3n de imagen',
    size: 'lg' as MediaSizes
  };
}
`,h=`
import { Component } from '@angular/core';
import { MediaPanel } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public title: string = 'Nombre del titular';

  public description: string = 'Descripci\xF3n de hasta 3 l\xEDneas para mantener los est\xE1ndares de lectura en los componentes de Obelisco.';

  public image: MediaPanel = {
    src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
    alt: 'descripci\xF3n de imagen'
  };
}
`,C=`
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
</o-panel-small>
`,M=`
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true"
  [isBgWhite]="true">
</o-panel-small>

<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true"
  [isBgLight]="true">
</o-panel-small>
`,_=`
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
  <ng-container #listLinkContent>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
    <h4 class="list-link-item-title">Nombre del archivo</h4>
    <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
  </ng-container>
</o-panel-small>
`,f=`
<o-panel-small
  [title]="title"
  [description]="description"
  [image]="image"
  [isVertical]="true">
  <ng-container #panelFooterContent>
    <button type="button" class="btn btn-secondary btn-sm card-link">Acci\xF3n 1</button>
    <button type="button" class="btn btn-link btn-sm card-link">Acci\xF3n 2</button>
  </ng-container>
</o-panel-small>
`,P=`
interface Media {
  src: string;
}

interface MediaPanel extends Media {
  size: MediaSizes;
  alt: string;
}
`,S=[{name:{data:"src: string"},description:{data:"Se utiliza para definir la url del elemento multimedia."}},{name:{data:"size: MediaSizes"},description:{data:"Se utiliza para definir el tama\xF1o de la imagen."}},{name:{data:"alt: string"},description:{data:"Se utiliza para definir el texto alternativo de la imagen."}}],x=`
  type MediaSizes = 'sm' | 'md' | 'lg';
`;var O=(()=>{let e=class e{constructor(){this.navigation=d}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s({type:e,selectors:[["app-panel"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,u){a&1&&(i(0,"section",0),n(1,"app-tabs-link",1),i(2,"div",2),n(3,"router-outlet"),r()()),a&2&&(o(),l("routes",u.navigation))},dependencies:[p,c]});let t=e;return t})();export{g as a,b,A as c,L as d,E as e,h as f,C as g,M as h,_ as i,f as j,P as k,S as l,x as m,O as n};
