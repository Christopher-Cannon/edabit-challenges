// Up the Hill, Down the Hill
// https://edabit.com/challenge/vEY5A5Kq8xsPTQG8S

// Determines average speed given multiple speeds 
// for different amounts of time.
//
// Made to double check averageSpeed() solutions.
// This function is also more versatile, accepting 
// a greater range of speeds and times.
function avgSpeed(speeds, times) {
  if (!Array.isArray(speeds) || !Array.isArray(times)) return undefined;
  if (speeds.length !== times.length) return undefined;

  let upper = 0;

  for (let i = 0; i < speeds.length; i++) {
    upper += speeds[i] * times[i];
  }

  let lower = times.reduce((prev, current) => prev + current);

  return upper / lower;
}

// Don't even need upTime for this challenge?
function averageSpeed(upTime, upSpeed, downSpeed) {
  let ratio = downSpeed / upSpeed;
  return (upSpeed * ratio + downSpeed) / (ratio + 1);
}

console.log("averageSpeed()");
console.log(averageSpeed(18, 20, 60));
console.log(averageSpeed(18, 20, 70));
console.log(averageSpeed(30, 10, 30));
console.log(averageSpeed(30, 8, 24));

console.log("avgSpeed()");
console.log(avgSpeed([20, 60], [18, 6]));
console.log(avgSpeed([20, 70], [18, 18 / 3.5]));
console.log(avgSpeed([10, 30], [30, 10]));
console.log(avgSpeed([8, 24], [30, 10]));

console.log(avgSpeed([50, 60, 70], [3, 2, 1]));
