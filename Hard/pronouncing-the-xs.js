// Pronouncing the Xs
// https://edabit.com/challenge/mH6Ny8eH6AStdzzyS

function xPronounce(str) {
  const regex = /\b\w*[x]\w*\b/g;

  let newStr = str.split(" ");

  newStr = newStr.map(elem => {
    return elem.replace(regex, (match, offset, string) => {
      if (string.length === 1) return "ecks";
      if (match.indexOf("x") > 0) return match.replace("x", "cks");
      return "z" + string.slice(1);
    });
  });
  return newStr.join(" ");
}

console.log( xPronounce("Inside the x box was a xylophone") );
console.log( xPronounce("The x ray is excellent") );
console.log( xPronounce("OMG x box unboxing video x D") );