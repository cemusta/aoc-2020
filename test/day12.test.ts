import { input, sample1 } from '../src/inputs/input12';
import { part1 } from '../src/answers/answer12';
import { calculateFinalDistance, NavigationMap } from '../src/day12';

describe('findInvalidNumber', () => {
  it('should return incorrect number', () => {
    expect(calculateFinalDistance(sample1, NavigationMap)).toBe(25);
    expect(calculateFinalDistance(input, NavigationMap)).toBe(part1);
  });
});
