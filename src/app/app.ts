import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { NewFormTransctionComponent } from "./new-form-transction/new-form-transction.component";
import { Transaction, TransactionType } from './model/transaction';
import { ExtractComponent } from "./extract/extract.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewFormTransctionComponent, ExtractComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  transactions = signal<Transaction[]>([]);

  balance = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      
        switch(currentTransaction.type){
          case TransactionType.DEPOSIT:
            return acc + currentTransaction.value;

          case TransactionType.WITHDRAWAL:
            return acc - currentTransaction.value;
             
            
          default:
            throw new Error('Transaction type not exist');
        }
    }, 0)
  });

  trasactionProcess(transaction: Transaction){
    if(transaction.type === TransactionType.WITHDRAWAL && transaction.value > this.balance()){
      return alert('Insufficient funds!');
    }
    this.transactions.update((currentList) => [transaction, ...currentList])
  }
}
