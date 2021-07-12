function Logger(LogString: string) {
  return function (constructor: Function) {
    console.log(LogString);
    console.log(constructor);
  };
}

@Logger("ログ出力中 - PERSON")
class Person2 {
  name = "Max";
  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person2();
console.log(pers);
