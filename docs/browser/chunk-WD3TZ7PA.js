import{a as s,b as t}from"./chunk-LDCFWZ36.js";var c="access",i="access/access-simple",a="access/access-list",o=[{title:"Api",route:"/components/access/api"},{title:"Ejemplos",route:"/components/access/examples"}],n=o.map(e=>t(s({},e),{route:e.route.replace(c,i)})),r=o.map(e=>t(s({},e),{route:e.route.replace(c,a)})),l=[{name:{data:"@Input() <br /> icon: string",customClasses:""},description:{data:"Se utiliza para especificar el \xEDcono que se mostrar\xE1 en el componente.",customClasses:""}},{name:{data:"@Input() <br /> title: string",customClasses:""},description:{data:"Se utiliza para establecer el t\xEDtulo o encabezado del componente.",customClasses:""}},{name:{data:"@Input() <br />  description: string",customClasses:""},description:{data:"Se utiliza para proporcionar una descripci\xF3n o texto descriptivo del componente.",customClasses:""}},{name:{data:"@Input() <br />  size: Sizes",customClasses:""},description:{data:'Se utiliza para definir el tama\xF1o del componente. Debe ser un valor de la enumeraci\xF3n "Sizes".',customClasses:""}},{name:{data:"@Input() <br />  link: string",customClasses:""},description:{data:"Se utiliza para especificar un enlace o URL relacionado con el componente.",customClasses:""}},{name:{data:"@Input() <br />  route: string",customClasses:""},description:{data:"Se utiliza para definir una ruta de navegaci\xF3n interna asociada con el componente.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],p=`
 type Sizes = 'sm' | 'md' | 'lg';
`,m=`
  <o-access title="Acceso" route="/home"></o-access>
`,d=`
  <o-access title="Acceso" description="Descripci\xF3n (Opcional)" route="/home"></o-access>
`,C=`
<o-access
  icon="bx bxs-info-circle"
  title="Acceso"
  description="Descripci\xF3n (Opcional)"
  route="/home"
></o-access>
`,u=`
<o-access
  title="Acceso"
  icon="bx bxs-info-circle"
  route="/home"
  description="Descripci\xF3n (Opcional)"
></o-access>

<o-access
  title="Acceso"
  icon="bx bxs-info-circle"
  route="/home"
  description="Descripci\xF3n (Opcional)"
  size="sm"
></o-access>
`,S=`
<div component class="access-items-4">
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
</div>
`,A=`
<div component class="access-items-4 row-cols-md-1">
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
</div>
`,E=`
<div component class="access-items-3">
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
</div>
`,_=`
<div component class="access-items-3 row-cols-md-1">
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
</div>
`,x=`
<div component class="access-items-1">
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
  <o-access title="Acceso" size="sm" route="/home"></o-access>
</div>
`,T=[{name:{data:"@Input() <br /> items: AccessList",customClasses:""},description:{data:"Se utiliza para definir elementos del componente.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],h=[{name:{data:"header: AccessHeader",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"children: Access[] | AccessCategory[]",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"footer: AccessFootter",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}}],g=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"description: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"icon: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"iconPositionLeft: boolean",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"iconText: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}}],z=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"description: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"icon: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"link: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"route: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}}],f=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"children: Access[]",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}}],I=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"icon: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"link: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}},{name:{data:"route: string",customClasses:""},description:{data:"Se utiliza para definir",customClasses:""}}],L=`
interface AccessList {
  header?: AccessHeader;
  children?: Access[] | AccessCategory[];
  footer?: AccessFootter;
}
`,b=`
interface AccessHeader {
  title?: string;
  description?: string;
  icon?: string;
  iconPositionLeft?: boolean;
  iconText?: string;
}
`,O=`
interface Access {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  route?: string;
}
`,R=`
interface AccessCategory {
  title?: string;
  children?: Access[];
}
`,D=`
interface AccessFootter {
  title?: string;
  icon?: string;
  link?: string;
  route?: string;
}
`,U=`
  <o-access-list [items]="items"></o-access-list>
`,N={header:{title:"T\xEDtulo del acceso",description:"Descripci\xF3n del acceso",iconText:"N\xB0"},children:[{title:"Acceso",description:"Descripci\xF3n (Opcional)",icon:"bx bxs-tag-alt",route:"/home"},{title:"Acceso",description:"Descripci\xF3n (Opcional)",icon:"bx bxs-tag-alt",route:"/home"},{title:"Acceso",description:"Descripci\xF3n (Opcional)",icon:"bx bxs-tag-alt",route:"/home"}],footer:{title:"Acceso grande",icon:"info",route:"/home"}},F={header:{title:"T\xEDtulo del acceso",description:"Descripci\xF3n del acceso",iconText:"N\xB0"},children:[{title:"Categor\xEDa 1",children:[{title:"Acceso",description:"Descripci\xF3n del acceso",icon:"bx bxs-tag-alt",route:"/home"},{title:"Acceso",description:"Descripci\xF3n del acceso",icon:"bx bxs-tag-alt",route:"/home"}]},{title:"Categor\xEDa 2",children:[{title:"Acceso",description:"Descripci\xF3n del acceso",icon:"bx bxs-tag-alt",route:"/home"},{title:"Acceso",description:"Descripci\xF3n del acceso",icon:"bx bxs-tag-alt",route:"/home"}]}],footer:{title:"Acceso grande",icon:"info",route:"/home"}},M={header:{title:"T\xEDtulo del acceso",description:"Descripci\xF3n del acceso",icon:"info",iconPositionLeft:!0},footer:{title:"Acceso grande",icon:"info",route:"/home"}},P=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'T\xEDtulo del acceso',
      description: 'Descripci\xF3n del acceso',
      icon: 'info',
      iconPositionLeft: true
    },
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`,v=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'T\xEDtulo del acceso',
      description: 'Descripci\xF3n del acceso',
      iconText: 'N\xB0'
    },
    children: [
      {
        title: 'Acceso',
        description: 'Descripci\xF3n (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      },
      {
        title: 'Acceso',
        description: 'Descripci\xF3n (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      },
      {
        title: 'Acceso',
        description: 'Descripci\xF3n (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home'
      }
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`,H=`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public items: AccessList = {
    header: {
      title: 'T\xEDtulo del acceso',
      description: 'Descripci\xF3n del acceso',
      iconText: 'N\xB0'
    },
    children: [
      {
        title: 'Categor\xEDa 1',
        children: [
          {
            title: 'Acceso',
            description: 'Descripci\xF3n del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          },
          {
            title: 'Acceso',
            description: 'Descripci\xF3n del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          }
        ]
      },
      {
        title: 'Categor\xEDa 2',
        children: [
          {
            title: 'Acceso',
            description: 'Descripci\xF3n del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          },
          {
            title: 'Acceso',
            description: 'Descripci\xF3n del acceso',
            icon: 'bx bxs-tag-alt',
            route: '/home'
          }
        ]
      }
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home'
    }
  };
}`;export{n as a,r as b,l as c,p as d,m as e,d as f,C as g,u as h,S as i,A as j,E as k,_ as l,x as m,T as n,h as o,g as p,z as q,f as r,I as s,L as t,b as u,O as v,R as w,D as x,U as y,N as z,F as A,M as B,P as C,v as D,H as E};
