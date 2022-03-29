import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.component.html',
  styleUrls: ['./bank-deposit.component.scss']
})

export class BankDepositComponent implements OnInit {


  @Output() onDepositing = new EventEmitter<any>();

  value: number = 12;
  destination: number = 222;

  deposit: any;


  // constructor(){
  //
  //   this.value = 12;
  //   this.destination = 222;
  // }
  //
  // load($event){
  //
  //
  //   console.log('event', $event);
  // }

  submit(){

    console.log('submited');
    console.log('value', this.value);
    console.log('destination', this.destination);

    this.onDepositing.emit({"value": this.value, "destination": this.destination});

    this.reset();

    //this.deposit = $e;
  }

  reset(){

    this.value = 0;
    this.destination = 0;

  }

  ngOnInit() {
  }

}
