import{a as m}from"./chunk-S2DW6XOG.js";import{E as n,N as d,Pa as c,S as o,T as i,U as r,q as l}from"./chunk-LDCFWZ36.js";var p=[{title:"Api",route:"/components/calendar/api"},{title:"Ejemplos",route:"/components/calendar/examples"}],N=`
<o-calendar [date]="{ month: 10, year: 2024 }"></o-calendar>`,v=[{day:1,title:"Nombre del evento 1."},{day:10,title:"Nombre del evento 2."},{day:25,title:"Nombre del evento 3."}],b=`
<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>
`,A=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarReferences: ActiveDay[] = [
    { day: 1, title: 'Nombre del evento 1.' },
    { day: 10, title: 'Nombre del evento 2.' },
    { day: 25, title: 'Nombre del evento 3.' }
  ];
}`,E=[{day:1,title:"Nombre del evento 1.",url:"#"},{day:10,title:"Nombre del evento 2.",url:"#"},{day:25,title:"Nombre del evento 3.",url:"#"}],D=`
<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>
`,C=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarReferences: ActiveDay[] = [
    { day: 1, title: 'Nombre del evento 1.', url: '#' },
    { day: 10, title: 'Nombre del evento 2.', url: '#' },
    { day: 25, title: 'Nombre del evento 3.', url: '#' }
  ];
}`,R=[{day:1,title:"Nombre del evento 1.",type:"secondary"},{day:9,title:"Nombre del evento 2."},{day:[12,13],title:"Nombre del evento 3.",type:"secondary"},{day:[25,26,27],title:"Nombre del evento 4."}],u=`
<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>
`,x=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarReferences: ActiveDay[] = [
    { day: 1, title: 'Nombre del evento 1.', type: 'secondary' },
    { day: 9, title: 'Nombre del evento 2.' },
    { day: [12, 13], title: 'Nombre del evento 3.', type: 'secondary' },
    { day: [25, 26, 27], title: 'Nombre del evento 4.' }
  ];
}`,f=[{day:1,title:"Nombre del evento 1."},{day:10,title:"Nombre del evento 2."},{day:12,title:"Nombre del evento 3."},{day:15,title:"Nombre del evento 4."},{day:23,title:"Nombre del evento 5."},{day:27,title:"Nombre del evento 6."}],T=`
<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences" [isCollapsed]="true"></o-calendar>
`,L=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarReferences: ActiveDay[] = [
    { day: 1, title: 'Nombre del evento 1.' },
    { day: 10, title: 'Nombre del evento 2.' },
    { day: 12, title: 'Nombre del evento 3.' },
    { day: 15, title: 'Nombre del evento 4.' },
    { day: 23, title: 'Nombre del evento 5.' },
    { day: 27, title: 'Nombre del evento 6.' }
  ];
}`,_=[{day:1,title:"Nombre del evento 1.",type:"coral"},{day:2,title:"Nombre del evento 2.",type:"musket"},{day:3,title:"Nombre del evento 3.",type:"citrus"},{day:4,title:"Nombre del evento 4.",type:"lime"},{day:5,title:"Nombre del evento 5.",type:"sky"},{day:6,title:"Nombre del evento 6.",type:"pistachio"},{day:7,title:"Nombre del evento 7.",type:"berries"},{day:8,title:"Nombre del evento 8.",type:"lavender"},{day:9,title:"Nombre del evento 9.",type:"aqua"},{day:10,title:"Nombre del evento 10.",type:"avocado"},{day:11,title:"Nombre del evento 11.",type:"strawberry"},{day:12,title:"Nombre del evento 12.",type:"blackberry"},{day:13,title:"Nombre del evento 13.",type:"gray"}],S=`
<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences" [isCollapsed]="true"></o-calendar>
`,h=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarReferences: ActiveDay[] = [
    { day: 1, title: 'Nombre del evento 1.', type: 'coral' },
    { day: 2, title: 'Nombre del evento 2.', type: 'musket' },
    { day: 3, title: 'Nombre del evento 3.', type: 'citrus' },
    { day: 4, title: 'Nombre del evento 4.', type: 'lime' },
    { day: 5, title: 'Nombre del evento 5.', type: 'sky' },
    { day: 6, title: 'Nombre del evento 6.', type: 'pistachio' },
    { day: 7, title: 'Nombre del evento 7.', type: 'berries' },
    { day: 8, title: 'Nombre del evento 8.', type: 'lavender' },
    { day: 9, title: 'Nombre del evento 9.', type: 'aqua' },
    { day: 10, title: 'Nombre del evento 10.', type: 'avocado' },
    { day: 11, title: 'Nombre del evento 11.', type: 'strawberry' },
    { day: 12, title: 'Nombre del evento 12.', type: 'blackberry' },
    { day: 13, title: 'Nombre del evento 13.', type: 'gray' }
  ];
}`,U={JANUARY:[{day:7,title:"Nombre del evento."}],FEBRUARY:[{day:1,title:"Nombre del evento."}],MARCH:[{day:[29,30],title:"Nombre del evento."}],APRIL:[{day:13,title:"Nombre del evento."}],MAY:[{day:1,title:"Nombre del evento."},{day:25,title:"Nombre del evento."}],JUNE:[{day:16,title:"Nombre del evento."}],JULY:[{day:9,title:"Nombre del evento."},{day:[21,22,23],title:"Nombre del evento."}],AUGUST:[{day:21,title:"Nombre del evento."}],SEPTEMBER:[{day:20,title:"Nombre del evento."}],OCTOBER:[{day:11,title:"Nombre del evento."}],NOVEMBER:[{day:18,title:"Nombre del evento."}],DECEMBER:[{day:2,title:"Nombre del evento."},{day:31,title:"Nombre del evento."}]},M=`
<div class="calendar-deck">
  <o-calendar [date]="{ month: 1, year: 2024 }" [activeDays]="calendarDeck['JANUARY']"></o-calendar>
  <o-calendar [date]="{ month: 2, year: 2024 }" [activeDays]="calendarDeck['FEBRUARY']"></o-calendar>
  <o-calendar [date]="{ month: 3, year: 2024 }" [activeDays]="calendarDeck['MARCH']"></o-calendar>
  <o-calendar [date]="{ month: 4, year: 2024 }" [activeDays]="calendarDeck['APRIL']"></o-calendar>
  <o-calendar [date]="{ month: 5, year: 2024 }" [activeDays]="calendarDeck['MAY']"></o-calendar>
  <o-calendar [date]="{ month: 6, year: 2024 }" [activeDays]="calendarDeck['JUNE']"></o-calendar>
  <o-calendar [date]="{ month: 7, year: 2024 }" [activeDays]="calendarDeck['JULY']"></o-calendar>
  <o-calendar [date]="{ month: 8, year: 2024 }" [activeDays]="calendarDeck['AUGUST']"></o-calendar>
  <o-calendar [date]="{ month: 9, year: 2024 }" [activeDays]="calendarDeck['SEPTEMBER']"></o-calendar>
  <o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarDeck['OCTOBER']"></o-calendar>
  <o-calendar [date]="{ month: 11, year: 2024 }" [activeDays]="calendarDeck['NOVEMBER']"></o-calendar>
  <o-calendar [date]="{ month: 12, year: 2024 }" [activeDays]="calendarDeck['DECEMBER']"></o-calendar>
