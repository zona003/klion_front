import { Injectable } from "@angular/core";
import { Contact } from "../_model/contact";
import { ContactPhone } from "../_model/phoneContact";

@Injectable({
    providedIn: 'root'
})
export class ModalService{
    showDialog : boolean = false;
    constructor(){}

    public currentContact : Contact = new Contact('','','','',true,'','', [new ContactPhone('','')]);

    showModalWindow(inpContact : Contact){
        this.showDialog = true;
        this.currentContact = inpContact;
    }

    hideModalWindow(){
        this.showDialog = false;
    }
}