type Seat = {
  row:number
  column:number
  id:number
};

export const findSeat = (input:string):Seat => {
  let rowUpper = 127;
  let rowLower = 0;

  let colUpper = 7;
  let colLower = 0;

  const chars = input.split('');

  // eslint-disable-next-line no-restricted-syntax
  for (const char of chars) {
    const rowsLeft = rowUpper - rowLower + 1;
    const colsLeft = colUpper - colLower + 1;
    switch (char) {
      case 'F':
        rowUpper -= (rowsLeft / 2);
        break;
      case 'B':
        rowLower += (rowsLeft / 2);
        break;
      case 'L':
        colUpper -= (colsLeft / 2);
        break;
      case 'R':
        colLower += (colsLeft / 2);
        break;
      default:
        break;
    }
  }

  return {
    row: rowLower,
    column: colLower,
    id: (rowLower * 8) + colLower,
  } as Seat;
};

export const findHighest = (tickets:string[]) => {
  const seats = tickets.map((x) => findSeat(x).id).sort((n1, n2) => n1 - n2);
  return Math.max(...seats);
};

export const findMyTicket = (tickets:string[]) => {
  const seats = tickets.map((x) => findSeat(x).id).sort((n1, n2) => n1 - n2);
  return seats.find((x, idx) => x + 2 === seats[idx + 1]) + 1;
};
