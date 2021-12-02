// Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(n) {
  let number = typeof n === "string" ? Number(n.trim()) : n;

  if (!Number.isNaN(number) && number > 0 && number < 1001) {
    let result = 0;

    for (let i = number; i > 0; i--) result += i;

    return result;
  }
  return 0;
}

// Expected
console.log( addUp(4) );
console.log( addUp(13) );
console.log( addUp(600) );

// Extreme
console.log( addUp(" 4 ") );

// Exceptional
console.log( addUp(-1) );
console.log( addUp(1200) );
console.log( addUp("Hello, World") );
console.log( addUp("") );
console.log( addUp(" ") );