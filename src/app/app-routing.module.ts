import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';



const routes:Routes=[

  {
   path:"",
   loadChildren:()=>import('./pages/pages.routing').then(m=>m.PagesRoutingModule)
  },
  {
    path:"",
    loadChildren:()=>import('./auth/auth.routing').then(m=>m.AuthRoutingModule)
  },
  {
    path:"**",
    component:NopageFoundComponent
  },
  {
    path:"",
    redirectTo:'/dashboard',
    pathMatch:"full"
  }
];


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
