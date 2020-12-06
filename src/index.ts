import { findHighest, findMyTicket } from './day5';
import { getTickets } from './inputs';

const tickets = getTickets();
console.log(`Day 5, part 1: ${findHighest(tickets)}`);
console.log(`Day 5, part 2: ${findMyTicket(tickets)}`);
