import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegistrationNumber
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  direct() {
    this.router.navigate(['vehicle']);
  }
onInput(event){
  this.RegistrationNumber=event.target.value;
}
}