//アクセシビリティ修飾子
class User{
    name:string='';
    private age:number=0;  //同じプロパティ内でしかアクセスできない

    constructor(name:string,age:number){
        this.name =name;                 //コンストラクタは「readonry」にも代入できる
        this.age=age;
    }

    isAdult():boolean{
        return this.age >=18;   //ageにアクセスできる
  }
}

//インスタンス
const olivia =new User('oriva',23);
console.log(olivia.name);
// console.log(olivia.age); できない
console.log(olivia.isAdult());//こっちならできる