import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlDash',
  templateUrl: './control-dash.component.html',
  styleUrls: ['./control-dash.component.css']
})
export class controlDashComponent implements OnInit {
  title = 'Controller Dashboard Works!';
  constructor() { }

  ngOnInit() {
  }

}
