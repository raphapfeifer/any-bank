import { Component, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { NewFormTransctionComponent } from "./new-form-transction/new-form-transction.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewFormTransctionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');
}
