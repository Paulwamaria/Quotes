import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
  standalone: false
})
export class DateCountPipe implements PipeTransform {

  transform(value: Date): string {
    const today = new Date();
    const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours());
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const dateDifference = Math.abs(value.getTime() - todayWithoutTime.getTime());
    const expiredTimeInSeconds = dateDifference * 0.001;
    
    const dateCounter = Math.floor(expiredTimeInSeconds / secondsInDay);
    const extraTimeInHours = Math.floor((expiredTimeInSeconds % secondsInDay) / secondsInHour);
    return `It's been ${dateCounter} days and ${extraTimeInHours} hours since the quote was submitted.`;
  }

}
