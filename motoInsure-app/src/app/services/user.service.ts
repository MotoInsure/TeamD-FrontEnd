// author : Jai Baheti

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle.model';
import { Policy } from '../policy.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUri : string = "http://localhost:8980/user/";
  baseUrl : string = "http://localhost:8980/vehicle/";
  baseUrl2: string = "http://localhost:8980/policy/";

  constructor(private http:HttpClient, private router:Router) { }

  async addUser(user :User){
    return await this.http.post(this.baseUri+"addUser",user)
    .pipe(
      retry(1),
      catchError(this.handleError2)
    ).toPromise();
  }
  async validateLogin(email : string, password: string){    
    return await this.http.get<User>(this.baseUri+"auth?email="+email+"&password="+password)
    .pipe(
      retry(1),
      catchError(this.handleError)
    ).toPromise()
    ;
  }

  async forgotPassword(userName:string){
    return this.http.get<User>(this.baseUri+"forgotPwd/"+userName).toPromise();
  }

  async addVehicle(registration:string, user :User){
    this.http.post(this.baseUri+"addVehicle/"+user.id+"/"+registration,user).toPromise();
  }

  async addPolicy(policyId:number,user:User){
    this.http.post(this.baseUri+"addPolicyToUser/502/"+policyId,user).toPromise();
  }
  
  async getPriceOfVehicle(registrationNo:string){
    return this.http.get<Vehicle>(this.baseUrl+"getPrice/"+registrationNo).toPromise();
  }
  async getPolicyByUserid(userid:number){
    return this.http.get<Policy>(this.baseUrl2+"getPolicyByUserid/"+userid).toPromise();
  }
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['home']);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      //errorMessage = `Invalid Credentials.`
    } else {
      // server-side error
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage = `Invalid Credentials.`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  handleError2(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      //errorMessage = `Invalid Credentials.`
    } else {
      // server-side error
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage = `User exists.`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
