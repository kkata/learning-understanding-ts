class Department {
  // private readonly id: string;
  // name: string;
  private employees: string[] = [];

  // constructorのアクセス装飾子は省略しない
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // thisを型付けする
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

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
it.addEmployee("Manu");
// This is bad.
// it.employees[2] = "Mike";

it.printEmployeeInformation();

it.describe();

console.log(it);

const accounting = new AccountingDepartment("a1", []);

accounting.addReport("Something");
accounting.printReports();

// const itCopy = { name: "Dummy", describe: it.describe };
// itCopy.describe();
