import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../model/transaction';

@Component({
  selector: 'app-new-form-transction',
  imports: [FormsModule],
  templateUrl: './new-form-transction.component.html',
  styleUrl: './new-form-transction.component.css'
})
export class NewFormTransctionComponent {
    transactionType = '';
    transanctionValue = '';

    createdTransaction = output();

    onSubmit(){
      const transaction = new Transaction(
        this.transactionType as TransactionType,
        Number(this.transanctionValue)
      )

      this.createdTransaction.emit();

      this.transactionType = '';
      this.transanctionValue = '';
    } 
}
