module.exports = function toReadable(number) {
  const strNum = number + '';
  let conclusion = '';

  const oneNumber = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }

  const numberAndZero = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  const twoNumber = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  if (strNum.length === 1) {
    conclusion = oneNumber[number];
  } 
  else if (strNum.length === 2 && strNum[1] == '0') {
    conclusion = numberAndZero[number];
  }
  else if (strNum.length === 2 && strNum[0] == '1' && strNum[1] != '0') {
    conclusion = twoNumber[number];
  }
  else if (strNum.length === 2 && strNum[0] != '1' && strNum[1] != '0') {
    conclusion = numberAndZero[Number(strNum[0] + '0')] + ' ' + oneNumber[Number(strNum[1])];
  }
  else if (strNum.length === 3 && strNum[1] == '0' && strNum[2] == '0') {
    conclusion = oneNumber[Number(strNum[0])] + ' ' + 'hundred';
  }
  else if (strNum.length === 3 && strNum[1] == '0' && strNum[2] != '0') {
    conclusion = oneNumber[Number(strNum[0])] + ' ' + 'hundred' + ' ' + oneNumber[Number(strNum[2])];
  }
  else if (strNum.length === 3 && strNum[1] != '0' && strNum[2] == '0') {
    conclusion = oneNumber[Number(strNum[0])] + ' ' + 'hundred' + ' ' + numberAndZero[Number(strNum[1] + '0')];
  }
  else if (strNum.length === 3 && strNum[1] == '1' && strNum[2] != '0') {
    conclusion = oneNumber[Number(strNum[0])] + ' ' + 'hundred' + ' ' + twoNumber[1 + strNum[2]];
  }
  else if (strNum.length === 3 && strNum[1] != '1' && strNum[2] != '0') {
    conclusion = oneNumber[Number(strNum[0])] + ' ' + 'hundred' + ' ' + numberAndZero[Number(strNum[1] + '0')] + ' ' + oneNumber[Number(strNum[2])];
  }
  return conclusion;
};
