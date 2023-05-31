import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        CardComponent,
        ContactsComponent,
        NavbarComponent,
        ProfileComponent
    ]
})
export class HomeModule {}