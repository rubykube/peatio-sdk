const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.TradesApi();

  describe('TradesApi', function() {
    describe('getV2Trades', function() {
      it('should call getV2Trades successfully', function(done) {
        //uncomment below and update the code to test getV2Trades
        //instance.getV2Trades(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV2TradesMy', function() {
      it('should call getV2TradesMy successfully', function(done) {
        //uncomment below and update the code to test getV2TradesMy
        //instance.getV2TradesMy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
