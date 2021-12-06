// All About Anonymous Functions: Adding Suffixes
// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

const addSuffix = (suffix) => (string) => string + suffix;

const addLy = addSuffix("ly");

console.log( addLy("Hopeless") );
console.log( addLy("Total") );

const addLess = addSuffix("less");

console.log( addLess("Fear") );
console.log( addLess("Hope") );