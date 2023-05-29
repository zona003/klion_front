import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { acountGuard } from './_helper/auth.guard';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes =[
    {path: 'login', component:LoginComponent, }
    , {path: '', component : AppComponent, canActivate: [acountGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , FormsModule
    , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
