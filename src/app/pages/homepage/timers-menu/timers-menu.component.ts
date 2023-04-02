import { Component } from '@angular/core';
import { TimerDataServiceService } from '../service/timer-data-service.service';
import { TimerData } from './timer/TimerData';

@Component({
  selector: 'app-timers-menu',
  templateUrl: './timers-menu.component.html',
  styleUrls: ['./timers-menu.component.scss']
})
export class TimersMenuComponent {

  constructor(private timerService: TimerDataServiceService) {}

  ngOnInit(){
    this.timerService.timerData$.subscribe(data => this.timers = data);
  }

  timers!: TimerData[];

  test(){
    console.log(this.timers);
  }

}
