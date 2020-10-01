export class FizzBuzz {
  constructor(private readonly value: number) {

  }

  say() {
    if (this.value === 0) {
      return this.sayString(this.value);
    }

    if (FizzBuzz.isModulo3x5(this.value)) {
      return 'FizzBuzz';
    }
    if (FizzBuzz.isModulo3(this.value)) {
      return 'Fizz';
    }
    if (FizzBuzz.isModulo5(this.value)) {
      return 'Buzz';
    }
    return this.sayString(this.value);
  }

  private sayString(value: number) {
    return value.toString();
  }

  private static isModulo3x5(value: number) {
    return this.isModulo3(value) && this.isModulo5(value);
  }

  private static isModulo3(value: number) {
    return value % 3 === 0;
  }

  private static isModulo5(value: number) {
    return value % 5 === 0;
  }
}
