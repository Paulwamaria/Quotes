import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
  standalone: false
})
export class QuoteFormComponent {
  newQuote = this.createEmptyQuote();
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.addQuote.emit(this.newQuote);
    this.newQuote = this.createEmptyQuote();
    form.resetForm(this.newQuote);
  }

  private createEmptyQuote(): Quote {
    return new Quote(0, '', '', '', 0, 0, '', new Date());
  }
}
