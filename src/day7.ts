/* eslint-disable no-restricted-syntax */
type Rule = {
  bagName: string,
  contains?: Contains
};

type Contains = {
  [key: string]: number
};

export const parseRules = (input:string):Rule[] => input.split('\n').map((line) => {
  const [bag, rules] = line.split(' contain ');
  const rule = { bagName: bag.replace(' bags', '') } as Rule;
  if (rules.startsWith('no other')) {
    return rule;
  }
  const contains = rules.replace('.', '').split(', ').reduce((acc, cur) => {
    const [number, name] = cur.replace(' ', '#').split('#');
    acc[name.replace(' bags', '').replace(' bag', '')] = Number(number);
    return acc;
  }, { } as Contains);
  rule.contains = contains;
  return rule;
});

export const findSuitableBags = (bag:string, rules: Rule[]): string[] => {
  const suitables = rules.filter((x) => {
    if (!x.contains) { return false; }
    if (Object.keys(x.contains).includes(bag)) {
      return true;
    }
    return false;
  }).map((x) => x.bagName);

  const others:string[] = [];
  suitables.forEach((x) => others.push(...findSuitableBags(x, rules)));
  suitables.push(...others);

  return suitables.filter((elem, index, self) => index === self.indexOf(elem));
};

export const findInnerBagCount = (bag:string, rules: Rule[]): number => {
  let count = 0;

  const rule = rules.find((x) => x.bagName === bag);

  if (rule.contains) {
    count += Object.values(rule.contains).reduce((acc, cur) => acc + cur, 0);

    // eslint-disable-next-line guard-for-in
    for (const key in rule.contains) {
      count += rule.contains[key] * findInnerBagCount(key, rules);
    }
  }

  return count;
};
