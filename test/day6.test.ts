import { checkAnswers } from '../src/day6';
import { sample1, input } from '../src/inputs/input6';

describe('findSeat', () => {
  it('should return correct seat for binary inputs sample', () => {
    expect(checkAnswers(sample1)).toBe(11);
    expect(checkAnswers(input)).toBe(6549);
  });
});
