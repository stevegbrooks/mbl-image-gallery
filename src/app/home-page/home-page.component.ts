import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  query: any = <any>{};
  photoUrls: any;
  page: number = 1;
  constructor(
    private photoService: PhotoService
  ) { }
  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.photoService.randomPhotos(this.page)
      .subscribe(res => {
        this.photoUrls = res;
        console.log(res);
      })
  }
  searchPhotos(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.page = 1;
    this.photoUrls = [];
    this.requestSearchPhotos();
  }
  requestSearchPhotos() {
    this.photoService.searchPhotos(this.query.search, this.page)
      .subscribe(res => {
        this.photoUrls = res;
        console.log(res);
      })
  }
  onScroll() {
    this.page++
    if (!this.query.search) {
      this.getPhotos();
    }
    else {
      this.requestSearchPhotos();
    }
  }
}
