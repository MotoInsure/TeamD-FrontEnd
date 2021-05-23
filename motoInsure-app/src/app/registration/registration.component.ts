import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { Sms } from '../sms.model';
import { User } from '../user.model';
//import { RegistrationModel } from 'src/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent  {
  user:User;
  sms: Sms;
  sameUser : boolean = false;
  verify : boolean= true;
  submit : boolean =false;
  otp:string;
  isValid:boolean=false;
  userOtp:string;
  disappear : boolean = false;
  RegistrationForm = new FormGroup({
    Username: new FormControl(''),
    Phone_Number: new FormControl(''),
    EmailID: new FormControl(''),
    Password: new FormControl(''),
    password: new FormControl(''),
    State: new FormControl(''),
    City: new FormControl(''),
  });
    constructor(private service: UserService, private router:Router, private msgservice:MessageService) {
      this.user=new User;
      this.sms=new Sms;
     }  
    
    ngOnInit(): void {

    }
    validate(){}

    onSubmit(){
      this.service.addUser(this.user).then(
        (result:User)=>{
         if(result !== null){
          this.router.navigate(['login']);
          this.sameUser = false;
         }
        else
          this.sameUser = true;          
        }
      );
      
    }
    validateOtp(){
      let temp=localStorage.getItem('otp');
      console.log("Generated : "+temp);
     // console.log(this.otp);
      console.log("Entered: "+this.userOtp);
      if(temp===this.userOtp){
        this.isValid=true;
        alert("User verified");        
      }
      else{
        this.isValid=false;
        alert("Incorrect OTP");
      }
    }
  
    sendSms(){
      this.otp=this.generateOTP();
      localStorage.setItem('otp',this.otp);
      console.log("Generated: "+this.otp);     
      this.sms.message="OTP "+this.otp;
      this.sms.to="+917065328870";
      this.msgservice.sendSms(this.sms);
    }
    toggle(){
      this.disappear=!this.verify;
      this.verify=!this.disappear;
    }
    
    generateOTP() {
      var digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < 6; i++ ) {
          OTP += digits[Math.floor(Math.random() * 10)];
      }  
      return OTP;      
    }
  }
  //     validate(){
  //    console.log(this.auth.Username + " = " + this.auth.phonenum + " = " + this.auth.EmailId + " = " + 
  //    this.auth.State + " = " + this.auth.Password + " = " + this.auth.password)
  //    }
  //}     