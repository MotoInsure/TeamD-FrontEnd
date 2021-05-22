import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user.model';
//import { RegistrationModel } from 'src/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent  {
//auth : RegistrationModel;
user:User;
RegistrationForm = new FormGroup({  
  Username: new FormControl(''),
  Phone_Number: new FormControl(''),
  EmailID: new FormControl(''),
  Password: new FormControl(''),
  password: new FormControl(''),
  State: new FormControl(''),
  City: new FormControl(''),
});

constructor(private service: UserService, private router:Router) {
  this.user = new User();
 }
   onSubmit(){
    //this.user= this.RegistrationForm;
    this.service.addUser(this.user);
    this.router.navigate(['login']);
    console.log(this.user.userName);
    
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
