import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/ru-UA';


import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//import {fakeBackendProvider} from './_helper/fake-backend';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helper/auth.guard';
import { JwtInterceptor } from './_helper/jwt.interceptor';



const homeModule = () => import('./home/home.module').then(x=> x.HomeModule);


const appRoutes: Routes =[
    {path: 'login', component:LoginComponent, }
    , {path: 'home', loadChildren : homeModule,  canActivate: [AuthGuard]}
    , {path: '**', redirectTo: 'home'},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
    , ReactiveFormsModule
    , FormsModule
    , RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
