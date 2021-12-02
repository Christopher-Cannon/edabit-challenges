// Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(n) {
  let number = typeof n === "string" ? Number(n.trim()) : n;

  if (number > 0 && number < 1001 && !Number.isNaN(number)) {
    let result = 0;

    for (let i = number; i > 0; i--) {
      result += i;
    }
    return result;
  }
  return 0;
}

console.log( addUp(4) );
console.log( addUp(13) );
console.log( addUp(600) );

console.log( addUp(-1) );
console.log( addUp(1200) );
console.log( addUp("Hello, World") );

console.log( addUp(" 4 ") );