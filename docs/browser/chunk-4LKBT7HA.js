import{a as t}from"./chunk-DAYE2WGK.js";import{a,b as i}from"./chunk-LDCFWZ36.js";var n=(e,o,s)=>`
import { Component  } from '@angular/core';
import { ${s} } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public ${e}: ${s}[] = ${t(o)}
  ];
}
`,l=(e,o)=>`
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsLeft: DropdownNavigationItem[] = ${t(e)}
  ];

  public dropdownItemsRight: DropdownNavigationItem[] = ${t(o)}
  ];
}
`,c="dropdown",d="dropdown/dropdown-navigation",p="dropdown/dropdown-selection",r=[{title:"Api",route:"/components/dropdown/api"},{title:"Ejemplos",route:"/components/dropdown/examples"}],I=r.map(e=>i(a({},e),{route:e.route.replace(c,d)})),x=r.map(e=>i(a({},e),{route:e.route.replace(c,p)})),h=[{name:{data:"@Input() title: string",customClasses:""},description:{data:"Asigna un t\xEDtulo.",customClasses:""}},{name:{data:"@Input() ariaLabel: string",customClasses:""},description:{data:"Asigna el texto al atributo aria-label.",customClasses:""}},{name:{data:"@Input() iconLeft: string",customClasses:""},description:{data:"Asigna un \xEDcono a la izquierda.",customClasses:""}},{name:{data:"@Input() iconRight: string",customClasses:""},description:{data:"Asigna un \xEDcono a la derecha.",customClasses:""}},{name:{data:"@Input() isAnimatedIconLeft: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo.",customClasses:""}},{name:{data:"@Input() isAnimatedIconRight: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho.",customClasses:""}},{name:{data:"@Input() dropNavItems: DropdownNavigationItem[]",customClasses:""},description:{data:"Asigna elementos de men\xFA desplegable.",customClasses:""}},{name:{data:"@Input() isPositionRight: boolean",customClasses:""},description:{data:"Coloca el men\xFA desplegable a la derecha.",customClasses:""}},{name:{data:"@Input() size: Sizes",customClasses:""},description:{data:"Se utiliza para establecer el tama\xF1o del desplegable. Por defecto es grande.",customClasses:""}},{name:{data:"@Input() isBordered: boolean",customClasses:""},description:{data:"Habilita el borde.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],C=`
interface DropdownNavigationItem {
  text?: string;
  textRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  isAnimatedIconLeft?: boolean;
  isAnimatedIconRight?: boolean;
  textDanger?: boolean;
  route?: string;
  link?: string;
  isDisabled?: boolean;
  children?: DropdownNavigationItem[];
  customClasses?: string;
}
`,D=[{name:{data:"text: string",customClasses:""},description:{data:"Texto descriptivo o t\xEDtulo.",customClasses:""}},{name:{data:"textRight: boolean",customClasses:""},description:{data:"Controla la alineaci\xF3n del texto a la derecha.",customClasses:""}},{name:{data:"iconLeft: string",customClasses:""},description:{data:"\xCDcono que aparece en la parte izquierda.",customClasses:""}},{name:{data:"iconRight: string",customClasses:""},description:{data:"\xCDcono que aparece en la parte derecha.",customClasses:""}},{name:{data:"isAnimatedIconLeft: string",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo.",customClasses:""}},{name:{data:"isAnimatedIconRight: string",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho.",customClasses:""}},{name:{data:"textDanger: boolean",customClasses:""},description:{data:"Indica si el texto tiene un significado de alerta o peligro.",customClasses:""}},{name:{data:"route: string",customClasses:""},description:{data:"Ruta de navegaci\xF3n asociada al elemento.",customClasses:""}},{name:{data:"link: string",customClasses:""},description:{data:"Enlace o URL relacionado con el elemento.",customClasses:""}},{name:{data:"isDisabled: boolean",customClasses:""},description:{data:"Habilita o deshabilita la interacci\xF3n con el elemento.",customClasses:""}},{name:{data:"children: DropdownNavigationItem[]",customClasses:""},description:{data:"Elementos secundarios que se despliegan en un men\xFA.",customClasses:""}},{name:{data:"customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],w=[{name:{data:"@Input() dataTarget: string",customClasses:""},description:{data:"Destino de los datos para la selecci\xF3n.",customClasses:""}},{name:{data:"@Input() title: string",customClasses:""},description:{data:"T\xEDtulo descriptivo para la selecci\xF3n.",customClasses:""}},{name:{data:"@Input() isSelectionMultiple: boolean",customClasses:""},description:{data:"Permite m\xFAltiples selecciones si es verdadero.",customClasses:""}},{name:{data:"@Input() iconLeft: string",customClasses:""},description:{data:"\xCDcono que aparece a la izquierda.",customClasses:""}},{name:{data:"@Input() iconRight: string",customClasses:""},description:{data:"\xCDcono que aparece a la derecha.",customClasses:""}},{name:{data:"@Input() isAnimatedIconLeft: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo si es verdadero.",customClasses:""}},{name:{data:"@Input() isAnimatedIconRight: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho si es verdadero.",customClasses:""}},{name:{data:"@Input() dropSelectItems: DropdownSelectionItem[]",customClasses:""},description:{data:"Elementos de selecci\xF3n disponibles.",customClasses:""}},{name:{data:"@Input() isBordered: boolean",customClasses:""},description:{data:"Habilita un borde si es verdadero.",customClasses:""}}],_=[{name:{data:"@Output() selectedItemChange: EventEmitter<DropdownSelectionItem | DropdownSelectionItem[]>",customClasses:""},description:{data:"Se utiliza para emitir el elemento o elementos seleccionados en el componente desplegable. Puede emitir un objeto de tipo DropdownSelectionItem o un arreglo de objetos DropdownSelectionItem, dependiendo de si se seleccionan radios o checkboxes en el componente.",customClasses:""}}],R=`
interface DropdownSelectionItem {
  id?: string;
  title?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  customClasses?: string;
}
`,N=[{name:{data:"id: string",customClasses:""},description:{data:"Identificador \xFAnico del elemento.",customClasses:""}},{name:{data:"title: string",customClasses:""},description:{data:"Texto descriptivo o t\xEDtulo.",customClasses:""}},{name:{data:"name: string",customClasses:""},description:{data:"Nombre asociado al elemento.",customClasses:""}},{name:{data:"value: string",customClasses:""},description:{data:"Valor o contenido del elemento.",customClasses:""}},{name:{data:"isDisabled: boolean",customClasses:""},description:{data:"Habilita o deshabilita la interacci\xF3n con el elemento.",customClasses:""}},{name:{data:"customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],E=[{iconLeft:"bx bx-plus",text:"Opci\xF3n de navegaci\xF3n",iconRight:"arrow_forward",link:"https://gcba.github.io/Obelisco-V2"},{iconLeft:"bx bx-plus",text:"Opci\xF3n de navegaci\xF3n",iconRight:"arrow_forward",link:"https://gcba.github.io/Obelisco-V2",textPosition:"right"},{iconLeft:"bx bx-plus",text:"Opci\xF3n de navegaci\xF3n",iconRight:"arrow_forward",link:"https://gcba.github.io/Obelisco-V2",isDisabled:!0},{isItemDanger:!0,iconLeft:"logout",text:"Cerrar sesi\xF3n",link:"https://gcba.github.io/Obelisco-V2"}],A=[{iconLeft:"bx bx-plus",text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",iconRight:"arrow_forward",link:"https://gcba.github.io/Obelisco-V2",textPosition:"right"},{isItemDanger:!0,textPosition:"right",iconRight:"logout",text:"Cerrar sesi\xF3n",link:"https://gcba.github.io/Obelisco-V2"}],m=[{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{isItemDanger:!0,iconLeft:"logout",text:"Cerrar sesi\xF3n",link:"https://gcba.github.io/Obelisco-V2"}],g=[{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{isItemDanger:!0,text:"Cerrar sesi\xF3n",link:"https://gcba.github.io/Obelisco-V2",iconRight:"logout"}],T=[{text:"Opci\xF3n en cascada",iconRight:"expand_more",isAnimatedIconRight:!0,children:[{text:"Opci\xF3n de navegaci\xF3n",route:"components"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"}]},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://gcba.github.io/Obelisco-V2"},{isItemDanger:!0,text:"Cerrar sesi\xF3n",link:"https://gcba.github.io/Obelisco-V2",iconLeft:"logout"}],v=`
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons"
  title="Desplegable"
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons"
  title="Desplegable"
  iconLeft="bx bx-plus"
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons2"
  iconLeft="menu"
  iconRight="none"
  ariaLabel="Men\xFA"
></o-dropdown-navigation>
`,L=`
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsLeft"
  title="Desplegable Izq."
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsRight"
  title="Desplegable Der."
  [isPositionRight]="true"
></o-dropdown-navigation>
`,S=`
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsWithSubitems"
  title="Desplegable"
></o-dropdown-navigation>
`,P=`
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsIcons: DropdownNavigationItem[] = [
      {
        "iconLeft": "bx bx-plus",
        text: "Opci\xF3n de navegaci\xF3n",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2"
      },
      {
        "iconLeft": "bx bx-plus",
        text: "Opci\xF3n de navegaci\xF3n",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "textPosition": "right"
      },
      {
        "iconLeft": "bx bx-plus",
        text: "Opci\xF3n de navegaci\xF3n",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "isDisabled": true
      },
      {
        "isItemDanger": true,
        "iconLeft": "logout",
        text: "Cerrar sesi\xF3n",
        link: "https://gcba.github.io/Obelisco-V2"
      }
  ];

  public dropdownItemsIcons2: DropdownNavigationItem[] = [
      {
        "iconLeft": "bx bx-plus",
        text: "Opci\xF3n de navegaci\xF3n",
        link: "https://gcba.github.io/Obelisco-V2"
      },
      {
        text: "Opci\xF3n de navegaci\xF3n",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "textPosition": "right"
      },
      {
        "isItemDanger": true,
        "textPosition": "right",
        "iconRight": "logout",
        text: "Cerrar sesi\xF3n",
        link: "https://gcba.github.io/Obelisco-V2"
      }
  ];
}
`,k=l(m,g),f=`
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsWithSubitems: DropdownNavigationItem[] = [
    {
      text: 'Opci\xF3n en cascada',
      iconRight: 'expand_more',
      isAnimatedIconRight: true,
      children: [
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          route: 'components'
        },
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          link: 'https://www.google.com/'
        },
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          link: 'https://www.google.com/'
        }
      ]
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      textDanger: true,
      text: 'Cerrar sesi\xF3n',
      link: 'https://www.google.com/',
      iconLeft: 'logout'
    }
  ];
}
`,u=[{id:"radioOne",text:"Radio 1",name:"radio",value:"radioOne"},{id:"radioTwo",text:"Radio 2",name:"radio",value:"radioTwo"},{id:"radioThree",text:"Radio 3",name:"radio",value:"radioThree",isDisabled:!0}],b=[{id:"checkboxOne",text:"Checkbox 1",name:"checkbox",value:"checkboxOne"},{id:"checkboxTwo",text:"Checkbox 2",name:"checkbox",value:"checkboxTwo"},{id:"checkboxThree",text:"Checkbox 3",name:"checkbox",value:"checkboxThree",isDisabled:!0}],V=`
<o-dropdown-selection
  dataTarget="dropdownRadio"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
></o-dropdown-selection>
`,W=`
<o-dropdown-selection
  dataTarget="dropdownChecbox"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsCheckbox"
  [isAnimatedIconRight]="true"
  [isSelectionMultiple]="true"
></o-dropdown-selection>
`,M=`
<o-dropdown-selection
  dataTarget="dropdownRadioSm"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
  size="sm"
></o-dropdown-selection>

<o-dropdown-selection
  dataTarget="dropdownRadioMd"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
></o-dropdown-selection>

<o-dropdown-selection
  dataTarget="dropdownRadioLg"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
  size="lg"
></o-dropdown-selection>
`,z=n("dropdownItemsRadio",u,"DropdownSelectionItem"),H=n("dropdownItemsCheckbox",b,"DropdownSelectionItem");export{I as a,x as b,h as c,C as d,D as e,w as f,_ as g,R as h,N as i,E as j,A as k,m as l,g as m,T as n,v as o,L as p,S as q,P as r,k as s,f as t,u,b as v,V as w,W as x,M as y,z,H as A};
