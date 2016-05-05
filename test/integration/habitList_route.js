process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var knex = require('../../db/knex');
var should = chai.should();
// var testUtilities = require('../utilities');
// var testSeed = require('../../src/server/models/seeds/test-seed');
// var Students = require('../../src/server/models/students')

chai.use(chaiHttp);


describe('habitList routes', function() {



// describe('API routes', function() {

  beforeEach(function(done) {
      knex.migrate.rollback().then(function() {
        knex.migrate.latest()
          .then(function() {
            return knex.seed.run().then(function() {
              done()
            });
          });
      });
  });

  afterEach(function(done) {
      knex.migrate.rollback().then(function() {
        knex.migrate.latest()
          .then(function() {
            return knex.seed.run().then(function() {
              done()
            });
          });
      });
  });

  describe('/GET habitList', function() {

    it('should return all habits in habitList', function(done) {
      chai.request(server)
      .get('/lists')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('data')
        res.body.status.should.equal('success')
        res.body.data.length.should.equal(3);
        res.body.data[0].habit.should.equal('Shema');
        res.body.data[0].description.should.equal('Say the Shema and before and after brochos twice daily at the propper time');
        res.body.data[0].interval.should.equal(2);
        res.body.data[0].period.should.equal('daily');
        res.body.data[0].parent_habit_id.should.equal(0);
        res.body.data[0].category_id.should.equal(1);
      done();
      })
    });
  });

  // describe('/GET students', function() {

  //   it('should return all students', function(done) {
  //     Students.findOne(function (err, student) {
  //       chai.request(server)  
  //       .get('/students/'+student._id)
  //       .end(function(err, res) {
  //         res.status.should.equal(200);
  //         res.type.should.equal('application/json');
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('data')
  //         res.body.status.should.equal('success')
  //         // console.log(res.body);
  //         res.body.data.fName.should.equal('Aaron');
  //         res.body.data.lName.should.equal('Toys');
  //         res.body.data.year.should.equal(1998);
  //       done();
  //       });
  //     })
  //   });
  // });

  // describe('/POST students', function() {

  //   it('should add a new student', function(done) {
  //     chai.request(server)
  //     .post('/students')
  //     .send({
  //       fName: 'Kevin',
  //       lName: 'Bacon',
  //       year: 1956
  //     })
  //     .end(function(err, res) {
  //       res.status.should.equal(200);
  //       res.type.should.equal('application/json');
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('data')
  //       res.body.status.should.equal('success')
  //       res.body.data.should.be.a('object');
  //       res.body.data.fName.should.equal('Kevin');
  //       res.body.data.lName.should.equal('Bacon');
  //       res.body.data.year.should.equal(1956);
  //     done();
  //     })
  //   });
  // });

});
