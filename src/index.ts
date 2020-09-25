export const say = (input: number) => {
    if (input === 0) {
        return '0';
    }
    if (input % 3 === 0) {
        return input % 5 === 0 ? 'Fizzbuzz' : 'Fizz';
    }

    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input.toString(10);
}


const results = Array.from({length: 101})
    .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
