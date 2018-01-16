const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.OrderApi();

  describe('OrderApi', function() {
    describe('getV2Order', function() {
      it('should call getV2Order successfully', function(done) {
        //uncomment below and update the code to test getV2Order
        //instance.getV2Order(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2OrderDelete', function() {
      it('should call postV2OrderDelete successfully', function(done) {
        //uncomment below and update the code to test postV2OrderDelete
        //instance.postV2OrderDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
