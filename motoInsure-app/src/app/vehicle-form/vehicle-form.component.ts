// author : Theres Thomas
// co-author : Jai Baheti

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle.model';



@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
  
})

export class VehicleFormComponent implements OnInit {
  AllValues;
  vehicleForm:FormGroup;
  isOver=false;
  userForm:FormGroup;
  isNext=false;
  // This is vehicle's price and purchasing year
  price : number;
  year : number;


  vehicleObj : Vehicle = new Vehicle();  

  

  constructor(private fb: FormBuilder, private router: Router) { 
    this.vehicleForm=this.fb.group({
      VehicleType:'',
      Brand:'',
      Model:'',
      Variant:'',
      FuelType:'',
      PurchasingYear:'',
      Price:''
    })
    this.userForm=this.fb.group({
      Name:'',
      PhoneNo:'',
      EmailId:''
    })
  }
  ngOnInit(): void {
    this.isOver=true;
  }
  onInput(event){
    this.AllValues=event.target.value;
  }
 
  
  showIdv(){ //(work to be done)populate the vehicle object with registration no and price (when user proceeds with or without reg. no)
    this.vehicleObj.purchasingYear=this.year;
    this.vehicleObj.price = this.price;
    console.log(this.vehicleObj);
    localStorage.setItem("newVehicleObj",JSON.stringify( this.vehicleObj));
    this.router.navigate(['idv']);
  }

selectedVehType = 0;
selectedBrand = 0;
selectedModel = 0;
 
brands = [];
models = [];
variants =[];
 
 
onSelectVehType(v_id: number) {
this.selectedVehType = v_id;
this.selectedBrand = 0;
this.selectedModel = 0;
this.models = [];
this.variants = [];
this.brands = this.getBrand().filter((item) => {
return item.v_id === Number(v_id)
});
}
 
onSelectBrand(b_id: number) {
this.selectedBrand = b_id;
this.selectedModel = 0;
this.variants = [];
this.models = this.getModel().filter((item) => {
return item.b_id === Number(b_id)
});
}

onSelectModel(m_id: number){
this.selectedModel = m_id;
this.variants = this.getVariant().filter((item) => {
return item.m_id ===Number(m_id)
});
}
getVehType() {
return [
{ id: 1, name: 'Two Wheeler' },
{ id: 2, name: 'Four Wheeler' }
];
}
 
getBrand() {
return [
    { id: 1, v_id: 1, name: 'Hero ' },
    { id: 2, v_id: 1, name: 'TVS' },
    { id: 3, v_id: 1, name: 'Royal Enfield' },
    { id: 4, v_id: 1, name: 'Bajaj' },
    { id: 5, v_id: 1, name: 'KTM' },
    { id: 6, v_id: 1, name: 'Honda' },
    { id: 7, v_id: 2, name: 'Mahindra' },
    { id: 8, v_id: 2, name: 'Maruti Suzuki' },
    { id: 9, v_id: 2, name: 'Honda' },
    { id: 10, v_id: 2, name: 'Nissan' },
    { id: 11, v_id: 2, name: 'Jeep' },
    { id: 12, v_id: 2, name: 'Toyota' },
    { id: 13, v_id: 2, name: 'Hyndai' },
    { id: 14, v_id: 2, name: 'Ford' },
    { id: 15, v_id: 2, name: 'Bmw' },
    { id: 16, v_id: 2, name: 'Volkswagen' },
    { id: 17, v_id: 2, name: 'TATA' },
    { id: 18, v_id: 2, name: 'Chevrolet' }

]
}
 
getModel() {
return [
    { id: 1, b_id: 1, name: 'Glamour' },
    { id: 2, b_id: 1, name: 'Mastro' },
    { id: 3, b_id: 2, name: 'Jupitor' },
    { id: 4, b_id: 3, name: 'Classic' },
    { id: 5, b_id: 4, name: 'Pulsar' },
    { id: 6, b_id: 4, name: 'Dominar' },
    { id: 7, b_id: 5, name: 'Duke' },
    { id: 8, b_id: 6, name: 'Dio' },
    { id: 9, b_id: 6, name: 'Activa' },
    { id: 10, b_id: 7, name: 'Scorpio' },
    { id: 11, b_id: 8, name: 'Swift' },
    { id: 12, b_id: 8, name: 'Dezire' },
    { id: 13, b_id: 8, name: 'Ritz' },
    { id: 14, b_id: 8, name: 'Celerio' },
    { id: 15, b_id: 8, name: 'Alto' },
    { id: 16, b_id: 9, name: 'City' },
    { id: 17, b_id: 9, name: 'Amaze' },
    { id: 18, b_id: 10, name: 'Sunny' },
    { id: 19, b_id: 10, name: 'Micra' },
    { id: 20, b_id: 11, name: 'Compass' },
    { id: 21, b_id: 12, name: 'Fortuner' },
    { id: 22, b_id: 13, name: 'i10' },
    { id: 23, b_id: 2, name: 'Victor' },
    { id: 24, b_id: 14, name: 'Ecosport' },
    { id: 25, b_id: 14, name: 'Figo' },
    { id: 26, b_id: 15, name: '520d' },
    { id: 27, b_id: 16, name: 'Polo' },
    { id: 28, b_id: 17, name: 'Manza' },
    { id: 29, b_id: 18, name: 'Spark' },
    ]
}
getVariant(){
return [
{ id: 1, m_id: 1, name: 'Drum 124.7' },
{ id: 2, m_id: 2, name: 'BS4 VX' },
{ id: 3, m_id: 3, name: 'ZX' },
{ id: 4, m_id: 23, name: 'GLS' },
{ id: 5, m_id: 4, name: '350' },
{ id: 6, m_id: 4, name: '500' },
{ id: 7, m_id: 5, name: 'DTSI' },
{ id: 8, m_id: 5, name: 'NS 200' },
{ id: 9, m_id: 6, name: '400' },
{ id: 10, m_id: 7, name: 'BS3 199.5CC' },
{ id: 11, m_id: 8, name: 'DLX BS6' },
{ id: 12, m_id: 9, name: '5G' },
{ id: 13, m_id: 9, name: '3G' },
{ id: 14, m_id: 9, name: '125' },
{ id: 15, m_id: 10, name: 'SLX 7 Seater' },
{ id: 16, m_id: 11, name: 'LXiO' },
{ id: 17, m_id: 12, name: 'Vxi' },
{ id: 18, m_id: 13, name: 'Vxi' },
{ id: 18, m_id: 14, name: 'Vxi' },
{ id: 19, m_id: 15, name: 'Lxi' },
{ id: 20, m_id: 16, name: '1.5L i-Vtech' },
{ id: 21, m_id: 17, name: 'S CVT' },
{ id: 22, m_id: 17, name: 'i-Vtech' },
{ id: 23, m_id: 18, name: 'XV' },
{ id: 24, m_id: 19, name: 'XC' },
{ id: 25, m_id: 20, name: 'Sport 2.0D' },
{ id: 26, m_id: 21, name: '3.0D' },
{ id: 27, m_id: 22, name: 'Sports 1.2B' },
{ id: 28, m_id: 24, name: '1.5L Trend' },
{ id: 29, m_id: 25, name: 'Titanium' },
{ id: 30, m_id: 26, name: '520d' },
{ id: 31, m_id: 27, name: '1.2L' },
{ id: 32, m_id: 28, name: 'Saphire' },
{ id: 33, m_id: 29, name: '1.0PS 10B4' },
]
}
}
