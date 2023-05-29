import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private prdService: ProductService){

  }

  getProduct(){
    return this.prdService.getAllProductsAPI();
  }

}
