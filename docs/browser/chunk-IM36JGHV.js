import{a as u}from"./chunk-S2DW6XOG.js";import{E as n,N as r,Pa as l,S as s,T as c,U as i,q as o}from"./chunk-LDCFWZ36.js";var d=[{title:"Api",route:"/components/navbar/api"},{title:"Ejemplos",route:"/components/navbar/examples"}],b=[{name:{data:"@Input() <br /> id: string",customClasses:""},description:{data:"Se utiliza para proporcionar una identificaci\xF3n \xFAnica al componente de barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> logo: LogoHeader",customClasses:""},description:{data:"Se utiliza para especificar la ruta e imagen del logotipo que se mostrar\xE1 en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> isRouteExact: boolean",customClasses:""},description:{data:"Se utiliza para indicar si se requiere una coincidencia exacta de ruta al determinar la activaci\xF3n de una ruta en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> routes: NavbarRoute[]",customClasses:""},description:{data:"Se utiliza para definir las rutas principales que se mostrar\xE1n en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> routesExtended: NavbarRoute[]",customClasses:""},description:{data:"Se utiliza para especificar rutas adicionales que se mostrar\xE1n en la barra de navegaci\xF3n, posiblemente como extensiones de las rutas principales.",customClasses:""}},{name:{data:"@Input() <br /> routesAccount: NavbarRouteAccount",customClasses:""},description:{data:"Se utiliza para definir las rutas relacionadas con la cuenta de usuario que se mostrar\xE1n en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> routesLogin: NavbarRouteLogin",customClasses:""},description:{data:"Se utiliza para definir las rutas de inicio de sesi\xF3n o autenticaci\xF3n que se mostrar\xE1n en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> searchbarItems: SearchbarItem[]",customClasses:""},description:{data:"Se utiliza para definir los elementos que se mostrar\xE1n en la barra de b\xFAsqueda, permitiendo a los usuarios realizar b\xFAsquedas en el sitio.",customClasses:""}},{name:{data:"@Input() <br /> maxLengthResults: number",customClasses:""},description:{data:"Se utiliza para establecer el n\xFAmero m\xE1ximo de resultados que se mostrar\xE1n en los resultados de b\xFAsqueda.",customClasses:""}},{name:{data:"@Input() <br /> placeholder: string",customClasses:""},description:{data:"Se utiliza para definir el texto de marcador de posici\xF3n en el campo de b\xFAsqueda de la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],g=`
interface NavbarRouteBase {
  iconLeft?: string;
  title?: string;
  iconRight?: string;
  route?: string;
  link?: string;
}
`,v=`
interface Media {
  src: string;
}

interface MediaHeader extends Media {
  alt?: string;
  width?: string;
  height?: string;
  customClasses?: string;
}

interface LogoHeader {
  route?: string;
  img?: MediaHeader[];
}
`,C=`
interface NavbarRoute extends NavbarRouteBase {
  children?: NavbarRouteItem[];
}

interface NavbarRouteItem extends NavbarRouteBase {
  isOverviewItem?: boolean;
}
`,A=`
interface NavbarRouteAccount extends NavbarRouteBase {
  children?: NavbarRouteAccountItem[];
}

interface NavbarRouteAccountItem extends NavbarRouteBase {
  isDangerTitle?: boolean;
  isWithNotification?: boolean;
}
`,N=`
  interface NavbarRouteLogin extends NavbarRouteBase {}
`,E=`
interface SearchbarItem {
  title: string;
  route: string;
}
`,R=[{name:{data:"@Input() <br /> route: string",customClasses:""},description:{data:"Se utiliza para especificar la ruta de la imagen del logotipo que se mostrar\xE1 en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> img: MediaHeader[]",customClasses:""},description:{data:"Se utiliza para especificar la o las imagenes del logotipo que se mostrar\xE1 en la barra de navegaci\xF3n.",customClasses:""}}],S=[{name:{data:"@Input() <br /> src: string",customClasses:""},description:{data:"Se utiliza para definir la fuente de la imagen del logotipo que se mostrar\xE1 en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> alt: string",customClasses:""},description:{data:"Se utiliza para proporcionar un texto alternativo para la imagen del logotipo, \xFAtil para accesibilidad y SEO.",customClasses:""}},{name:{data:"@Input() <br /> width: string",customClasses:""},description:{data:"Se utiliza para definir el ancho de la imagen del logotipo.",customClasses:""}},{name:{data:"@Input() <br /> height: string",customClasses:""},description:{data:"Se utiliza para definir el alto de la imagen del logotipo.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas a la imagen del logotipo.",customClasses:""}}],I=[{name:{data:"@Input() <br /> iconLeft: string",customClasses:""},description:{data:"Se utiliza para especificar el \xEDcono que se mostrar\xE1 a la izquierda del enlace en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> title: string",customClasses:""},description:{data:"Se utiliza para definir el t\xEDtulo o etiqueta del enlace en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> iconRight: string",customClasses:""},description:{data:"Se utiliza para establecer un \xEDcono que se mostrar\xE1 a la derecha del enlace en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> route: string",customClasses:""},description:{data:"Se utiliza para especificar la ruta o URL a la que se redirigir\xE1 cuando se haga clic en el enlace en la barra de navegaci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> link: string",customClasses:""},description:{data:"Se utiliza para proporcionar un enlace adicional relacionado con el elemento de la barra de navegaci\xF3n, como un enlace a la documentaci\xF3n o detalles adicionales.",customClasses:""}},{name:{data:"@Input() <br /> children: NavbarRouteItem[]",customClasses:""},description:{data:"Se utiliza para definir subelementos o enlaces secundarios que estar\xE1n anidados bajo este elemento en la barra de navegaci\xF3n.",customClasses:""}}],_=[{name:{data:"@Input() <br /> children: NavbarRouteItem[]",customClasses:""},description:{data:"Se utiliza para especificar los elementos secundarios que estar\xE1n anidados bajo este elemento de la barra de navegaci\xF3n. Cada elemento representa un enlace en la barra de navegaci\xF3n.",customClasses:""}}],x=[{name:{data:"@Input() <br /> isOverviewItem: boolean",customClasses:""},description:{data:"Se utiliza para indicar si este elemento de la barra de navegaci\xF3n es un elemento de vista general (overview). Cuando es verdadero, puede tener un estilo o comportamiento especial.",customClasses:""}}],f=[{name:{data:"@Input() <br /> children: NavbarRouteAccountItem[]",customClasses:""},description:{data:"Se utiliza para especificar los elementos secundarios relacionados con la cuenta del usuario que estar\xE1n anidados bajo este elemento en la barra de navegaci\xF3n.",customClasses:""}}],T=[{name:{data:"@Input() <br /> isDangerTitle: boolean",customClasses:""},description:{data:"Se utiliza para indicar si este elemento de la barra de navegaci\xF3n de la cuenta del usuario tiene un estilo de t\xEDtulo de peligro. Puede usarse para resaltar elementos importantes o riesgosos.",customClasses:""}},{name:{data:"@Input() <br /> isWithNotification: boolean",customClasses:""},description:{data:"Se utiliza para especificar si este elemento de la barra de navegaci\xF3n de la cuenta del usuario debe mostrar una notificaci\xF3n visual para alertar al usuario sobre eventos importantes o mensajes nuevos.",customClasses:""}}],h=[{name:{data:"@Input() <br /> title: string",customClasses:""},description:{data:"Se utiliza para definir el t\xEDtulo o etiqueta del elemento de b\xFAsqueda.",customClasses:""}},{name:{data:"@Input() <br /> route: string",customClasses:""},description:{data:"Se utiliza para especificar la ruta o URL a la que se redirigir\xE1 cuando se realice una b\xFAsqueda en este elemento.",customClasses:""}}],O=`
<o-navbar
  id="navbarOne"
  [routes]="routes"
  [routesLogin]="routesLogin"
></o-navbar>
`,L=`
<o-navbar
  id="navbarTwo"
  [routesExtended]="routesExtended"
  [routesLogin]="routesLogin"
></o-navbar>
`,z=`
<o-navbar
  id="navbarThree"
  [routes]="routes"
  [routesAccount]="routesAccount"
></o-navbar>
`,B=`
<o-navbar
  id="navbarFour"
  [routesExtended]="routesExtended"
  [routesAccount]="routesAccount"
></o-navbar>
`,U=`
<o-navbar
  id="navbarFive"
  [routes]="routes"
  [searchbarItems]="searchbarItems"
></o-navbar>
`,q=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Secci\xF3n 1',
      children: [
        {
          title: 'Navegaci\xF3n',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/'
        }
      ]
    },
    {
      title: 'Secci\xF3n 2',
      route: '/'
    },
    {
      title: 'Secci\xF3n 3',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/'
  };
}
`,D=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routesExtended: NavbarRoute[] = [
    {
      title: 'Secci\xF3n 1',
      route: '/'
    },
    {
      title: 'Secci\xF3n 2',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/'
        }
      ]
    },
    {
      title: 'Secci\xF3n 3',
      route: '/'
    },
    {
      title: 'Secci\xF3n 4',
      route: '/'
    },
    {
      title: 'Secci\xF3n 5',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/',
          isOverviewItem: true
        }
      ]
    },
    {
      title: 'Secci\xF3n 6',
      route: '/'
    }
  ];

  routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/'
  };
}
`,M=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Secci\xF3n 1',
      children: [
        {
          title: 'Navegaci\xF3n',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/'
        }
      ]
    },
    {
      title: 'Secci\xF3n 2',
      route: '/'
    },
    {
      title: 'Secci\xF3n 3',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  routesAccount: NavbarRouteAccount = {
    title: 'Pefil',
    children: [
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true
      },
      {
        title: 'Cerrar sesi\xF3n',
        route: '/',
        isDangerTitle: true
      }
    ]
  };
}
`,V=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routesExtended: NavbarRoute[] = [
    {
      title: 'Secci\xF3n 1',
      route: '/'
    },
    {
      title: 'Secci\xF3n 2',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/'
        }
      ]
    },
    {
      title: 'Secci\xF3n 3',
      route: '/'
    },
    {
      title: 'Secci\xF3n 4',
      route: '/'
    },
    {
      title: 'Secci\xF3n 5',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/',
          isOverviewItem: true
        }
      ]
    },
    {
      title: 'Secci\xF3n 6',
      route: '/'
    }
  ];

  routesAccount: NavbarRouteAccount = {
    title: 'Pefil',
    children: [
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Navegaci\xF3n',
        route: '/'
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true
      },
      {
        title: 'Cerrar sesi\xF3n',
        route: '/',
        isDangerTitle: true
      }
    ]
  };
}
`,H=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Secci\xF3n 1',
      children: [
        {
          title: 'Navegaci\xF3n',
          link: 'https://music.youtube.com/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/'
        }
      ]
    },
    {
      title: 'Secci\xF3n 2',
      route: '/'
    },
    {
      title: 'Secci\xF3n 3',
      children: [
        {
          title: 'Navegaci\xF3n',
          route: '/'
        },
        {
          title: 'Navegaci\xF3n',
          route: '/',
          isOverviewItem: true
        }
      ]
    }
  ];

  searchbarItems: SearchbarItem[] = [
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
    }
  ];
}
`;var y=(()=>{let e=class e{constructor(){this.navigation=d}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=o({type:e,selectors:[["app-navbar"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,m){a&1&&(s(0,"section",0),i(1,"app-tabs-link",1),s(2,"div",2),i(3,"router-outlet"),c()()),a&2&&(n(),r("routes",m.navigation))},dependencies:[l,u]});let t=e;return t})();export{b as a,g as b,v as c,C as d,A as e,N as f,E as g,R as h,S as i,I as j,_ as k,x as l,f as m,T as n,h as o,O as p,L as q,z as r,B as s,U as t,q as u,D as v,M as w,V as x,H as y,y as z};
