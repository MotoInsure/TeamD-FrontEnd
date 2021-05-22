import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayIdvComponent } from './display-idv/display-idv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PolicyComponent } from './policy/policy.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { DisplayIdv1Component } from './display-idv1/display-idv1.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'vehicle',
    component: VehicleFormComponent
  },
  {
    path : 'idv',
    component : DisplayIdvComponent
  },
  {
    path : 'vehicleDisplay',
    component : VehicleDisplayComponent
  },
  {
    path : "idv1",
    component :DisplayIdv1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
