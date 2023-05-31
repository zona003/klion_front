import { Component, OnInit } from '@angular/core';
import { Contact } from '../_model/contact';
import { ContactPhone } from '../_model/phoneContact';
import { AccountService } from '../_service/acount.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts : Contact[] = [];

  constructor(
    private acountService : AccountService
  )
  {}


  ngOnInit() {
    this.acountService.getContacts()
    .pipe(first())
        .subscribe(DBcontact => this.contacts = DBcontact);
        this.contacts.forEach(element => {
          console.log(element.fullName + "");
        });
  }
}
