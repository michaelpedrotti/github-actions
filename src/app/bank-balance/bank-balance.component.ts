import { Component, OnInit } from '@angular/core';
import { DepositService } from '../deposit.service';

@Component({
  selector: 'app-bank-balance',
  templateUrl: './bank-balance.component.html',
  styleUrls: ['./bank-balance.component.scss']
})
export class BankBalanceComponent implements OnInit {

  rows: any[] = [];

  constructor(private service: DepositService) {




  }

  ngOnInit(): void {


    this.rows = this.service.all();
  }
}
