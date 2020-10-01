import { expect } from 'chai';
import { GetSentencesUsecase } from './getSentences.usecase';
import { GetSentencesDto } from './getSentences.dto';

describe('Display sequence of words with array provided', () => {

  it('should return "12" if i start from 1 and have an array of 2 ', () => {
    const useCase = new GetSentencesUsecase();
    const request: GetSentencesDto = {
      count: 2,
      from: 1
    };
    const sentence = useCase.execute(request);
    expect(sentence).to.equal(['1', '2']);
  });

  it('should return "12Fizz" if i start from 1 and have an array of 3 ', () => {
    const useCase = new GetSentencesUsecase();
    const request: GetSentencesDto = {
      count: 3,
      from: 1
    };
    const sentence = useCase.execute(request);
    expect(sentence).to.equal(['1', '2', 'Fizz']);
  });

  it('should return "8FizzBuzz" if i start from 8 and have an array of 3', () => {
    const useCase = new GetSentencesUsecase();
    const request: GetSentencesDto = {
      count: 3,
      from: 8
    };
    const sentence = useCase.execute(request);
    expect(sentence).to.equal(['8', 'Fizz', 'Buzz']);
  });

  it('should return "14FizzBuzz1617" if i start from 14 and have an array of 4', () => {
    const useCase = new GetSentencesUsecase();
    const request: GetSentencesDto = {
      count: 4,
      from: 14
    };
    const sentence = useCase.execute(request);
    expect(sentence).to.equal(['14', 'FizzBuzz', '16', '17']);
  });

});
