import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-app';

  constructor(private router: Router) {
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  
  navigateToHome() {
    this.router.navigate(['']);
  }

}
