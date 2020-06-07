import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
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
