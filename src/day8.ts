type Argument = {
  command: Command
  value: number
  passed: boolean
};

enum Command {
  NOP = 'nop',
  JMP = 'jmp',
  ACC = 'acc',
}

export const parseInput = (input:string) => input.split('\n').map((x) => {
  const [command, value] = x.split(' ');
  return {
    command,
    value: Number(value),
    passed: false,
  } as Argument;
});

export const bootSequence = (args:Argument[]) => {
  let index = 0;
  let acc = 0;
  do {
    const arg = args[index];
    if (arg.passed) {
      // console.warn('inf loop');
      return { inf: true, acc };
    }
    arg.passed = true;

    switch (arg.command) {
      case 'nop':
        index += 1;
        break;
      case 'acc':
        acc += arg.value;
        index += 1;
        break;
      case 'jmp':
        index += arg.value;
        break;
      default:
        throw new Error('unexpected command');
    }
  } while (index < args.length);

  return { inf: false, acc };
};

export const fixSequence = (args:Argument[]):number => {
  let index = 0;

  // try nop -> jmp
  while (index < args.length) {
    const array = args.map((x) => ({ ...x }));

    // eslint-disable-next-line @typescript-eslint/no-loop-func
    index = args.findIndex((x, idx) => x.command === Command.NOP && idx > index);
    if (index === -1) { break; }

    array[index].command = Command.JMP;
    const res = bootSequence(array);
    if (res.inf === false) {
      // console.log('found', res);
      return res.acc;
    }
  }

  // try jmp -> nop
  while (index < args.length) {
    const array = args.map((x) => ({ ...x }));

    // eslint-disable-next-line @typescript-eslint/no-loop-func
    index = args.findIndex((x, idx) => x.command === Command.JMP && idx > index);
    if (index === -1) { break; }

    array[index].command = Command.NOP;
    const res = bootSequence(array);
    if (res.inf === false) {
      // console.log('found', res);
      return res.acc;
    }
  }

  return 0;
};
