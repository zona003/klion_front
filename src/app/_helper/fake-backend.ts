import { Injectable, OnInit } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError, lastValueFrom } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../_model/user';
import { Task } from '../_model/task';
import { Contact } from '../_model/contact';
import { ContactPhone } from '../_model/phoneContact';
import contact from '../../assets/Employeers.json';

// array in local storage for registered users
const usersKey = 'angular-14-registration-login-example-users';
let users: any[] = JSON.parse(localStorage.getItem(usersKey)!) || [];
let testUsers : User[] = [
    new User('0', "+380661234566", "123456", "testtoken")
    , new User('1', "+380661234567", "123456", "testtoken2")
];


let testTasks : Task[] = [
    new Task(new Date(2022,10,12,12,0,0,345), "Test title 1", "АТБ", "Test comment1", 100000, "Автор Авторський1", new Date(2021,10,12,12,0,0,345))
    , new Task(new Date(2023,10,12,12,0,0,345), "Test title 2", "АТБ", "Test comment2", 6546540, "Автор Авторський2", new Date(2020,10,12,12,0,0,345))
    , new Task(new Date(2024,10,12,12,0,0,345), "Test title 3", "АТБ", "Test comment3", 1222, "Автор Авторський3", new Date(2020,11,12,12,0,0,345))
];


let testContacts : Contact[] = contact;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/login') && method === 'POST':
                    return authenticate();
                case url.endsWith('/tasks') && method === 'GET':
                    return getTasks();
                case url.endsWith('/contacts') && method === 'GET':
                    return getContacts();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { phone , password } = body;
            const user = testUsers.find(x => x.phone === phone && x.password === password);
            //if (!user) return error('Username or password is incorrect');
            return ok({
                //...basicDetails(user),
                token: user?.token//'fake-jwt-token'
            });
        }
        
        function getTasks(){

            return ok(testTasks);
        }

        function getContacts(){
            return ok( testContacts);
        }

        function register() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users.map(x => basicDetails(x)));
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(basicDetails(user));
        }

        function updateUser() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            // only update password if entered
            if (!params.password) {
                delete params.password;
            }

            // update and save user
            Object.assign(user, params);
            localStorage.setItem(usersKey, JSON.stringify(users));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};