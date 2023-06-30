import { Component, OnInit } from '@angular/core';
import { Vacation } from 'src/app/_model/tasks/vacation';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/_service/detail.service';
import { AccountService } from 'src/app/_service/acount.service';

@Component({
  selector: 'app-card-detail-vacation',
  templateUrl: './card-detail-vacation.component.html',
  styleUrls: ['./card-detail-vacation.component.css']
})
export class CardDetailVacationComponent {
  uid?: string;
  currentVacation? : Vacation;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detService: DetailService,
    private accountService: AccountService
  ){}

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.currentVacation = this.detService.vacations.find(el => el.Uid === this.uid);
    if(this.currentVacation===undefined)
    {
      this.router.navigate(['/home']);
    }
  }

  AcceptButtonClick(){
    if(this.uid !== undefined){
      this.accountService.updateAnyTaskStatus(this.uid, true);
    }
    this.router.navigate(['/home']);
  }

  RejectButtonClick(){
    if(this.uid !== undefined){
      this.accountService.updateAnyTaskStatus(this.uid, false);
    }
    this.router.navigate(['/home']);
  }
}
