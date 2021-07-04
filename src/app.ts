class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // thisを型付けする
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// This is bad.
// accounting.employees[2] = "Mike";

accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
