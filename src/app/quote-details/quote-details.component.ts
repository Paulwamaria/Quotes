import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
  standalone: false
})
export class QuoteDetailsComponent {
  @Input() quote: Quote;
  @Output() isNotTouching = new EventEmitter<boolean>();
  @Output() isTouching = new EventEmitter<boolean>();

  updateVote(touching: boolean): void {
    this.isTouching.emit(touching);
  }

  quoteRemove(untouching: boolean): void {
    this.isNotTouching.emit(untouching);
  }
}
