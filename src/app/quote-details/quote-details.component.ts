import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Quote } from '@angular/compiler';

import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input () quotes: Quotes;
  @Output () isNotTouching = new EventEmitter<boolean>();
  @Output () isTouching = new EventEmitter<boolean>();
  updateVote(touching: boolean) {
    this.isTouching.emit(touching);
  }
  quoteRemove(untouching: boolean) {
    this.isNotTouching.emit(untouching);
  }
  constructor() { }

  ngOnInit() {
  }

}
