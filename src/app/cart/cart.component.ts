import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any;
  total: number = 0.0;
  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.calculateTotal(this.items);
  }

  // Calculate total cost of items in the cart
  calculateTotal(items: any) {
    let total = 0.0
    items.forEach((item: { price: { amount: string; }; }) => {
      total += parseFloat(item.price.amount);
    });
    return total;
  }

}
