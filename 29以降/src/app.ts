//オーバーライド
class User{
    name:string='';
    private age:number=0;  
    constructor(name:string,age:number){
        this.name =name;                 
        this.age=age;
    }

    public isAdult():boolean{
        return this.age >=18;   
  }
}

class AdminUser extends User{ 
       adminRole:number=1;

       public sayAdminRole(){
        console.log(`My adminRole is ${this.adminRole}`)
       }
       public override isAdult(): boolean {
           return true;            //ユーザークラスの「isAudult」をオーバーライドしている
       }
}

const emma = new AdminUser('emma',0);
console.log(emma.isAdult());
