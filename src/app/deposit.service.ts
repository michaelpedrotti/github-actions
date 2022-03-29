import { Injectable } from '@angular/core';
//import { AppModule } from "./app.module"



@Injectable({
  providedIn: 'root'
})

export class DepositService {


  private rows: any[];


  private hidrate(row: any){

    row.createAt = new Date();
  }


  constructor() {


    this.rows = [];
  }


  all(){

    return this.rows;
  }

  add(row: any){

    this.hidrate(row);
    this.rows.push(row);
  }
}
