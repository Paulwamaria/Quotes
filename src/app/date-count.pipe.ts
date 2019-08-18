import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today= new Date();
    let todayWithoutTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours());
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const minutesInDay = 1440;
    const hoursInDay = 24;
    var dateDifference = Math.abs(value - todayWithoutTime);
    var expiredTimeInSeconds = dateDifference * 0.001;
    
    var dateCounter = Math.floor(expiredTimeInSeconds / secondsInDay);
    var extraTimeInHours = (expiredTimeInSeconds % secondsInDay) / secondsInHour;
    var realExpiredTime: any = 'It\'s been ' + dateCounter + (' days and ' + extraTimeInHours + ' hours since the quote was submitted.');
    return realExpiredTime;
  }

}
