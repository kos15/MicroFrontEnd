import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfefedrationComponent } from './mfefedration.component';

const routes: Routes = [{
  path:'',
  component: MfefedrationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfefedrationRoutingModule { }
