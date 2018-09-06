var chai = require('chai');
var assert = chai.assert;

const sum = require('./sum');

describe('テストのタイトル', function () {
  it('sumのテスト', function(){
    assert.strictEqual(sum(1,2), 3)
  });
});
