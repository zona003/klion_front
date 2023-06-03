import { Injectable } from "@angular/core";
import { Contact } from "../_model/contact";
import { ContactPhone } from "../_model/phoneContact";

@Injectable({
    providedIn: 'root'
})
export class ModalService{
    showDialog : boolean = false;
    constructor(){}

    public currentContact : Contact = 
    new Contact(0,"Sample Name", "Sample Title", 
          [
            new ContactPhone("Home", "+380661234578"), 
            new ContactPhone("Work", "+380991234567")
    ]);

    showModalWindow(inpContact : Contact){
        this.showDialog = true;
        this.currentContact = inpContact;
    }

    hideModalWindow(){
        this.showDialog = false;
    }
}