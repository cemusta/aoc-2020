import { findSolution, getSortedBusArray } from './day13';
import { input } from './inputs/input13';

const busArray = getSortedBusArray(input);
console.log('array: ', busArray);
const sol = findSolution(11999000000, busArray);
console.log('sol: ', sol);
