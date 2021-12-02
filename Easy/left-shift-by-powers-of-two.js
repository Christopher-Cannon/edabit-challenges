// Left Shift by Powers of Two
// https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br

function shiftToLeft(x, y) {
  let n1 = typeof x === "string" ? Number(x.trim()) : x;
  let n2 = typeof y === "string" ? Number(y.trim()) : y;

  if (Number.isNaN(n1) || Number.isNaN(n2)) return 0;

  return x * 2 ** Math.abs(y);
}

// Expected
console.log( shiftToLeft(5, -2) );
console.log( shiftToLeft(10, 3) );
console.log( shiftToLeft(-6, 5) );
console.log( shiftToLeft(12, 4) );

// Extreme
console.log( shiftToLeft("12", " 4 ") );

// Exceptional
console.log( shiftToLeft("Hello", "World") );

