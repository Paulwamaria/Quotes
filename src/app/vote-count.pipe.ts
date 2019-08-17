import { Pipe, PipeTransform, Component } from '@angular/core';
import { Quotes } from './quotes';

@Pipe({
  name: 'voteCount'
})
export class VoteCountPipe implements PipeTransform {

  transform(value: any, isTouching: boolean): number {
if (isTouching) {
  return(value + 1);
} else {
  console.log( value);
}
  }

}
