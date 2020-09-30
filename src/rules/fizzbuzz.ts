import { Rule } from '.'

export const fizzbuzz: Rule = {
  condition: (input) => input % 15 === 0,
  process: _ => 'Fizzbuzz'
}
