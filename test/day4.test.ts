import {
  countPasswordsWithValidFields,
  countValidPasswords,
  eyeColorValidator, hairColorValidator, heightValidator,
  parsePassports, passportIdValidator, validatePassport, yearValidator,
} from '../src/day4';
import { sampleInput, validSamples, invalidSamples } from '../src/inputs/input4';

describe('Day 4', () => {
  describe('parsePassports', () => {
    it('should calculate tree collisions correctly for right 1, down 1 slope', () => {
      const passports = parsePassports(sampleInput);
      expect(passports.length).toBe(4);
    });
  });

  describe('passport validation', () => {
    describe('yearValidator', () => {
      it('should validate year correctly', () => {
        expect(yearValidator('2002', 1920, 2002)).toBe(true);
        expect(yearValidator('2003', 1920, 2002)).toBe(false);
        expect(yearValidator('1911', 1920, 2002)).toBe(false);
      });
    });
    describe('heightValidator', () => {
      it('should validate height correctly', () => {
        expect(heightValidator('60in')).toBe(true);
        expect(heightValidator('190cm')).toBe(true);
        expect(heightValidator('190in')).toBe(false);
        expect(heightValidator('190')).toBe(false);
      });
    });
    describe('hairColorValidator', () => {
      it('should validate hair color correctly', () => {
        expect(hairColorValidator('#123abc')).toBe(true);
        expect(hairColorValidator('#123abz')).toBe(false);
        expect(hairColorValidator('123abc')).toBe(false);
      });
    });
    describe('eyeColorValidator', () => {
      it('should validate eye color correctly', () => {
        expect(eyeColorValidator('brn')).toBe(true);
        expect(eyeColorValidator('wat')).toBe(false);
      });
    });
    describe('passportIdValidator', () => {
      it('should validate passport id correctly', () => {
        expect(passportIdValidator('000000001')).toBe(true);
        expect(passportIdValidator('0123456789')).toBe(false);
      });
    });
  });

  describe('validatePassport', () => {
    it('should validate passports correctly', () => {
      const validPassports = parsePassports(validSamples);
      const invalidPassports = parsePassports(invalidSamples);
      expect(validatePassport(validPassports[0])).toBe(true);
      expect(validatePassport(validPassports[1])).toBe(true);
      expect(validatePassport(validPassports[2])).toBe(true);
      expect(validatePassport(validPassports[3])).toBe(true);
      expect(validatePassport(invalidPassports[0])).toBe(false);
      expect(validatePassport(invalidPassports[1])).toBe(false);
      expect(validatePassport(invalidPassports[2])).toBe(false);
      expect(validatePassport(invalidPassports[3])).toBe(false);
    });
  });

  describe('countPasswordsWithValidFields', () => {
    it('should return correct value for original sample', () => {
      const passports = parsePassports(sampleInput);
      expect(countPasswordsWithValidFields(passports)).toBe(2);
    });

    it('should return correct value for valid sample', () => {
      const validPassports = parsePassports(validSamples);
      expect(countPasswordsWithValidFields(validPassports)).toBe(4);
    });
  });

  describe('countValidPasswords', () => {
    it('should return correct value for valid sample', () => {
      const validPassports = parsePassports(validSamples);
      expect(countValidPasswords(validPassports)).toBe(4);
    });

    it('should return correct value for invalid sample', () => {
      const invalidPassports = parsePassports(invalidSamples);
      expect(countValidPasswords(invalidPassports)).toBe(0);
    });
  });
});
