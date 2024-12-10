import{a as u}from"./chunk-S2DW6XOG.js";import{E as n,N as c,Pa as l,S as s,T as r,U as i,q as o}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/switch/api"},{title:"Ejemplos",route:"/components/switch/examples"}],h=[{name:{data:"@Input() <br/> id: string",customClasses:""},description:{data:"Se utiliza para identificar de manera \xFAnica el elemento en el c\xF3digo.",customClasses:""}},{name:{data:"@Input() <br/> labelOn: string",customClasses:""},description:{data:"Se utiliza para establecer el texto cuando el switch est\xE1 en posici\xF3n de encendido.",customClasses:""}},{name:{data:"@Input() <br/> labelOff: string",customClasses:""},description:{data:"Se utiliza para determinar si se aplica un estilo oscuro al switch.",customClasses:""}},{name:{data:"@Input() <br/> isDark: boolean",customClasses:""},description:{data:"Se utiliza para controlar si el switch se muestra en un tama\xF1o peque\xF1o.",customClasses:""}},{name:{data:"@Input() <br/> isSmall: boolean",customClasses:""},description:{data:"Se utiliza para controlar si el switch se muestra en un tama\xF1o peque\xF1o.",customClasses:""}},{name:{data:"@Input() <br/> isDisabled: boolean",customClasses:""},description:{data:"Se utiliza para desactivar la capacidad de interactuar con el switch.",customClasses:""}},{name:{data:"@Input() <br/> isFixed: boolean",customClasses:""},description:{data:"Se utiliza para mantener el switch en una posici\xF3n fija y evitar cambios.",customClasses:""}},{name:{data:"@Input() <br/> switchValue: boolean",customClasses:""},description:{data:"Se utiliza para establecer el estado inicial (encendido o apagado) del switch.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}},{name:{data:"@Input() <br /> customClassesLabel: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al label del componente para personalizar su apariencia.",customClasses:""}}],w=[{name:{data:"@Output() <br /> switchValueChange: EventEmitter<boolean>",customClasses:""},description:{data:"Se utiliza para notificar cuando se produce un cambio en el estado del switch.",customClasses:""}}],C=`
<o-switch></o-switch>
<o-switch [switchValue]="true"></o-switch>
`,b=`
<o-switch [id]="'example'" [labelOff]="'Apagado'" [labelOn]="'Prendido'"></o-switch>
`,S=`
<o-switch [isDark]="true"></o-switch>
<o-switch [isDark]="true" [switchValue]="true"></o-switch>
`,I=`
<o-switch [isSmall]="true"></o-switch>
<o-switch [isSmall]="true" [switchValue]="true"></o-switch>
`,f=`
<o-switch [isFixed]="true"></o-switch>
<o-switch [isFixed]="true" [switchValue]="true"></o-switch>
`,T=`
<o-switch [isDisabled]="true" [labelOff]="'Apagado'"></o-switch>
<o-switch [isDisabled]="true" [labelOn]="'Prendido'" [switchValue]="true"></o-switch>
`;var O=(()=>{let t=class t{constructor(){this.switchNavigation=p}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o({type:t,selectors:[["app-switch"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(e,m){e&1&&(s(0,"section",0),i(1,"app-tabs-link",1),s(2,"div",2),i(3,"router-outlet"),r()()),e&2&&(n(),c("routes",m.switchNavigation))},dependencies:[l,u]});let a=t;return a})();export{h as a,w as b,C as c,b as d,S as e,I as f,f as g,T as h,O as i};
