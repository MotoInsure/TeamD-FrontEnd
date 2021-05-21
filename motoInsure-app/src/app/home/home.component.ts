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
  RegistrationNumber : string;
  vehicleObj : Vehicle;
  constructor(private router: Router, private userService : UserService) { }

  ngOnInit(): void {
  }

  direct() {
    this.router.navigate(['vehicle']);
  }

  direct1() {    
    this.userService.getPriceOfVehicle(this.RegistrationNumber).then(
      (result:Vehicle)=>{
        this.vehicleObj=result;
        console.log(this.vehicleObj);
        
        if(this.vehicleObj!=null) {
          localStorage.setItem('current vehicle',JSON.stringify(this.vehicleObj));
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