import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-random-slideshow-page',
  templateUrl: './random-slideshow-page.component.html',
  styleUrls: ['./random-slideshow-page.component.scss']
})
export class RandomSlideshowPageComponent implements OnInit {
  photoUrls: any;
  constructor(
    private photoService: PhotoService
  ) { }
  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.photoService.randomPhotos(1)
      .subscribe(res => {
        this.photoUrls = res;
        console.log(res);
      })
  }
}