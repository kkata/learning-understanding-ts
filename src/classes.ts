abstract class Department {
  static fiscalYear = 2020;

  // private it: string;
  // name: string;
  // protectedはサブクラスからもアクセス可能
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.it = it;
    // this.name = n;
  }

  abstract describe(this: Department): void;
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"; readonlyで変更できない
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.addEmployee.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
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
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
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

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Jane");

// it.employees[2] = "Anne";

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Something");
console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();

// accounting.printEmployeeInformation();
// console.log(accounting);

// const itCopy = { name: "DUMMY", describe: it.describe };
// undefinedを避けるにはnameプロパティを作成する
// itCopy.describe();
