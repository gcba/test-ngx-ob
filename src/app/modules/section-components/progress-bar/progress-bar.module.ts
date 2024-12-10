import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OProgressBarModule } from 'projects/obelisco-angular-lib/progress-bar';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';

import { ProgressBarApiComponent } from './pages/progress-bar-api/progress-bar-api.component';
import { ProgressBarDemoComponent } from './pages/progress-bar-examples/demo/progress-bar-demo.component';
import { ProgressBarExamplesComponent } from './pages/progress-bar-examples/progress-bar-examples.component';
import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'projects/obelisco-angular-lib/button';

@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressBarApiComponent,
    ProgressBarExamplesComponent,
    ProgressBarDemoComponent,
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    ONavModule,
    OTableModule,
    OProgressBarModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    OButtonModule,
  ],
})
export class ProgressBarModule {}
