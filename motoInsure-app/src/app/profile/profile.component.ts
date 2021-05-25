import { Component, OnInit } from '@angular/core';
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


  constructor(private service:UserService) {
    this.user=new User();
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  
  getPolicyDetails(){
    let policy:Policy;
    policy=JSON.parse(localStorage.getItem("policy"));
    console.log(policy)
    this.isRequested=true;
  }

}
