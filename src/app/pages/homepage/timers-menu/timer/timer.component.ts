import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TimerData } from './TimerData';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {

  constructor(private renderer:Renderer2) {}

  @Input() data!: TimerData;
  @ViewChild("timeLeft") timeLeft!: ElementRef;
  timing: Boolean = false;
  interval: any;

  ngAfterViewInit() {
    this.renderer.setStyle(this.timeLeft.nativeElement, "width", `${((this.data.timeLeft) / this.data.totalTime ) * 100}%`);
  }

  updateInnerTimer() {
    this.renderer.setStyle(this.timeLeft.nativeElement, "width", `${((this.data.timeLeft) / this.data.totalTime ) * 100}%`);
  }

  flipTimer() {
    if(!this.timing){
      this.timing = !this.timing;
      this.interval = setInterval(() => {
        if(this.data.timeLeft > 0){
          this.data.timeLeft = this.data.timeLeft - 1;
          this.updateInnerTimer();
        }
      }, this.data.timeLeft)
    }else{
      this.timing = !this.timing;
      clearInterval(this.interval);
    }
  }

}
