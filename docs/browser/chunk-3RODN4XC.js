import{a as r}from"./chunk-S2DW6XOG.js";import{E as i,N as n,Pa as p,S as l,T as c,U as o,q as s}from"./chunk-LDCFWZ36.js";var d=[{title:"Api",route:"/components/collapse/api"},{title:"Ejemplos",route:"/components/collapse/examples"}],b=[{name:{data:"@Input() <br/> identifier: string"},description:{data:"Se utiliza para asignar el ID del colapsable."}},{name:{data:"@Input() <br/> dataParent: string"},description:{data:"Se utiliza para agregar un identificador para el comportamiento de los colapsables sean de selecci\xF3n unica."}},{name:{data:"@Input() <br/> icon?: string"},description:{data:"Se utiliza para definir el icono del colapsable."}},{name:{data:"@Input() <br/> label?: string"},description:{data:"Se utiliza para definir la etiqueta del colapsable."}},{name:{data:"@Input() <br/> title?: string"},description:{data:"Se utiliza para definir el t\xEDtulo del colapsable."}},{name:{data:"@Input() <br/> isTitleAlone?: boolean"},description:{data:"Se utiliza para definir si el t\xEDtulo del colapsable est\xE1 solo."}},{name:{data:"@Input() <br/> subtitle?: string"},description:{data:"Se utiliza para definir el subt\xEDtulo del colapsable."}},{name:{data:"@Input() <br/> content?: string | string[]"},description:{data:"Se utiliza para definir el contenido del colapsable."}},{name:{data:"@Input() <br/> children?: CollapseItems[] | CollapseInputs[]"},description:{data:"Se utiliza para definir la lista colapsables del componente."}},{name:{data:"@Input() <br/> customClassesHeader?: string"},description:{data:"Se utiliza para definir clases personalizadas para el encabezado del colapsable."}},{name:{data:"@Input() <br/> customClassesContent?: string"},description:{data:"Se utiliza para definir clases personalizadas para el contenido del colapsable."}},{name:{data:"@Input() <br/> isWhite?: boolean = false"},description:{data:"Se utiliza para definir si el colapsable es de color blanco."}}],E=[{name:{data:"@Output() <br/> selectedItemChange: EventEmitter&lt;CollapseInputs&gt;"},description:{data:"Esto define un evento de salida (@Output) llamado selectedItemChange que emite instancias de CollapseInputs cuando cambia, lo que permite a otros componentes reaccionar a cambios en la selecci\xF3n del elemento."}}],C=`
interface CollapseItems {
  label: string;
  title: string;
  subtitle: string;
}
`,L=`
interface CollapseInputs {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  name: string;
  value: boolean;
}
`,S=[{name:{data:"label: string;"},description:{data:"Define el texto del \xEDtem colapsable."}},{name:{data:"title: string;"},description:{data:"Define el t\xEDtulo del \xEDtem colapsable."}},{name:{data:"subtitle: string;"},description:{data:"Define el subt\xEDtulo del \xEDtem colapsable."}}],f=[{name:{data:"id: string;"},description:{data:"Proporciona un identificador \xFAnico para el input colapsable."}},{name:{data:"icon: string;"},description:{data:"Define el \xEDcono para el input colapsable."}},{name:{data:"title: string;"},description:{data:"Define el t\xEDtulo para el input colapsable."}},{name:{data:"subtitle: string;"},description:{data:"Define el subt\xEDtulo para el input colapsable."}},{name:{data:"name: string;"},description:{data:"Proporciona un nombre para el input colapsable."}},{name:{data:"value: boolean;"},description:{data:"Define el valor del elemento."}}],T=[{name:{data:"o-collapse-header",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte superior del componente.",customClasses:""}},{name:{data:"o-collapse-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-header, para establecer el t\xEDtulo.",customClasses:""}},{name:{data:"o-collapse-subtitle",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-header, para establecer el subt\xEDtulo.",customClasses:""}},{name:{data:"o-collapse-label",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-header, para establecer el texto por encima del t\xEDtulo.",customClasses:""}},{name:{data:"o-collapse-icon",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-header u o-collapse-input, para establecer el \xEDcono.",customClasses:""}},{name:{data:"o-collapse-content",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el contenido del componente.",customClasses:""}},{name:{data:"o-collapse-text",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-content, para establecer el texto.",customClasses:""}},{name:{data:"o-collapse-input",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el input del componente.",customClasses:""}},{name:{data:"o-collapse-input-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-input, para establecer el t\xEDtulo del input.",customClasses:""}},{name:{data:"o-collapse-input-subtitle",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-collapse-input, para establecer el subt\xEDtulo del input.",customClasses:""}}],_=[{name:{data:"@Input() <br/> icon: string",customClasses:""},description:{data:"Puede ser utilizado para establecer el \xEDcono del input.",customClasses:""}},{name:{data:"@Input() <br/> name: string",customClasses:""},description:{data:"Especifica el name del input.",customClasses:""}},{name:{data:"@Input() <br/> id: string",customClasses:""},description:{data:"Especifica el id del input.",customClasses:""}},{name:{data:"@Input() <br/> value: boolean",customClasses:""},description:{data:"Puede ser usado en checked del input.",customClasses:""}}],A=`
<o-collapse identifier="collapseExample" [isWhite]="true">
  <o-collapse-header>
    <o-collapse-title>T\xEDtulo</o-collapse-title>
    <o-collapse-label>Volanta</o-collapse-label>
    <o-collapse-subtitle>Descripci\xF3n</o-collapse-subtitle>
    <o-collapse-icon><i class="bx bxs-user-circle"></i></o-collapse-icon>
  </o-collapse-header>
  <o-collapse-content>
    <o-collapse-text>Esta es la descripci\xF3n que se encuentra dentro de un colapsable.</o-collapse-text>
  </o-collapse-content>
</o-collapse>
`,I=`
<o-collapse identifier="collapseExample">
  <o-collapse-header>
    <o-collapse-title>T\xEDtulo</o-collapse-title>
    <o-collapse-label>Volanta</o-collapse-label>
    <o-collapse-subtitle>Descripci\xF3n</o-collapse-subtitle>
    <o-collapse-icon><i class="bx bxs-user-circle"></i></o-collapse-icon>
  </o-collapse-header>
  <o-collapse-content>
    <o-collapse-input id="visa" name="credit_card">
      <o-collapse-icon><i class="bx bxl-visa"></i></o-collapse-icon>
      <o-collapse-input-title>Visa D\xE9bito ****1234</o-collapse-input-title>
      <o-collapse-input-subtitle>Heraldo Paez</o-collapse-input-subtitle>
    </o-collapse-input>
    <hr />
    <o-collapse-input id="master" name="credit_card">
      <o-collapse-icon><i class="bx bxl-mastercard"></i></o-collapse-icon>
      <o-collapse-input-title>MasterCard Cr\xE9dito ****5678</o-collapse-input-title>
      <o-collapse-input-subtitle>Heraldo Paez</o-collapse-input-subtitle>
    </o-collapse-input>
  </o-collapse-content>
</o-collapse>
`,P=`
<div class="accordion">
  <o-collapse
    identifier="collapseOne"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>

  <o-collapse
    identifier="collapseTwo"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>

  <o-collapse
    identifier="collapseThree"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>
</div>
`,x=`
<div class="accordion" id="dataParent">
  <o-collapse
    identifier="collapseUniqueOne"
    dataParent="dataParent"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>
  <o-collapse
    identifier="collapseUniqueTwo"
    dataParent="dataParent"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>
  <o-collapse
    identifier="collapseUniqueThree"
    dataParent="dataParent"
    title="T\xEDtulo"
    content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
  >
  </o-collapse>
</div>
`,g=`
<o-collapse
  identifier="collapseWhite"
  [isWhite]="true"
  title="T\xEDtulo"
  icon="bx bxs-user-circle"
  content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
>
</o-collapse>
`,O=`
<o-collapse
  identifier="collapseIcon"
  title="T\xEDtulo"
  icon="bx bxs-user-circle"
  content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
>
</o-collapse>
`,z=`
<o-collapse
  identifier="collapseLabelDescription"
  title="T\xEDtulo"
  icon="bx bxs-user-circle"
  label="Volanta"
  subtitle="Descripci\xF3n"
  content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
>
</o-collapse>
`,M=`
<o-collapse
  identifier="collapseText"
  title="T\xEDtulo"
  content="Esta es la descripci\xF3n que se encuentra dentro de un colapsable."
></o-collapse>
`,v=`
<o-collapse
  identifier="collapseList"
  title="$450,00"
  label="Total a pagar"
  [children]="[
    {
      label: '$200,00',
      title: 'Solicitud de informes varios',
      subtitle: 'Boleta N\xB0 2549-48758798'
    },
    {
      label: '$200,00',
      title: 'Solicitud de informes varios',
      subtitle: 'Boleta N\xB0 2549-48758798'
    }
  ]"
>
</o-collapse>
`,h=`
<o-collapse
  identifier="collapseListInputs"
  title="Tarjeta de cr\xE9dito / d\xE9bito"
  subtitle="VISA, MasterCard, AMEX, CABAL, Maestro"
  [children]="[
    {
      icon: 'bx bxl-visa',
      title: 'Visa D\xE9bito ****1234',
      subtitle: 'Heraldo Paez',
      id: 'visa',
      name: 'credit_card',
      value: false
    },
    {
      icon: 'bx bxl-mastercard',
      title: 'MasterCard Cr\xE9dito ****5678',
      subtitle: 'Heraldo Paez',
      id: 'master',
      name: 'credit_card',
      value: true
    }
  ]"
>
</o-collapse>
`;var R=(()=>{let e=class e{constructor(){this.navigation=d}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s({type:e,selectors:[["app-collapse"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,m){a&1&&(l(0,"section",0),o(1,"app-tabs-link",1),l(2,"div",2),o(3,"router-outlet"),c()()),a&2&&(i(),n("routes",m.navigation))},dependencies:[p,r]});let t=e;return t})();export{b as a,E as b,C as c,L as d,S as e,f,T as g,_ as h,A as i,I as j,P as k,x as l,g as m,O as n,z as o,M as p,v as q,h as r,R as s};
