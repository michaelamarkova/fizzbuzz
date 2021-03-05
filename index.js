//First Exercise - Fizzbuzz
const result = fizzBuzz(3);
console.log(result);

function fizzBuzz(i) {
if (i % 3 ===0 && i % 5 === 0)
  return 'FizzBuzz';
if (i % 3 === 0)
  return 'Fizz';
if (i % 5 === 0)
  return 'Buzz';
}

//Second Exercise - FizzbuzzCounter
for (var i = 1; i <= 25; i++){

if (i % 3 === 0 && i % 5 === 0){
  console.log(i,"FizzBuzz");
}
else if (i % 3 === 0){
  console.log(i,"Fizz");
}
else if (i % 5 === 0){
  console.log(i,"Buzz");
}
else {
  console.log(i);
}
}


