function letterCombinations(digit) {
  //Complete the function
	function letterCombinations(digits) {
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  if (digits.length === 0) {
    return [];
  }

  const combinations = [''];

  for (const digit of digits) {
    const letters = digitToLetters[digit];
    const newCombinations = [];

    for (const combination of combinations) {
      for (const letter of letters) {
        newCombinations.push(combination + letter);
      }
    }

    combinations.length = 0;
    combinations.push(...newCombinations);
  }

  return combinations;
}

// Example usage:
const digits = prompt();
const result = letterCombinations(digits);
console.log(result);

}

module.exports = letterCombinations;
