export const marks = {
    fizz: false, buzz: false, indexes: [] as string[]
}

function clean() {
    marks.buzz = false;
    marks.fizz = false;
}

function number(n:number) {
    clean();
    return n.toString();
}

function fizz(input:number) {
    marks.fizz = true;
    if (marks.buzz) {
        marks.indexes.push(`${input-1}/${input}`);
        clean();
    }
    return 'Fizz'
}

function buzz(input:number) {
    marks.buzz = true;
    if (marks.fizz) {
        marks.indexes.push(`${input-1}/${input}`);
        clean();
    }
    return 'Buzz'
}

function fizzbuzz() {
    clean();
    return 'Fizzbuzz';
}

export const say = (input: number):string => {
    if (input === 0) {
        return number(0);
    }
    if (input % 3 === 0) {
        return input % 5 === 0 ? fizzbuzz() : fizz(input);
    }

    if (input % 5 === 0) {
        return buzz(input);
    }

    return number(input);
}


const results = Array.from({length: 101})
    .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
console.log('\n\n----\nContigous : ', marks.indexes);
