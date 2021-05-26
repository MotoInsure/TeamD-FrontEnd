
//@author:Kajal Tiwari
//@coauthor:Jai Baheti

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';
import { UserService } from '../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isRequested : boolean = false;
  user:User;
  policy:Policy


  constructor(private service:UserService, private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  
  getPolicyDetails(){
    this.policy=JSON.parse(localStorage.getItem("policy"));
    this.isRequested=true;
    
  }
  back(){
    this.router.navigate(['policy']);
  }

}
