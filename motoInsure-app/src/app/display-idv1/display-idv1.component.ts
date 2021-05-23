import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle.model';

@Component({
  selector: 'app-display-idv1',
  templateUrl: './display-idv1.component.html',
  styleUrls: ['./display-idv1.component.css']
})
export class DisplayIdv1Component implements OnInit {

  idv: number;
  vehicleObj : Vehicle;
  depreciatedValue : number;
  errorMessage : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.calIDV();
  }

  calIDV(){
    this.vehicleObj = JSON. parse(localStorage. getItem('current vehicle'));

    this.depreciatedValue = this.vehicleObj.price*0.05;
    this.idv = this.vehicleObj.price - (this.depreciatedValue*(new Date().getFullYear()-this.vehicleObj.purchasingYear))
    // this.idv = Math.abs(this.idv);

    if(this.idv<=0){
      this.errorMessage=true;
    }

    console.log(this.idv);
}
  navigateLogin(){
    this.router.navigate(['login']);
  }

  navigateRegistration(){
    this.router.navigate(['registration']);
  }
}
