import{a as c}from"./chunk-S2DW6XOG.js";import{E as p,N as a,Pa as l,S as i,T as r,U as n,q as s}from"./chunk-LDCFWZ36.js";var m=[{title:"Api",route:"/components/tooltip/api"},{title:"Ejemplos",route:"/components/tooltip/examples"}],x=[{name:{data:"@Input() <br /> direction: TooltipDirections",customClasses:""},description:{data:"Se utiliza para definir la direcci\xF3n del Tooltip.",customClasses:""}},{name:{data:"@Input() <br /> description: string",customClasses:""},description:{data:"Se utiliza para definir el contenido.",customClasses:""}},{name:{data:"@Input() <br /> trigger: 'mouseenter' | 'click'",customClasses:""},description:{data:"Se utiliza para definir el evento activador del tooltip.",customClasses:""}}],b=`
type TooltipDirections =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
`,T=[{name:"Arriba",direction:["top-start","top","top-end"],text:"Esta es la descripci\xF3n de un tooltip.",exampleHTML:`
<o-button
  oTooltip
  [description]="text"
  direction="top-start"
  customClasses="mx-2"
>Top-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="top"
  customClasses="mx-2"
>Top</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="top-end"
  customClasses="mx-2"
>Top-end</o-button>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripci\xF3n de un tooltip.';
}
    `},{name:"Derecha",direction:["right-start","right","right-end"],text:"Esta es la descripci\xF3n de un tooltip.",exampleHTML:`
<o-button
  oTooltip
  [description]="text"
  direction="right-start"
  customClasses="mx-2"
>Right-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="right"
  customClasses="mx-2"
>Right</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="right-end"
  customClasses="mx-2"
>Right-end</o-button>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripci\xF3n de un tooltip.';
}
    `},{name:"Izquierda",direction:["left-start","left","left-end"],text:"Esta es la descripci\xF3n de un tooltip.",exampleHTML:`
<o-button
  oTooltip
  [description]="text"
  direction="left-start"
  customClasses="mx-2"
>Left-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="left"
  customClasses="mx-2"
>Left</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="left-end"
  customClasses="mx-2"
>Left-end</o-button>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripci\xF3n de un tooltip.';
}
    `},{name:"Inferior",direction:["bottom-start","bottom","bottom-end"],text:"Esta es la descripci\xF3n de un tooltip.",exampleHTML:`
<o-button
  oTooltip
  [description]="text"
  direction="bottom-start"
  customClasses="mx-2"
>Bottom-start</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="bottom"
  customClasses="mx-2"
>Bottom</o-button>

<o-button
  oTooltip
  [description]="text"
  direction="bottom-end"
  customClasses="mx-2"
>Bottom-end</o-button>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripci\xF3n de un tooltip.';
}
    `},{name:"Iconos",direction:["left","top","right"],text:"Esta es la descripci\xF3n de un tooltip.",customClasses:!0,exampleHTML:`
<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="left"
  class="icon-box bg-light mx-2"
>
  <span class="material-symbols-rounded o-icon" aria-hidden="true">help</span>
</span>

<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="top"
  class="icon-box bg-light mx-2"
>
  <span class="material-symbols-rounded o-icon" aria-hidden="true">help</span>
</span>

<span
  *ngIf="tooltip.classes"
  oTooltip
  [description]="text"
  direction="right"
  class="icon-box bg-light mx-2"
>
  <span class="material-symbols-rounded o-icon" aria-hidden="true">help</span>
</span>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string = 'Esta es la descripci\xF3n de un tooltip.';
}
    `}];var E=(()=>{let t=class t{constructor(){this.navigation=m}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-tooltip"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(o,u){o&1&&(i(0,"section",0),n(1,"app-tabs-link",1),i(2,"div",2),n(3,"router-outlet"),r()()),o&2&&(p(),a("routes",u.navigation))},dependencies:[l,c]});let e=t;return e})();export{x as a,b,T as c,E as d};
