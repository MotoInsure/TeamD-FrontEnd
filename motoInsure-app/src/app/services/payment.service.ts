import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../policy.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUri : string = "http://localhost:8980/policy";

  constructor(private http : HttpClient) { }

  insertPolicy(policy : Policy) : Observable<any> {
    return this.http.post(this.baseUri+"/addPolicy", policy);
  }
}
