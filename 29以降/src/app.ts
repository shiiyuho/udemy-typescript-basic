//コンストラクタ
class User{
    name:string='';
    age:number=0;

    constructor(name:string,age:number){
        this.name =name;                 //コンストラクタは「readonry」にも代入できる
        this.age=age;
    }

    isAdult():boolean{
        return this.age >=18;
  }
}

//インスタンス
const olivia=new User('orivia',23);
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());