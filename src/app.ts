class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  // thisを型付けする
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("accounting");

accounting.describe();

const accountingCopy = { name: "Dummy", describe: accounting.describe };

accountingCopy.describe();
