const add = require('../src/add');

describe('第二个测试套件', function() {
    it('第1个测试用例: 1+1 === 2', function() {
        expect(add(1, 1)).toBe(2);
    });
    it('第2个测试用例: 1+1 === 2', function() {
        expect(add()).toBe(0);
    });
    it('第3个测试用例: 1+1 === 2', function() {
        expect(add(1)).toBe(1);
    });
    it('第4个测试用例: 1+1 === 2', function() {
        expect(add(2, 1)).toBe(3);
    });
});