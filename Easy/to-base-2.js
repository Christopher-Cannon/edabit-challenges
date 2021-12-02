// Convert a number to base-2
// https://edabit.com/challenge/3kcrnpHk7krNZdnKK

function toBase2(n) {
  let bin = "";

  if (n > 1024 || typeof n !== "number") return false;

  for (let i = 256; i > 0.5; Math.floor(i /= 2)) {
    if (n >= i) {
      bin += "1";
      n -= i;
    } else {
      bin += bin.includes("1") || i === 1 ? "0" : "";
    }
  }
  return bin;
}

// Expected
console.log( toBase2(0) );
console.log( toBase2(10) );
console.log( toBase2(300) );
console.log( toBase2(1024) );

// Extreme
console.log( toBase2(1025) );

// Exceptional
console.log( toBase2("1025") );
console.log( toBase2("") );
console.log( toBase2(" ") );
console.log( toBase2([]) );