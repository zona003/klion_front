import { Component, Input } from '@angular/core';
import { Contact } from '../_model/contact';
import { ContactPhone } from '../_model/phoneContact';
import { ModalService } from '../_service/modal.service';

@Component({
  selector: 'app-modal-contacts',
  templateUrl: './modal-contacts.component.html',
  styleUrls: ['./modal-contacts.component.css']
})
export class ModalContactsComponent {

  constructor(private modalService: ModalService){

  }

  @Input()
  currentContact : Contact = 
    new Contact(0,"Sample Name", "Sample Title", 
          [
            new ContactPhone("Home", "+380661234578"), 
            new ContactPhone("Work", "+380991234567")
    ]);

    hideModalFn()
    {
      this.modalService.hideModalWindow();
    }
}
