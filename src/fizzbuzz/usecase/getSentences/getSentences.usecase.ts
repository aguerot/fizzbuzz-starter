import { GetSentencesDto } from './getSentences.dto';
import { FizzBuzz } from '../../domain/FizzBuzz';
import { GetSentencesResponse } from './getSentences.response';

export class GetSentencesUsecase {

  execute({ from, count }: GetSentencesDto): GetSentencesResponse {
    const numbers = this.toArray(from, count);
    return {
      sentences: numbers.reduce((accSentence, currNumber) => {
        accSentence.push(new FizzBuzz(currNumber).say());
        return accSentence;
      }, [])
    };
  }

  private toArray(from: number, count: number): Array<number> {
    return Array.from({ length: count}).map((_, index) => from + index);
  }
}
