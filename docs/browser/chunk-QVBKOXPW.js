import{a as m}from"./chunk-S2DW6XOG.js";import{E as r,N as i,Pa as l,S as s,T as a,U as n,q as p}from"./chunk-LDCFWZ36.js";var c=[{title:"Api",route:"/components/steps-form/api"},{title:"Ejemplos",route:"/components/steps-form/examples"}],b=[{name:{data:"@Input() <br/> steps: string[]",customClasses:""},description:{data:"Se utiliza para definir los pasos que se mostrar\xE1n en la barra de estado.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],d=[{name:{data:"@Output <br /> stopSteps: EventEmitter<boolean>",customClasses:""},description:{data:"Se utiliza para detener el proceso. Ocurrir\xE1 cuando se llegue al \xFAltimo paso y la barra de progreso se complete. El valor emitido ser\xE1 true.",customClasses:""}}],v=`
<o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>

<button oStepPrevious class="btn btn-sm btn-link mr-2">Anterior</button>
<button oStepNext class="btn btn-sm btn-link">Siguiente</button>
`,E=`
import { Component, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent implements OnInit {
  public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
`,T=`
<o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>

<button class="btn btn-sm btn-link mr-2" (click)="previousStep()">Anterior</button>
<button class="btn btn-sm btn-link" (click)="nextStep()">Siguiente</button>
`,f=`
import { Component, OnInit } from '@angular/core';
import { StepService } from 'ngx-obelisco';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent implements OnInit {
  public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

  constructor(private readonly stepsFormService: StepService) {}

  public ngOnInit(): void {
    this.stepsFormService.initialize();
  }

  public nextStep(): void {
    this.stepsFormService.next();
  }

  public previousStep(): void {
    this.stepsFormService.previous();
  }

  public stopProgress(event: boolean): void {
    if (event) {
      console.log('Completado');
    }
  }
}
`;var g=(()=>{let e=class e{constructor(){this.navigation=c}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-steps-form"]],decls:4,vars:1,consts:[[1,"section"],[3,"routes"],[1,"content"]],template:function(t,S){t&1&&(s(0,"section",0),n(1,"app-tabs-link",1),s(2,"div",2),n(3,"router-outlet"),a()()),t&2&&(r(),i("routes",S.navigation))},dependencies:[l,m]});let o=e;return o})();export{b as a,d as b,v as c,E as d,T as e,f,g};
