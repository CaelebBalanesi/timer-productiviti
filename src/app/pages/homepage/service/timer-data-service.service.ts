import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimerData } from '../timers-menu/timer/TimerData';

@Injectable({
  providedIn: 'root'
})
export class TimerDataServiceService {
  private dataSubject = new BehaviorSubject<any>(null);
  public timerData$ = this.dataSubject.asObservable();

  public updateData(data: TimerData[]){
    this.dataSubject.next(data);
  }
}
