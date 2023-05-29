import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


import { acountGuard } from './_helper/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes =[
    {path: 'login', component:LoginComponent, }
    , {path: '', component : HomeComponent, canActivate: [acountGuard]}
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
    BrowserModule
    , ReactiveFormsModule
    , FormsModule
    , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
