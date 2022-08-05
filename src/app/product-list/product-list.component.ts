import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items: any;
  
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(response => {
        this.items = response.data;
      });
  }
  
  viewDetails(id: number) {
    this.router.navigate(['/'+id]);
    console.log(id);
  }

}
