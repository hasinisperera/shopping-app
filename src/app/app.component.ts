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

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  
  navigateToHome() {
    this.router.navigate(['']);
  }

  getCartLength() {
    return this.cartService.getNumberOfItems();
  }

}
