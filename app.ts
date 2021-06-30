function add(n1: number, n2: number) {
  return n1 + n2;
}

// void型はreturn値がない場合使う
// 以下の場合は本来不要(学習目的で記述)
function printResult(num: number): void {
  console.log("Result: " + num);
}

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;
// combineValues = printResult;

console.log(combineValues(8, 8));

printResult(add(5, 12));
