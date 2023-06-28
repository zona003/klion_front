import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ProfileComponent } from '../profile/profile.component';

import { CardDetailVacationComponent } from '../card_details/card-detail-vacation/card-detail-vacation.component'
import { CardDetailRandomComponent } from '../card_details/card-detail-random/card-detail-random.component';
import { CardDetailInvoiceComponent } from '../card_details/card-detail-invoice/card-detail-invoice.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: CardComponent}
            , { path: 'card', component: CardComponent }
            , { path: 'contacts', component: ContactsComponent }
            , { path : 'profile', component: ProfileComponent}
            , { path : 'detail-vacation', component: CardDetailVacationComponent}
            , { path : 'detail-random', component: CardDetailRandomComponent}
            , { path : 'detail-invoice', component: CardDetailInvoiceComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }