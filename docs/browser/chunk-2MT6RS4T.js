import{a as p}from"./chunk-S2DW6XOG.js";import{E as i,N as r,Pa as l,S as n,T as u,U as o,q as s}from"./chunk-LDCFWZ36.js";var c=[{title:"Api",route:"/components/status-message/api"},{title:"Ejemplos",route:"/components/status-message/examples"}],g=[{name:{data:"@Input() <br /> type: StatusMessageTypes",customClasses:""},description:{data:"Se utiliza para definir el tipo de mensaje que se quiere mostrar.",customClasses:""}},{name:{data:"@Input() <br /> title: string",customClasses:""},description:{data:"Se utiliza para definir el t\xEDtulo del mensaje.",customClasses:""}},{name:{data:"@Input() <br /> content: string | string[]",customClasses:""},description:{data:"Se utiliza para definir el texto del mensaje. Puede ser un string o un array de strings. Si es un array, se mostrar\xE1 como dos p\xE1rrafos separados.",customClasses:""}},{name:{data:"@Input() <br /> listContent: string[]",customClasses:""},description:{data:"Se utiliza para definir una lista de \xEDtems que se mostrar\xE1n debajo del texto. Se puede armar con etiquetas html. No es obligatorio.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],C=`
  type StatusMessageTypes = 'primary' | 'success' | 'danger' | 'info' | 'institutional';
`,f=[{name:"\xC9xito",type:"success",title:"Esto es un t\xEDtulo de un mensaje de \xE9xito",content:"Esto es un p\xE1rrafo que acompa\xF1a y sirve para indicar que el usuario realiz\xF3 una acci\xF3n correctamente, como cuando realiza una tarea con \xE9xito.",listContent:['\xC9ste es un \xEDtem dentro de una lista que puede contener un <a href="#">enlace</a>.',"Los \xEDtems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.","\xC9ste es otro \xEDtem dentro de una lista."],exampleHTML:`
<o-status-message
  type="success"
  title="Esto es un t\xEDtulo de un mensaje de \xE9xito"
  content="Esto es un p\xE1rrafo que acompa\xF1a y sirve para indicar que el usuario realiz\xF3 una acci\xF3n correctamente, como cuando realiza una tarea con \xE9xito."
  [listContent]="listContent"
>
  <o-button type="secondary">Bot\xF3n</o-button>
</o-status-message>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public listContent: string[] = [
    '\xC9ste es un \xEDtem dentro de una lista que puede contener un <a href="#">enlace</a>.',
    'Los \xEDtems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',
    '\xC9ste es otro \xEDtem dentro de una lista.'
  ]
}
    `},{name:"Advertencia",type:"primary",title:"Esto es un t\xEDtulo de un mensaje de advertencia",content:"Esto es un p\xE1rrafo que advierte y sirve para indicarle al usuario que preste atenci\xF3n a determinada informaci\xF3n o acci\xF3n que debe realizar.",listContent:['Contar con Clave Ciudad de <a href="#">AGIP</a>',"Cargar en el Sistema de Tramitaci\xF3n a Distancia (TAD) la siguiente documentaci\xF3n obligatoria:","Anexo II Formulario de Presentaci\xF3n de Programa de Capacitaci\xF3n"],exampleHTML:`
<o-status-message
  type="primary"
  title="Esto es un t\xEDtulo de un mensaje de advertencia"
  content="Esto es un p\xE1rrafo que advierte y sirve para indicarle al usuario que preste atenci\xF3n a determinada informaci\xF3n o acci\xF3n que debe realizar."
  [listContent]="listContent"
>
  <o-button type="secondary">Bot\xF3n</o-button>
  <o-button type="secondary" [isOutline]="true">Bot\xF3n</o-button>
</o-status-message>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public listContent: string[] = [
    'Contar con Clave Ciudad de <a href="#">AGIP</a>',
    'Cargar en el Sistema de Tramitaci\xF3n a Distancia (TAD) la siguiente documentaci\xF3n obligatoria:',
    'Anexo II Formulario de Presentaci\xF3n de Programa de Capacitaci\xF3n'
  ]
}
    `},{name:"Informaci\xF3n",type:"info",title:"Esto es un t\xEDtulo de un mensaje de informaci\xF3n",content:["Este es un p\xE1rrafo que brinda informaci\xF3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.","Este es un p\xE1rrafo que brinda informaci\xF3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo."],exampleHTML:`
<o-status-message
  type="info"
  title="Esto es un t\xEDtulo de un mensaje de informaci\xF3n"
  [text]="text"
>
  <o-button type="secondary">Bot\xF3n</o-button>
</o-status-message>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public text: string[] = [
    'Este es un p\xE1rrafo que brinda informaci\xF3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',
    'Este es un p\xE1rrafo que brinda informaci\xF3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'
  ]
}
    `},{name:"Error",type:"danger",title:"Esto es un t\xEDtulo de un mensaje de peligro",content:"Este p\xE1rrafo sirve para comunicar que algo sali\xF3 mal y explica c\xF3mo puede ser solucionado. Muestra errores sobre algo que se realiz\xF3.",listContent:['Contar con Clave Ciudad de <a href="#">AGIP</a>',"Cargar en el Sistema de Tramitaci\xF3n a Distancia (TAD) la siguiente documentaci\xF3n obligatoria:","Anexo II Formulario de Presentaci\xF3n de Programa de Capacitaci\xF3n"],exampleHTML:`
<o-status-message
  type="danger"
  title="Esto es un t\xEDtulo de un mensaje de peligro"
  content="Este p\xE1rrafo sirve para comunicar que algo sali\xF3 mal y explica c\xF3mo puede ser solucionado. Muestra errores sobre algo que se realiz\xF3."
  [listContent]="listContent"
>
  <o-button type="secondary">Bot\xF3n</o-button>
  <o-button type="secondary" [isOutline]="true">Bot\xF3n</o-button>
</o-status-message>
    `,exampleTS:`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public listContent: string[] = [
    'Contar con Clave Ciudad de <a href="#">AGIP</a>',
    'Cargar en el Sistema de Tramitaci\xF3n a Distancia (TAD) la siguiente documentaci\xF3n obligatoria:',
    'Anexo II Formulario de Presentaci\xF3n de Programa de Capacitaci\xF3n'
  ]
}
    `},{name:"Institucional",type:"institutional",title:"Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires",content:"En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>",exampleHTML:`
<o-status-message
  type="institutional"
  title="Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires"
  content="En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>"
>
  <o-button type="link" [isOutline]="true" link="https://buenosaires.gob.ar/">
    Ir al sitio web
  </o-button>
</o-status-message>
    `}];var T=(()=>{let e=class e{constructor(){this.navigation=c}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s({type:e,selectors:[["app-status-message"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,d){a&1&&(n(0,"section",0),o(1,"app-tabs-link",1),n(2,"div",2),o(3,"router-outlet"),u()()),a&2&&(i(),r("routes",d.navigation))},dependencies:[l,p]});let t=e;return t})();export{g as a,C as b,f as c,T as d};
