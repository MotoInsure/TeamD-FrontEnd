import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicyService } from './services/policy.service';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './services/payment.service';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MatTableModule } from '@angular/material/table';
import { DisplayIdvComponent } from './display-idv/display-idv.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    PolicyComponent,
    PaymentComponent,
    VehicleFormComponent,
    DisplayIdvComponent,
    VehicleDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [PolicyService, PaymentService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
