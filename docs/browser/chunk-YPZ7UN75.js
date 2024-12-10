import{a as m}from"./chunk-S2DW6XOG.js";import{E as n,N as i,Pa as c,S as r,T as u,U as o,q as s}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/breadcrumb/api"},{title:"Ejemplos",route:"/components/breadcrumb/examples"}],b=[{name:{data:"routes",customClasses:""},description:{data:"Se utiliza para agregar las rutas que se quieren agregar al breadcrumb. Cada ruta puede tener un nombre o un id, tambi\xE9n se puede agregar una ruta espec\xEDfica",customClasses:""}},{name:{data:"defaultRoute",customClasses:""},description:{data:"Se utiliza para agregar una route generica al breadcrumb. Para que lo puedan utilizar las <strong>routes</strong>",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],g=[{name:{data:"name",customClasses:""},description:{data:"Se utiliza para agregar el nombre de la ruta.",customClasses:""}},{name:{data:"id",customClasses:""},description:{data:"Se utiliza para agregar el id de la ruta. Si se agrega un id, se va a agregar al final de la ruta.",customClasses:""}},{name:{data:"route",customClasses:""},description:{data:"Se utiliza para agregar una ruta espec\xEDfica. Si no se agrega una ruta, toma por defecto la ruta del breadcrumb.",customClasses:""}}],C=`
interface Breadcrumb {
  routes: BreadcrumbRoute[];
  defaultRoute: string;
}
`,R=`
interface BreadcrumbRoute {
  name: string;
  id?: string;
  route?: string;
}
`,E=`
<o-breadcrumb></o-breadcrumb>
`,f=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/custom' },
        { name: 'nivel 2', id: '15151' },
        { name: 'nivel 3', route: '/custom-routes' },
        { name: 'P\xE1gina anterior', id: '525252525', route: '/custom' }
      ],
      defaultRoute: '/route-default'
    });
  }
}
`;var M=(()=>{let e=class e{constructor(){this.breadcrumbNavigation=p}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s({type:e,selectors:[["app-breadcrumb"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,d){a&1&&(r(0,"section",0),o(1,"app-tabs-link",1),r(2,"div",2),o(3,"router-outlet"),u()()),a&2&&(n(),i("routes",d.breadcrumbNavigation))},dependencies:[c,m]});let t=e;return t})();export{b as a,g as b,C as c,R as d,E as e,f,M as g};
