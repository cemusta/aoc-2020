import {
  ParsePasswordLine, ValidateAllPasswords, validatePasswordMinMax, validatePasswordPositional,
} from '../src/day2';
import { input } from '../src/inputs/input2';

describe('Day 2', () => {
  describe('ParsePasswordLine', () => {
    it('should parse a line into passwordPolicy', () => {
      const passwordPolicy = ParsePasswordLine('6-10 s: snkscgszxsssscss');
      expect(passwordPolicy).toStrictEqual({
        char: 's', max: 10, min: 6, password: 'snkscgszxsssscss',
      });
    });
  });

  describe('validatePasswordMinMax', () => {
    it('should return true for char count within min max', () => {
      const passwordPolicy = ParsePasswordLine('1-3 a: abcde');
      expect(validatePasswordMinMax(passwordPolicy)).toBe(true);
    });

    it('should return false for char counts outside min max', () => {
      const passwordPolicy = ParsePasswordLine('1-3 b: cdefg');
      expect(validatePasswordMinMax(passwordPolicy)).toBe(false);
    });
    it('should return true for char count within min max', () => {
      const passwordPolicy = ParsePasswordLine('2-9 c: ccccccccc');
      expect(validatePasswordMinMax(passwordPolicy)).toBe(true);
    });
  });

  describe('validatePasswordPositional', () => {
    it('should return true for valid password', () => {
      const passwordPolicy = ParsePasswordLine('1-3 a: abcde');
      expect(validatePasswordPositional(passwordPolicy)).toBe(true);
    });

    it('should return false for invalid password (none matching)', () => {
      const passwordPolicy = ParsePasswordLine('1-3 b: cdefg');
      expect(validatePasswordPositional(passwordPolicy)).toBe(false);
    });
    it('should return false for invalid password (both matching)', () => {
      const passwordPolicy = ParsePasswordLine('2-9 c: ccccccccc');
      expect(validatePasswordPositional(passwordPolicy)).toBe(false);
    });
  });

  describe('ValidateAllPasswords', () => {
    it('should found correct value for day2 input with min max policy (part 1)', () => {
      const count = ValidateAllPasswords(input, validatePasswordMinMax);
      expect(count).toBe(414);
    });

    it('should found correct value for day2 input with positional policy (part 2)', () => {
      const count = ValidateAllPasswords(input, validatePasswordPositional);
      expect(count).toBe(413);
    });
  });
});
