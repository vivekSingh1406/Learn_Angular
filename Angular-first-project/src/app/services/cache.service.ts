import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class CacheService {

  private storageKey = 'items';
  private nextIdKey = 'nextId';

  private get items(): Item[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private set items(data: Item[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private get nextId(): number {
    return Number(localStorage.getItem(this.nextIdKey) || 1);
  }

  private set nextId(val: number) {
    localStorage.setItem(this.nextIdKey, String(val));
  }

  list(): Item[] {
    return this.items;
    console.log(this.items);
  }

  create(item: Omit<Item, 'id'>): Item {
    const items = this.items;
    const newItem: Item = { id: this.nextId, ...item };
    items.push(newItem);

    this.items = items;
    this.nextId = this.nextId + 1;

    return newItem;
  }

  update(id: number, changes: Partial<Item>): Item | undefined {
    const items = this.items;
    const idx = items.findIndex(i => i.id === id);

    if (idx === -1) return undefined;

    items[idx] = { ...items[idx], ...changes };
    this.items = items;

    return items[idx];
  }

  delete(id: number): boolean {
    let items = this.items;
    const newItems = items.filter(i => i.id !== id);

    if (items.length === newItems.length) return false;

    this.items = newItems;
    return true;
  }

  get(id: number): Item | undefined {
    return this.items.find(i => i.id === id);
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.nextIdKey);
  }
}