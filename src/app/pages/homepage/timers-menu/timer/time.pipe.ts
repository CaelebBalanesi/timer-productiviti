import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 3600);
    value = value - hours * 3600;
    let minutes = Math.floor(value / 60);
    value = value - minutes * 60;
    let seconds = value;
    let out = hours + ":" + ((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds);
    return out;
  }

}
