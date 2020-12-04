type Passport = {
  [key: string]: string;
};

export const parsePassports = (inputs:string):Passport[] => {
  const rawPassports = inputs.split('\n\n').map((x) => x.split('\n').join(' '));

  const passports = rawPassports.map((raw) => {
    const fields = raw.split(' ');

    return fields.reduce((passport, field) => {
      const [key, value] = field.split(':');
      return {
        ...passport,
        [key]: value,
      };
    }, {} as Passport);
  });

  return passports;
};

// validators
export const yearValidator = (year:string, min:number, max:number): boolean => {
  if (year.length !== 4) { return false; }
  if (Number(year) < min || Number(year) > max) { return false; }
  return true;
};

export const heightValidator = (height:string): boolean => {
  if (height.endsWith('cm')) {
    const val = Number(height.replace('cm', ''));
    if (val < 150 || val > 193) { return false; }
  } else if (height.endsWith('in')) {
    const val = Number(height.replace('in', ''));
    if (val < 59 || val > 76) { return false; }
  } else {
    return false;
  }
  return true;
};

export const hairColorValidator = (hairColor:string): boolean => {
  if (!hairColor.startsWith('#')) { return false; }
  if (hairColor.length !== 7) { return false; }
  const valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const hair = hairColor.replace('#', '').split('');
  return hair.every((x) => valid.includes(x));
};

export const eyeColorValidator = (eyeColor:string): boolean => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColor);

export const passportIdValidator = (passportId:string): boolean => {
  if (passportId.length !== 9) { return false; }
  const valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return passportId.split('').every((x) => valid.includes(x));
};
// end of validators

const checkPassportFields = (passport: Passport): boolean => {
  const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
    // 'cid', // ignored
  ];
  const missing = requiredFields.filter((f) => (!Object.keys(passport).some((x) => f === x)));
  return missing.length === 0;
};

const validatePassportData = (passport: Passport):boolean => {
  if (!yearValidator(passport.byr, 1920, 2002)) { return false; }
  if (!yearValidator(passport.iyr, 2010, 2020)) { return false; }
  if (!yearValidator(passport.eyr, 2020, 2030)) { return false; }

  if (!heightValidator(passport.hgt)) { return false; }
  if (!hairColorValidator(passport.hcl)) { return false; }
  if (!eyeColorValidator(passport.ecl)) { return false; }

  if (!passportIdValidator(passport.pid)) { return false; }

  return true;
};

export const validatePassport = (passport: Passport):boolean => checkPassportFields(passport) && validatePassportData(passport);

export const countPasswordsWithValidFields = (passports:Passport[]):number => {
  const valids = passports.reduce((acc, pass) => (checkPassportFields(pass)
    ? acc + 1 : acc), 0);

  return valids;
};

export const countValidPasswords = (passports:Passport[]):number => passports.reduce((acc, pass) => (validatePassport(pass) ? acc + 1 : acc), 0);
