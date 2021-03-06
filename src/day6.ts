export const checkAnswers = (input:string) => {
  const groups = input.split('\n\n').map((x) => [...x.split('\n')]);
  //   console.log(groups);

  const answers = groups.map((group) => {
    const set = new Set(group.reduce((acc, cur) => acc + cur).split(''));
    return set.size;
  });

  return answers.reduce((acc, cur) => acc + cur);
};

export const checkMatchingAnswers = (input:string) => {
  const groups = input.split('\n\n').map((x) => [...x.split('\n')]);

  const answers = groups.map((group) => {
    const uniquechars = [...new Set(group.reduce((acc, cur) => acc + cur).split(''))];

    return uniquechars.filter((char) => group.every((x) => x.split('').includes(char))).length;
  });

  return answers.reduce((acc, cur) => acc + cur);
};
