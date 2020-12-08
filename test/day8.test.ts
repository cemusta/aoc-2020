import { input, sample1 } from '../src/inputs/input8';
import { bootSequence, fixSequence, parseInput } from '../src/day8';
import { part1, part2 } from '../src/answers/answer8';

describe('bootSequence', () => {
  const sampleInput = parseInput(sample1);
  const realInput = parseInput(input);

  it('should return correct accumulator value', () => {
    expect(bootSequence(sampleInput)).toStrictEqual({ acc: 5, inf: true });
    expect(bootSequence(realInput)).toStrictEqual({ acc: part1, inf: true });
  });
});

describe('fixSequence', () => {
  const sampleInput = parseInput(sample1);
  const realInput = parseInput(input);

  it('should fix boot and find accumulator', () => {
    expect(fixSequence(sampleInput)).toBe(8);
    expect(fixSequence(realInput)).toBe(part2);
  });
});
