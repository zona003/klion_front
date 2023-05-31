
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_service/acount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myForm: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private acountService: AccountService
  ){
    this.myForm = new FormGroup({
      "phone": new FormControl('+38', Validators.required),
      "password": new FormControl('', Validators.required)
    });
  }

  public passwordHide: boolean = true;

  ngOnInit() {
  }

  submit(){

    if(this.myForm.invalid){
      console.log("invalid form");
      return;
    }


    this.acountService.login(this.myForm.value.phone, this.myForm.value.password);
    // console.log(this.myForm.value.phone);
    // console.log(this.myForm.value.password);
  }

  eyebutton(){
    this.passwordHide = !this.passwordHide;
  }
}
