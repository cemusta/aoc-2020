import { part1, part2 } from '../src/answers/answer6';
import { checkAnswers, checkMatchingAnswers } from '../src/day6';
import { sample1, input } from '../src/inputs/input6';

describe('checkAnswers', () => {
  it('should return count of unique yes answers from group for sample1', () => {
    expect(checkAnswers(sample1)).toBe(11);
  });

  it('should return count of unique yes answers from group for real input', () => {
    expect(checkAnswers(input)).toBe(part1);
  });
});

describe('checkMatchingAnswers', () => {
  it('should return count of same yes answers from group for sample1', () => {
    expect(checkMatchingAnswers(sample1)).toBe(6);
  });

  it('should return count of same yes answers from group for real input', () => {
    expect(checkMatchingAnswers(input)).toBe(part2);
  });
});
