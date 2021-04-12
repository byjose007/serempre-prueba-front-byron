import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-slides',
  templateUrl: './options-slides.component.html',
  styleUrls: ['./options-slides.component.scss'],
})
export class optionsSlidesComponent implements OnInit {
  @Input() optionsSlides:any[] = [];


  constructor() {}

  ngOnInit(): void {

  }
}
