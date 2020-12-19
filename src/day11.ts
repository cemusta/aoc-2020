/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */

enum SeatingPlan {
  Floor = '.',
  EmptySeat = 'L',
  OccupiedSeat = '#',
}

enum Side {
  South = 'South',
  North = 'North',
}

const VisibiltyMap = {
  [Side.North]: (index:number, row:number, singleLine:string) => {
    const y = singleLine.split('').findIndex((x, idx) => idx > index && idx % row === index % row && x !== SeatingPlan.Floor);
    console.log('n', y, singleLine[y]);
  },
  [Side.South]: (index:number, row:number, singleLine:string) => {
    const y = singleLine.split('').findIndex((x, idx) => idx > index && idx % row === index % row && x !== SeatingPlan.Floor);
    console.log('s', y, singleLine[y]);
  },
  // [Side.East]: (x:string, idx:number, index:number, row:number) => idx < index && Math.floor(idx / row) === Math.floor(index / row), // && x !== SeatingPlan.Floor,
  // [Side.EastWest]: (x:string, idx:number, index:number, row:number) => idx > index && Math.floor(idx / row) === Math.floor(index / row), // && x !== SeatingPlan.Floor,
};

export const printSeating = (rows:number, singleLine:string) => {
  const re = new RegExp(`.{1,${rows}}`, 'g');
  const lines = singleLine.match(re);
  console.log(`\n${lines.join('\n')}\n`);
};

export const checkAdjescent = (near:number, singleLine:string): number => {
  if (near < 0) { return 0; }
  if (near + 1 > singleLine.length) { return 0; }

  if (singleLine[near] === SeatingPlan.Floor) { return 0; }
  if (singleLine[near] === SeatingPlan.EmptySeat) { return 0; }
  if (singleLine[near] === SeatingPlan.OccupiedSeat) { return 1; }
  throw new Error('unhandled state');
};

export const checkAdjescentChairs = (index:number, row:number, singleLine: string): number => {
  let chairs = 0;

  // v
  chairs += checkAdjescent(index + row, singleLine);

  if (index % row !== row - 1) {
    // v >
    chairs += checkAdjescent(index + 1 + row, singleLine);
    // >
    chairs += checkAdjescent(index + 1, singleLine);
    // ^ >
    chairs += checkAdjescent(index + 1 - row, singleLine);
  }

  // ^
  chairs += checkAdjescent(index - row, singleLine);

  if (index % row !== 0) {
    // < ^
    chairs += checkAdjescent(index - 1 - row, singleLine);
    // <
    chairs += checkAdjescent(index - 1, singleLine);
    // < v
    chairs += checkAdjescent(index - 1 + row, singleLine);
  }

  // console.log(`> ${index} chars: ${chairs}`);

  return chairs;
};

// export const checkVisibleChairs = (index:number, row:number, singleLine: string): number => {
//   let chairs = 0;

//   chairs += checkVisible(index, row, Side.North, singleLine);
//   chairs += checkVisible(index, row, Side.North, singleLine);
//   // chairs += checkVisible(index, Side.SouthEast, singleLine);
//   // chairs += checkVisible(index, Side.East, singleLine);
//   // chairs += checkVisible(index, Side.NorthEast, singleLine);
//   // chairs += checkVisible(index, Side.North, singleLine);
//   // chairs += checkVisible(index, Side.NorthWest, singleLine);
//   // chairs += checkVisible(index, Side.West, singleLine);
//   // chairs += checkVisible(index, Side.SouthWest, singleLine);

//   return chairs;
// };

export const iterateRules = (row:number, singleLine:string, chairLimit:number, rulesChecker:Function) => {
  const sitting = [];
  const leaving = [];

  for (let index = 0; index < singleLine.length; index += 1) {
    const chairs = rulesChecker(index, row, singleLine);
    if (singleLine[index] === SeatingPlan.Floor) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (singleLine[index] === SeatingPlan.EmptySeat && chairs === 0) {
      sitting.push(index);
    } else
    if (singleLine[index] === SeatingPlan.OccupiedSeat && chairs >= chairLimit) {
      leaving.push(index);
    }
  }

  const seats = singleLine.split('');

  sitting.forEach((x) => seats[x] = SeatingPlan.OccupiedSeat);
  leaving.forEach((x) => seats[x] = SeatingPlan.EmptySeat);

  return {
    changed: sitting.length + leaving.length > 0,
    value: seats.join(''),
  };
};

export const simulateSeating = (input:string, chairLimit:number, seatingFunction:Function) => {
  // console.log(input);
  const row = input.split('\n')[0].length;

  let singleLine = input.split('\n').join('');
  let changed = true;

  do {
    const iteration = iterateRules(row, singleLine, chairLimit, seatingFunction);
    singleLine = iteration.value;
    changed = iteration.changed;
    // printSeating(row, singleLine);
  } while (changed);

  return singleLine.split('').filter((x) => x === SeatingPlan.OccupiedSeat).length;
};

const test = `12345
67t90
ABCDE
ZXvWV
%!@#$`;

const nRow = test.split('\n')[0].length;

const sline = test.split('\n').join('');
// const revline = test.split('\n').reverse().join('');

console.log(test, '\n');

VisibiltyMap[Side.North](12, nRow, sline);
VisibiltyMap[Side.South](12, nRow, sline);

// checkVisible(12, n, Side.North, sline);
// checkVisible(12, n, Side.NorthSouth, sline);
// checkVisible(12, n, Side.EastWest, revline);
// checkVisible(12, n, Side.EastWest, sline);
// checkVisible(12, n, Side.East, revline);
// checkVisible(12, n, Side.East, sline);

// const xx = sline.split('').lastIndexOf()
