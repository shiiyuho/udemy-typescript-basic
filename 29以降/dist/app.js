"use strict";
//コンストラクタ
class User {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name; //コンストラクタは「readonry」にも代入できる
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}
//インスタンス
const olivia = new User('orivia', 23);
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());
