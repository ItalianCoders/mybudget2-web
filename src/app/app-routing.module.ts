import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
