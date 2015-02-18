/*global describe, it */
'use strict';

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

var randahLeveler = require('../');

chai.use(chaiAsPromised);
chai.should();

describe('randah-leveler node module', function () {

  it('must start at level 1', function () {
    return randahLeveler().level()
    .should.equal(1);
  });


  it('must set level', function() {
    return randahLeveler().level(40)
    .should.equal(40);
  });


  it('must set xp', function() {
    var leveler = randahLeveler();
    leveler.xp(4000);

    return leveler.xp().should.equal(4000);
  });


  it('must calculate xp for level', function() {
    // var leveler = randahLeveler();
  });


  it('must level up', function() {
    var leveler = randahLeveler();
    leveler.increment(60);

    return leveler.level().should.equal(2);
  });

});
