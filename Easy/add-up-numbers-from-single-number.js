// Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(n) {
  if (typeof n !== "number") return 0;

  if (n > 0 && n < 1001) {
    let result = 0;

    for (let i = n; i > 0; i--) result += i;

    return result;
  }
  return 0;
}

// Expected
console.log( addUp(4) );
console.log( addUp(13) );
console.log( addUp(600) );

// Extreme
console.log( addUp(-1) );
console.log( addUp(1200) );

// Exceptional
console.log( addUp(" 4 ") );
console.log( addUp("Hello, World") );
console.log( addUp("") );
console.log( addUp(" ") );