import { LoginForm } from './../login-form';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: LoginForm = new LoginForm();

  constructor() { }

  ngOnInit() {
  }

}
