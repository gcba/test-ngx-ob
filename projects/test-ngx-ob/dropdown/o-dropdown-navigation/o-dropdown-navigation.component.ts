import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownNavigationItem, Sizes } from 'test-ngx-ob/core/models';

@Component({
  selector: 'o-dropdown-navigation',
  templateUrl: './o-dropdown-navigation.component.html',
  styleUrls: ['./o-dropdown-navigation.component.scss'],
})
export class ODropdownNavigationComponent implements OnChanges {
  @Input() public title!: string;
  @Input() public iconLeft!: string;
  @Input() public iconRight!: string;
  @Input() public isAnimatedIconLeft: boolean = false;
  @Input() public isAnimatedIconRight: boolean = false;
  @Input() public dropNavItems!: DropdownNavigationItem[];
  @Input() public isPositionRight: boolean = false;
  @Input() public isBordered: boolean = true;
  @Input() public size?: Sizes = 'lg';
  @Input() public customClasses: string = '';
  @Input() public ariaLabel!: string;

  hasChildren: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ('dropNavItems' in changes) {
      this.hasChildren = this.dropNavItems.some(
        (item) => item.children && item.children.length > 0
      );
    }
  }

  getClassNames(): string {
    const sizeClass = this.size !== 'md' ? ' btn-' + this.size : '';
    const borderedClass = this.isBordered ? ' btn-dropdown-border' : '';
    const customClass = this.customClasses ? ' ' + this.customClasses : '';
    return 'btn' + sizeClass + borderedClass + customClass;
  }

  public get dropNavItemshasChildren(): boolean {
    return this.dropNavItems?.some(item => item.children && item.children.length > 0);
  }
}
