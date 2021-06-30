let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// 戻り値を絶対返さない関数
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("エラーが発生しました", 500);
//出力されない
console.log(result);
