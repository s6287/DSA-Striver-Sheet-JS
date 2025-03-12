/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // Iterate over possible values of 'a' such that a² ≤ c
  for (let i = 0; i * i <= c; i++) {
    // Apply the formula: b² = c - a²; so b = sqrt(c - a²)
    let b = Math.sqrt(c - i * i);

    // If 'b' is a whole number (not a decimal), it means c can be represented as a² + b², return true.
    if (b === Math.floor(b)) {
      return true;
    }
  }

  // If no such (a, b) pair is found, return false.
  return false;
};
