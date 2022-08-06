import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-app';

  constructor(
    private router: Router,
    private cartService: CartService) {
  }

  // Navigate to cart page
  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  
  // Navigate to product list
  navigateToHome() {
    this.router.navigate(['']);
  }

  // Get the number of items in the cart
  getCartLength() {
    return this.cartService.getNumberOfItems();
  }

}
