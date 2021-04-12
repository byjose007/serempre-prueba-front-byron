import { Component, Input, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() product: any;

  productPriceLabel: string = '';
  productPriceCurrency: string = '';

  activeTab: number = 0;
  productOptions: any = {};
  productTabs: {
    tabTitle: string;
    tabContent: string;
  }[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  selectTab(index: number) {
    this.activeTab = index;
  }

  selectOption(index: number, category: any) {
    this.productsService.selectOption(index, category);
    this.productsService.calculateFinalPrice();
  }
}
