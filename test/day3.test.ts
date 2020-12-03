import { calculateAllSlopes, calculateTreeCollisions } from '../src/day3';

describe('Day 3', () => {
  const sampleSlopes = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  describe('calculateTreeCollisions', () => {
    it('should calculate tree collisions correctly for right 1, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sampleSlopes, 1, 1);
      expect(collisions).toBe(2);
    });
    it('should calculate tree collisions correctly for right 3, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sampleSlopes, 3, 1);
      expect(collisions).toBe(7);
    });
    it('should calculate tree collisions correctly for right 5, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sampleSlopes, 6, 1);
      expect(collisions).toBe(3);
    });
    it('should calculate tree collisions correctly for right 7, down 1 slope', () => {
      const collisions = calculateTreeCollisions(sampleSlopes, 7, 1);
      expect(collisions).toBe(4);
    });
    it('should calculate tree collisions correctly for right 1, down 2 slope', () => {
      const collisions = calculateTreeCollisions(sampleSlopes, 1, 2);
      expect(collisions).toBe(2);
    });
  });

  describe('calculateAllSlopes', () => {
    it('should calculate product of all collision courses', () => {
      const collisions = calculateAllSlopes(sampleSlopes);
      expect(collisions).toBe(336);
    });
  });
});
