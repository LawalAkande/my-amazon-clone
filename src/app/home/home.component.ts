import { Component, OnInit } from '@angular/core';
import { Followers } from '../models/followers';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  followers: Followers[];
  product: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getImages().subscribe(l => {
      this.followers = l ;
    })

    this.product = this.productService.getProduct();
  }

}
