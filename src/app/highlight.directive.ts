import { Directive, ElementRef } from '@angular/core';
import { Quotes } from './quotes';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    // var upVotArr = quotes.upVot.push();
    // this.elem.nativeElement.style.color = 'red';
  }

}
