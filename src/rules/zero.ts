import { Rule } from '.'

export const zero: Rule = {
  condition: (input) => input === 0,
  process: _ => '0'
}
