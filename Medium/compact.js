// Learn Lodash (2): Compact
// https://edabit.com/challenge/M6fbYyBkzJXMAu39G

const compact = (arr) => arr.filter(elem => Boolean(elem));

console.log( compact([0, 1, false, 2, "", 3, null, undefined]) );

console.log( compact(
  [
    {
      color: "red",
      make: "toyota",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ],
  null
) );