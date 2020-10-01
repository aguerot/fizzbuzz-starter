import { GetSentencesDto } from './fizzbuzz/usecase/getSentences/getSentences.dto';
import { DisplayInlineSentence } from './adapters/secondary/displayInlineSentence';
import { DisplayNewlineSentence } from './adapters/secondary/displayNewlineSentence';

const provider: GetSentencesDto = {
  count: 31,
  from: 1
};

const inline = new DisplayInlineSentence(provider.from, provider.count);
console.log(inline.display());

console.log("--------------------------------");

const newLine = new DisplayNewlineSentence(provider.from, provider.count);
console.log(newLine.display());
