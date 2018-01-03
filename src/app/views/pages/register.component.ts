import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private service: ApiService) { }

  userName: string;
  userEmail: string;
  userPassword: string;

  createUser() {
    this.service.postUser(this.userName, this.userEmail, this.userPassword).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
