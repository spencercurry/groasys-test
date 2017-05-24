import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensorDash',
  templateUrl: './sensor-dash.component.html',
  styleUrls: ['./sensor-dash.component.css']
})
export class sensorDashComponent implements OnInit {
  title = 'Sensor Dashboard Works!';
  constructor() { }

  ngOnInit() {
  }

}
