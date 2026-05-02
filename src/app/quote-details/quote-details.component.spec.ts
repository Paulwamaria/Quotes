import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCountPipe } from '../date-count.pipe';
import { Quote } from '../quote';
import { QuoteDetailsComponent } from './quote-details.component';

describe('QuoteDetailsComponent', () => {
  let component: QuoteDetailsComponent;
  let fixture: ComponentFixture<QuoteDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailsComponent, DateCountPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsComponent);
    component = fixture.componentInstance;
    component.quote = new Quote(1, 'Quote', 'Description', 'Author', 0, 0, 'Submitter', new Date());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
