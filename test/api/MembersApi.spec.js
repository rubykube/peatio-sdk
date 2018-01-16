const expect = require('expect.js')
const { PeatioSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new PeatioSDK.MembersApi()

  describe('MembersApi', () => {
    describe('getV2MembersMe', () => {
      it('should call getV2MembersMe successfully', (done) => {
        api.getV2MembersMe((error, data, request) => {
          if (error) { throw error }

          expect(data.email).to.equal(member.email)
          expect(data).to.be.a(PeatioSDK.Member)

          done()
        })
      })
    })
  })
})
