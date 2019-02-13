import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'form', component: FormComponent},
  {path: 'result', component: ResultComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
