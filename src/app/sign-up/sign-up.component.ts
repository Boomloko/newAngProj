import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})



export class Order {
  user: string;
  email: string;

}
export class SignUpComponent implements OnInit {
  model: Order = new Order();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.model);
  }

}
