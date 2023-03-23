import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {

  @Input() data: any;
  @ViewChild("timeUsed") timeUsed!: ElementRef;
  timing: Boolean = false;
  interval: any;

  constructor(private renderer:Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.timeUsed.nativeElement, "width", `${100 - (this.data.usedTime / this.data.totalTime) * 100}%`);
  }

  // TODO: This doesnt properly calculate the new total time. Rewrite updateInnerTimer(), ngAfterViewInit(), timeLeft and maybe flipTimer().
  updateInnerTimer() {
    console.log(`${((this.data.timeLeft) / this.data.totalTime ) * 100}%`);
    console.log(this.data);
    this.renderer.setStyle(this.timeUsed.nativeElement, "width", `${((this.data.timeLeft) / this.data.totalTime ) * 100}%`);
  }

  flipTimer() {
    if(!this.timing){
      this.timing = !this.timing;
      this.interval = setInterval(() => {
        if(this.data.timeLeft > 0){
          this.data.timeLeft = this.data.timeLeft - 60;
          this.updateInnerTimer();
        }
      }, this.data.timeLeft)
    }else{
      this.timing = !this.timing;
      clearInterval(this.interval);
    }
  }

}
