import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CoreModule } from 'src/app/core/core.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CoreModule, // TODO: Remove after refactor
    // Angular Material
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CategoriesModule { }
