//Son 
//inserer la directive @output dans l'import

import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
 //créer un nouvel event avec la directive @output
  @Output()
  clickTrigger = new EventEmitter<string>();
//methode déclenchée par le click
  clickDetected(){
    this.clickTrigger.next();
  }
  
  constructor() { }

  ngOnInit() {
  }

 
  
  
}
