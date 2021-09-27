import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './accountSettings/account-settings.component';

const routes: Routes = [
    {
        path:"",
        component:PagesComponent,
        children:[
          {
            path:"dashboard",
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
          {
            path:"accountSettings",
            component:AccountSettingsComponent
          }
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
