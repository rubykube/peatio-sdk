const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.MembersApi()

  describe('MembersApi', function() {
    describe('getV2MembersMe', function() {
      it('should call getV2MembersMe successfully', function(done) {
        //uncomment below and update the code to test getV2MembersMe
        api.getV2MembersMe(function(error, data, request) {
          if (error) { throw error }

          expect(data.email).to.equal(member.email)
          done()
        })
      })
    })
  })
})
