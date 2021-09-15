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

console.log(mergedObj.name);
