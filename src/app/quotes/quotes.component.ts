import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 
  quotes: Quotes[] = [
    new Quotes( 1, 'my favourite quote1', 'This is my first favourite quote', 'Paul1'),
    new Quotes( 2, 'My favourite quote2', 'This is my second favourite quote', 'Paul2'),
    new Quotes( 3, 'My favourite quote3', 'This is my third favourite quote', 'Paul3'),
  ];
  // toggle quotes function
  toggleQuotes(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
