const names: Array<string> = []; // string[]

// promiseは他の型も返すので、それをGeneric型で定義する
// 戻り値の型がわかることで、TypeScriptのサポートが利くようになる
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  });
});

promise.then((data) => {
  data.split("");
});
