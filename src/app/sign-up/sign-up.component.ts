import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  model: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.model);
  }

}
