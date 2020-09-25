import { expect } from 'chai';
import {say} from './index'

describe('FizzBuzz test', () => {

    it(`Given 0 should say '0'`, () => {

        expect(say(0)).to.be.eq("0");
    });

    it(`Given 3, 6, 9, all should say 'Fizz'`, () => {

        expect(say(3)).to.be.eq("Fizz");
        expect(say(6)).to.be.eq("Fizz");
        expect(say(9)).to.be.eq("Fizz");
    });

    it(`Given 5, 10, 20, allshould say 'Buzz'`, () => {

        expect(say(5)).to.be.eq("Buzz");
        expect(say(10)).to.be.eq("Buzz");
        expect(say(20)).to.be.eq("Buzz");
    });

    it(`Given 15, 30, 45, all should say 'Fizzbuzz'`, () => {

        expect(say(15)).to.be.eq("Fizzbuzz");
        expect(say(30)).to.be.eq("Fizzbuzz");
        expect(say(45)).to.be.eq("Fizzbuzz");
    });

    it(`Given 0, 1, 41, 73 all should say as string`, () => {

        expect(say(0)).to.be.eq("0");
        expect(say(1)).to.be.eq("1");
        expect(say(41)).to.be.eq("41");
        expect(say(73)).to.be.eq("73");
    });
});
