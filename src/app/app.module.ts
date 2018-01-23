import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_services/auth/auth.interceptor';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'

import { AuthGuard } from './_guards/auth.guard';
import { DashboardMenuModule } from './dashboard-menu/dashboard-menu.module';
import { AuthService } from './_services/auth/auth.service';
import { UserService } from './_services/users/users.service';
import { BroadcastService } from './_services/broadcasts/broadcasts.service';
import { QueryBuilderService } from './_services/queryBuilder.service';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent
  ],
  imports: [
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpModule,
      HttpClientModule,
      AppRoutingModule,
  ],
  providers: [
      AuthGuard,
      AuthService,
      BroadcastService,
      UserService,
      QueryBuilderService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
