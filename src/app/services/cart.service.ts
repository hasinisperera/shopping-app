import { Injectable } from '@angular/core';
import { cartItem } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<cartItem> = [];
  
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
