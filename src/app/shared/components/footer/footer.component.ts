import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   total: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  this.productsService.$price.subscribe((price: number) => {
      this.total = price
    })
  }
}
