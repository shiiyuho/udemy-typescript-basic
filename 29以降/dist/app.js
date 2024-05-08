"use strict";
//
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
const olivia = new User('olivia', 23);
const liam = new User('liam', 25); //型注釈をする場合
