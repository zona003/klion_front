import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';

import { ModalContactsComponent } from '../modal-contacts/modal-contacts.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        FormsModule,
    ],
    declarations: [
        HomeComponent,
        CardComponent,
        ContactsComponent,
        NavbarComponent,
        ProfileComponent,
        ModalContactsComponent
    ]
})
export class HomeModule {}