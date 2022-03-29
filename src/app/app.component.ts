import { Component } from '@angular/core';
import { DepositService } from './deposit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private service: DepositService){



  }

  deposit(e : any){

    this.service.add(e);
  }
}
