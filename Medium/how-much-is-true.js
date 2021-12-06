// How much is true?
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
  let count = 0;

  arr.forEach(elem => count += elem ? 1 : 0);

  return count;
}

console.log( countTrue([true, false, false, true, false]) );
console.log( countTrue([false, false, false]) );
console.log( countTrue([]) );