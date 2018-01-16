const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.OrderBookApi();

  describe('OrderBookApi', function() {
    describe('getV2OrderBook', function() {
      it('should call getV2OrderBook successfully', function(done) {
        //uncomment below and update the code to test getV2OrderBook
        //instance.getV2OrderBook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
