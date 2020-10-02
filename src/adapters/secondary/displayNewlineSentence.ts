import { DisplaySentences } from '../../fizzbuzz/domain/DisplaySentences';
import { GetSentencesResponse } from '../../fizzbuzz/usecase/getSentences/getSentences.response';

export class DisplayNewlineSentence extends DisplaySentences {
  display(from: number, count: number) {
    const responses: GetSentencesResponse = this.useCase.execute({ from, count });
    return responses.sentences.join('\n');
  }
}
