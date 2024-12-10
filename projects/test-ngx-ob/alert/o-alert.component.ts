import { Component, ContentChild, Input } from '@angular/core';
import { OCustomContentDirective } from 'test-ngx-ob/directives';
import { AlertList, AlertTypes } from 'test-ngx-ob/core/models';

@Component({
  selector: 'o-alert',
  templateUrl: './o-alert.component.html',
  styleUrls: ['./o-alert.component.scss'],
})
export class OAlertComponent {
  @Input() public type: AlertTypes = 'info';
  @Input() public isDismissible: boolean = false;
  @Input() public listContent?: AlertList = {
    isUnorderedList: false,
    listItems: [],
  };
  @Input() public customClasses: string = '';

  checkUrls(): boolean {
    if (this.listContent) {
      return this.listContent.listItems.every((item) => !!item.url);
    } else {
      return false;
    }
  }

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;

  constructor() {}
}
