import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit, OnInit {

  @Input() data: any;
  @ViewChild("timeUsed") timeUsed!: ElementRef;
  timeLeft!: number;
  timing: Boolean = false;
  interval: any;

  constructor(private renderer:Renderer2) {}

  ngOnInit() {
    this.timeLeft = this.data.totalTime - this.data.usedTime;
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.timeUsed.nativeElement, "width", `${100 - (this.data.usedTime / this.data.totalTime) * 100}%`);
  }

  // TODO: This doesnt properly calculate the new total time. Rewrite updateInnerTimer(), ngAfterViewInit(), timeLeft and maybe flipTimer().
  updateInnerTimer() {
    console.log(`${((this.data.usedTime) / this.data.totalTime ) * 100}%`);
    this.renderer.setStyle(this.timeUsed.nativeElement, "width", `${((this.data.usedTime + this.timeUsed) / this.data.totalTime ) * 100}%`);
  }

  flipTimer() {
    console.log(this.timeLeft);
    if(!this.timing){
      this.timing = !this.timing;
      this.interval = setInterval(() => {
        if(this.timeLeft > 0){
          this.timeLeft = this.timeLeft - 60;
          this.updateInnerTimer();
        }
      }, this.timeLeft)
    }else{
      this.timing = !this.timing;
      clearInterval(this.interval);
    }
  }

}
