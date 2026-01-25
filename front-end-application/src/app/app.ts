import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCrudComponent } from './components/product-crud';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCrudComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-application');
}
