import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: 'app/dashboard-menu/dashboard-menu.module#DashboardMenuModule'
    },
    { path: '', redirectTo: 'dashboard/main', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard/main' }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
