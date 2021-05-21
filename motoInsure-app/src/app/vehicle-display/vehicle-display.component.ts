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
  vehicle = JSON.parse(localStorage.getItem('current vehicle'));
  type = this.vehicle.type;
  brand = this.vehicle.brand;
  model = this.vehicle.model;
  variant = this.vehicle.variant;
  fuelType = this.vehicle.fuelType;
  purchasingYear = this.vehicle.purchasingYear;
  price = this.vehicle.price;
  
  

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }
  
    
  showIDV() {
    this.router.navigate(['idv']);
  }

}
