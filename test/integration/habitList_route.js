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
            })
          })
          // done()
      })
  });

  // afterEach(function(done) {
  //     knex.migrate.rollback().then(function() {
  //       knex.migrate.latest()
  //         .then(function() {
  //           return knex.seed.run().then(function() {
  //             done()
  //           })
  //         })
  //     })
  // });

  describe('/GET habitList', function() {

    it('should return all habits in habitList', function(done) {
      chai.request(server)
      .get('/habits')
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
      done()
      })
    })
  })

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

  describe('/POST habits', function() {

    it('should add a new habit', function(done) {
      chai.request(server)
      .post('/habits')
      .send({
        habit: 'Check Email',
        description: 'Check and respond to email twice a day',
        interval: 2,
        period: 'daily',
        parent_habit_id: 0,
        category_id: 3
      })
      .end(function(err, res) {
        chai.request(server)
        .get('/habits')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('data')
          res.body.status.should.equal('success')
          res.body.data.length.should.equal(4);
          res.body.data[3].habit.should.equal('Check Email');
          res.body.data[3].description.should.equal('Check and respond to email twice a day');
          res.body.data[3].interval.should.equal(2);
          res.body.data[3].period.should.equal('daily');
          res.body.data[3].parent_habit_id.should.equal(0);
          res.body.data[3].category_id.should.equal(3);
          done()
        })
      })
    })
  })

});