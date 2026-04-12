import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CacheService, Item } from '../services/cache.service';

@Component({
  selector: 'app-crud-operation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-operation.html',
  styleUrls: ['./crud-operation.css'],
})
export class CrudOperation {
  items: Item[] = [];
  model: Partial<Item> = { name: '', description: '' };
  editing = false;
  editId: number | null = null;

  constructor(private cache: CacheService) {
    this.load();
  }

  load(): void {
    this.items = this.cache.list();
  }

  add(): void {
    if (!this.model.name) return;
    this.cache.create({ name: this.model.name!, description: this.model.description });
    this.model = { name: '', description: '' };
    this.load();
  }

  startEdit(item: Item): void {
    this.editing = true;
    this.editId = item.id;
    this.model = { name: item.name, description: item.description };
  }

  update(): void {
    if (this.editId == null) return;
    this.cache.update(this.editId, { name: this.model.name!, description: this.model.description });
    this.cancel();
    this.load();
  }

  delete(id: number): void {
    this.cache.delete(id);
    this.load();
  }

  cancel(): void {
    this.editing = false;
    this.editId = null;
    this.model = { name: '', description: '' };
  }
}
