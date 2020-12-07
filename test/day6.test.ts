import { checkAnswers } from '../src/day6';
import { getDay6Input } from '../src/inputs';

const sampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const questionInput = getDay6Input();

describe('findSeat', () => {
  it('should return correct seat for binary inputs sample', () => {
    expect(checkAnswers(sampleInput)).toBe(11);
    expect(checkAnswers(questionInput)).toBe(6549);
  });
});
