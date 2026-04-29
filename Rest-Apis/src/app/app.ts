import { Component, signal } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-root',
  imports: [CommentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Rest-Apis');
}
