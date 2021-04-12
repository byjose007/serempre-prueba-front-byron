import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
@Input() sliderImages:any[] = [];
  selected: number = 0;
  selectedImage: string = '';

  constructor() { }

  ngOnInit(): void {
 
    this.changeImage(0);

    
  }

 

  changeImage(index:number) {
    this.selected = index;
    this.selectedImage = this.sliderImages[index].img;
  }

}
