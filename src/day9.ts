import { FindPair } from './day1';

export const parseNumbers = (input:string):number[] => input.split('\n').map((x) => Number(x));

export const findInvalidNumber = (numbers:number[], preambleSize:number):number => {
  // console.log(numbers, preambleSize);
  let index = 0;

  while (index + preambleSize < numbers.length) {
    const pair = FindPair(numbers.slice(index, index + preambleSize), numbers[index + preambleSize]);
    if (!pair) { return numbers[index + preambleSize]; }
    index += 1;
  }

  return -1;
};

const checkContinious = (numbers:number[], target:number):number => {
  const nums = [];
  let total = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
    nums.push(numbers[index]);
    if (total === target) {
      return Math.min(...nums) + Math.max(...nums);
    }
  }

  return -1;
};

export const findEncryptionWeakness = (numbers:number[], invalidNumber:number) => {
  const until = numbers.findIndex((x) => x === invalidNumber);

  let index = 0;
  while (index < numbers.length) {
    index += 1;
    const array = numbers.slice(index, until);
    const result = checkContinious(array, invalidNumber);
    // console.log(result);
    if (result !== -1) {
      return result;
    }
  }
  return -1;
};
