import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { CrudOperation } from './crud-operation/crud-operation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrudOperation, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-first-project');

};
