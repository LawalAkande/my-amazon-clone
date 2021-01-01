import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Followers } from './models/followers';
// import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // moshUrl = 'https://jsonplaceholder.typicode.com/photos';
  moshUrl = 'https://api.github.com/users/mosh-hamedani/followers';
  // moshUrl = 'https://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=2'

  constructor(private http: HttpClient) { }

  getImages():Observable<Followers[]> {
    return this.http.get<Followers[]>(`${this.moshUrl}${this.limit}`);
  }

  getProduct () {
    return [
      {
        id: 1,
        title:"The lean startup",
        price: 29.99,
        rating: '☆☆☆☆☆',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
      },
      // {
      //   id: 49538094,
      //   title:'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bow!',
      //   price: 239,
      //   rating: '☆☆☆',
      //   image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
      //   // image:'https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg'
      // },
      // {
      //   id:3,
      //   title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      //   price: 199.99,
      //   rating: '☆☆☆',
      //   image:'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
      // },
      // {
      //   id:23445930,
      //   title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
      //   price: 98.99,
      //   rating: '☆☆☆☆☆',
      //   image:'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_RETINAMOBILEx2$'
      // },
      // {
      //   id:3254354345,
      //   title:'New Apple Ipad Pro (12.9-inch, WI-FI, 128GB) - Sliver (4th Genration)',
      //   price: 598.99,
      //   rating: '☆☆☆☆',
      //   image:'https://image-na.ssl-images-amzon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
      // },
      // {
      //   id:90829332,
      //   title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Minitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      //   price: 1094.98,
      //   rating: '☆☆☆☆',
      //   image:'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg'
      // },
    ]
  }
}


