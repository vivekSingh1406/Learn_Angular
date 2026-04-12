import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count: number = 0;

  updateCount(action: string) {
    switch (action) {
      case 'inc':
        this.count++;
        break;

      case 'dec':
        if (this.count > 0) {
          this.count--;
        }
        break;

      case 'reset':
        this.count = 0;
        break;

      default:
        console.log('Invalid action');
    }
  }
}