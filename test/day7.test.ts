import { getBagRules } from '../src/inputs';
import { findInnerBagCount, findSuitableBags, parseRules } from '../src/day7';

const sample1 = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const sample2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

const question = getBagRules();

const sampleRules1 = parseRules(sample1);
const sampleRules2 = parseRules(sample2);
const questionRules = parseRules(question);

describe('findSuitableBags', () => {
  it('should calculate unique suitcases that can hold target bag', () => {
    expect(findSuitableBags('shiny gold', sampleRules1).length).toBe(4);
    expect(findSuitableBags('shiny gold', sampleRules2).length).toBe(0);
    expect(findSuitableBags('shiny gold', questionRules).length).toBe(164);
  });
});

describe('findInnerBagCount', () => {
  it('should calculate unique suitcases that can hold target bag', () => {
    expect(findInnerBagCount('shiny gold', sampleRules1)).toBe(32);
    expect(findInnerBagCount('shiny gold', sampleRules2)).toBe(126);
    expect(findInnerBagCount('shiny gold', questionRules)).toBe(7872);
  });
});
