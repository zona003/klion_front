import {ContactPhone} from './phoneContact';

export class Contact{
    constructor(
        public id : number,
        public fullName : string,
        public title : string,
        public phones: ContactPhone[]
    )
    {

    }
}