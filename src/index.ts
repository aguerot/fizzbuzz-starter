/* say
  Return: (string)
    '0' if the input is 0
    'Fizz' if the input is a multiple of 3
    'Buzz' if the input is a multiple of 5
    'Fizzbuzz' if the input is a multiple of 3 and 5
    else the input as a string
*/

export const say = (input: number) => {

  if (input === 0) return '0';

  let text: string = '';

  if (input % 3 === 0)
    text += 'fizz';

  if (input % 5 === 0)
    text += 'buzz';

  /*if (input % 7 === 0)
    text += 'bang';*/

  if (text === '')
    return input.toString();
  else 
    return capitalizeFirstLetter(text);
}

/* capitalizeFirstLetter
  Return: (string)
    The text parameter with the first letter in upper case
*/
const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const results = Array.from({ length: 101 })
  .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
