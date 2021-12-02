// Largest Swap
// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

function largestSwap(n) {
  if (n < 10 || n > 99) return false;
  // Could probably do type validation with another function
  let toSwap = typeof n !== "string" ? String(n) : n;

  let swapped = toSwap.trim().split("").reverse().join("");

  if (toSwap > swapped || toSwap === swapped) return true;
  return false;
}

// Expected
console.log( largestSwap(27) );
console.log( largestSwap(43) );
console.log( largestSwap(99) );

// Extreme
console.log( largestSwap(100) );
console.log( largestSwap(1) );

// Exceptional
console.log( largestSwap("100") );
console.log( largestSwap("Hello") );
console.log( largestSwap("") );
console.log( largestSwap([]) );