import { expect } from 'chai';
import { say } from './index';

import { Rule, zero, fizz, buzz, fizzbuzz, other } from './rules';

describe('Rules condition test', () => {

  it(`Rule zero should be triggered only when 0 is given`, () => {
    expect(zero.condition(0)).to.be.equal(true);
    expect(zero.condition(3)).to.be.equal(false);
    expect(zero.condition(5)).to.be.equal(false);
  });

  it(`Rule fizz should be triggered only input is a multiple of 3`, () => {
    expect(fizz.condition(3)).to.be.equal(true);
    expect(fizz.condition(5)).to.be.equal(false);
    expect(fizz.condition(15)).to.be.equal(true);
  });

  it(`Rule buzz should be triggered only input is a multiple of 5`, () => {
    expect(buzz.condition(3)).to.be.equal(false);
    expect(buzz.condition(5)).to.be.equal(true);
    expect(buzz.condition(15)).to.be.equal(true);
  });

  it(`Rule fizzbuzz should be triggered only input is a multiple of 3 and 5 (15)`, () => {
    expect(fizzbuzz.condition(3)).to.be.equal(false);
    expect(fizzbuzz.condition(5)).to.be.equal(false);
    expect(fizzbuzz.condition(15)).to.be.equal(true);
  });

});

describe('FizzBuzz test', () => {

  it(`Given 0 should say '0'`, () => {
    expect(say(0)).to.be.equal('0');
  });

  it(`Given 1 should say respectively '1'`, () => {
    expect(say(1)).to.be.equal('1');
  });

  it(`Given 3 should say 'Fizz'`, () => {
    expect(say(3)).to.be.equal('Fizz');
  });

  it(`Given 5 should say 'Buzz'`, () => {
    expect(say(5)).to.be.equal('Buzz');
  });

  it(`Given 15 should say 'Fizzbuzz'`, () => {
    expect(say(15)).to.be.equal('Fizzbuzz');
  });
});
