// import * as fs from 'fs';

// const slopeArray = fs.readFileSync('./inputs/day3.txt', 'utf8').split('\r\n');
// console.log(`Day 3, part 2: ${calculateAllSlopes(slopeArray)}`);

export const calculateTreeCollisions = (slopes:string[], right:number, down:number):number => {
  const slopeLength = slopes[0].length;

  let pos = 0;
  let collusion = 0;

  for (let index = 0; index < slopes.length; index += down) {
    const slope = slopes[index];

    const grid = slope.split('');
    if (grid[pos] === '#') {
      collusion += 1;
    }
    pos = (pos + right) % slopeLength;
  }

  return collusion;
};

export const calculateAllSlopes = (slopes:string[]):number => {
  const calculations = [
    calculateTreeCollisions(slopes, 1, 1),
    calculateTreeCollisions(slopes, 3, 1),
    calculateTreeCollisions(slopes, 5, 1),
    calculateTreeCollisions(slopes, 7, 1),
    calculateTreeCollisions(slopes, 1, 2),
  ];

  const sum = calculations.reduce((acc, cur) => acc * cur, 1);

  return sum;
};
