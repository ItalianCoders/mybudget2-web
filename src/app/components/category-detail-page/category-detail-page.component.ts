import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss']
})
export class CategoryDetailPageComponent implements OnInit {
  categoryDetailForm: FormGroup;
  private id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryDetailForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.categoryService.getCategory(this.id).subscribe(
      response => {
        this.categoryDetailForm.setValue({
          name: response.name,
          description: response.description
        });
      }
    );
  }

  edit(): void {
    if (this.categoryDetailForm.valid) {
      const request = {
        id: this.id,
        ...this.categoryDetailForm.value
      };

      this.categoryService.editCategory(request).subscribe(
        response => this.router.navigate(['../'], {relativeTo: this.route})
      );
    }
  }
}
