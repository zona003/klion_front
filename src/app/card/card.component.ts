import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_service/acount.service';
import { Task } from '../_model/task';
import { first } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  tasks : Task[] = [];

  constructor(
    private acountService: AccountService
  )
  {}

  ngOnInit() {
    this.acountService.getTasks()
        .pipe(first())
        .subscribe(task => this.tasks = task);
  }
}
