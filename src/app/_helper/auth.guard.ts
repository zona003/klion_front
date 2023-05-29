import { inject } from "@angular/core";
import { AccountService } from '../_service/acount.service';
import { Router } from '@angular/router';

export const acountGuard = () => {
    const acountService = inject(AccountService);
    if(acountService.user){
        return true;
    }
    
    const router = inject(Router);
    router.navigate(['/login']);
    return false;

}