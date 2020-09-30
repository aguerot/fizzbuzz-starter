export interface Rule {
  condition: (input: number) => boolean,
  process: (input: number) => string
}

export { zero } from "./zero";
export { fizz } from "./fizz";
export { buzz } from "./buzz"
export { fizzbuzz } from "./fizzbuzz"
export { other } from "./other"
