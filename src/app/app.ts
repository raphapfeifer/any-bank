import { Component, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { NewFormTransctionComponent } from "./new-form-transction/new-form-transction.component";
import { Transaction } from './model/transaction';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewFormTransctionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  trasactionProcess(transaction: Transaction){
    console.log("New Trasaction created");
    console.log(transaction);
  }
}
