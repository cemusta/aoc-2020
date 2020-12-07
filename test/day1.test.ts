import { ExpenseReport, FindPair, FindTrio } from '../src/day1';
import { input } from '../src/inputs/input1';

describe('Day 1', () => {
  describe('FindPair', () => {
    it('should find pair adding to target sum', () => {
      const sample = [1, 2, 3, 4, 5];

      const pair = FindPair(sample, 7);

      expect(pair).toStrictEqual([5, 2]);
    });
  });

  describe('FindTrio', () => {
    it('should find trio adding to target sum', () => {
      const sample = [1, 2, 3, 4, 5];

      const trio = FindTrio(sample, 8);

      expect(trio).toStrictEqual([5, 2, 1]);
    });
  });

  describe('ExpenseReport', () => {
    it('should found correct value for day1 input for pairs (part 1)', () => {
      const count = ExpenseReport(input, FindPair);
      expect(count).toBe(913824);
    });

    it('should found correct value for day1 input for trios (part 2)', () => {
      const count = ExpenseReport(input, FindTrio);
      expect(count).toBe(240889536);
    });
  });
});
