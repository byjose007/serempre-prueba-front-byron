import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {


    this.productsService.getProducts().subscribe((products: any) => {
      products.docs.forEach((doc: any) => {
        this.products.push(doc.data());
      });
      this.products = this.products[0];
      this.productsService.setProducts(this.products) 
      this.productsService.setPrice(this.products.price); 
     
    });
  }
}
