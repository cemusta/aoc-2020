import * as fs from 'fs';

export const getTickets = () => fs.readFileSync('./inputs/day5.txt', 'utf8').split('\r\n');

export const getBagRules = () => fs.readFileSync('./inputs/day7.txt', 'utf8');
