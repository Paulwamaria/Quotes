import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteCount',
  standalone: false
})
export class VoteCountPipe implements PipeTransform {

  transform(value: number, isTouching: boolean): number {
    return isTouching ? value + 1 : value;
  }
}
