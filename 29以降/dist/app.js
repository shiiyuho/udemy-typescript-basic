"use strict";
//クラスの継承
class User {
    name = '';
    age = 0; //同じプロパティ内でしかアクセスできない
    constructor(name, age) {
        this.name = name; //コンストラクタは「readonry」にも代入できる
        this.age = age;
    }
    isAdult() {
        return this.age >= 18; //ageにアクセスできる
    }
}
class AdminUser extends User {
    adminRole = 1;
    sayAdminRole() {
        console.log(`My adminRole is ${this.adminRole}`);
    }
}
const emma = new AdminUser('Emma', 16);
console.log(emma.name);
console.log(emma.isAdult());
emma.sayAdminRole();
