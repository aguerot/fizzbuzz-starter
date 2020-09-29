/* say
  Return: (string)
    '0' if the input is 0
    'Fizz' if the input is a multiple of 3
    'Buzz' if the input is a multiple of 5
    'Fizzbuzz' if the input is a multiple of 3 and 5
    else the input as a string
*/

export const say = (input: number) => {

  if (input === 0)
    return '0';
  else if (input % 15 === 0)
    return 'Fizzbuzz';
  else if (input % 3 === 0)
    return 'Fizz';
  else if (input % 5 === 0)
    return 'Buzz';
  else
    return input.toString();

}

const results = Array.from({ length: 101 })
  .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
