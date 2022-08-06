import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  items: any;
  subscription: any;
  
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription =this.productsService.getProducts()
      .subscribe(response => {
        this.items = response.data;
      });
  }
  
  // Navigate to product to view more details
  viewDetails(item: any) {
    this.router.navigate(['/'+item]);
  }
  
  ngOnDestroy(): void {
    // Unsubscribe to subscriptions upon onDestroy
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
