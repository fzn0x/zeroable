function zeroable(number = 0, fallback = 0) {
  return +number || +fallback;
}

exports = module.exports = zeroable;

zeroable = num => +num || 0;
