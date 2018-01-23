import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shared_Module } from '../shared/shared.module';
import { ChasersComponent } from './chasers.component';

@NgModule({
    imports: [
        Shared_Module,
        RouterModule.forChild([
            { path: '', component: ChasersComponent }
        ])
  ],
  declarations: [ChasersComponent]
})
export class ChasersModule { }
