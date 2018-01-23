import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableComponent } from './tables/table.component';
import { StatisticComponent } from './statistic/statistic.component';
// PrimeNG imports
import { MenuModule, DataTableModule, SharedModule, PanelModule, DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule,
        MenuModule,
        DataTableModule,
        SharedModule,
        PanelModule
    ],
  exports : [
      CommonModule,
      FormsModule,
      DataTableComponent,
      StatisticComponent,
      MenuModule,
      DataTableModule,
      SharedModule,
      PanelModule,
      DropdownModule
  ],
  declarations: [DataTableComponent, StatisticComponent],
  providers: []
})
export class Shared_Module { }
