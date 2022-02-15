import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'payment',
  loadChildren: () => import("projects/payment/src/app/mfefedration/mfefedration.module").then((m) => m.MfefedrationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
