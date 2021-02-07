import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(
    private http: HttpClient
  ) { }
  randomPhotos(page: number = 1) {
    return this.http.get(`https://api.unsplash.com/users/mariabrookslandscapes/photos/?client_id=${environment.ApiKey}`)
  }
  searchPhotos(query: string, page: number = 1) {
    return this.http.get(`https://api.unsplash.com/users/mariabrookslandscapes/photos/?client_id=${environment.ApiKey}`)
  }
}
