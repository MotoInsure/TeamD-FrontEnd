import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Policy } from '../policy.model';
import { PolicyComponent } from '../policy/policy.component';
import { PaymentService } from '../services/payment.service';
import { UserService } from '../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user"));
  isPaid : boolean =false;
  isRequested : boolean = false;
  paymentForm : FormGroup;
  policy : Policy;
  savedPolicyId : number;
  prit:boolean=false;

  constructor(private formBuilder: FormBuilder,private service:UserService, private paymentService: PaymentService) {

   }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      name: ['',  Validators.pattern("[A-Za-z]([ A-Za-z]+)*")],
      cardNumber : ['', Validators.pattern("[0-9]{16}")],
      cvv : ['', Validators.pattern("[0-9]{3,4}")]
    });
  }

  toggle(){
    let user : User;
    user = JSON.parse(localStorage.getItem("user"));
    this.policy = JSON. parse(localStorage.getItem('currentPolicy'));
    console.log(this.policy);
    this.paymentService.insertPolicy(this.policy,user).subscribe(
      message => console.log(message),
      error => {
        this.savedPolicyId=error.error.text.split(":")[1];
        console.log(this.savedPolicyId);
      }

    );
    this.isPaid = true;
    
  }
  getPolicyDetails(){
    let user : User;
    let policy : Policy;
    user = JSON.parse(localStorage.getItem("user"));
    this.service.getPolicyByUserid(user.id).then(
      (result:Policy)=>{
        policy = result;
        if(policy !==null)
        localStorage.setItem("policy",JSON.stringify(policy));
        //console.log(policy);
      }
      
    );
    
    this.isRequested = true;
    
  }
  logout(){
    this.service.logout();
  }
  print(){
    this.prit=true;
  }
}
