import { Rule } from '.'

export const fizz: Rule = {
  condition: (input) => input % 3 === 0,
  process: _ => 'Fizz'
}
