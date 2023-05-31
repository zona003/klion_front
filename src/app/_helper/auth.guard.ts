import { Inject, Injectable, inject } from "@angular/core";
import { AccountService } from '../_service/acount.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard
    implements CanActivate, CanActivateChild {
    constructor(
        @Inject(AccountService) private auth: AccountService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const user = this.auth.userValue;
        if (user) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.canActivate(next, state)
    }
}