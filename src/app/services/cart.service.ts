import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Object> = [];
  
  constructor() { }

  addToCart(item: any) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
