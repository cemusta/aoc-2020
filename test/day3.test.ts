import { calculateAllSlopes, calculateTreeCollisions } from '../src/day3';
import { input, sample } from '../src/inputs/input3';

describe('Day 3', () => {
  describe('calculateTreeCollisions', () => {
    it('should calculate tree collisions correctly for right 1, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sample, 1, 1);
      expect(collisions).toBe(2);
    });
    it('should calculate tree collisions correctly for right 3, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sample, 3, 1);
      expect(collisions).toBe(7);
    });
    it('should calculate tree collisions correctly for right 5, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sample, 6, 1);
      expect(collisions).toBe(3);
    });
    it('should calculate tree collisions correctly for right 7, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sample, 7, 1);
      expect(collisions).toBe(4);
    });
    it('should calculate tree collisions correctly for right 1, down 2 slope', () => {
      const collisions = calculateTreeCollisions(sample, 1, 2);
      expect(collisions).toBe(2);
    });
  });

  describe('calculateAllSlopes', () => {
    it('should calculate product of all collision courses for sample input', () => {
      const collisions = calculateAllSlopes(sample);
      expect(collisions).toBe(336);
    });

    it('should calculate product of all collision courses for real input', () => {
      const collisions = calculateAllSlopes(input);
      expect(collisions).toBe(5007658656);
    });
  });
});
