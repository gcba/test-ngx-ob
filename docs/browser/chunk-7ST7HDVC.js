import{a as l}from"./chunk-S2DW6XOG.js";import{E as i,N as p,Pa as c,S as s,T as n,U as r,q as a}from"./chunk-LDCFWZ36.js";var u=[{title:"Api",route:"/components/progress-bar/api"},{title:"Ejemplos",route:"/components/progress-bar/examples"}],d=`
  type ProgressBarTypes = 'primary' | 'success';
`,b=[{name:{data:"@Input() <br /> isSteps: boolean",customClasses:""},description:{data:"Se utiliza para definir si mostrar el paso actual y el total de pasos o no. Por defecto es false.",customClasses:""}},{name:{data:"@Input() <br /> type: ProgressBarTypes",customClasses:""},description:{data:"Se utiliza para definir el tipo de la barra de progreso. Por defecto es primary",customClasses:""}},{name:{data:"@Input() <br /> currentStep: number",customClasses:""},description:{data:"Se utiliza para definir el paso actual.",customClasses:""}},{name:{data:"@Input() <br /> totalStep: number",customClasses:""},description:{data:"Se utiliza para definir el total de pasos.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],g=[{name:{data:"@Output() <br /> stopProgress: EventEmitter<boolean>",customClasses:""},description:{data:"Se utiliza para detener el proceso. <br/> Ocurrir\xE1 cuando se llegue al \xFAltimo paso y la barra de progreso se complete. <br/> El valor emitido ser\xE1 true.",customClasses:""}}],R=`
<o-progress-bar type="primary" description='Descripci\xF3n' [currentStep]="4" [totalSteps]="8"></o-progress-bar>

<o-button oStepPrevious type="link" size="sm">Anterior</o-button>
<o-button oStepNext type="link" size="sm">Siguiente</o-button>
`,E=`
<o-progress-bar
  type="success"
  description='Descripci\xF3n'
  [currentStep]="4"
  [totalSteps]="8"
  (stopSteps)="stopProgress($event)"
></o-progress-bar>

<o-button type="link" size="sm" (click)="previousStep()">Anterior</o-button>
<o-button type="link" size="sm" (click)="nextStep()">Siguiente</o-button>
`,v=`
import { Component, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent implements OnInit {
  constructor(private readonly progressBarService: StepService) {}

  public ngOnInit(): void {
    this.progressBarService.initialize();
  }

  public nextStep(): void {
    this.progressBarService.next();
  }

  public previousStep(): void {
    this.progressBarService.previous();
  }

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
`,_=`
<o-progress-bar [currentStep]="5"></o-progress-bar>

<o-progress-bar type="success" [currentStep]="4"></o-progress-bar>
`;var y=(()=>{let e=class e{constructor(){this.progressBarNavigation=u}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["app-progress-bar"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,S){t&1&&(s(0,"section",0),r(1,"app-tabs-link",1),s(2,"div",2),r(3,"router-outlet"),n()()),t&2&&(i(),p("routes",S.progressBarNavigation))},dependencies:[c,l]});let o=e;return o})();export{d as a,b,g as c,R as d,E as e,v as f,_ as g,y as h};
