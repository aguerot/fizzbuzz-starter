import './extensions';

const results = Array.from({ length: 101 })
                     .map((_, index) => `${index} => ${index.Fizzbuzz()}`);

console.log(results.join('\n'));

console.log("======");

const contiguous = Array.from<number>({ length: 101 })
            .map((_, index) => {
                const convertValue = index.Fizzbuzz();
                const previousConvertValue = (index-1).Fizzbuzz();
                if(
                    convertValue === 'Buzz' && previousConvertValue === 'Fizz' ||
                    convertValue === 'Fizz' && previousConvertValue === 'Buzz'
                ){
                    return `${index-1}/${index}`;
                }
            })
            .filter(x => x);

console.log(contiguous.join('\n'));            

