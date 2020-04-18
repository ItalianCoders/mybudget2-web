import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LastMovementsComponent } from './components/last-movements/last-movements.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoryDetailPageComponent } from './components/category-detail-page/category-detail-page.component';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    LastMovementsComponent,
    CategoriesPageComponent,
    CategoryDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
