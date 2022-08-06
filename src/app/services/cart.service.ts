import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Object> = [];
  
  constructor() { }

  // Add an item to items array
  addToCart(item: any) {
    this.items.push(item);
  }

  // Get items array
  getItems() {
    return this.items;
  }

  // Get the number of items in the array
  getNumberOfItems() {
    return this.items.length;
  }
}
