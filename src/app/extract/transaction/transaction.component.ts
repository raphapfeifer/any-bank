import { Component, input } from '@angular/core';
import { Transaction } from '../../model/transaction';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transaction = input.required<Transaction>();
}
