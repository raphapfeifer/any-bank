import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-form-transction',
  imports: [FormsModule],
  templateUrl: './new-form-transction.component.html',
  styleUrl: './new-form-transction.component.css'
})
export class NewFormTransctionComponent {
    transactionType = '';
    transanctionValue = '';

    onSubmit(){
      console.log(this.transanctionValue);
      console.log(this.transactionType);

      this.transactionType = '';
      this.transanctionValue = '';
    } 
}
