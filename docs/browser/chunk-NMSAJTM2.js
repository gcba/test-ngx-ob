import{a as o}from"./chunk-DAYE2WGK.js";import{a as p}from"./chunk-S2DW6XOG.js";import{E as r,N as c,Pa as m,S as i,T as l,U as a,q as n}from"./chunk-LDCFWZ36.js";var x=(e,t,d)=>`
import { Component  } from '@angular/core';
import { Link, Network, Phone } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public phoneCustomItems: Phone[] = ${o(e)}
  ];

  public networkCustomItems: Network[] = ${o(t)}
  ];

  public linkCustomItems: Link[] = ${o(d)}
  ];
}`,u=[{title:"Api",route:"/components/footer/api"},{title:"Ejemplos",route:"/components/footer/examples"}],f=[{name:{data:"@Input() <br /> phoneCustomItems: Phone[]",customClasses:""},description:{data:"Se utiliza para mostrar una lista personalizada de tel\xE9fonos.",customClasses:""}},{name:{data:"@Input() <br /> networkCustomItems: Network[]",customClasses:""},description:{data:"Se utiliza para mostrar una lista personalizada de redes.",customClasses:""}},{name:{data:"@Input() <br /> linkCustomItems: Link[]",customClasses:""},description:{data:"Se utiliza para mostrar una lista personalizada de enlaces.",customClasses:""}},{name:{data:"@Input() <br /> isPhoneSectionHidden: boolean",customClasses:""},description:{data:"Se utiliza para ocultar la secci\xF3n de tel\xE9fonos.",customClasses:""}},{name:{data:"@Input() <br /> isNetworkSectionHidden: boolean",customClasses:""},description:{data:"Se utiliza para ocultar la secci\xF3n de redes.",customClasses:""}},{name:{data:"@Input() <br /> isLinkSectionHidden: boolean",customClasses:""},description:{data:"Se utiliza para ocultar la secci\xF3n de enlaces.",customClasses:""}},{name:{data:"@Input() <br /> indicatorText: string",customClasses:""},description:{data:"Se utiliza para ingresar el texto del indicador en la secci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}},{name:{data:"@Input() <br /> customClassesIndicator: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al Indicador componente para personalizar su apariencia.",customClasses:""}}],T=[{title:"101 - Numero Personalizado",number:101},{title:"102 - Numero Personalizado",number:102},{title:"103 - Numero Personalizado",number:103}],O=[{title:"Red personalizada",src:"https://www.google.com/",icon:"bx bxs-info-circle"},{title:"Red personalizada",src:"https://www.instagram.com/",icon:"bx bxs-info-circle"},{title:"Red personalizada",src:"https://youtube.com/",icon:"bx bxs-info-circle"}],E=[{title:"T\xEDtulo Personalizado",src:"https://buenosaires.gob.ar/inicio/"},{title:"T\xEDtulo Personalizado",src:"https://buenosaires.gob.ar/inicio/"},{title:"T\xEDtulo Personalizado",src:"https://buenosaires.gob.ar/inicio/"}],g={title:"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",content:["<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.","<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."]},S={title:"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",content:["<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.","<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."]},I={title:"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",content:"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."},N=`
interface Phone {
  title: string;
  number: string;
}
`,L=`
interface Network {
  title: string;
  src: string;
  icon: string;
}
`,h=`
interface Link {
  title: string;
  src: string;
}
`,R=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir el nombre.",customClasses:""}},{name:{data:"number: string",customClasses:""},description:{data:"Se utiliza para definir el n\xFAmero del telefono.",customClasses:""}}],k=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir el nombre de la red social.",customClasses:""}},{name:{data:"src: string",customClasses:""},description:{data:"Se utiliza para definir la url de la red social.",customClasses:""}},{name:{data:"icon: string",customClasses:""},description:{data:"Se utiliza para definir el icono de la red social.",customClasses:""}}],z=[{name:{data:"title: string",customClasses:""},description:{data:"Se utiliza para definir el nombre del enlace.",customClasses:""}},{name:{data:"src: string",customClasses:""},description:{data:"Se utiliza para definir la url del enlace.",customClasses:""}}],w=`
  <o-footer [isPhoneSectionHidden]="true" [isNetworkSectionHidden]="true"></o-footer>
`,A=`
  <o-footer></o-footer>
`,F=`
<o-footer
  [isPhoneSectionHidden]="true"
  indicatorText="\xBFTe fue \xFAtil esta p\xE1gina?"
>
  <button class="btn btn-outline-secondary">S\xED, me fue \xFAtil</button>
  <button class="btn btn-outline-secondary">No me sirvi\xF3</button>
</o-footer>
`,M=`
<o-footer
  [phoneCustomItems]="phoneCustomItems"
  [networkCustomItems]="networkCustomItems"
  [linkCustomItems]="linkCustomItems"
></o-footer>
`,P=`
<o-footer
  [phoneCustomContent]="phoneCustomContent"
  [networkCustomContent]="networkCustomContent"
  [linkCustomContent]="linkCustomContent"
></o-footer>
`,U=x(T,O,E),H=`
import { Component  } from '@angular/core';
import { CustomContent } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public phoneCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: [
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  };

  public networkCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: [
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  };

  public linkCustomContent: CustomContent = {
    title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
}
`;var X=(()=>{let t=class t{constructor(){this.footerNavigation=u}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n({type:t,selectors:[["app-footer"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(s,b){s&1&&(i(0,"section",0),a(1,"app-tabs-link",1),i(2,"div",2),a(3,"router-outlet"),l()()),s&2&&(r(),c("routes",b.footerNavigation))},dependencies:[m,p]});let e=t;return e})();export{f as a,T as b,O as c,E as d,g as e,S as f,I as g,N as h,L as i,h as j,R as k,k as l,z as m,w as n,A as o,F as p,M as q,P as r,U as s,H as t,X as u};
