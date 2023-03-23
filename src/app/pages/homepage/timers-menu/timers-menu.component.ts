import { Component } from '@angular/core';

@Component({
  selector: 'app-timers-menu',
  templateUrl: './timers-menu.component.html',
  styleUrls: ['./timers-menu.component.scss']
})
export class TimersMenuComponent {

  timerJson = {
    title: 'This is a title',
    totalTime: 3600,
    timeLeft: 1200
  }
}
