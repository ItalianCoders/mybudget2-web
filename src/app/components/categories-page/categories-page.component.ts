import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      response => {
        this.categories = this.categories.filter(category => category.id !== id);
      }
    );
  }
}
