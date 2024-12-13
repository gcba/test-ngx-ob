import{a as d}from"./chunk-7PUH3GER.js";import{Da as c,H as i,M as s,N as l,O as r,n as o,z as n}from"./chunk-IAYUGCCV.js";var p=[{title:"Api",route:"/components/alert/api"},{title:"Ejemplos",route:"/components/alert/examples"}],x=[{name:{data:"@Input() <br/> type: AlertTypes",customClasses:""},description:{data:"Se utiliza para establecer el tipo de la alerta. Por defecto es info.",customClasses:""}},{name:{data:"@Input() <br/> isDismissible: boolean",customClasses:""},description:{data:"Se utiliza para definir si se mostrar\xE1 el componente con cierre. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> listContent: AlertList",customClasses:""},description:{data:"Se utiliza para definir una lista en la alerta. ",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],E=`
  type AlertTypes = 'warning' | 'success' | 'danger' | 'info';
`,A=`
export interface AlertList {
  isUnorderedList?: boolean;
  listItems: AlertListItems[];
}

export interface AlertListItems {
  text?: string;
  url?: string;
}
`,L=[{name:{data:"@Input() <br/> isUnorderedList: boolean",customClasses:""},description:{data:"Se utiliza para establecer si la lista dentro de la alerta debe ser una lista desordenada (con vi\xF1etas) o una lista ordenada (numerada). Por defecto es false (lista ordenada).",customClasses:""}},{name:{data:"@Input() <br/> listItems: AlertListItems[]",customClasses:""},description:{data:"Se utiliza para establecer los elementos de la lista, cada uno de los cuales puede tener un texto y una URL asociada. ",customClasses:""}}],T=`
<o-alert>
  Esta es la descripci\xF3n de una alerta de informaci\xF3n.
</o-alert>
<o-alert type="primary">
  Esta es la descripci\xF3n de una alerta de informaci\xF3n.
</o-alert>
<o-alert type="success">
  Esta es la descripci\xF3n de una alerta de informaci\xF3n.
</o-alert>
<o-alert type="danger">
  Esta es la descripci\xF3n de una alerta de informaci\xF3n.
</o-alert>
`,I=`
<o-alert [isDismissible]="true">
  Esta es la descripci\xF3n de una alerta de informaci\xF3n.
</o-alert>
`,f=`
<o-alert>
  <strong>Este es un destacado de una alerta de informaci\xF3n.</strong>
  Esta es la descripci\xF3n de una alerta de informaci\xF3n que continua al texto destacado.
</o-alert>
`,_=`
<o-alert>
  <strong>Este es un destacado de una alerta de informaci\xF3n.</strong>
  Esta es la descripci\xF3n de una alerta de informaci\xF3n que continua al texto destacado, incluso con
  <a [routerLink]="['/']">con enlace</a>.
</o-alert>
`,C={listItems:[{text:"Ancla al error 1",url:"#"},{text:"Ancla al error 2",url:"#"},{text:"Ancla al error 3",url:"#"},{text:"Ancla al error 4",url:"#"},{text:"Ancla al error 5",url:"#"}]},S={listItems:[{text:"Texto descriptivo 1"},{text:"Texto descriptivo 2"},{text:"Texto descriptivo 3"},{text:"Texto descriptivo 4"},{text:"Texto descriptivo 5"}]},g=`
<o-alert type="danger" [listContent]="listLinkItems">
  <strong>Este es un destacado de una alerta de error.</strong>
  Esta es la descripci\xF3n de una alerta de error que continua al texto destacado.
</o-alert>

<o-alert [listContent]="listItems">
  <strong>Este es un destacado de una alerta de informaci\xF3n.</strong>
  Esta es la descripci\xF3n de una alerta de informaci\xF3n que continua al texto destacado.
</o-alert>
`,R=`
import { Component } from '@angular/core';
import { AlertList } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public listLinkItems: AlertList = {
    listItems: [
      { text: 'Ancla al error 1', url: '#' },
      { text: 'Ancla al error 2', url: '#' },
      { text: 'Ancla al error 3', url: '#' },
      { text: 'Ancla al error 4', url: '#' },
      { text: 'Ancla al error 5', url: '#' }
    ]
  };
  public listItems: AlertList = {
    listItems: [
      { text: 'Texto descriptivo 1' },
      { text: 'Texto descriptivo 2' },
      { text: 'Texto descriptivo 3' },
      { text: 'Texto descriptivo 4' },
      { text: 'Texto descriptivo 5' }
    ]
  };
}
`;var N=(()=>{let e=class e{constructor(){this.alertNavigation=p}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o({type:e,selectors:[["app-alert"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,m){t&1&&(s(0,"section",0),r(1,"app-tabs-link",1),s(2,"div",2),r(3,"router-outlet"),l()()),t&2&&(n(),i("routes",m.alertNavigation))},dependencies:[c,d]});let a=e;return a})();export{x as a,E as b,A as c,L as d,T as e,I as f,f as g,_ as h,C as i,S as j,g as k,R as l,N as m};
