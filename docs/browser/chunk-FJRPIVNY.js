import{a as l}from"./chunk-S2DW6XOG.js";import{E as r,N as n,Pa as p,S as o,T as m,U as s,q as i}from"./chunk-LDCFWZ36.js";var c=[{title:"Api",route:"/components/map/api"},{title:"Ejemplos",route:"/components/map/examples"}],f=`
<o-map title="Ubicaci\xF3n" description="Uspallata 3160" [iframe]="iframe">
  <o-button
    [isExpandable]="true"
    link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    target="_blank"
    rel="noreferrer"
  >C\xF3mo llego</o-button>
</o-map>
`,C=`
<o-map title="Ubicaci\xF3n" description="Uspallata 3160" [iframe]="iframe" type="institutional">
  <o-button
    [isExpandable]="true"
    link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    target="_blank"
    rel="noreferrer"
  >C\xF3mo llego</o-button>
</o-map>
`,b={src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar",title:"Mapa de Buenos Aires"},A=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public iframe: MediaIframe = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
    title: 'Mapa de Buenos Aires'
  };
}
`,g=[{name:{data:"@Input() <br/> type: 'lateral' | 'institutional'"},description:{data:"Propiedad que determina el tipo de encabezado a mostrar: 'lateral' para un h2 y 'institutional' para un h3."}},{name:{data:"@Input() <br/> title: string",customClasses:""},description:{data:"Establece el t\xEDtulo del destacado.",customClasses:""}},{name:{data:"@Input() <br/> description: string",customClasses:""},description:{data:"Define la direcci\xF3n del mapa.",customClasses:""}},{name:{data:"@Input() <br/> iframe: MediaIframe"},description:{data:"Propiedad para agregar el iframe del mapa."}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],M=`
interface Media {
  src: string;
}

interface MediaIframe extends Media {
  title: string;
}
`,x=[{name:{data:"src: string"},description:{data:"Se utiliza para definir la url del elemento multimedia."}},{name:{data:"title: string"},description:{data:"Se utiliza para definir el t\xEDtulo del iframe."}}],I=[{name:{data:"o-map-header",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte superior del componente.",customClasses:""}},{name:{data:"o-map-title",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-map-header, para establecer el t\xEDtulo del componente.",customClasses:""}},{name:{data:"o-map-description",customClasses:"font-italic"},description:{data:"Se utiliza dentro de o-map-header, para establecer el subt\xEDtulo del componente.",customClasses:""}},{name:{data:"o-map-content",customClasses:"font-italic"},description:{data:"Se utiliza para contener el iframe del componente.",customClasses:""}},{name:{data:"o-map-iframe",customClasses:"font-italic"},description:{data:"Se utiliza para establecer el iframe del componente.",customClasses:""}},{name:{data:"o-map-footer",customClasses:"font-italic"},description:{data:"Secci\xF3n anclada a la parte inferior del componente.",customClasses:""}}],_=[{name:{data:"@Input() <br/> iframe: MediaIframe"},description:{data:"Propiedad para agregar el iframe del mapa."}}],S=`
<o-map type="institutional">
  <o-map-header>
    <o-map-title>Ubicaci\xF3n</o-map-title>
    <o-map-description>Uspallata 3160</o-map-description>
  </o-map-header>
  <o-map-content>
    <o-map-iframe [iframe]="iframe"></o-map-iframe>
  </o-map-content>
  <o-map-footer>
    <o-button
      target="_blank"
      rel="noreferrer"
      [isExpandable]="true"
      link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
    >
      C\xF3mo llego
    </o-button>
  </o-map-footer>
</o-map>
`,E=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './app-example.component.html',
})
export class ExampleComponent {
  public iframe: MediaIframe = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
    title: 'Mapa de Buenos Aires'
  };
}
`;var v=(()=>{let e=class e{constructor(){this.navigationMap=c}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=i({type:e,selectors:[["app-map"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(a,u){a&1&&(o(0,"section",0),s(1,"app-tabs-link",1),o(2,"div",2),s(3,"router-outlet"),m()()),a&2&&(r(),n("routes",u.navigationMap))},dependencies:[l,p]});let t=e;return t})();export{f as a,C as b,b as c,A as d,g as e,M as f,x as g,I as h,_ as i,S as j,E as k,v as l};
