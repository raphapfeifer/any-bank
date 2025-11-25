import { Component, input, computed } from '@angular/core';
import { Transaction, TransactionType } from '../../model/transaction';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transaction = input.required<Transaction>();
  value = computed(() => {
    if(this.transaction().type === TransactionType.WITHDRAWAL){
      return -this.transaction().value;
    }
    return this.transaction().value;
  });
}
