import { ElementRef } from '@angular/core';
import { UpVoteDirective } from './up-vote.directive';

describe('UpVoteDirective', () => {
  it('should create an instance', () => {
    const directive = new UpVoteDirective(new ElementRef(document.createElement('div')));
    expect(directive).toBeTruthy();
  });
});
