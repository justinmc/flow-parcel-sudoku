/* @flow */

type Square = {
  value: null | 1 | 2 | 3 | 4  | 5 | 6 | 7 | 8 | 9,
  fixed: boolean,
}

type Board = {
  '00': Square,
  '01': Square,
  '02': Square,
  '03': Square,
  '04': Square,
  '05': Square,
  '06': Square,
  '07': Square,
  '08': Square,
  '10': Square,
  '11': Square,
  '12': Square,
  '13': Square,
  '14': Square,
  '15': Square,
  '16': Square,
  '17': Square,
  '18': Square,
  '20': Square,
  '21': Square,
  '22': Square,
  '23': Square,
  '24': Square,
  '25': Square,
  '26': Square,
  '27': Square,
  '28': Square,
  '30': Square,
  '31': Square,
  '32': Square,
  '33': Square,
  '34': Square,
  '35': Square,
  '36': Square,
  '37': Square,
  '38': Square,
  '40': Square,
  '41': Square,
  '42': Square,
  '43': Square,
  '44': Square,
  '45': Square,
  '46': Square,
  '47': Square,
  '48': Square,
  '50': Square,
  '51': Square,
  '52': Square,
  '53': Square,
  '54': Square,
  '55': Square,
  '56': Square,
  '57': Square,
  '58': Square,
  '60': Square,
  '61': Square,
  '62': Square,
  '63': Square,
  '64': Square,
  '65': Square,
  '66': Square,
  '67': Square,
  '68': Square,
  '70': Square,
  '71': Square,
  '72': Square,
  '73': Square,
  '74': Square,
  '75': Square,
  '76': Square,
  '77': Square,
  '78': Square,
  '80': Square,
  '81': Square,
  '82': Square,
  '83': Square,
  '84': Square,
  '85': Square,
  '86': Square,
  '87': Square,
  '88': Square,
}

const puzzle = {
  '00': { value: null, fixed: false },
  '01': { value: null, fixed: false },
  '02': { value: 4, fixed: true },
  '03': { value: null, fixed: false },
  '04': { value: null, fixed: false },
  '05': { value: 3, fixed: true },
  '06': { value: null, fixed: false },
  '07': { value: null, fixed: false },
  '08': { value: null, fixed: false },
  '10': { value: 6, fixed: true },
  '11': { value: 9, fixed: true },
  '12': { value: null, fixed: false },
  '13': { value: 1, fixed: true },
  '14': { value: null, fixed: false },
  '15': { value: 5, fixed: true },
  '16': { value: 4, fixed: true },
  '17': { value: null, fixed: false },
  '18': { value: 8, fixed: true },
  '20': { value: 8, fixed: true },
  '21': { value: 7, fixed: true },
  '22': { value: null, fixed: false },
  '23': { value: null, fixed: false },
  '24': { value: null, fixed: false },
  '25': { value: null, fixed: false },
  '26': { value: 3, fixed: true },
  '27': { value: null, fixed: false },
  '28': { value: null, fixed: false },
  '30': { value: 1, fixed: true },
  '31': { value: null, fixed: false },
  '32': { value: null, fixed: false },
  '33': { value: 5, fixed: true },
  '34': { value: 2, fixed: true },
  '35': { value: 4, fixed: true },
  '36': { value: 6, fixed: true },
  '37': { value: null, fixed: false },
  '38': { value: null, fixed: false },
  '40': { value: null, fixed: false },
  '41': { value: null, fixed: false },
  '42': { value: null, fixed: false },
  '43': { value: 7, fixed: true },
  '44': { value: null, fixed: false },
  '45': { value: 1, fixed: true },
  '46': { value: null, fixed: false },
  '47': { value: null, fixed: false },
  '48': { value: null, fixed: false },
  '50': { value: null, fixed: false },
  '51': { value: null, fixed: false },
  '52': { value: 9, fixed: true },
  '53': { value: 3, fixed: true },
  '54': { value: 8, fixed: true },
  '55': { value: 6, fixed: true },
  '56': { value: null, fixed: false },
  '57': { value: null, fixed: false },
  '58': { value: 1, fixed: true },
  '60': { value: null, fixed: false },
  '61': { value: null, fixed: false },
  '62': { value: 6, fixed: true },
  '63': { value: null, fixed: false },
  '64': { value: null, fixed: false },
  '65': { value: null, fixed: false },
  '66': { value: null, fixed: false },
  '67': { value: 8, fixed: true },
  '68': { value: 3, fixed: true },
  '70': { value: 3, fixed: true },
  '71': { value: null, fixed: false },
  '72': { value: 1, fixed: true },
  '73': { value: 6, fixed: true },
  '74': { value: null, fixed: false },
  '75': { value: 9, fixed: true },
  '76': { value: null, fixed: false },
  '77': { value: 4, fixed: true },
  '78': { value: 2, fixed: true },
  '80': { value: null, fixed: false },
  '81': { value: null, fixed: false },
  '82': { value: null, fixed: false },
  '83': { value: 2, fixed: true },
  '84': { value: null, fixed: false },
  '85': { value: null, fixed: false },
  '86': { value: 1, fixed: true },
  '87': { value: null, fixed: false },
  '88': { value: null, fixed: false },
};

function solve (board: Board) :Board {
  board['01'] = { value: 1, fixed: true };

  return board;
}

console.log('zomg solve it');
console.log(solve(puzzle));