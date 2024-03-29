// author : Kajal Tiwari;
// co-author : Shruti Mittal, Jai Baheti 

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
  verify : boolean= false;
  submit : boolean =false;
  otp:string;
  isValid:boolean=false;
  isCollapsed:boolean=true
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
      console.log("Generated : "+temp)
      console.log("Entered: "+this.userOtp);
      if(temp===this.userOtp){
        this.isValid=true;
        alert("User verified"); 
        this.onSubmit(); 
        localStorage.removeItem('otp');
           
      }
      else{
        this.isValid=false;
        alert("Incorrect OTP");
      }
    }
  
    sendSms(){
      this.verify=true;  
      this.otp=this.generateOTP();
      localStorage.setItem('otp',this.otp);
      this.sms.message="Your OTP for Motoinsurance policy registraion- "+this.otp;
      this.sms.to="+91"+this.user.phoneNo;
      this.msgservice.sendSms(this.sms);
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
