import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardResolver } from '../_resolves/dashboard.resolve';

// App wide services
import { SearchOptionsService } from '../_services/searchOptions.service';
import { DashboardService } from '../_services/dashboard/dashboard.service';

// feature modules
import { Shared_Module } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { BroadcastsModule } from '../broadcasts/broadcasts.module';
import { OnlineModule } from '../online/online.module';

// components
import { DashboardMenuComponent } from './dashboard-menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: DashboardMenuComponent,
        resolve: { user: DashboardResolver },
        children: [
            { path: 'main', component: DashboardComponent },
            { path: 'users', loadChildren: '../users/users.module#UsersModule' },
            { path: 'online', loadChildren: '../online/online.module#OnlineModule' },
            { path: 'broadcasts', loadChildren: '../broadcasts/broadcasts.module#BroadcastsModule' },
            { path: 'chasers', loadChildren: '../chasers/chasers.module#ChasersModule' }
        ]
    }    
];

@NgModule({
  imports: [
      Shared_Module,
      UsersModule,
      BroadcastsModule,
      OnlineModule,
      RouterModule.forChild(routes),
  ],
  declarations: [
      DashboardMenuComponent,
      DashboardComponent,
      //StatisticComponent,
      // UsersTableComponent
  ],
  providers: [
      DashboardResolver,
      DashboardService,
      SearchOptionsService
  ]
})
export class DashboardMenuModule { }
