import{a as m}from"./chunk-S2DW6XOG.js";import{E as n,N as i,Pa as l,S as a,T as c,U as s,q as r}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/search/api"},{title:"Ejemplos",route:"/components/search/examples"}],C=[{name:{data:"@Input() <br /> searchbarItems: SearchbarItem[]",customClasses:""},description:{data:"Se utiliza para definir los elementos que se mostrar\xE1n en la barra de b\xFAsqueda, permitiendo a los usuarios realizar b\xFAsquedas en el sitio.",customClasses:""}},{name:{data:"@Input() <br /> maxLengthResults: number",customClasses:""},description:{data:"Se utiliza para establecer el n\xFAmero m\xE1ximo de resultados que se mostrar\xE1n en los resultados de b\xFAsqueda.",customClasses:""}},{name:{data:"@Input() <br />  placeholder: string",customClasses:""},description:{data:"Se utiliza para definir el texto de marcador de posici\xF3n en el campo de b\xFAsqueda de la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br />  type: string",customClasses:""},description:{data:"Se utiliza para definir, en caso de ser necesario, el color de fondo del buscador, como por ejemplo light, white. ",customClasses:""}}],I=`
interface SearchbarItem {
  title: string;
  route: string;
}`,S=[{name:{data:"@Input() <br /> title: string",customClasses:""},description:{data:"Se utiliza para definir el t\xEDtulo o etiqueta del elemento de b\xFAsqueda.",customClasses:""}},{name:{data:"@Input() <br /> route: string",customClasses:""},description:{data:"Se utiliza para especificar la ruta o URL a la que se redirigir\xE1 cuando se realice una b\xFAsqueda en este elemento.",customClasses:""}}],b=`
  <o-search [searchbarItems]="routes"></o-search>
`,h=`
import { Component  } from '@angular/core';
import { SearchbarItem } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/'
    },
    {
      title: 'Introducci\xF3n',
      route: '/get-started'
    },
    {
      title: 'Componentes',
      route: '/components'
    },
    {
      title: 'Buscador',
      route: '/components/search'
    }
  ];
}
`,E=`
<o-search 
  [searchbarItems]="routes" 
  [onSelectItem]="handleSelectItem"
></o-search>`,A=`
import { Component  } from '@angular/core';
import { SearchbarItem } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/'
    },
    {
      title: 'Introducci\xF3n',
      route: '/get-started'
    },
    {
      title: 'Componentes',
      route: '/components'
    },
    {
      title: 'Buscador',
      route: '/components/search'
    }
  ];

  handleSelectItem(item: SearchbarItem) {
    console.log('Item seleccionado:', item.title);
  }
}
`;var T=(()=>{let e=class e{constructor(){this.navigation=p}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["app-search"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,d){t&1&&(a(0,"section",0),s(1,"app-tabs-link",1),a(2,"div",2),s(3,"router-outlet"),c()()),t&2&&(n(),i("routes",d.navigation))},dependencies:[l,m]});let o=e;return o})();export{C as a,I as b,S as c,b as d,h as e,E as f,A as g,T as h};
