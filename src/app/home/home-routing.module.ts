import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: CardComponent},
            { path: 'card', component: CardComponent },
            { path: 'contacts', component: ContactsComponent },
            {path : 'profile', component: ProfileComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }