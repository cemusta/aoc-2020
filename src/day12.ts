import { sample1 } from './inputs/input12';

class Navigation {
  facing: string;

  ns: number;

  ew: number;

  constructor(nav?: Navigation) {
    this.facing = nav?.facing || 'E';
    this.ns = nav?.ns || 0;
    this.ew = nav?.ew || 0;
  }
}

export const NavigationMap = {
  N: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.ns += value;
    return retVal;
  },
  S: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.ns -= value;
    return retVal;
  },
  E: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.ew += value;
    return retVal;
  },
  W: (value:number, nav:Navigation) => {
    const retVal = new Navigation(nav);
    retVal.ew -= value;
    return retVal;
  },
  // F: (value:number, nav:Navigation):Navigation => NavigationMap[F](value, nav),
};

export const test = (inputs: string[]) => {
  const nav = new Navigation();
  // eslint-disable-next-line no-restricted-syntax
  for (const inputLine of inputs) {
    const code = inputLine[0];
    const num = Number(inputLine.slice(1));
    nav = NavigationMap[code](num, nav);
    console.log(code, num);
  }

  console.log(nav);
};

test(sample1);
