import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any; // From parent to child => from Home Component to Register Component
  @Output() cancelRegister = new EventEmitter(); // From child to parent, from Register Component to Home Component

  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model)
      .subscribe({
        next: (response: any) => 
            { 
              console.log(response);
              this.cancel();
            },
        error: (error: any) => { console.log(error) }
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
