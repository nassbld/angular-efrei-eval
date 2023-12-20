import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: any = [];

  constructor(private http: HttpClient) { }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe( category => {
      this.categories.push(category)
    })
  }
}
