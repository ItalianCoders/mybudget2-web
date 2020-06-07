import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from 'src/app/core/core.module';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { LastMovementsComponent } from './components/last-movements/last-movements.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LastMovementsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule, // TODO: Remove after refactor
    // Angular Material
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
