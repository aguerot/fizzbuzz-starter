import { expect } from 'chai';
import { FizzBuzz } from './FizzBuzz';

describe('FizzBuzz test', () => {

  it('should return "1" if number is 1', () => {
    expect(new FizzBuzz(1).say()).to.equal('1');
  });

  it('should return "2" if number is 2', () => {
    expect(new FizzBuzz(2).say()).to.equal('2');
  });
  it('should return "Fizz" if number is 3', () => {
    expect(new FizzBuzz(3).say()).to.equal('Fizz');
  });
  it('should return "Fizz" if number is 6', () => {
    expect(new FizzBuzz(6).say()).to.equal('Fizz');
  });
  it('should return "Buzz" if number is 5', () => {
    expect(new FizzBuzz(5).say()).to.equal('Buzz');
  });
  it('should return "Buzz" if number is 10', () => {
    expect(new FizzBuzz(10).say()).to.equal('Buzz');
  });
  it('should return "FizzBuzz" if number is 15', () => {
    expect(new FizzBuzz(15).say()).to.equal('FizzBuzz');
  });
});
