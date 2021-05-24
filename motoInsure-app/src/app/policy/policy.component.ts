import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';
import { UserService } from '../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  successMessage : string;
  errorMessage : string;
  thirdpartyPolicyAmount : number;
  comprehensivePolicyAmount : number;
  maxClaimAmount : number;
  expiryDate1 : string;
  expiryDate3 : string;
  expiryDate5 : string;
  registrationNo: string;

  newPurchasedDate : Date;
  newExpiryDate : Date;

  user = JSON.parse(localStorage.getItem("user"));

  policyObj : Policy = new Policy();

  constructor(private serv:UserService, private policyService : PolicyService, private router:Router) { 
    this.registrationNo = JSON.parse(localStorage.getItem("registrationNo"));
    console.log(this.registrationNo);
  }

  ngOnInit(): void {
    this.getPolicyAmount();
    this.getComprehensivePolicyAmount();
    this.getMaxClaimAmount();
    this.expiryDate1 = new Date(new Date().getFullYear()+1, new Date().getMonth(), new Date().getDate()).toDateString();
    this.expiryDate3 = new Date(new Date().getFullYear()+3, new Date().getMonth(), new Date().getDate()).toDateString();
    this.expiryDate5 = new Date(new Date().getFullYear()+5, new Date().getMonth(), new Date().getDate()).toDateString();
    
  }
  logout(){
    this.serv.logout();
  }

  getPolicyAmount(){
    this.policyService.getPolicyAmount(this.registrationNo,"Thirdparty").subscribe(
      policyAmount => this.successMessage = policyAmount,
      error => this.thirdpartyPolicyAmount = error.error.text.split(":")[1]);     
  }

  getComprehensivePolicyAmount(){
    this.policyService.getPolicyAmount(this.registrationNo,"Comprehensive").subscribe(
      policyAmount => this.successMessage = policyAmount,
      error => this.comprehensivePolicyAmount = error.error.text.split(":")[1]);     
  } 

  getMaxClaimAmount(){
    this.policyService.getMaxClaimAmount(this.registrationNo).subscribe(
      maxClaimAmount => this.successMessage = maxClaimAmount,
      error => this.maxClaimAmount = error.error.text.split(":")[1]
    );

  }
  
  getUserDetails(){
    let user : User;
    user = JSON.parse(localStorage.getItem("user"));
  }

  navigate(num : number){
    console.log(num);

    this.policyObj.maxClaimAmount = this.maxClaimAmount;
    this.policyObj.idv = this.maxClaimAmount;
    // this.policyObj.purchasedDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.newPurchasedDate = new Date();
    console.log(this.newPurchasedDate.getMonth());
    this.policyObj.purchasedDate = this.newPurchasedDate.getFullYear() +"-"+("0"+this.newPurchasedDate.getMonth()).slice(-2)+"-"+this.newPurchasedDate.getDate();

    if(num==1||num==2||num==3){
      this.policyObj.type = "Thirdparty";
    }
    else 
      this.policyObj.type = "Comprehensive";

    if(num==1 || num==4){
      this.newExpiryDate = new Date(new Date().getFullYear()+1, new Date().getMonth(), new Date().getDate());
      this.policyObj.expiryDate = this.newExpiryDate.getFullYear()+"-"+("0"+this.newExpiryDate.getMonth()).slice(-2)+"-"+this.newExpiryDate.getDate();
    }  
    else if(num==2 ||num==5){
      this.newExpiryDate = new Date(new Date().getFullYear()+3, new Date().getMonth(), new Date().getDate());
      
      this.policyObj.expiryDate = this.newExpiryDate.getFullYear()+"-"+("0"+this.newExpiryDate.getMonth()).slice(-2)+"-"+this.newExpiryDate.getDate();
    }
    else if(num==3||num==6){
      this.newExpiryDate = new Date(new Date().getFullYear()+5, new Date().getMonth(), new Date().getDate());
      this.policyObj.expiryDate = this.newExpiryDate.getFullYear()+"-"+("0"+this.newExpiryDate.getMonth()).slice(-2)+"-"+this.newExpiryDate.getDate();
    }


    if(num==1){
      this.policyObj.policyAmount= this.thirdpartyPolicyAmount;
    }
    else if(num==2){
      this.policyObj.policyAmount= this.thirdpartyPolicyAmount*3*0.9;
    }
    else if(num==3){
      this.policyObj.policyAmount= this.thirdpartyPolicyAmount*5*0.75;
    }
    else if(num==4){
      this.policyObj.policyAmount= this.comprehensivePolicyAmount;
    }
    else if(num==5){
      this.policyObj.policyAmount= this.comprehensivePolicyAmount*3*0.9;
    }
    else if(num==6){
      this.policyObj.policyAmount= this.comprehensivePolicyAmount*5*0.75;
    }
    
    console.log(this.policyObj);
    localStorage.setItem('currentPolicy', JSON.stringify(this.policyObj));
    this.router.navigate(['payment']);
  }
}
