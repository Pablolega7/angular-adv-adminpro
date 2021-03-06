import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './accountSettings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {
        path:"",
        component:PagesComponent,
        canActivate:[AuthGuard],
        children:[
          {
            path:"dashboard",
            component:DashboradComponent,
            data:{
              titulo:"Dashboard"
            }
          },
          {
            path:"grafica1",
            component:Grafica1Component,
            data:{
              titulo:"Grafica 1"
            }
          },
          {
            path:"progress",
            component:ProgressComponent,
            data:{
              titulo:"ProgressComponent"
            }
          },
          {
            path:"accountSettings",
            component:AccountSettingsComponent,
            data:{
              titulo:"AccountSettings"
            }
          },
          {
            path:"promesas",
           component:PromesasComponent,
           data:{
             titulo:"Promesas"
           }
          },
          {
           path:"rxjs",
           component:RxjsComponent,
           data:{
             titulo:"Rxjs"
           }
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
