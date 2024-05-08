//
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

const olivia=new User('olivia',23);
const liam:User=new User('liam',25);//型注釈をする場合