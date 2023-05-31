import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {fakeBackendProvider} from './_helper/fake-backend';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helper/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes =[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component:LoginComponent, }
    , {path: 'home', component : HomeComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    ContactsComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule
    , ReactiveFormsModule
    , FormsModule
    , RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuard, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
