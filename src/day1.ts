import * as fs from 'fs';

export const FindPair = (numbers: number[], target: number):number[] => {
  let pair:number[];
  while (numbers.length > 0) {
    const popped = numbers.pop();

    const found = numbers.find((x) => x + popped === target);

    if (found) {
      pair = [popped, found];
      break;
    }
  }
  return pair;
};

export const FindTrio = (numbers: number[], target: number):number[] => {
  let trio;
  while (numbers.length > 0) {
    const current = numbers.pop();

    const pair = FindPair([...numbers], target - current);

    if (pair) {
      trio = [current, ...pair];
      break;
    }
  }
  return trio;
};

export const ExpenseReport = (find:Function) => {
  const numbers = fs.readFileSync('./inputs/day1.txt', 'utf8').split('\r\n').map((x) => Number(x));

  const foundNumbers:number[] = find(numbers, 2020);

  return foundNumbers.reduce((acc, cur) => acc * cur, 1);
};

// console.log(`Day 1, part 1: ${ExpenseReport(FindPair)}`);
// console.log(`Day 1, part 1: ${ExpenseReport(FindTrio)}`);
