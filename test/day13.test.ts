import {
  input, other1, other2, other3, other4, other5, sample1,
} from '../src/inputs/input13';
import { part1 } from '../src/answers/answer13';
import { findEarliestBus, findSolution, getSortedBusArray } from '../src/day13';

describe('findEarliestBus', () => {
  it('should find earliest bus', () => {
    expect(findEarliestBus(sample1)).toBe(295);
    expect(findEarliestBus(input)).toBe(part1);
  });
});

describe('findSolution', () => {
  it('should find prize winning solution for sample1', () => {
    const busArray = getSortedBusArray(sample1);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(1068781);
  });

  it('should find prize winning solution for other1', () => {
    const busArray = getSortedBusArray(other1);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(3417);
  });

  it('should find prize winning solution for other2', () => {
    const busArray = getSortedBusArray(other2);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(754018);
  });

  it('should find prize winning solution for other3', () => {
    const busArray = getSortedBusArray(other3);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(779210);
  });

  it('should find prize winning solution for other4', () => {
    const busArray = getSortedBusArray(other4);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(1261476);
  });

  it('should find prize winning solution for other5', () => {
    const busArray = getSortedBusArray(other5);
    const solution = findSolution(0, busArray);
    expect(solution).toBe(1202161486);
  });
});
