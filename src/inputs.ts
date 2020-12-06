import * as fs from 'fs';

export const getTickets = () => fs.readFileSync('./inputs/day5.txt', 'utf8').split('\r\n');
