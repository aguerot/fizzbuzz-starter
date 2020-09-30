import { Rule } from '.'

export const other: Rule = {
  condition: _ => true,
  process: (input) => input.toString()
}
