import { Component, Input } from '@angular/core';
import { SpinnerTypes, Sizes } from 'obelisco-angular-lib/core/models';

@Component({
  selector: 'o-spinner',
  templateUrl: './o-spinner.component.html',
  styleUrls: ['./o-spinner.component.scss'],
})
export class OSpinnerComponent {
  @Input() public type: SpinnerTypes = 'primary';
  @Input() public size: Sizes = 'md';
  @Input() public isExpandable: boolean = false;
  @Input() public description: string = "";
}
