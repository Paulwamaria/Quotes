import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteCountPipe } from './vote-count.pipe';
import { UpVoteDirective } from './up-vote.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HighlightDirective } from './highlight.directive';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'contacts', component: ContactsComponent},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    VoteCountPipe,
    UpVoteDirective,
    DateCountPipe,
    QuoteFormComponent,
    LandingPageComponent,
    HighlightDirective,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
