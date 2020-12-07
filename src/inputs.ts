import * as fs from 'fs';

export const getTickets = () => fs.readFileSync('./inputs/day5.txt', 'utf8').split('\r\n');

export const getDay6Input = () => fs.readFileSync('./inputs/day6.txt', 'utf8').split('\r\n').join('\n');
