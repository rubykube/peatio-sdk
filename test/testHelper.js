const superagent = require('superagent')
const PeatioSDK = require('../src/sdk')

const peatioHost = process.env.PEATIO_URL || 'http://localhost:8000'

module.exports = {
  PeatioSDK,

  runWithMember (handler) {
    superagent.get(peatioHost + '/test/members').end((error, response) => {
      if (error) { throw error }

      let member = response.body.members[0]
      PeatioSDK.init(member.jwt, { basePath: peatioHost + '/api/v2' })

      handler(member)
    })
  }
}
