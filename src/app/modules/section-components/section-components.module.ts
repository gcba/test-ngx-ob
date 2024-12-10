import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponentsRoutingModule } from './section-components-routing.module';
//import { OCardModule } from 'projects/obelisco-angular-lib/card';
import { SectionComponentsComponent } from './section-components.component';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [
    CommonModule,
    SectionComponentsRoutingModule,
    //OCardModule,
    ONavModule,
  ],
})
export class SectionComponentsModule {}
