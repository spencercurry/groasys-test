import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-monitor',
  templateUrl: './sensor-monitor.component.html',
  styleUrls: ['./sensor-monitor.component.css']
})
export class SensorMonitorComponent implements OnInit {
  title: 'System Health Monitor Works!';
  constructor() { }

  ngOnInit() {
  }

}
