import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prova():void{
    console.log("ciao sono arrivato");
    
    
  }

  imageObject: Array<object> = [{
    image: 'assets/img/imageLogo.jpg',
    thumbImage: 'assets/img/imageLogo.jpg',
    alt: 'alt of image',
   
}, {
  image: 'assets/img/imageLogo.jpg',
  thumbImage: 'assets/img/imageLogo.jpg', // Support base64 image
     //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
}
