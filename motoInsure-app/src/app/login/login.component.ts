import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../login.model';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';
import { User } from '../user.model';
import { Vehicle } from '../Vehicle.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login;
  pwd : boolean= true;
  loggedIn : boolean =false; 
  userName : string;
  email : string;
  registrationNo : string;
  disappear : boolean = this.loggedIn || this.pwd;

  constructor(private service:UserService,private srv:VehicleService, private router: Router) { 
    this.login = new Login();
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
    this.service.forgotPassword(this.userName).then(
      (result : User)=> {
        password=result;
        console.log(password.password);        
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
  brand:string[];
    getBrand(){
      
      this.srv.getBrand("Four Wheeler").then(
        (result:string[])=>{
          this.brand=result;
          console.log(this.brand);          
        }
      );
      
    }
    getModel(){
      const model = this.brand.filter(str=>str.match("Maruti Suzuki"));
      console.log(model);
      
    }



}
