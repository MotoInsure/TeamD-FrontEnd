import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUri : string = "http://localhost:8980/user/";
  baseUrl : string = "http://localhost:8980/vehicle/";

  constructor(private http:HttpClient, private router:Router) { }

  addUser(user :User){
    this.http.post(this.baseUri+"addUser",user).subscribe(data => data=user);
  }
  async validateLogin(email : string, password: string){    
    return await this.http.get<User>(this.baseUri+"auth?email="+email+"&password="+password)
    .pipe(
      retry(1),
      catchError(this.handleError)
    ).toPromise()
    ;
  }

  // forgotPassword(userName:string): Observable<string>{
  //   return this.http.get<string>(this.baseUri+"forgotPwd/"+userName);
  // }
  async forgotPassword(userName:string){
    return this.http.get<User>(this.baseUri+"forgotPwd/"+userName).toPromise();
  }

  async addVehicle(registration:string, user :User){
    // let user =User;
    // user = JSON.parse(localStorage.getItem("user"));
    //this.http.post(this.baseUri+"addVehicle/502/"+registration,user).toPromise();
    this.http.post(this.baseUri+"addVehicle/"+user.id+"/"+registration,user).toPromise();
  }

  async addPolicy(policyId:number,user:User){
    this.http.post(this.baseUri+"addPolicyToUser/502/"+policyId,user).toPromise();
    //this.http.post(this.baseUri+"addPolicyToUser/"+user.id+"/"+policyId,user).toPromise();
  }
  
  async getPriceOfVehicle(registrationNo:string){
    return this.http.get<Vehicle>(this.baseUrl+"getPrice/"+registrationNo).toPromise();
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
}
