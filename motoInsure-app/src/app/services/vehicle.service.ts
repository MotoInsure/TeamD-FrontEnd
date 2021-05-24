// author : Theres Thomas
// co-author : Jai Baheti

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl : string = "http://localhost:8980/vehicle/";
  constructor(private http:HttpClient) { }

  async getBrand(type:string):Promise<any>{
    return this.http.get<String[]>(this.baseUrl+"getVehicle/"+type).toPromise();
  }
}
