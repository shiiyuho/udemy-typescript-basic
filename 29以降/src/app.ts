//クラス宣言
class User{
    name: string='';
    age:number=0;
}
//クラスのインスタンス化
const olivia = new User();
console.log(olivia.name);
console.log(olivia.age);

olivia.name='olivia';
olivia.age=23;

console.log(olivia.name);
console.log(olivia.age);