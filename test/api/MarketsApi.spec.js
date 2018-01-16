const expect = require('expect.js')
const { PeatioSDK } = require('../testHelper')

describe('MarketsApi', () => {
  const api = new PeatioSDK.MarketsApi()

  describe('getV2Markets', () => {
    it('should call getV2Markets successfully', (done) => {
      api.getV2Markets((error, data, request) => {
        if (error) throw error;

        if (data.length > 0)
          expect(data[0]).to.be.a(PeatioSDK.Market)

        done();
      });
    });
  });
})
