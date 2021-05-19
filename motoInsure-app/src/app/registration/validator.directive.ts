// import { Directive, Input } from "@angular/core";
// import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


// @Directive({
//     selector: '[validator]',
//     providers: [{
//         provide: NG_VALIDATORS,
//         useExisting: ValidatorDirective,
//         multi: true
//     }]
// })
// export class ValidatorDirective implements Validator{
//     @Input() Validator: string;
//    validate(control: AbstractControl): {[key:string]:any} | null{
//      const controlToCompare = control.parent.get(this.Validator);
//      if(controlToCompare && controlToCompare.value !== control.value){
//          return { 'notEqual': true};
//      }
//      return null;
//    }
// }