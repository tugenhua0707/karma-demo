function isNum(num) {
  if (typeof num === 'number') {
    return true;
  } else {
    return false;
  }
}

module.exports = isNum;