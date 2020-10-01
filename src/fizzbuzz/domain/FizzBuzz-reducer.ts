import { FizzBuzz } from './FizzBuzz';

export class FizzBuzzReducer {
  static reduce({ from, count }, reducer) {
    const numbers = FizzBuzzReducer.toArray(from, count);
    return numbers.reduce((acc, curr) => {
      return acc + reducer() + new FizzBuzz(curr).say();
    }, '');
  }

  private static toArray(from: number, count: number): Array<number> {
    const array = [];
    for (let i = from; i < from + count; i++) {
      array.push(i);
    }
    return array;
  }
}
