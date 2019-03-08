import { Component, OnInit } from '@angular/core';

declare var Swiper: any;
@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {

  images: string[];
    config: any = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    };

  constructor() { }

  ngOnInit() {
  }

  loadImages() {
    this.images = [
        'http://localhost:3000/public/images/yellow.png',
        'http://localhost:3000/public/images/green.png',
        'http://localhost:3000/public/images/blue.png'
    ];
}
  

}
