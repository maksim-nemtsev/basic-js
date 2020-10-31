const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const logTwo = Math.log(2) / HALF_LIFE_PERIOD;
  const logModern = Math.log(MODERN_ACTIVITY / sampleActivity) / logTwo;
  return logModern;
};
