import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { RegistrationModel } from 'src/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent  {
//auth : RegistrationModel;
RegistrationForm = new FormGroup({
  Username: new FormControl(''),
  Phone_Number: new FormControl(''),
  EmailID: new FormControl(''),
  Password: new FormControl(''),
  password: new FormControl(''),
  State: new FormControl(''),
  City: new FormControl(''),
});
  constructor() {
    
     //this.auth = new RegistrationModel();
   }
  
  
  // ngOnInit(): void {
    
    
    
    

  // }
  validate(){

  }
}
//     validate(){
//    console.log(this.auth.Username + " = " + this.auth.phonenum + " = " + this.auth.EmailId + " = " + 
//    this.auth.State + " = " + this.auth.Password + " = " + this.auth.password)
//    }
//}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
