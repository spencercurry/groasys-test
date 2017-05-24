import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { mainDashComponent } from './main-dash/main-dash.component';
import { sensorDashComponent } from './sensor-dash/sensor-dash.component';
import { controlDashComponent } from './control-dash/control-dash.component';
import { ControlMainComponent } from './control-dash/control-main/control-main.component';
import { ControlRecipeListComponent } from './control-dash/control-recipe-list/control-recipe-list.component';
import { SensorMainComponent } from './sensor-dash/sensor-main/sensor-main.component';
import { SensorMonitorComponent } from './sensor-dash/sensor-monitor/sensor-monitor.component';
import { SensorSingleListComponent } from './sensor-dash/sensor-single-list/sensor-single-list.component';
import { SensorCalibrationComponent } from './sensor-dash/sensor-calibration/sensor-calibration.component';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    mainDashComponent,
    sensorDashComponent,
    controlDashComponent,
    ControlMainComponent,
    ControlRecipeListComponent,
    SensorMainComponent,
    SensorMonitorComponent,
    SensorSingleListComponent,
    SensorCalibrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
