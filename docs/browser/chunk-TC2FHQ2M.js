import{a as s}from"./chunk-S2DW6XOG.js";import{E as p,N as r,Pa as l,S as n,T as c,U as o,q as i}from"./chunk-LDCFWZ36.js";var g=[{title:"Api",route:"/components/pagination/api"},{title:"Ejemplos",route:"/components/pagination/examples"}],P=`
<o-pagination
  [totalPages]="10"
  [currentPage]="1"
  ariaLabel="Ejemplo de paginaci\xF3n inicial"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`,A=`
<o-pagination
  [totalPages]="10"
  [currentPage]="5"
  ariaLabel="Ejemplo de paginaci\xF3n central"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`,T=`
<o-pagination
  [totalPages]="10"
  [currentPage]="10"
  ariaLabel="Ejemplo de paginaci\xF3n final"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`,I=`
<o-pagination
  [totalPages]="10"
  [currentPage]="5"
  [isDiscriptiveType]="true"
  ariaLabel="Ejemplo de paginaci\xF3n sin numerado"
  (currentPageChange)="actualPage($event)"
></o-pagination>
`,N=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public actualPage(event: number): void {
    console.log(event);
  }
}
`;var L=(()=>{let e=class e{constructor(){this.pagination=g}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i({type:e,selectors:[["app-pagination"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,u){t&1&&(n(0,"section",0),o(1,"app-tabs-link",1),n(2,"div",2),o(3,"router-outlet"),c()()),t&2&&(p(),r("routes",u.pagination))},dependencies:[l,s]});let a=e;return a})();export{P as a,A as b,T as c,I as d,N as e,L as f};
