import { GetSentencesDto } from './fizzbuzz/usecase/getSentences/getSentences.dto';
import { DisplayInlineSentence } from './adapters/secondary/displayInlineSentence';
import { DisplayNewlineSentence } from './adapters/secondary/displayNewlineSentence';

const provider: GetSentencesDto = {
  count: 31,
  from: 1
};

const inline = new DisplayInlineSentence();
console.log(inline.display(provider.from, provider.count));

console.log('--------------------------------');

const newLine = new DisplayNewlineSentence();
console.log(newLine.display(provider.from, provider.count));
