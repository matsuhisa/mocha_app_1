const chai = require('chai');
const assert = chai.assert;

const sum = require('./sum');

describe('テストのタイトル', () => {
  it('sumのテスト', () => {
    assert.strictEqual(sum(1,2), 3)
  });
});
