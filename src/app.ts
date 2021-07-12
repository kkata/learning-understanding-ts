function Logger(LogString: string) {
  return function (constructor: Function) {
    console.log(LogString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // return function (_: Function) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("ログ出力中 - PERSON")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person2 {
  name = "Max";
  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person2();
console.log(pers);
