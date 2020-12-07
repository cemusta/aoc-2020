import {
  ParsePasswordLine, ValidateAllPasswords, ValidatePasswordMinMax, ValidatePasswordPositional,
} from '../src/day2';
import { input } from '../src/inputs/input2';
import { part1, part2 } from '../src/answers/answer2';

describe('Day 2', () => {
  describe('ParsePasswordLine', () => {
    it('should parse a line into passwordPolicy', () => {
      const passwordPolicy = ParsePasswordLine('6-10 s: snkscgszxsssscss');
      expect(passwordPolicy).toStrictEqual({
        char: 's', max: 10, min: 6, password: 'snkscgszxsssscss',
      });
    });
  });

  describe('ValidatePasswordMinMax', () => {
    it('should return true for char count within min max', () => {
      const passwordPolicy = ParsePasswordLine('1-3 a: abcde');
      expect(ValidatePasswordMinMax(passwordPolicy)).toBe(true);
    });

    it('should return false for char counts outside min max', () => {
      const passwordPolicy = ParsePasswordLine('1-3 b: cdefg');
      expect(ValidatePasswordMinMax(passwordPolicy)).toBe(false);
    });
    it('should return true for char count within min max', () => {
      const passwordPolicy = ParsePasswordLine('2-9 c: ccccccccc');
      expect(ValidatePasswordMinMax(passwordPolicy)).toBe(true);
    });
  });

  describe('ValidatePasswordPositional', () => {
    it('should return true for valid password', () => {
      const passwordPolicy = ParsePasswordLine('1-3 a: abcde');
      expect(ValidatePasswordPositional(passwordPolicy)).toBe(true);
    });

    it('should return false for invalid password (none matching)', () => {
      const passwordPolicy = ParsePasswordLine('1-3 b: cdefg');
      expect(ValidatePasswordPositional(passwordPolicy)).toBe(false);
    });
    it('should return false for invalid password (both matching)', () => {
      const passwordPolicy = ParsePasswordLine('2-9 c: ccccccccc');
      expect(ValidatePasswordPositional(passwordPolicy)).toBe(false);
    });
  });

  describe('ValidateAllPasswords', () => {
    it('should found correct value for day2 input with min max policy (part 1)', () => {
      const count = ValidateAllPasswords(input, ValidatePasswordMinMax);
      expect(count).toBe(part1);
    });

    it('should found correct value for day2 input with positional policy (part 2)', () => {
      const count = ValidateAllPasswords(input, ValidatePasswordPositional);
      expect(count).toBe(part2);
    });
  });
});
