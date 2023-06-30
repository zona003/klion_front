import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/_model/tasks/task';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/_service/detail.service';
import { AccountService } from 'src/app/_service/acount.service';

@Component({
  selector: 'app-card-detail-random',
  templateUrl: './card-detail-random.component.html',
  styleUrls: ['./card-detail-random.component.css']
})
export class CardDetailRandomComponent {
  uid?: string;
  currentTask? : Task;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detService: DetailService,
    private accountService: AccountService
  ){}

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.currentTask = this.detService.tasks.find(el => el.Uid === this.uid);
    if(this.currentTask===undefined)
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
}
