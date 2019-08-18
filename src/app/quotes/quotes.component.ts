import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Favorite Quotes';

  quotes: Quotes[] = [
    new Quotes( 1, `Nothing in this world can take the place of persistence. 
    Talent will not: nothing is more common than unsuccessful men with talent. Genius will not;
     unrewarded genius is almost a proverb. Education will not: the world is full of educated derelicts.
      Persistence and determination alone are omnipotent.`, 
    `Persistence and determination alone are omnipotent. You can be lucky enough to have talents, 
    skills, education or you could even be a genius but still remain a garbage in life. What matters in life 
    is the persistence to keep pursuing and resetting your goal. Everytime time you come close  to achieving your goal,
    make sure you have another one ready flex your muscles to the maximum. It takes an awful lots of determination for 
    someone to accomplish their dreams.`, 'Calvin Coolidge', 0, 0, 'Paul Kamau', new Date(2019, 8, 18, 17)),
    new Quotes( 2, `Programming is like sex,
    one step mistake and you have to support it
    for the rest of your live.`, `This quote relates to the choices that programmers make.
    Sometimes its very hard to change your paths especially when you are almost done with
    your project and you have to stick to the plan.`, 'Developer Kafasi', 0, 0, 'Paul Wamaria', new Date(2019, 6, 30, 16)),
    new Quotes( 3, `Your work is going to fill a large part of
     your life, and the only way to be truly satisfied is to do what you believe is great work.
      And the only way to do great work is to love what you do. If you haven't found it yet,
      keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.`,
     `Steve Jobs still remains an inspirational figure to many.
      His struggles through life to becoming one of the greatest
       leaders has inspired a lot of young programmers. He insisted that the only
       way to achieve great things is to do what we love and if we haven’t found what we love, then we should never stop seeking.
      This he said in one of his commencement speeches at Harvard.`, 'Steve Jobs', 5, 0, 'Kamau Paul', new Date(2019, 7, 2, 8)),
    new Quotes( 4, `Sometimes the worst place you can be at is in your own head.`,
     `Mental health is a tough subject to comprehend because most people believe being normal is not wearing tattered
      clothes while collecting papers in the streets. Sometimes you could be a picture perfect on the outside but deep within,
       you are as bad as a rotten tomato.  Sometimes it’s only the victim who can tell that something
        is wrong because of the voice inside their heads.
        This voice is a double edged sword because it can torment you depending on the attention you give it.
        This is why we need to distract ourselves sometimes.
      Find something you love and take your mind off the hook for a while. `, 'Unknown', 0, 0, 'Wincott Paul', new Date(2019, 5, 10, 2)),
  ];
  // add new quote function
  addNewQuote(quote) {
    let quotesLength = this.quotes.length;
    quote.id = quotesLength + 1;
    quote.submitDate = new Date (quote.submitDate);

    quote.upVot = 0;
    quote.downVot = 0;
    this.quotes.push(quote);
  }
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
