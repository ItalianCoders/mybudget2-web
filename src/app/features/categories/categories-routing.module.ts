import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'new', component: CategoryDetailComponent},
  {path: ':id', component: CategoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
