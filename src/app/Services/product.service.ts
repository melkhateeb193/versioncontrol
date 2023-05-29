import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  arrOfProductIds: number[] = []
  subscriptions?: Subscription;
  // Constructor function
  constructor() {

  }

  getAllProductsAPI() {
    return true;
  }


}
