//クラスの継承
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

class AdminUser extends User{ //「extends」で継承したクラスを作る
       adminRole:number=1;

       public sayAdminRole(){
        console.log(`My adminRole is ${this.adminRole}`)
       }
}
const emma=new AdminUser('Emma',16);
console.log(emma.name);
console.log(emma.isAdult());

emma.sayAdminRole();