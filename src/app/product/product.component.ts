import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  id: number | null = null;
  item: any;
  isAdded: boolean = false;
  products:any;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
    })
    this.productsService.getProducts()
      .subscribe(response => {
        this.item = response.data.find((obj: { id: number | null; }) => obj.id === this.id);
    });
    this.products =  this.cartService.getItems();
    this.products.forEach((element: { id: number | null; }) => {
      if(element.id === this.id) {
        this.isAdded = true;
      }
    });
  }

  navigatetoProducts() {
    this.router.navigate(['']);
  }

  addToCart(item: any) {
    this.isAdded = true;
    this.cartService.addToCart(item);
  }

  ngOnDestroy(): void {
    // this.item.unsubscribe();
  }

}
