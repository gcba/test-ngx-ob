import{a as d}from"./chunk-S2DW6XOG.js";import{E as n,N as l,Pa as r,S as s,T as c,U as a,q as i}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/block/api"},{title:"Ejemplos",route:"/components/block/examples"}],b=`
<o-block title="Inici\xE1 el tr\xE1mite y complet\xE1 todos los pasos">
  <o-button #children size="lg" [isExpandable]="true" link="#">Iniciar tr\xE1mite</o-button>
</o-block>
`,C=`
<o-block
  title="Inici\xE1 el tr\xE1mite y complet\xE1 todos los pasos"
  description="Si ten\xE9s un tr\xE1mite iniciado pod\xE9s continuarlo desde ac\xE1."
>
  <o-button #children size="lg" [isExpandable]="true" link="#">Iniciar tr\xE1mite</o-button>
</o-block>
`,k=`
<o-block title="Este es tu progreso en el tr\xE1mite">
  <o-progress-bar #children type="success" [currentStep]="4"></o-progress-bar>
  <o-button #children size="lg" [isExpandable]="true" link="#">Continuar tr\xE1mite</o-button>
</o-block>
`,f=`
<o-block title="Inici\xE1 el tr\xE1mite y complet\xE1 todos los pasos" [isBgLight]="true">
  <o-button #children size="lg" [isExpandable]="true" link="#">Iniciar tr\xE1mite</o-button>
</o-block>
`,E=[{name:{data:"@Input() <br/> title: string",customClasses:""},description:{data:"Establece el t\xEDtulo del bloque.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Define el contenido de texto principal del bloque.",customClasses:""}},{name:{data:"@Input() <br/> isBgLight: boolean",customClasses:""},description:{data:"Propiedad de entrada para indicar si el fondo del bloque es claro. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> isPositionRelative: boolean",customClasses:""},description:{data:"Propiedad de entrada para indicar si la posici\xF3n del bloque es relative. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],I=[{name:{data:"o-block-header",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte superior del componente.",customClasses:""}},{name:{data:"o-block-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-block-header, para establecer el t\xEDtulo del componente.",customClasses:""}},{name:{data:"o-block-text",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el texto del componente.",customClasses:""}},{name:{data:"o-block-footer",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte inferior del componente.",customClasses:""}}],x=`
<o-block>
  <o-block-header>
    <o-block-title>Inici\xE1 el tr\xE1mite y complet\xE1 todos los pasos</o-block-title>
  </o-block-header>
  <o-block-text>Si ten\xE9s un tr\xE1mite iniciado pod\xE9s continuarlo desde ac\xE1.</o-block-text>
  <o-block-footer>
    <o-button size="lg" [isExpandable]="true" link="#">Iniciar tr\xE1mite</o-button>
  </o-block-footer>
</o-block>
`;var _=(()=>{let e=class e{constructor(){this.blockNavigation=p}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i({type:e,selectors:[["app-block"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,u){t&1&&(s(0,"section",0),a(1,"app-tabs-link",1),s(2,"div",2),a(3,"router-outlet"),c()()),t&2&&(n(),l("routes",u.blockNavigation))},dependencies:[r,d]});let o=e;return o})();export{b as a,C as b,k as c,f as d,E as e,I as f,x as g,_ as h};
