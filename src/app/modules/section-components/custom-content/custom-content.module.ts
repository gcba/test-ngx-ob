import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContentRoutingModule } from './custom-content-routing.module';
import { CustomContentComponent } from './custom-content.component';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CustomContentExamplesComponent } from './pages/custom-content-examples/custom-content-examples.component';
import { CustomContentApiComponent } from './pages/custom-content-api/custom-content-api.component';
import { OCustomContentDirective } from 'projects/obelisco-angular-lib/directives';
import { OBlockModule } from 'projects/obelisco-angular-lib/block';
import { OButtonModule } from 'projects/obelisco-angular-lib/button';
import { OAlertModule } from 'projects/obelisco-angular-lib/alert';

@NgModule({
  declarations: [
    CustomContentComponent,
    CustomContentExamplesComponent,
    CustomContentApiComponent,
  ],
  imports: [
    CommonModule,
    CustomContentRoutingModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OCustomContentDirective,
    OBlockModule,
    OButtonModule,
    OAlertModule,
  ],
})
export class CustomContentModule {}
