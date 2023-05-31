import { Component } from '@angular/core';
import { AccountService } from '../_service/acount.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private acountService: AccountService
  ){}

  logout(){
    this.acountService.logout();
  }
}
