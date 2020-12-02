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

export const Day1 = () => {
  const numbers = fs.readFileSync('./inputs/day1.txt', 'utf8').split('\r\n').map((x) => Number(x));

  const pair = FindPair(numbers, 2020);
  console.log(`pair: ${pair} => ${pair.reduce((acc, cur) => acc * cur, 1)}`);

  const trio = FindTrio(numbers, 2020);
  console.log(`trio: ${trio} => ${trio.reduce((acc, cur) => acc * cur, 1)}`);
};

Day1();
