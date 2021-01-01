import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Followers } from '../models/followers'
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // cards;
  followers: Followers[];
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    // this.cards = [1, 2, 3];

    // this.productService.getImages().subscribe(f => {
    //   this.followers = f ;
    // })

    this.products = this.productService.getProduct();

  }

  addToBasket() {
    console.log("add to basket");
  }

  
}
