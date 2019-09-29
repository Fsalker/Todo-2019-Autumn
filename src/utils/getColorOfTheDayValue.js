const getTodayTimestamp = require('./getTodayTimestamp');

const getColorOfTheDayValue = () => {
  const maxColor = 0xFFFFFF + 1;
  const seed = parseInt(getTodayTimestamp() / 1e8) % 1e4;
  const value = new Array(3).fill(null).map((val, index) => index + 1).reduce((acc, exp) => acc + seed ** exp, 0) % maxColor;
  const hexValue = (`000000${value.toString(16)}`).slice(-6);

  return hexValue;
};

module.exports = getColorOfTheDayValue;
