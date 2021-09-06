class Department {
  // private it: string;
  // name: string;
  // protectedはサブクラスからもアクセス可能
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.it = it;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}}`);
  }

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
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

console.log(accounting);

// const itCopy = { name: "DUMMY", describe: it.describe };
// undefinedを避けるにはnameプロパティを作成する
// itCopy.describe();
