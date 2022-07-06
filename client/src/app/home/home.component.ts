import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  usersInsideHomeComponent: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users')
  //     .subscribe({
  //       next: (result: any) => { this.usersInsideHomeComponent = result },
  //       error: (error: any) => { console.log(error) }
  //     });
  // }

  //   .subscribe({
  //     next: (result: any) => { this.users = result },
  //     error: (error: any) => { console.log(error) }
  //   });

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
