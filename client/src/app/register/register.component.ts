import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any; // From parent to child => from Home Component to Register Component
  @Output() cancelRegister = new EventEmitter(); // From child to parent, from Register Component to Home Component
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(private accountService: AccountService, private toastr: ToastrService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18); // This means our datepicker does not allow any selection of a date of 18 years ago
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      gender:['male'],
      username:['', Validators.required],
      knownAs:['', Validators.required],
      dateOfBirth:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
    this.registerForm.controls.password.valueChanges // this is done because if we set the confirmpassword first and then the password the form status will be invalid,
      .subscribe({   // comment these lines and set first the name, then the confirmPassword, then the password and will see that the form is invalid.
        next: () => 
          { 
            this.registerForm.controls.confirmPassword.updateValueAndValidity(); 
          }
      })

  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true } // isMatching is an arbitrary name, just to say that it is matching
    }
  }

  register() {
    this.accountService.register(this.registerForm.value)
      .subscribe({
        next: (response: any) => 
            { 
              this.router.navigateByUrl('/members')
            },
        error: (error: any) => 
            { 
              this.validationErrors = error;
            }
      })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

/*
this.accountService.login(this.model)
      .subscribe({
        next: (result: any) => 
              { 
                console.log(result);
              },
        error: (error: any) => { console.log(error) }
      });
*/

}
