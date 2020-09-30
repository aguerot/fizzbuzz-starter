import { Rule, zero, fizz, buzz, fizzbuzz, other } from './rules';

/* say
  Check for in the list of rule and return the result of the first rule that applies on the param input
*/

export const say = (input: number) => {

  const rules: Rule[] = [
    zero,
    fizzbuzz,
    fizz,
    buzz,
    other
  ];

  const firstRule = rules.find((rule) => rule.condition(input));

  return firstRule?.process(input);
}

const results = Array.from({ length: 101 })
  .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
