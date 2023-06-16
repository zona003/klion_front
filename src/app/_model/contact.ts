import {ContactPhone} from './phoneContact';

export class Contact{
    constructor(
        public Department: string,
        public Position : string,
        public FullName : string,
        public UID : string,
        public LogInAllowed: boolean,
        public Login: string,
        public Password: string,
        public ContactInfo: ContactPhone[]
    )
    {

    }
}