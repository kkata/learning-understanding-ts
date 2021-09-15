// const names: Array<string> = []; // string[]

// // promiseは他の型も返すので、それをGeneric型で定義する
// // 戻り値の型がわかることで、TypeScriptのサポートが利くようになる
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   });
// });

// promise.then((data) => {
//   data.split("");
// });

// TとUは関数を呼び出したときに推定される
// extends で制約を付けられる
function merge<T extends object, U extends object>(obgA: T, objB: U) {
  return Object.assign(obgA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

// console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["おつかれさまです"]));

// keyofをつかった制約
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
