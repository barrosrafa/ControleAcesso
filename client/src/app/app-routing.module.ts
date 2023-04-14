import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SecondValidationComponent } from './components/second-validation/second-validation.component';
import { CheckInComponent } from './components/check-in/check-in.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'second', component: SecondValidationComponent},
  {path: 'checkin', component: CheckInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
