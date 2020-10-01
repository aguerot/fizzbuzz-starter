import { GetSentencesUsecase } from '../usecase/getSentences/getSentences.usecase';

export abstract class DisplaySentences {
  useCase: GetSentencesUsecase = new GetSentencesUsecase();

  display() {

  }
}
