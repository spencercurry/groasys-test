import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainDash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class mainDashComponent implements OnInit {
  title = 'Main Dashboard Works!';
  constructor() { }

  ngOnInit() {
  }

}
