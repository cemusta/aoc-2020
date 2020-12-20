/* eslint-disable no-restricted-syntax */

import {
  input, other1, other2, other3, other4, other5, sample1,
} from './inputs/input13';

export {
  input, other1, other2, other3, other4, other5, sample1,
};

type Bus = {
  id:string,
  val: number,
  order: number,
  wait: number
};

export const findEarliestBus = (lines:string[]) => {
  const timestamp = Number(lines[0]);
  const busArray = lines[1].split(',').map((val, idx) => ({
    id: val,
    val: val === 'x' ? -1 : Number(val),
    order: idx,
    wait: val === 'x' ? -1 : Number(val) - (timestamp % Number(val)),
  } as Bus)).filter((x) => x.id !== 'x');

  const earliestBus = busArray.reduce((min, cur) => (cur.wait < min.wait ? cur : min), busArray[0]);
  return earliestBus.val * earliestBus.wait;
};

// const firstbus = findBus(sample1);
// console.log('firstbus:', firstbus);
// findBus(input);

export const getSortedBusArray = (lines:string[]) => {
  const busArray = lines[1].split(',').map((val, idx) => ({
    id: val,
    val: val === 'x' ? -1 : Number(val),
    order: idx,
  } as Bus)).filter((x) => x.id !== 'x');

  busArray.sort((a, b) => b.val - a.val);
  return busArray;
};

export const findSolution = (start:number, buses: Bus[]) => {
  const first = buses.find((x) => x.order === 0);
  const biggest = buses.shift();
  const index = buses.findIndex((x) => x.order === 0);
  if (index >= 0) { buses.splice(index, 1); }

  console.log('whats left', buses);

  let i = 1;
  if (start > 0) {
    i = start;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const timestamp = (i * biggest.val) - biggest.order;

    // console.log(`${i}) ts: ${timestamp}`);

    if (i % 1000000 === 0) {
      console.log(`${i}) ts: ${timestamp}`);
    }

    const check = buses.every((x) => (x.val - (timestamp % x.val)) === x.order);

    if (timestamp % first.val !== first.order) {
      i += 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (check) {
      return timestamp;
    }
    i += 1;
  }
};
