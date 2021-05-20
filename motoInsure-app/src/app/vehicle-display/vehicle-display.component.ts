import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicle.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrls: ['./vehicle-display.component.css']
})
export class VehicleDisplayComponent implements OnInit {
  vehicle : Vehicle;
  registrationNo : string;
  purchasingYear : number;
  price : number;
  type : string;
  brand : string;
  model : string;
  variant : string;
  fuelType : string;
  

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }
  toggle() {
    this.vehicle = JSON.parse(localStorage.getItem('current vehicle'));
    this.type = this.vehicle.type;
    this.brand = this.vehicle.brand;
    this.model = this.vehicle.model;
    this.variant = this.vehicle.variant;
    this.fuelType = this.vehicle.fuelType;
    this.purchasingYear = this.vehicle.purchasingYear;
    this.price = this.vehicle.price;
  }
  showIDV() {
    this.router.navigate(['idv']);
  }

}
