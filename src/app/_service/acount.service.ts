import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { environment } from '@environments/environment';
import { User } from '../_model/user';


const testUser: User = new User('0', "+380661234566", "123456", "testtoken");


@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(phone: string, password: string) {
        if (phone == testUser.phone && password == testUser.password) {
            localStorage.setItem('user', JSON.stringify(testUser));
            this.userSubject.next(testUser);
            console.log("successlogin");
            this.router.navigate(['']);
            return testUser;
        }
        return;
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}