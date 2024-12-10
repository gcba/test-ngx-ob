import{a as l}from"./chunk-S2DW6XOG.js";import{E as r,N as p,Pa as c,S as t,T as a,U as i,q as o}from"./chunk-LDCFWZ36.js";var d=[{title:"Api",route:"/components/spinner/api"},{title:"Ejemplos",route:"/components/spinner/examples"}],E=[{name:{data:"@Input() <br/> type: SpinnerTypes",customClasses:""},description:{data:"Se utiliza para establecer el color del spinner. Por defecto es primary.",customClasses:""}},{name:{data:"@Input() <br/> size: Sizes",customClasses:""},description:{data:"Se utiliza para establecer el tama\xF1o del spinner. Por defecto es mediano.",customClasses:""}},{name:{data:"@Input() <br/> isExpandable: boolean",customClasses:""},description:{data:"Se utiliza para establecer si el spinner es expandible. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Se utiliza para establecer el texto que acompa\xF1e al spinner.",customClasses:""}}],S=`
  type SpinnerTypes = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'light' | 'dark';
`,y=`
<o-spinner></o-spinner>
<o-spinner type="secondary"></o-spinner>
<o-spinner type="tertiary"></o-spinner>
<o-spinner type="success"></o-spinner>
<o-spinner type="danger"></o-spinner>
<o-spinner type="light"></o-spinner>
<o-spinner type="dark"></o-spinner>
`,N=`
<o-spinner size="sm"></o-spinner>
<o-spinner></o-spinner>
<o-spinner size="lg"></o-spinner>
`,I=`
<div style="width: 96px">
  <o-spinner [isExpandable]="true"></o-spinner>
</div>
`,f=`
<o-spinner size="lg" description="Cargando..."></o-spinner>
`;var R=(()=>{let e=class e{constructor(){this.spinner=d}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o({type:e,selectors:[["app-spinner"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(n,u){n&1&&(t(0,"section",0),i(1,"app-tabs-link",1),t(2,"div",2),i(3,"router-outlet"),a()()),n&2&&(r(),p("routes",u.spinner))},dependencies:[c,l]});let s=e;return s})();export{E as a,S as b,y as c,N as d,I as e,f,R as g};
