import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    PagesComponent,
    DashboradComponent,
    ProgressComponent,
    Grafica1Component,
    
  ],
  exports:[
    PagesComponent,
    DashboradComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
  ],
})
export class PagesModule { }
