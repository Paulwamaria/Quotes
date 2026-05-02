import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(1, 'Quote', 'Description', 'Author', 0, 0, 'Submitter', new Date())).toBeTruthy();
  });
});
