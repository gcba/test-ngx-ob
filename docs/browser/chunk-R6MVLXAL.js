import{a as p}from"./chunk-S2DW6XOG.js";import{E as i,N as r,Pa as l,S as n,T as u,U as s,q as a}from"./chunk-LDCFWZ36.js";var b=[{title:"Api",route:"/components/button/api"},{title:"Ejemplos",route:"/components/button/examples"}],m=[{name:{data:"@Input() <br/> type: ButtonTypes",customClasses:""},description:{data:"Se utiliza para establecer el tipo de bot\xF3n. Por defecto es primary.",customClasses:""}},{name:{data:"@Input() <br/> isOutline: boolean",customClasses:""},description:{data:"Se utiliza para definir si es un bot\xF3n con borde. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> size: ButtonSizes",customClasses:""},description:{data:"Se utiliza para establecer el tama\xF1o del bot\xF3n. Por defecto es mediano.",customClasses:""}},{name:{data:"@Input() <br/> isExpandable: boolean",customClasses:""},description:{data:"Se utiliza para definir si es un bot\xF3n expandible. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> ariaLabel: string",customClasses:""},description:{data:"Se utiliza para definir el atributo aria-label, en el caso de que el bot\xF3n no posea texto.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],y=[{name:{data:"@Input() <br/> route: string",customClasses:""},description:{data:"Se utiliza para definir la ruta de la etiqueta &lt;a&gt;, mediante el routerLink de Angular.",customClasses:""}},{name:{data:"@Input() <br/> link: string",customClasses:""},description:{data:"Se utiliza para definir el link de la etiqueta &lt;a&gt;, mediante el href de HTML.",customClasses:""}},{name:{data:"@Input() <br/> target: string",customClasses:""},description:{data:'Se utiliza para definir el atributo target de la etiqueta &lt;a&gt;. Por defecto es "_blank".',customClasses:""}},{name:{data:"@Input() <br/> download: string",customClasses:""},description:{data:"Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.",customClasses:""}},{name:{data:"@Input() <br/> rel: string",customClasses:""},description:{data:'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noopener noreferrer".',customClasses:""}}],B=[{name:{data:"@Input() <br/> isDisabled: boolean",customClasses:""},description:{data:'Se utiliza para definir tiene el atributo "disabled".',customClasses:""}},{name:{data:"@Input() <br/> dataTarget: string",customClasses:""},description:{data:'Se utiliza para definir el atributo "data-bs-target" de la etiqueta &lt;button&gt;.',customClasses:""}},{name:{data:"@Input() <br/> dataToggle: string",customClasses:""},description:{data:'Se utiliza para definir el atributo "data-bs-toggle" de la etiqueta &lt;button&gt;.',customClasses:""}},{name:{data:"@Input() <br/> dataDismiss: string",customClasses:""},description:{data:'Se utiliza para definir el atributo "data-bs-dismiss" de la etiqueta &lt;button&gt;.',customClasses:""}}],g=`
  type ButtonTypes = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'light' ;
`,T=`
  type ButtonSizes = "xs" | "sm" | "md" | "lg";
`,z=`
<o-button (click)="alert()">Bot\xF3n</o-button>
<o-button type="secondary" (click)="alert()">Bot\xF3n</o-button>
<o-button type="tertiary" (click)="alert()">Bot\xF3n</o-button>
<o-button type="success" (click)="alert()">Bot\xF3n</o-button>
<o-button type="danger" (click)="alert()">Bot\xF3n</o-button>
<o-button type="light" (click)="alert()">Bot\xF3n</o-button>
`,x=`
<o-button (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
<o-button type="secondary" (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
<o-button type="tertiary" (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
<o-button type="success" (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
<o-button type="danger" (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
<o-button type="light" (click)="alert()" [isOutline]="true">Bot\xF3n</o-button>
`,C=`
<o-button link="https://www.google.com/">Enlace</o-button>
`,O=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public alert() {
    alert('Bot\xF3n');
  }
}`,f=`
<o-button size="sm">Bot\xF3n</o-button>
<o-button>Bot\xF3n</o-button>
<o-button size="lg">Bot\xF3n</o-button>
`,S=`
<o-button [isDisabled]="true">Bot\xF3n</o-button>
<o-button type="secondary" [isDisabled]="true">Bot\xF3n</o-button>
<o-button type="tertiary" [isDisabled]="true">Bot\xF3n</o-button>
<o-button type="success" [isDisabled]="true">Bot\xF3n</o-button>
<o-button type="danger" [isDisabled]="true">Bot\xF3n</o-button>
<o-button type="light" [isDisabled]="true">Bot\xF3n</o-button>
`,D=`
<o-button [isExpandable]="true">Expandible</o-button>
`,_=`
// Bot\xF3n con texto e icono a la izquierda
<o-button size="sm">
  <i class="bx bx-plus o-icon"></i> Bot\xF3n
</o-button>
<o-button>
  <i class="bx bx-plus o-icon"></i> Bot\xF3n
</o-button>
<o-button size="lg">
  <i class="bx bx-plus o-icon"></i> Bot\xF3n
</o-button>

// Bot\xF3n con texto e icono a la derecha
<o-button size="sm">
  Bot\xF3n
  <span class="material-symbols-rounded o-icon" aria-hidden="true"> arrow_forward </span>
</o-button>
<o-button>
  Bot\xF3n
  <span class="material-symbols-rounded o-icon" aria-hidden="true"> arrow_forward </span>
</o-button>
<o-button size="lg">
  Bot\xF3n
  <span class="material-symbols-rounded o-icon" aria-hidden="true"> arrow_forward </span>
</o-button>

// Bot\xF3n sin texto, con icono
<o-button size="sm" ariaLabel="Bot\xF3n">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">add</span>
</o-button>
<o-button ariaLabel="Bot\xF3n">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">add</span>
</o-button>
<o-button size="lg" ariaLabel="Bot\xF3n">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">add</span>
</o-button>
`,N=`
<o-button [isDisabled]="true">
  <o-spinner type="primary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="secondary" [isDisabled]="true">
  <o-spinner type="secondary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="tertiary" [isDisabled]="true">
  <o-spinner type="tertiary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="success" [isDisabled]="true">
  <o-spinner type="success" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="danger" [isDisabled]="true">
  <o-spinner type="danger" size="sm"></o-spinner>
  Bot\xF3n</o-button
>
<o-button type="light" [isDisabled]="true">
  <o-spinner type="light" size="sm"></o-spinner>
  Bot\xF3n
</o-button>

<o-button [isOutline]="true" [isDisabled]="true">
  <o-spinner type="primary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="secondary" [isOutline]="true" [isDisabled]="true">
  <o-spinner type="secondary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="tertiary" [isOutline]="true" [isDisabled]="true">
  <o-spinner type="tertiary" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="success" [isOutline]="true" [isDisabled]="true">
  <o-spinner type="success" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
<o-button type="danger" [isOutline]="true" [isDisabled]="true">
  <o-spinner type="danger" size="sm"></o-spinner>
  Bot\xF3n</o-button
>
<o-button type="light" [isOutline]="true" [isDisabled]="true">
  <o-spinner type="light" size="sm"></o-spinner>
  Bot\xF3n
</o-button>
`,I=`
<o-button size="xs" aria-label="Editar">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
</o-button>
<o-button size="xs" aria-label="Eliminar">
  <i class="bx bxs-trash-alt o-icon"></i>
</o-button>
<o-button size="xs" aria-label="Visualizar" link="#">
  <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
</o-button>
<o-button size="xs" aria-label="Descargar">
  <i class="bx bxs-download o-icon"></i>
</o-button>
`;var w=(()=>{let t=class t{constructor(){this.buttonNavigation=b}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a({type:t,selectors:[["app-button"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(e,c){e&1&&(n(0,"section",0),s(1,"app-tabs-link",1),n(2,"div",2),s(3,"router-outlet"),u()()),e&2&&(i(),r("routes",c.buttonNavigation))},dependencies:[l,p]});let o=t;return o})();export{m as a,y as b,B as c,g as d,T as e,z as f,x as g,C as h,O as i,f as j,S as k,D as l,_ as m,N as n,I as o,w as p};
