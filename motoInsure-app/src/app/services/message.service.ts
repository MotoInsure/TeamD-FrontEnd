import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sms } from '../sms.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUri : string = "http://localhost:8980/sms/";

  constructor(private http:HttpClient, private router:Router) { }

  async sendSms(sms:Sms){
    return this.http.post(this.baseUri+"sendSms",sms).toPromise();
  }

  
}
