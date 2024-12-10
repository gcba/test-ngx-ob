import{a as g}from"./chunk-DAYE2WGK.js";import{a as u}from"./chunk-S2DW6XOG.js";import{E as n,N as c,Pa as m,S as o,T as p,U as i,q as l}from"./chunk-LDCFWZ36.js";var t=a=>`
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public galleryItems: MediaGallery[] = ${g(a)}
  ];
}`,d=[{title:"Api",route:"/components/gallery/api"},{title:"Ejemplos",route:"/components/gallery/examples"}],M=[{name:{data:"@Input() <br /> galleryItems: MediaGallery[]",customClasses:""},description:{data:"Se utiliza para pasar una lista de im\xE1genes que se mostrar\xE1n en la galer\xEDa.",customClasses:""}},{name:{data:"@Input() <br /> isInteractive: boolean",customClasses:""},description:{data:"Se utiliza para habilitar o deshabilitar la interacci\xF3n con la galer\xEDa.",customClasses:""}},{name:{data:"@Input() <br /> dataTarget: string",customClasses:""},description:{data:"Se utiliza para pasar el id del elemento que se mostrar\xE1 en la galer\xEDa.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}},{name:{data:"@Input() <br /> customClassesInteractive: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas a la secci\xF3n interactiva del componente para personalizar su apariencia.",customClasses:""}}],_=[{author:"Autor 1",title:"Titulo de la imagen 1",content:"Descripcion de la imagen 1",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true"}],E=[..._,{author:"Autor 2",title:"Titulo de la imagen 2",content:"Descripcion de la imagen 2",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true"}],s=[...E,{author:"Autor 3",title:"Titulo de la imagen 3",content:"Descripcion de la imagen 3",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/3.jpg?raw=true"}],A=[...s,{author:"Autor 4",title:"Titulo de la imagen 4",content:"Descripcion de la imagen 4",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/4.jpg?raw=true"}],L=[...A,{author:"Autor 5",title:"Titulo de la imagen 5",content:"Descripcion de la imagen 5",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/5.jpg?raw=true"}],I=[...L,{author:"Autor 6",title:"Titulo de la imagen 6",content:"Descripcion de la imagen 6",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true"}],b=[...I,{author:"Autor 7",title:"Titulo de la imagen 7",content:"Descripcion de la imagen 7",src:"https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true"}],y=`
interface Media {
  src: string;
}

interface MediaGallery extends Media {
  author: string;
  content: string;
  title: string;
}
`,h=[{name:{data:"src: string"},description:{data:"Se utiliza para definir la url del elemento multimedia."}},{name:{data:"author: string",customClasses:""},description:{data:"Se utiliza para definir el autor de la imagen.",customClasses:""}},{name:{data:"content: string"},description:{data:"Se utiliza para definir la descripci\xF3n de la imagen."}},{name:{data:"title: string"},description:{data:"Se utiliza para definir el t\xEDtulo."}}],x=`
  <o-gallery [galleryItems]="galleryItems" [isInteractive]="true" dataTarget="modalGallery"></o-gallery>
`,C=t(s),R='<o-gallery [galleryItems]="galleryItems"></o-gallery>',f=t(_),Y=t(E),z=t(s),v=t(A),O=t(L),D=t(I),N=t(b);var V=(()=>{let e=class e{constructor(){this.galleryNavigation=d}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-gallery"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(r,T){r&1&&(o(0,"section",0),i(1,"app-tabs-link",1),o(2,"div",2),i(3,"router-outlet"),p()()),r&2&&(n(),c("routes",T.galleryNavigation))},dependencies:[m,u]});let a=e;return a})();export{M as a,_ as b,E as c,s as d,A as e,L as f,I as g,b as h,y as i,h as j,x as k,C as l,R as m,f as n,Y as o,z as p,v as q,O as r,D as s,N as t,V as u};
