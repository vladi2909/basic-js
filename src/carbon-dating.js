const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_NUM_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'
    || Number(sampleActivity) <= 0
    || isNaN(sampleActivity)
    || Number(sampleActivity) > MODERN_ACTIVITY) {
      return false;
  }

  let approximateAge = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (LN_NUM_2 / HALF_LIFE_PERIOD));

  return approximateAge;

};
