import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ONavModule } from 'projects/test-ngx-ob/nav';
import { OTableModule } from 'projects/test-ngx-ob/table';
import { OAlertModule } from 'projects/test-ngx-ob/alert';
import { OCustomContentDirective } from 'projects/test-ngx-ob/directives';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';

@NgModule({
  declarations: [AlertComponent, AlertApiComponent, AlertExamplesComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OAlertModule,
    OCustomContentDirective,
  ],
})
export class AlertModule {}
