"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private it: string;
        // name: string;
        // protectedはサブクラスからもアクセス可能
        this.employees = [];
        // this.it = it;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // this.id = "d2"; readonlyで変更できない
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.addEmployee.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    // admins: string[];
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT部門 - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }
    describe() {
        console.log("会計部門 - ID: " + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
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
//# sourceMappingURL=classes.js.map