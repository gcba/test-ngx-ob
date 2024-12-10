import{a as d}from"./chunk-S2DW6XOG.js";import{E as l,N as i,Pa as c,S as s,T as r,U as n,q as o}from"./chunk-LDCFWZ36.js";var u=[{title:"Api",route:"/components/table/api"},{title:"Ejemplos",route:"/components/table/examples"}],p=[{name:{data:"@Input() <br/> id: string"},description:{data:"Se utiliza para definir el identificador de la tabla."}},{name:{data:"@Input() <br/> columns: Column[]"},description:{data:"Se utiliza para definir las columnas que se mostrar\xE1n en la tabla."}},{name:{data:"@Input() <br/> dataSource: DataSource[]"},description:{data:"Se utiliza para definir los datos que se mostrar\xE1n en la tabla."}},{name:{data:"@Input() <br/> isBordered: boolean"},description:{data:"Se utiliza para definir si la tabla tendr\xE1 bordes."}},{name:{data:"@Input() <br/> isStriped: boolean"},description:{data:"Se utiliza para definir si la tabla tendr\xE1 rayas."}},{name:{data:"@Input() <br/> isScrollable: boolean"},description:{data:"Se utiliza para habilitar el desplazamiento horizontal de la tabla."}},{name:{data:"@Input() <br /> customClasses: string"},description:{data:"Se utiliza para aplicar clases personalizadas al componente."}},{name:{data:"@Input() <br/> checkbox: TableCheckbox"},description:{data:"Se utiliza para habilitar las casillas de verificaci\xF3n en la tabla."}}],E=[{name:{data:"@Output() <br/> dataSelectedChange: EventEmitter&lt;DataSource[]&gt"},description:{data:"Se utiliza para obtener el elemento seleccionado."}}],g=[{name:{data:"key"},description:{data:"Se utiliza para definir el nombre de la propiedad del objeto. <br /> Que tiene que ser igual al que se especifica en el dataSource.",customClasses:""}},{name:{data:"value"},description:{data:"Se utiliza para definir el nombre de la columna.",customClasses:""}},{name:{data:"customClasses"},description:{data:"Se utiliza para definir clases para personalizar la columna.",customClasses:""}}],C=[{name:{data:"[key: string]: <br/>{ data: string; customClasses?: string } "},description:{data:"Se utiliza para definir el esquema de datos para el origen de datos de la tabla. Cada clave representa una columna en la tabla, y su valor es un objeto que contiene los datos de la columna y opcionalmente clases personalizadas para esa columna."}}],h=[{name:{data:"title: string"},description:{data:"Se utiliza para definir el t\xEDtulo de la casilla de verificaci\xF3n que permite seleccionar todas las filas de la tabla."}},{name:{data:"customClassesTh: string"},description:{data:"Se utiliza para aplicar clases personalizadas al encabezado de la columna de la casilla de verificaci\xF3n."}},{name:{data:"customClassesLabel: string"},description:{data:"Se utiliza para aplicar clases personalizadas a la etiqueta de la casilla de verificaci\xF3n."}},{name:{data:"isAllSelectable: string"},description:{data:'Se utiliza para definir si todas las filas de la tabla son seleccionables cuando se selecciona la casilla de verificaci\xF3n "Seleccionar todo".'}}],S=`
interface Column {
  key: string;
  value: string;
  customClasses: string;
}
`,x=`
interface DataSource {
  [key: string]: { data: string; customClasses?: string };
}
`,A=`
interface TableCheckbox {
  title?: string;
  customClassesTh?: string;
  customClassesLabel?: string;
  isAllSelectable?: boolean;
}
`,f=`
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isScrollable]="true"
></o-table>`,k=`
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isBordered]="true"
  [isScrollable]="true"
></o-table>`,T=`
<o-table
  [columns]="columns"
  [dataSource]="dataSource"
  [isStriped]="true"
  [isScrollable]="true"
></o-table>`,y=`
<o-table
  id="table-checkbox-test"
  [columns]="columns"
  [dataSource]="dataSource"
  [checkbox]="{
    title: 'Checkbox',
    isAllSelectable: true
  }"
  [isScrollable]="true"
  (dataSelectedChange)="onDataSelectedChange($event)"
></o-table>`,L=`
import { Component, OnInit } from '@angular/core';
import { Column, DataSource } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  columns: Column[] = [
    { key: 'number', value: 'N\xFAmero', customClasses: 'tb-number' },
    { key: 'text', value: 'Texto', customClasses: 'tb-text' },
    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
    { key: 'button', value: 'Bot\xF3n', customClasses: 'tb-button' },
    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
    { key: 'icon', value: 'B\xF3ton con \xEDcono', customClasses: 'tb-button ' }
  ];

  dataSource: DataSource[] = [
    {
      number: { data: '1', customClasses: 'text-right' },
      text: { data: 'Juan' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '2', customClasses: 'text-right' },
      text: { data: 'Maria' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '3', customClasses: 'text-right' },
      text: { data: 'Esther' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '4', customClasses: 'text-right' },
      text: { data: 'Jos\xE9' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    }
  ];

  // Definici\xF3n de partes comunes
  linkHtml = '<a href="#" target="_blank" rel="noreferrer">Enlace</a>';

  buttonHtml = \`
    <button type="button" class="btn btn-primary btn-icon">
      <i class="bx bxs-info-circle"></i>
      bot\xF3n
    </button>\`;

  iconsHtml = \`
    <div class="actions-table">
      <button class="btn button-actions-table" aria-label="Editar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
      </button>
      <button class="btn button-actions-table" aria-label="Visualizar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
      </button>
      <button class="btn button-actions-table" aria-label="Descargar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
      </button>
      <button class="btn button-actions-table" aria-label="Eliminar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
      </button>
    </div>\`;
}
`,_=`
import { Component, OnInit } from '@angular/core';
import { Column, DataSource } from 'obelisco-angular/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  columns: Column[] = [
    { key: 'number', value: 'N\xFAmero', customClasses: 'tb-number' },
    { key: 'text', value: 'Texto', customClasses: 'tb-text' },
    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
    { key: 'button', value: 'Bot\xF3n', customClasses: 'tb-button' },
    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
    { key: 'icon', value: 'B\xF3ton con \xEDcono', customClasses: 'tb-button ' }
  ];

  dataSource: DataSource[] = [
    {
      number: { data: '1', customClasses: 'text-right' },
      text: { data: 'Juan' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '2', customClasses: 'text-right' },
      text: { data: 'Maria' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '3', customClasses: 'text-right' },
      text: { data: 'Esther' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    },
    {
      number: { data: '4', customClasses: 'text-right' },
      text: { data: 'Jos\xE9' },
      link: { data: this.linkHtml },
      button: { data: this.buttonHtml },
      tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
      icon: { data: this.iconsHtml }
    }
  ];

  onDataSelectedChange(data: any[]): void {
    console.log('Datos seleccionados:', data);
  }

  // Definici\xF3n de partes comunes
  linkHtml = '<a href="#" target="_blank" rel="noreferrer">Enlace</a>';

  buttonHtml = \`
    <button type="button" class="btn btn-primary btn-icon">
      <i class="bx bxs-info-circle"></i>
      bot\xF3n
    </button>\`;

  iconsHtml = \`
    <div class="actions-table">
      <button class="btn button-actions-table" aria-label="Editar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
      </button>
      <button class="btn button-actions-table" aria-label="Visualizar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">visibility</span>
      </button>
      <button class="btn button-actions-table" aria-label="Descargar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">file_download</span>
      </button>
      <button class="btn button-actions-table" aria-label="Eliminar">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
      </button>
    </div>\`;
}
`;var I=(()=>{let a=class a{constructor(){this.navigation=u}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=o({type:a,selectors:[["app-table"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,m){t&1&&(s(0,"section",0),n(1,"app-tabs-link",1),s(2,"div",2),n(3,"router-outlet"),r()()),t&2&&(l(),i("routes",m.navigation))},dependencies:[c,d]});let e=a;return e})();export{p as a,E as b,g as c,C as d,h as e,S as f,x as g,A as h,f as i,k as j,T as k,y as l,L as m,_ as n,I as o};
