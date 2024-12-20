import { EventEmitter } from '@angular/core';
import { StepService } from 'test-ngx-ob/core/services';

export abstract class AbstractStep {
  protected stopSteps!: EventEmitter<boolean>;
  public abstract previousStep(): void;
  public abstract nextStep(): void;

  constructor(protected readonly setpsService: StepService) {}
}
