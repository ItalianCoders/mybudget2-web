import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CoreModule, // TODO: Remove after refactor
    ReactiveFormsModule,
    // Angular Material
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CategoriesModule { }
