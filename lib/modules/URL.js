module.exports = function URLshortener(longURL) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let shortURL = '';

  for (let i = 0; i < 4; i++) {
    const randomDigit = digits[Math.floor(Math.random() * digits.length)];
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    shortURL += randomDigit + randomLetter;
  }
  return { longURL, shortURL };
};
