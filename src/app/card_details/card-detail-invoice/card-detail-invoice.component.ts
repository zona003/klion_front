import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/_model/tasks/invoice';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/_service/detail.service';
import { AccountService } from 'src/app/_service/acount.service';


@Component({
  selector: 'app-card-detail-invoice',
  templateUrl: './card-detail-invoice.component.html',
  styleUrls: ['./card-detail-invoice.component.css']
})
export class CardDetailInvoiceComponent implements OnInit {
  uid?: string;
  currentInvoice? : Invoice;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detService: DetailService,
    private accountService: AccountService
  ){}

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.currentInvoice = this.detService.invoices.find(el => el.Uid === this.uid);
    if(this.currentInvoice===undefined)
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
