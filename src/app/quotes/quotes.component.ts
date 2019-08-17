import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    {id: 1, name: 'my favourite quote1', description: 'This is my first favourite quote', author: 'Paul1'},
    {id: 2, name: 'My favourite quote2',  description: 'This is my first favourite quote', author: 'Paul1'},
    {id: 3, name: 'My favourite quote3',  description: 'This is my first favourite quote', author: 'Paul1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
