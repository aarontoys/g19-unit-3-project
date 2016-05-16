process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var knex = require('../../db/knex');
var should = chai.should();
var bcrypt = require('bcrypt');
const saltRounds = 10;

chai.use(chaiHttp);

describe('register route', function() {

  beforeEach(function(done) {
    knex.migrate.rollback().then(function() {
      knex.migrate.latest()
        .then(function() {
          return knex.seed.run().then(function() {
            done()
          })
        })
        // done()
    })
  });

  describe('/get all users', function () {
    it('should return all users in db', function (done) {
      chai.request(server)
      .get('/users')
      .end(function (err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('data')
        res.body.status.should.equal('success')
        res.body.data.length.should.equal(3);
        res.body.data[0].fname.should.equal('Aaron');
        res.body.data[0].lname.should.equal('Toys');
        res.body.data[0].email.should.equal('aarontoys@gmail.com');
        bcrypt.compareSync('pass', res.body.data[0].pword).should.equal(true);
        done()
      })
    })
  })

  describe('post to register', function () {

    it('should add a new user', function (done) {
      chai.request(server)
      .post('/register')
      .send({
        email: 'mocha@test.com',
        pword: 'pass'
      })
      .end(function (err, res) {
        chai.request(server)
        .get('/users')
        .end(function (err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('data')
          res.body.status.should.equal('success')
          res.body.data.length.should.equal(4);
          res.body.data[3].email.should.equal('mocha@test.com');
          bcrypt.compareSync('pass', res.body.data[3].pword).should.equal(true);
          done()
        })
      })
    })
  })

  // describe('get user by email', function () {

  //   it('should get')
  // })
});
