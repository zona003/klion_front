export class User {
    id?: string;
    phone?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    token?: string;

    constructor(Id: string, Phone: string, Password: string, Token: string){
        this.id = Id;
        this.phone = Phone;
        this.password = Password;
        this.token = Token;
    }
}