import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-films',
  templateUrl: './best-films.component.html',
  styleUrls: ['./best-films.component.scss']
})
export class BestFilmsComponent implements OnInit {
  displayFilms : boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
