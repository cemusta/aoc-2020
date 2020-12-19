const Sides = ['N', 'E', 'S', 'W'];

export class Navigation {
  facing: string;

  EW: number;

  NS: number;

  wayEW: number;

  wayNS: number;

  constructor(nav?: Navigation) {
    this.facing = nav?.facing ?? 'E';
    this.EW = nav?.EW ?? 0;
    this.NS = nav?.NS ?? 0;
    this.wayEW = nav?.wayEW ?? 10;
    this.wayNS = nav?.wayNS ?? 1;
  }
}

type NavFunction = { [key: string]: (value:number, nav:Navigation) => Navigation; };

export const NavigationMap: NavFunction = {
  N: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.NS += value;
    return retVal;
  },
  S: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.NS -= value;
    return retVal;
  },
  E: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.EW += value;
    return retVal;
  },
  W: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.EW -= value;
    return retVal;
  },
  F: (value:number, nav:Navigation):Navigation => NavigationMap[nav.facing](value, nav),
  R: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);

    const rotation = value / 90;
    const current = Sides.findIndex((x) => x === nav.facing);

    const newIndex = (current + rotation) % 4;

    const newFacing = Sides[newIndex];

    retVal.facing = newFacing;

    return retVal;
  },
  L: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);

    const rotation = value / 90;
    const current = Sides.findIndex((x) => x === nav.facing);

    let newIndex = (current - rotation) % 4;
    newIndex = newIndex < 0 ? newIndex + 4 : newIndex;

    const newFacing = Sides[newIndex];

    retVal.facing = newFacing;

    return retVal;
  },
};

const rotateRight = (a:number, b:number) => [b, a * -1];
const rotateLeft = (a:number, b:number) => [b * -1, a];

export const WaypointMap: NavFunction = {
  N: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.wayNS += value;
    return retVal;
  },
  S: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.wayNS -= value;
    return retVal;
  },
  E: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.wayEW += value;
    return retVal;
  },
  W: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.wayEW -= value;
    return retVal;
  },
  F: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.EW += (nav.wayEW * value);
    retVal.NS += (nav.wayNS * value);
    return retVal;
  },
  R: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);

    const rotation = value / 90;

    let x = nav.wayEW;
    let y = nav.wayNS;

    for (let i = 0; i < rotation; i += 1) {
      [x, y] = rotateRight(x, y);
    }

    retVal.wayEW = x;
    retVal.wayNS = y;

    return retVal;
  },
  L: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);

    const rotation = value / 90;

    let x = nav.wayEW;
    let y = nav.wayNS;

    for (let i = 0; i < rotation; i += 1) {
      [x, y] = rotateLeft(x, y);
    }

    retVal.wayEW = x;
    retVal.wayNS = y;

    return retVal;
  },
};

export const calculateFinalDistance = (inputs: string[], navFunction: NavFunction) => {
  let nav = new Navigation();
  // eslint-disable-next-line no-restricted-syntax
  for (const inputLine of inputs) {
    const code = inputLine[0];
    const num = Number(inputLine.slice(1));

    // console.log(code, num);
    nav = navFunction[code](num, nav);
    // console.log('update', nav);
  }

  // console.log(nav, Math.abs(nav.EW) + Math.abs(nav.NS));
  return Math.abs(nav.EW) + Math.abs(nav.NS);
};
