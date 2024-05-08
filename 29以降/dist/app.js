"use strict";
//オーバーライド
class User {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}
class AdminUser extends User {
    adminRole = 1;
    sayAdminRole() {
        console.log(`My adminRole is ${this.adminRole}`);
    }
    isAdult() {
        return true; //ユーザークラスの「isAudult」をオーバーライドしている
    }
}
const emma = new AdminUser('emma', 0);
console.log(emma.isAdult());
