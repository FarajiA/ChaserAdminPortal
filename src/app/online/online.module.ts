import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Shared_Module } from '../shared/shared.module';
import { OnlineService } from '../_services/online/online.service';
import { OnlineComponent } from './online.component';

@NgModule({
    imports: [
      Shared_Module,
      RouterModule.forChild([
          { path: '', component: OnlineComponent }
      ])
  ],
    declarations: [OnlineComponent],
    providers: [OnlineService]
})
export class OnlineModule { }
