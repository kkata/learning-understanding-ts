function Logger(constructor: Function) {
  console.log("ログ出力中...");
  console.log(constructor);
}

@Logger
class Person2 {
  name = "Max";
  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person2();
console.log(pers);
