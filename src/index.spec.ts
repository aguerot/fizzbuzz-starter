import { expect } from 'chai';
import { say } from './index';

describe('FizzBuzz test', () => {

  it(`Given 0 should say '0'`, () => {
    expect(say(0)).to.be.equal('0');
  });

  it(`Given 1, 26, 334 should say respectively '1', '26', '334'`, () => {
    expect(say(1)).to.be.equal('1');
    expect(say(26)).to.be.equal('26');
    expect(say(334)).to.be.equal('334');
  });

  it(`Given 3, 126, 963 should say 'Fizz'`, () => {
    expect(say(3)).to.be.equal('Fizz');
    expect(say(126)).to.be.equal('Fizz');
    expect(say(963)).to.be.equal('Fizz');
  });

  it(`Given 5, 245, 700 should say 'Buzz'`, () => {
    expect(say(5)).to.be.equal('Buzz');
    expect(say(245)).to.be.equal('Buzz');
    expect(say(700)).to.be.equal('Buzz');
  });

  it(`Given 15, 240, 960 should say 'Fizzbuzz'`, () => {
    expect(say(15)).to.be.equal('Fizzbuzz');
    expect(say(240)).to.be.equal('Fizzbuzz');
    expect(say(960)).to.be.equal('Fizzbuzz');
  });
});
