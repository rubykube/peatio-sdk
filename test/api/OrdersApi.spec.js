const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.OrdersApi();

  describe('OrdersApi', function() {
    describe('getV2Orders', function() {
      it('should call getV2Orders successfully', function(done) {
        //uncomment below and update the code to test getV2Orders
        //instance.getV2Orders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2Orders', function() {
      it('should call postV2Orders successfully', function(done) {
        //uncomment below and update the code to test postV2Orders
        //instance.postV2Orders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2OrdersClear', function() {
      it('should call postV2OrdersClear successfully', function(done) {
        //uncomment below and update the code to test postV2OrdersClear
        //instance.postV2OrdersClear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2OrdersMulti', function() {
      it('should call postV2OrdersMulti successfully', function(done) {
        //uncomment below and update the code to test postV2OrdersMulti
        //instance.postV2OrdersMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
