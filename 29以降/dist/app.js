"use strict";
//クラス宣言
class User {
    name = '';
    age = 0;
}
//クラスのインスタンス化
const olivia = new User();
console.log(olivia.name);
console.log(olivia.age);
olivia.name = 'olivia';
olivia.age = 23;
console.log(olivia.name);
console.log(olivia.age);
