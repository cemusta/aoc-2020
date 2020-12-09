import { input, sample1 } from '../src/inputs/input9';
import { part1, part2 } from '../src/answers/answer9';
import { findEncryptionWeakness, findInvalidNumber, parseNumbers } from '../src/day9';

const sampleInput = parseNumbers(sample1);
const realInput = parseNumbers(input);

describe('findInvalidNumber', () => {
  it('should return incorrect number', () => {
    expect(findInvalidNumber(sampleInput, 5)).toBe(127);
    expect(findInvalidNumber(realInput, 25)).toBe(part1);
  });
});

describe('findEncryptionWeakness', () => {
  it('should find weakness value', () => {
    expect(findEncryptionWeakness(sampleInput, 127)).toBe(62);
    expect(findEncryptionWeakness(realInput, part1)).toBe(part2);
  });
});
