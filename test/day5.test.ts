import { findHighest, findMyTicket, findSeat } from '../src/day5';
import { getTickets } from '../src/inputs';

describe('findSeat', () => {
  it('should return correct seat for binary inputs sample', () => {
    expect(findSeat('FBFBBFFRLR')).toStrictEqual({ column: 5, id: 357, row: 44 });
    expect(findSeat('BFFFBBFRRR')).toStrictEqual({ column: 7, id: 567, row: 70 });
    expect(findSeat('FFFBBBFRRR')).toStrictEqual({ column: 7, id: 119, row: 14 });
    expect(findSeat('BBFFBBFRLL')).toStrictEqual({ column: 4, id: 820, row: 102 });
  });
});

describe('day 5 solution', () => {
  const tickets = getTickets();
  describe('findHighest', () => {
    it('should return highest seatid', () => {
      expect(findHighest(tickets)).toBe(838);
    });
  });

  describe('findHighest', () => {
    it('should return highest seatid', () => {
      expect(findMyTicket(tickets)).toBe(714);
    });
  });
});
