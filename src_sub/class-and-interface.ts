// インラーフェイスはクラスの構造を定義し、実装を強制する
// 実装は持たないのがabstractクラスと異なる
interface Named {
  readonly name?: string; // readonlyが使える。public, privateは利用できない
  outputName?: string; // "?"で任意のプロパティを定義
}
// インターフェイスは複数継承できる
interface Greetable extends Named {
  greet(phrase: string): void;
}

// type AddFn = (a: number, b: number) => number;
// 関数型をインターフェイスに書き換える
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

class Person implements Greetable {
  // インターフェイスは複数指定できる
  // class Person implements Greetable, Named {
  name?: string;
  age = 30; // インターフェイスにないプロパティを実装できる
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

// user1 = new Person("Max");
user1 = new Person();
// user1.name = "Manu"; // classの実装でreadonlyにしなくてもエラーになる

user1.greet("Hello,");
