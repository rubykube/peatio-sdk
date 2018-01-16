const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.KWithPendingTradesApi();

  describe('KWithPendingTradesApi', () => {
    describe('getV2KWithPendingTrades', () => {
      it('should call getV2KWithPendingTrades successfully', (done) => {
        //uncomment below and update the code to test getV2KWithPendingTrades
        //instance.getV2KWithPendingTrades(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
