import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_service/acount.service';
import { DetailService } from '../_service/detail.service';
import { CardTask } from '../_model/cardTask';
import { first } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardTasks : CardTask[] = [];

  constructor(
    private acountService: AccountService,
    private detailService: DetailService
  )
  {}

  ngOnInit() {
    this.acountService.getTasks()
        .pipe(first())
        .subscribe(task => {
          this.detailService.Tasks = task;
          task.forEach(element => {
            this.cardTasks.push(CardTask.FromTask(element))
          });
        });
    this.acountService.getInvoices()
        .pipe(first())
        .subscribe(invoices => {
          this.detailService.Inv = invoices;
          invoices.forEach(element => {
            this.cardTasks.push(CardTask.FromInvoice(element))
          });
        });
    this.acountService.getVacations()
        .pipe(first())
        .subscribe(vacations => {
          this.detailService.Vac = vacations;
          vacations.forEach(element => {
            this.cardTasks.push(CardTask.FromVacation(element))
          });
        });
  }



}
