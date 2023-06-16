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
  currentContact : Contact = new Contact('','','','',true,'','', [new ContactPhone('','')]);

    hideModalFn()
    {
      this.modalService.hideModalWindow();
    }
}
