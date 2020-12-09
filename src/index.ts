import { findEncryptionWeakness, findInvalidNumber, parseNumbers } from './day9';
import { input, sample1 } from './inputs/input9';

console.log('part1, sample1, pre:5', findInvalidNumber(parseNumbers(sample1), 5));
console.log('part1, input, pre:25', findInvalidNumber(parseNumbers(input), 25));

console.log('part2, sample1, 5', findEncryptionWeakness(parseNumbers(sample1), findInvalidNumber(parseNumbers(sample1), 5)));
console.log('part2, input, 25', findEncryptionWeakness(parseNumbers(input), findInvalidNumber(parseNumbers(input), 25)));
