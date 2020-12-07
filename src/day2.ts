type PasswordPolicy = {
  min: number
  max: number
  char: string
  password: string
};

export const ParsePasswordLine = (line:string):PasswordPolicy => {
  const [limits, password] = line.split(': ');
  const [counts, char] = limits.split(' ');
  const [min, max] = counts.split('-').map((x) => Number(x));

  return {
    min,
    max,
    char,
    password,
  };
};

export const validatePasswordMinMax = (policy:PasswordPolicy):boolean => {
  const occurance = policy.password.split('').reduce((acc, cur) => (cur === policy.char ? acc + 1 : acc), 0);

  return occurance <= policy.max && occurance >= policy.min;
};

export const validatePasswordPositional = (policy:PasswordPolicy):boolean => {
  const chars = `_${policy.password}`.split('');

  return (chars[policy.max] === policy.char) !== (chars[policy.min] === policy.char);
};

export const ValidateAllPasswords = (input:string, validate:Function):number => {
  const passwordPolicies = input.split('\n').map((x) => ParsePasswordLine(x));

  const validCount = passwordPolicies.reduce(
    (acc, cur) => (validate(cur) ? acc + 1 : acc), 0,
  );

  return validCount;
};
