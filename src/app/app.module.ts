import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { registerLocaleData } from "@angular/common";
import locale from '@angular/common/locales/en-US-POSIX'

import { AppComponent } from './app.component';
import { BankDepositComponent } from './bank-deposit/bank-deposit.component';
import { BankBalanceComponent } from './bank-balance/bank-balance.component';


registerLocaleData(locale, 'en-US')

@NgModule({
  declarations: [
    AppComponent,
    BankDepositComponent,
    BankBalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

    {provide: LOCALE_ID, useValue: 'en-US'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
