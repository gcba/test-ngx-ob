import { Injectable } from '@angular/core';
import { Breadcrumb } from 'test-ngx-ob/core/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  public breadcrumb$ = new BehaviorSubject<Breadcrumb>({
    //actualRoute: { name: '' }
  });
}
