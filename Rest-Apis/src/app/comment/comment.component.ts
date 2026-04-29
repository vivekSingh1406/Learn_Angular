import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
} from './comment.service';
import { CommentModel } from './comment.model';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: CommentModel[] = [];
  form: CommentModel = { postId: 0, name: '', email: '', body: '' };
  editingId: number | null = null;

  ngOnInit() {
    this.load();
  }

  async load() {
    try {
      this.comments = await getAllComments();
    } catch (err) {
      console.error(err);
    }
  }

  async save() {
    try {
      if (this.editingId) {
        await updateComment(this.editingId, this.form);
      } else {
        await createComment(this.form);
      }
      this.reset();
      await this.load();
    } catch (err) {
      console.error(err);
    }
  }

  edit(item: CommentModel) {
    this.editingId = item.id ?? null;
    this.form = { postId: item.postId, name: item.name, email: item.email, body: item.body };
  }

  async remove(id?: number) {
    if (!id) return;
    try {
      await deleteComment(id);
      await this.load();
    } catch (err) {
      console.error(err);
    }
  }

  reset() {
    this.editingId = null;
    this.form = { postId: 0, name: '', email: '', body: '' };
  }
}
