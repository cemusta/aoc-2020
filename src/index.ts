import { fixSequence, parseInput } from './day8';
import { input } from './inputs/input8';

// const args = parseInput(sample1);
// const acc = bootSequence(args);
// console.log(acc);

const args = parseInput(input);
const acc = fixSequence(args);
console.log(acc);
