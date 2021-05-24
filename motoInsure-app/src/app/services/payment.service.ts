// author : Hemaja Patoju

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../policy.model';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUri : string = "http://localhost:8980/policy";

  constructor(private http : HttpClient) { }

  insertPolicy(policy : Policy, user:User) : Observable<any> {
    return this.http.post(this.baseUri+"/addPolicy/"+user.id, policy);
  }
}
