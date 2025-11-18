import { Component } from '@angular/core';
import { TransactionComponent } from './transaction/transaction.component';


@Component({
  selector: 'app-extract',
  imports: [TransactionComponent],
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css'
})
export class ExtractComponent {

}
