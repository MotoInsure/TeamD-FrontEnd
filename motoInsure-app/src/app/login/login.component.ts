import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../login.model';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';
import { Sms } from '../sms.model';
import { User } from '../user.model';
import { Vehicle } from '../Vehicle.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login;
  sms:Sms;
  pwd : boolean= true;
  loggedIn : boolean =false; 
  userName : string;
  email : string;
  user:User;
  registrationNo : string;
  disappear : boolean = this.loggedIn || this.pwd;
  
  constructor(private service:UserService,private srv:VehicleService, private router: Router, private msgservice:MessageService ) { 
    this.login = new Login();
    this.sms=new Sms();
  }

  ngOnInit(): void {
  }

  loginUser(){    
    let user : User;
    this.service.validateLogin(this.login.email,this.login.password).then(
      (result:User)=>{
        user = result;
        console.log(result);
        console.log(user);
        if(user!=null){
          localStorage.setItem("user",JSON.stringify(user));
          this.loggedIn = true;
          this.disappear = false;
         } 
         else
           alert("Invalid credentials");
      });
  }
  toggle(){
    this.pwd = !this.pwd;
    this.disappear = !this.disappear;
  }

  forgotPwd(){
    
    let password :User;
    //this.service.forgotPassword(this.userName).subscribe(data=>password=data);   
    //console.log(password);
    this.service.forgotPassword(this.login.email).then(
      (result : User)=> {
        password=result;
      // console.log(password.password);
       let temp=password.password;
       this.sms.to="+91"+password.phoneNo;
       this.sms.message="You have attempted to recover your password.Your password for Motoinsurance policy is- "+temp;
       this.msgservice.sendSms(this.sms);
      }
    );

  }  
  addVehicle(){
    let user : User;
    user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("registrationNo",JSON.stringify(this.registrationNo));
    this.service.addVehicle(this.registrationNo, user);
    this.router.navigate(["policy"]);
  }
  
  // brand:string[];
  //   getBrand(){
      
  //     this.srv.getBrand("Four Wheeler").then(
  //       (result:string[])=>{
  //         this.brand=result;
  //         console.log(this.brand);          
  //       }
  //     );
      
  //   }
  //   getModel(){
  //     const model = this.brand.filter(str=>str.match("Maruti Suzuki"));
  //     console.log(model);
      
  //   }



}
