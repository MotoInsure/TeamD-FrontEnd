import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegistrationNumber
  constructor(private router: Router, private userService : UserService) { }

  ngOnInit(): void {
  }

  direct() {
    this.router.navigate(['vehicle']);
  }

  direct1() {
    let vehicleObj : Vehicle;
    this.userService.getPriceOfVehicle(this.RegistrationNumber).then(
      (result:Vehicle)=>{
        vehicleObj=result;
        if(vehicleObj!=null) {
          localStorage.setItem('current vehicle',JSON.stringify(vehicleObj));
          this.router.navigate(['vehicleDisplay']);
        }
        else
          alert ("Registration Number invalid");
      });
  }
  
onInput(event){
  this.RegistrationNumber=event.target.value;
}
}