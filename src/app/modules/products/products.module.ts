import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SlidesComponent } from './components/slides/slides.component';
import { FeaturesComponent } from './components/features/features.component';
import { optionsSlidesComponent } from './components/options-slides/options-slides.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    ProductsComponent,
    SlidesComponent,
    optionsSlidesComponent,
    FeaturesComponent,
    HomeComponent
  ],
  exports: [
    ProductsComponent,
    SlidesComponent,
    optionsSlidesComponent,
    FeaturesComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule, SharedModule],
})
export class ProductosModule {}
