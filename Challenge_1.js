const assignment = [1, 3, 5, 8, 12].reduce(sumOfNumbers, 0);

function sumOfNumbers(arrayOfNumbers, a) {
  return arrayOfNumbers + a;
}

document.writeln(assignment);