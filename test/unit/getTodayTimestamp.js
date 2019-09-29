require('chai').should();
const { getTodayTimestamp } = require('./../../src/utils');

describe('Today Timestamp', () => {
  it("Should get today's timestamp", () => {
    const ts = getTodayTimestamp();
    const diff = Date.now() - ts;

    ts.should.be.a('number');
    diff.should.be.below(1000 * 60 * 60 * 24);
  });
});
