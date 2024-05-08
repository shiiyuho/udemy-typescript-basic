"use strict";
//オプショナルプロパティ
class User {
    name; //オプショナルなプロパティとなる
    age = 0;
}
const olivia = new User();
console.log(olivia.name);
console.log(olivia.age);
//値の挿入
olivia.name = 'ishii';
console.log(olivia.name);
