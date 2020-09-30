import { Rule } from '.'

export const buzz: Rule = {
  condition: (input) => input % 5 === 0,
  process: _ => 'Buzz'
}
