export { }

declare global {
    interface Number {
        isDivideBy(divider: number): boolean;
        Fizzbuzz(): string;
    }
}

Number.prototype.isDivideBy = function (divider: number) {
    return this % divider === 0;
}

Number.prototype.Fizzbuzz = function () {
    return this === 0 ? '0' : this.isDivideBy(15) ? 'Fizzbuzz' : this.isDivideBy(5) ? 'Buzz' : this.isDivideBy(3) ? 'Fizz' : this.toString();
}
