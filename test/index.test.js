const isNum = require('../src/index');

describe('测试webpack+babel集成到Karma中', () => {
  it('isNum() should work fine.', () => {
    expect(isNum(1)).toBe(true);
    expect(isNum('1')).toBe(false);
  })
});