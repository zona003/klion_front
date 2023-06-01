import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  filtredContacts : Contact[] = [];

  @Input()
  public searchString : string = "";
  @Output()
  public searchStringChange = new EventEmitter<string>();

  constructor(
    private acountService : AccountService
  )
  {}


  ngOnInit() {
    this.acountService.getContacts()
    .pipe(first())
        .subscribe(DBcontact => {
          this.filtredContacts = DBcontact;
          this.contacts = this.filtredContacts;
        });
  }

  searchFunction(e : string){
    this.filtredContacts = this.contacts.filter(str => str.fullName.includes(e));
  }
}
