// abstractクラスはインスタンス化できない
abstract class Department {
  // staticプロパティやメソッドはクラスの中からアクセスできない。
  static fiscalYear = 2020;

  // private readonly id: string;
  // name: string;
  // protectedでサブクラスからアクセスできるようになる
  protected employees: string[] = [];

  static createEmploee(name: string) {
    return { name: name };
  }

  // constructorのアクセス装飾子は省略しない
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;

    // アクセスするにはクラス名も指定する
    console.log(Department.fiscalYear);
  }

  // abstractクラスはサブクラスでメソッドの実装を強制する
  abstract describe(this: Department): void;

  // thisを型付けする
  // describe(this: Department) {
  //   console.log(`Department ${this.id}: ${this.name}`);
  // }

  addEmployee(employee: string) {
    // 代入できない
    // this.id= 'd3'
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT部門 - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("会計部門 - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmploee("Max");
console.log("employee1", employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
// This is bad.
// it.employees[2] = "Mike";

it.printEmployeeInformation();

it.describe();

console.log(it);

const accounting = new AccountingDepartment("a1", []);

accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Something");
// console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();

accounting.describe();

// const itCopy = { name: "Dummy", describe: it.describe };
// itCopy.describe();
