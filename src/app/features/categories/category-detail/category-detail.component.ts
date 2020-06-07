import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  categoryDetailForm: FormGroup;
  private categoryId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryDetailForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (this.categoryId !== 0) {
      if (!isNaN(this.categoryId)) {
        this.categoryService.getCategory(this.categoryId).subscribe(
          response => {
            this.categoryDetailForm.setValue({
              name: response.name,
              description: response.description
            });
          }
        );
      } else {
        console.error('pagina non esiste');
      }
    }
  }

  save(): void {
    if (this.categoryId === 0) {
      this.categoryService.addCategory(this.categoryDetailForm.value).subscribe(
        () => this.router.navigate(['../'], {relativeTo: this.route})
      );
    } else {
      this.categoryService.editCategory(this.categoryId, this.categoryDetailForm.value).subscribe(
        () => this.router.navigate(['../'], {relativeTo: this.route})
      );
    }
  }
}
