//TODO result will be a sum of Roman Numerals as a number (0 - 3999)
//* Roman To Integer

//* Converts a string of roman numerals into a number
//* by looping over given string and checking for conditionals

/**
 * @param {string}
 * @return {number} // 0 - 3999
 */
function romanToInt(s) {
  // const array = s.split()

  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numeralSum = 0;

  if (1 <= s.length <= 15) {
    for (i = 0; i < s.length; i++) {
      if (s[i] == "I" && s[i + 1] == "V") {
        numeralSum += 4;
        i++;
      } else if (s[i] == "I" && s[i + 1] == "X") {
        numeralSum += 9;
        i++;
      } else if (s[i] == "X" && s[i + 1] == "L") {
        numeralSum += 40;
        i++;
      } else if (s[i] == "X" && s[i + 1] == "C") {
        numeralSum += 90;
        i++;
      } else if (s[i] == "C" && s[i + 1] == "D") {
        numeralSum += 400;
        i++;
      } else if (s[i] == "C" && s[i + 1] == "M") {
        numeralSum += 900;
        i++;
      } else {
        numeralSum += numerals[s[i]];
      }
    }
    return numeralSum;
  }
}

console.log(romanToInt("XLIX"));
console.log(romanToInt("LI"));
