import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../enviroments/environment';
import { User } from '../_model/user';
import { Task } from '../_model/task';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(phone: string, password: string) {
        console.log("try log in " + phone + "  " + password);
        const body = { phone, password };
        let token: string;
        let currentUser: User;

        return this.http.post(`${environment.apiUrl}/login`, body, { responseType: "json" }).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                return throwError(error);
            })
        )
            .subscribe(
                {
                    next: (data: any) => {
                        token = data["token"];
                        console.log(token);
                        if (token) {
                            currentUser = new User("0", phone, password, token);
                            localStorage.setItem('user', JSON.stringify(currentUser));
                            this.userSubject.next(currentUser);
                            this.user = this.userSubject.asObservable();
                            console.log("token " + token);
                            this.router.navigate(['/home']);
                        }
                    }
                });


        // return this.http.post<string>(`${environment.apiUrl}/login`, { phone, password })
        //     .pipe(map(token => {
        //         let currentUser = new User("0", phone, password, token);
        //         console.log(token);
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('user', JSON.stringify(currentUser));
        //         this.userSubject.next(currentUser);
        //         this.user = this.userSubject.asObservable();
        //         console.log("token "+token);
        //         this.router.navigate(['/home']);
        //         return currentUser;
        //     }));
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }


    getTasks(){
        return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
    }
}