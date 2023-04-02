import { Component } from '@angular/core';
import { TimerData } from '../timers-menu/timer/TimerData';
import { TimerDataServiceService } from '../service/timer-data-service.service';

@Component({
  selector: 'app-new-timer-menu',
  templateUrl: './new-timer-menu.component.html',
  styleUrls: ['./new-timer-menu.component.scss']
})
export class NewTimerMenuComponent {

  constructor(private timerService: TimerDataServiceService) {}

  timers: TimerData[] = [];

  createTimer(name: string, time: string){
    let timerData: TimerData = {
      title: name,
      totalTime: Number(time),
      timeLeft: Number(time)
    }
    this.timers.push(timerData);
    this.timerService.updateData(this.timers);
  }

}
