const assert = require('power-assert')
const sum = require('./sum')

describe("テストのタイトル", () => {
  it("sumのテスト", () => {
    assert(3 === sum(1, 2));
  });
});
