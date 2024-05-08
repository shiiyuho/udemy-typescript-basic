"use strict";
//アクセシビリティ修飾子
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
//インスタンス
const olivia = new User('oriva', 23);
console.log(olivia.name);
// console.log(olivia.age); できない
console.log(olivia.isAdult()); //こっちならできる
