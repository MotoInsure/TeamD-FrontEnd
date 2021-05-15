import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Policy } from '../policy.model';
import { PolicyComponent } from '../policy/policy.component';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isPaid : boolean =false;
  paymentForm : FormGroup;
  policy : Policy;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService) {

   }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      name: ['',  Validators.pattern("[A-Za-z]([ A-Za-z]+)*")],
      cardNumber : ['', Validators.pattern("[0-9]{16}")],
      cvv : ['', Validators.pattern("[0-9]{3,4}")]
    });
  }

  toggle(){
    this.policy = JSON. parse(localStorage. getItem('currentPolicy'));
    console.log(this.policy);
    this.paymentService.insertPolicy(this.policy).subscribe(
      message => console.log(message)
    );
    this.isPaid = true;
  }
}
