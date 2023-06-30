import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../enviroments/environment';
import { User } from '../_model/user';
import { Contact } from '../_model/contact';
import {Task} from '../_model/tasks/task';
import {Vacation} from '../_model/tasks/vacation';
import {Invoice} from '../_model/tasks/invoice';

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

    login(Telephone: string, Password: string) {
        const body = { Telephone, Password };
        let token: string;
        let currentUser: User;

        return this.http.post(`${environment.apiUrl}/login`, body, { responseType: "text" }).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            })
        )
            .subscribe((response) => {
                currentUser = new User("0", Telephone, "", response);
                localStorage.setItem('user', JSON.stringify(currentUser));
                this.userSubject.next(currentUser);
                this.user = this.userSubject.asObservable();
                this.router.navigate(['/home']);
            }
            );
    }

    logout() {
        return this.http.post(`${environment.apiUrl}/logout`, '').pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                return throwError(error);
            })
        )
            .subscribe(resp => {
                this.deleteUser();
                this.router.navigate(['/login']);
            })
        
    }


    getTasks(){
        return this.http.get<Task[]>(`${environment.apiUrl}/tasks`).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            })
        );
    }

    getVacations(){
        return this.http.get<Vacation[]>(`${environment.apiUrl}/vacations`).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            })
        );
    }

    getInvoices(){
        return this.http.get<Invoice[]>(`${environment.apiUrl}/payments`).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            })
        );
    }

    getContacts(){
        return this.http.get<Contact[]>(`${environment.apiUrl}/users`).pipe(
            catchError(error => {
                const statusCode = error.status;
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            })
        );
    }

    updateAnyTaskStatus(Uid:string, AgreeStatus:boolean ){
        const body = { Uid, AgreeStatus };
        this.http.put<any>(`${environment.apiUrl}/task/status`, body)
        .subscribe({
            next: data => {
                console.log("succes");
                this.router.navigate(['/home']);
            },
            error: error => {
                console.log(error.message);
                if(error.status == 401){
                    this.deleteUser();
                }
                return throwError(error);
            }
        });
    }

    deleteUser()
    {
        localStorage.removeItem('user');
        this.userSubject.next(null);
    }
}