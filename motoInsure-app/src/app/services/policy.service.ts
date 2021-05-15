import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  
  baseUri : string = "http://localhost:8980/policy";
  
  constructor(private http:HttpClient) { 
  }

  getPolicyAmount(registrationNo : string, policyType : string) : Observable<string> {
    return this.http.get<string>(this.baseUri+"/policyAmount/"+registrationNo+"/"+policyType);
  }

  getMaxClaimAmount(registrationNo : string) :Observable<string> {
    return this.http.get<string>(this.baseUri+"/IDV/"+registrationNo);
  }

 
}
