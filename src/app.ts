function Logger(LogString: string) {
  console.log("LOGGER ファクトリ");
  return function (constructor: Function) {
    console.log(LogString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE　ファクトリ");
  // return function (_: Function) {
  return function (constructor: any) {
    console.log("テンプレートを表示");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// デコレータ関数の作成は上から下
// でコレータ関数の実行は下から上
// @Logger("ログ出力中 - PERSON")
@Logger("ログ出力中")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person2 {
  name = "Max";
  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person2();
console.log(pers);
