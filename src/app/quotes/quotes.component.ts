import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes( 1, 'my favourite quote1', 'This is my first favourite quote', 'Paul1', 0, 0, new Date(2019, 6, 30)),
    new Quotes( 2, 'My favourite quote2', 'This is my second favourite quote', 'Paul2', 5, 0, new Date(2019, 7, 2)),
    new Quotes( 3, 'My favourite quote3', 'This is my third favourite quote', 'Paul3', 0, 0, new Date(2019, 5, 10)),
  ];
  // update votes
  // raiseVotes(isTouching: boolean, quotes.upVot: number) {
  //  if (isTouching) {
  //    return quotes.upVot++;
  //  }
  // }
  // voteUp function
  voteUp(touching, index) {
    // let votesUp  = 0;
    // let votesDown = 0;
    if (touching) {
      this.quotes[index].upVot += 1;
      // votesUp += this.quotes[index].upVot;

    } else {
      this.quotes[index].downVot -= 1;
      // votesDown -= this.quotes[index].downVot;
    }
  }
  // toggle quotes function
  toggleQuotes(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  removeQuote(untouching, index) {
    if ( untouching) {
      const toDelete = confirm( `Are you sure you want to delete ${this.quotes[index].name}`);
      if ( toDelete) {
        this.quotes.splice(index, 1);
      }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
