/* eslint no-unused-expressions: 0 */

'use strict';

var Chai = require('chai');
var Lab = require('lab');
var Mongoose = require('mongoose');
var Server = require('../../../../lib/server');
var Sinon = require('sinon');
var Bootcamp = require('../../../../lib/models/bootcamp');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Chai.expect;
var it = lab.test;
var before = lab.before;
var after = lab.after;

var server;

describe('GET /bootcamps', function(){
  before(function(done){
    Server.init(function(err, srvr){
      if(err){ throw err; }
      server = srvr;
      done();
    });
  });

  after(function(done){
    server.stop(function(){
      Mongoose.disconnect(done);
    });
  });

  it('should return all existing bootcamps', function(done){
    server.inject({method: 'GET', url: '/bootcamps'}, function(response){
      expect(response.statusCode).to.equal(200);
      // expect(response.result).to.equal(3);
      done();
    });
  });

  it('should yield a db error ', function(done){
    var stub = Sinon.stub(Bootcamp, 'find').yields(new Error());
    server.inject({method: 'GET', url: '/bootcamps'}, function(response){
      expect(response.statusCode).to.equal(400);
      stub.restore();
      done();
    });
  });
});
