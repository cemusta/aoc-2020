import { input, sample1, sample2 } from '../src/inputs/input7';
import { findInnerBagCount, findSuitableBags, parseRules } from '../src/day7';
import { part1, part2 } from '../src/answers/answer7';

const sampleRules1 = parseRules(sample1);
const sampleRules2 = parseRules(sample2);
const questionRules = parseRules(input);

describe('findSuitableBags', () => {
  it('should calculate unique suitcases that can hold target bag', () => {
    expect(findSuitableBags('shiny gold', sampleRules1).length).toBe(4);
    expect(findSuitableBags('shiny gold', sampleRules2).length).toBe(0);
    expect(findSuitableBags('shiny gold', questionRules).length).toBe(part1);
  });
});

describe('findInnerBagCount', () => {
  it('should calculate unique suitcases that can hold target bag', () => {
    expect(findInnerBagCount('shiny gold', sampleRules1)).toBe(32);
    expect(findInnerBagCount('shiny gold', sampleRules2)).toBe(126);
    expect(findInnerBagCount('shiny gold', questionRules)).toBe(part2);
  });
});
