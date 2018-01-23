import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shared_Module } from '../shared/shared.module';
import { BroadcastsComponent } from './broadcasts.component';

@NgModule({
  imports: [
      Shared_Module,
      RouterModule.forChild([
          { path: '', component: BroadcastsComponent }
      ])
  ],
  declarations: [BroadcastsComponent]
})
export class BroadcastsModule { }
