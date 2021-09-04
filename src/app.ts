class Department {
  // private it: string;
  // name: string;
  private employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
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
accounting.addReport("Something");
accounting.printReports();
console.log(accounting);

// const itCopy = { name: "DUMMY", describe: it.describe };
// undefinedを避けるにはnameプロパティを作成する
// itCopy.describe();
