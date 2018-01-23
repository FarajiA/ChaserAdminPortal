import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shared_Module } from '../shared/shared.module';
// components
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
      Shared_Module,
      RouterModule.forChild([
          { path: '', component: UsersComponent }
      ])
  ],
  declarations: [
      UsersComponent
  ],
  providers: []
})
export class UsersModule { }
