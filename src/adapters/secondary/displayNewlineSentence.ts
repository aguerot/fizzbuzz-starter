import { DisplaySentences } from '../../fizzbuzz/domain/DisplaySentences';
import { GetSentencesResponse } from '../../fizzbuzz/usecase/getSentences/getSentences.response';

export class DisplayNewlineSentence extends DisplaySentences {

  constructor(private readonly from: number,
              private readonly count: number) {
    super();
  }

  display() {
    const responses: GetSentencesResponse = this.useCase.execute({ from: this.from, count: this.count });
    return responses.sentences.join('\n');
  }

}
