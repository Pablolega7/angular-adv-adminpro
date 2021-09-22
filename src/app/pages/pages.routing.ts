import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
    {
        path:"",
        component:PagesComponent,
        children:[
          {
            path:"",
            component:DashboradComponent
          },
          {
            path:"grafica1",
            component:Grafica1Component
          },
          {
            path:"progress",
            component:ProgressComponent
          },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}
