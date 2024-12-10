import{a as m}from"./chunk-S2DW6XOG.js";import{E as l,N as r,Pa as d,S as o,T as i,U as s,q as n}from"./chunk-LDCFWZ36.js";var c=[{title:"Api",route:"/components/modal/api"},{title:"Ejemplos",route:"/components/modal/examples"}],b=[{name:{data:"@Input() <br/> dataTarget: string",customClasses:""},description:{data:"Se utiliza para identificar el componente.",customClasses:""}},{name:{data:"@Input() <br/> title: string",customClasses:""},description:{data:"Se utiliza para mostrar el t\xEDtulo del componente.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Se utiliza para mostrar la descripci\xF3n del componente.",customClasses:""}},{name:{data:"@Input() <br/> subtitle: string",customClasses:""},description:{data:"Se utiliza para mostrar el subt\xEDtulo del componente.",customClasses:""}},{name:{data:"@Input() <br/> isHeaderUnbordered: boolean",customClasses:""},description:{data:"Se utiliza para mostrar la linea divisora entre el encabezado y cuerpo del componente. Por defecto, es false.",customClasses:""}},{name:{data:"@Input() <br/> size: ModalSizes",customClasses:""},description:{data:"Se utiliza para establecer el tama\xF1o del modal. Por defecto, es chico.",customClasses:""}},{name:{data:"@Input() <br/> isScrollable: boolean",customClasses:""},description:{data:"Se utiliza para establecer si el modal es desplazable. Por defecto, es false.",customClasses:""}},{name:{data:"@Input() <br/> isOnTop: boolean",customClasses:""},description:{data:"Se utiliza para establecer si el modal se muestra en la parte de arriba de la p\xE1gina. Por defecto, es false.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],C=`
  type ModalSizes = "sm" | "md" | "lg" | "xl";
`,g=[{name:{data:"o-modal-header",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte superior del componente.",customClasses:""}},{name:{data:"o-modal-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-modal-header, para establecer el t\xEDtulo del componente.",customClasses:""}},{name:{data:"o-modal-content",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el contenido del componente.",customClasses:""}},{name:{data:"o-modal-footer",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte inferior del componente.",customClasses:""}}],f=`
<o-button dataToggle="modal" dataTarget="exampleModal">Ver modal</o-button>
<o-modal dataTarget="exampleModal">
  <o-modal-header>
    <o-modal-title>\xA1Importante!</o-modal-title>
  </o-modal-header>
  <o-modal-content>
    <p>Antes de realizar la ficha de salud, ten\xE9 en cuenta haber realizado los pasos previos correspondientes.</p>
  </o-modal-content>
  <o-modal-footer>
    <o-button type="link" dataDismiss="modal">Volver atr\xE1s</o-button>
    <o-button>Continuar</o-button>
  </o-modal-footer>
</o-modal>
`,A=`
<o-button dataToggle="modal" dataTarget="exampleModal">Ver modal</o-button>
<o-modal
  dataTarget="exampleModal"
  title="\xA1Importante!"
  description="Antes de realizar la ficha de salud, 
  ten\xE9 en cuenta haber realizado los pasos previos correspondientes."
>
  <o-button #children type="link" dataDismiss="modal">Volver atr\xE1s</o-button>
  <o-button #children>Continuar</o-button>
</o-modal>`,M=`
<o-button dataToggle="modal" dataTarget="dangerModal">Ver modal</o-button>
<o-modal
  dataTarget="dangerModal"
  title="Eliminar documento"
  description="El documento que seleccionaste ser\xE1 eliminado."
>
  <o-button #children type="secondary" [isOutline]="true" dataDismiss="modal">
    Cancelar
  </o-button>
  <o-button #children type="danger">Eliminar</o-button>
</o-modal>`,T=`
<o-button dataToggle="modal" dataTarget="recognitionModal">Ver modal</o-button>
<o-modal
  dataTarget="recognitionModal"
  subtitle="CARGA EXITOSA"
  title="Los archivos se cargaron correctamente"
  [isHeaderUnbordered]="true"
>
  <o-button #children dataDismiss="modal">Aceptar</o-button>
</o-modal>`;var h=(()=>{let e=class e{constructor(){this.modal=c}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["app-modal"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,u){a&1&&(o(0,"section",0),s(1,"app-tabs-link",1),o(2,"div",2),s(3,"router-outlet"),i()()),a&2&&(l(),r("routes",u.modal))},dependencies:[d,m]});let t=e;return t})();export{b as a,C as b,g as c,f as d,A as e,M as f,T as g,h};
