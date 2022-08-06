import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from './../services/products.service';
import { cartItem } from '../model';

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
  subscription:any ;
  cartItem: cartItem |null = null;
  selectedSize:number = 0;

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
    this.subscription = this.productsService.getProducts()
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

  // Navigate to product list
  navigatetoProducts() {
    this.router.navigate(['']);
  }

  // Add an item to the cart
  addToCart(item: any) {
    this.cartItem = {
      id: item.id,
      mainImage: item.mainImage,
      name: item.name,
      size: this.selectedSize,
      price: {
        amount: item.price.amount,
        currency: item.price.currency
      },
      amount: 1
    }
    this.isAdded = true;
    this.cartService.addToCart(this.cartItem);
  }

  ngOnDestroy(): void {
    // Unsubscribe to subscriptions upon onDestroy
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  selectSize(size: number) {
    this.selectedSize = size;
  }

}