</div>
`,k=`
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public calendarRef: { [key: string]: ActiveDay[] } =
    JANUARY: [{ day: 7, title: 'Nombre del evento.' }],
    FEBRUARY: [{ day: 1, title: 'Nombre del evento.' }],
    MARCH: [{ day: [29, 30], title: 'Nombre del evento.' }],
    APRIL: [{ day: 13, title: 'Nombre del evento.' }],
    MAY: [
      { day: 1, title: 'Nombre del evento.' },
      { day: 25, title: 'Nombre del evento.' }
    ],
    JUNE: [{ day: 16, title: 'Nombre del evento.' }],
    JULY: [
      { day: 9, title: 'Nombre del evento.' },
      { day: [21, 22, 23], title: 'Nombre del evento.' }
    ],
    AUGUST: [{ day: 21, title: 'Nombre del evento.' }],
    SEPTEMBER: [{ day: 20, title: 'Nombre del evento.' }],
    OCTOBER: [{ day: 11, title: 'Nombre del evento.' }],
    NOVEMBER: [{ day: 18, title: 'Nombre del evento.' }],
    DECEMBER: [
      { day: 2, title: 'Nombre del evento.' },
      { day: 31, title: 'Nombre del evento.' }
  ];
}`,O=[{name:{data:"@Input() <br/> date: CalendarDate"},description:{data:"Se utiliza para establecer el mes y a\xF1o del calendario."}},{name:{data:"@Input() <br/> activeDays: ActiveDay[]"},description:{data:"Se utiliza para definir los d\xEDas que tienen referencias }en el calendario."}},{name:{data:"@Input() <br/> isCollapsed: boolean"},description:{data:"Se utiliza para definir si lleva un colapsable para las} referencias. Por defecto es false."}},{name:{data:"@Input() <br/> hasList: boolean"},description:{data:"Se utiliza para definir si lleva la lista de las referencias.} Por defecto es true."}},{name:{data:"@Input() <br /> customClasses: string"},description:{data:"Se utiliza para aplicar clases personalizadas al c}omponente para personalizar su apariencia."}}],I=`
interface ActiveDay {
  day: number | number[];
  title: string;
  url: string;
  type: ActiveDayTypes;
  isDisabled: boolean;
}
`,g=`
interface CalendarDate {
  month: number;
  year: number;
}
`,Y=[{name:{data:"day: number | number[]"},description:{data:"Se utiliza para definir el d\xEDa o d\xEDas que lleva la referencia."}},{name:{data:"title: string"},description:{data:"Se utiliza para definir el texto de la referencia."}},{name:{data:"url: string"},description:{data:"Se utiliza para definir la ruta de la referencia."}},{name:{data:"type: ActiveDayTypes"},description:{data:"Se utiliza para definir el tipo de la referencia."}},{name:{data:"isDisabled: boolean"},description:{data:"Se utiliza para definir si la referencia esta deshabilitada."}}],B=[{name:{data:"month: number"},description:{data:"Se utiliza para definir el mes."}},{name:{data:"year: number"},description:{data:"Se utiliza para definir el a\xF1o."}}],F=`
type ActiveDayTypes = CromaticTypes | 'secondary' | 'gray';

type CromaticTypes = 'sky' | 'lavender' | 'coral' | 'avocado' | 'citrus' | 'lime' | 'pistachio' | 'berries' | 'musket' | 'blackberry' | 'aqua' | 'strawberry';
`;var K=(()=>{let e=class e{constructor(){this.calendarNavigation=p}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-calendar"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,s){t&1&&(o(0,"section",0),r(1,"app-tabs-link",1),o(2,"div",2),r(3,"router-outlet"),i()()),t&2&&(n(),d("routes",s.calendarNavigation))},dependencies:[c,m]});let a=e;return a})();export{N as a,v as b,b as c,A as d,E as e,D as f,C as g,R as h,u as i,x as j,f as k,T as l,L as m,_ as n,S as o,h as p,U as q,M as r,k as s,O as t,I as u,g as v,Y as w,B as x,F as y,K as z};
