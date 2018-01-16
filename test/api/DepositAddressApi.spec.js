const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.DepositAddressApi();

  describe('DepositAddressApi', () => {
    describe('getV2DepositAddress', () => {
      it('should call getV2DepositAddress successfully', (done) => {
        //uncomment below and update the code to test getV2DepositAddress
        //instance.getV2DepositAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
