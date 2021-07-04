class Department {
  // private id: string;
  // name: string;
  private employees: string[] = [];

  // constructorのアクセス装飾子は省略しない
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // thisを型付けする
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// This is bad.
// accounting.employees[2] = "Mike";

accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
