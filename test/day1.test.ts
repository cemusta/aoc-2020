import { FindPair, FindTrio } from '../src/day1';

describe('Day1', () => {
  describe('FindPair', () => {
    it('needs a working test', () => {
      const sample = [1, 2, 3, 4, 5];

      const pair = FindPair(sample, 7);

      expect(pair).toStrictEqual([5, 2]);
    });
  });

  describe('FindPair', () => {
    it('needs a working test', () => {
      const sample = [1, 2, 3, 4, 5];

      const trio = FindTrio(sample, 8);

      expect(trio).toStrictEqual([5, 2, 1]);
    });
  });
});
