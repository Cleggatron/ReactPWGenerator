//Function returns a random string

const randomiseArray = (arr) => {
  let randomArr = [];
  let loopCount = arr.length;
  for (let i = 0; i < loopCount; i++) {
    let randEl = arr.splice(Math.floor(Math.random() * arr.length), 1);
    randomArr.push(...randEl);
  }
  let noNeighbours = true;
  for (let i = 1; i < randomArr.length; i++) {
    if (randomArr[i] === randomArr[i - 1]) {
      noNeighbours = false;
    }
  }
  return noNeighbours ? randomArr : randomiseArray(randomArr);
};

const passwordGen = (length, capitals, specChars, nums) => {
  const charHolder = {
    lowerCase: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ],
    upperCase: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '8', '0'],
    specialChars: ['!', '£', '$', '%', '^', '&', '*', '(', ')', '?', '@', '#']
  };

  if (capitals < 0 || specChars < 0 || nums < 0) {
    return '';
  }

  const totalChars = capitals + specChars + nums;
  if (length < totalChars) {
    return '';
  }

  const returnChars = [];
  for (let i = 1; i <= Math.max(capitals, specChars, nums); i++) {
    if (i <= capitals) {
      let randChar =
        charHolder['upperCase'][
          Math.floor(Math.random() * charHolder['upperCase'].length)
        ];
      returnChars.push(randChar);
    }

    if (i <= specChars) {
      let randChar =
        charHolder['specialChars'][
          Math.floor(Math.random() * charHolder['specialChars'].length)
        ];
      returnChars.push(randChar);
    }

    if (i <= nums) {
      let randChar =
        charHolder['numbers'][
          Math.floor(Math.random() * charHolder['numbers'].length)
        ];
      returnChars.push(randChar);
    }
  }

  if (returnChars.length < length) {
    for (let i = returnChars.length; i <= length; i++) {
      let randChar =
        charHolder['lowerCase'][
          Math.floor(Math.random() * charHolder['lowerCase'].length)
        ];
      returnChars.push(randChar);
    }
  }

  return randomiseArray(returnChars).join('');
};

export { passwordGen };
