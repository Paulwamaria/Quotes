import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(1, 'Quote', 'Description', 'Author', 0, 0, 'Submitter', new Date())).toBeTruthy();
  });
});
