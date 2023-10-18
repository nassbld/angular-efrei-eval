import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CategoriesService} from "../shared/services/categories.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: any = this.categoriesService.categories;
  playerName = '';

  constructor(private categoriesService: CategoriesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
    this.categoriesService.getCategories();
  }

  navigateToQuiz(categoryId: any) {
    this.router.navigate(['/quiz', this.playerName, categoryId]);
  }

}
