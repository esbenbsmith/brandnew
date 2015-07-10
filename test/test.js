//
// test/test.js
//

var request = require('request')
  , expect = require('chai').expect

var baseURL = "localhost:3000"
var targetURL = "http://localhost:3000/users"



// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('baseURL', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request.post(targetURL, function(err, res, body) {
      console.log(err);
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});