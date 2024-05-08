//メソッド
class User{
    name:string='';
    age:number=0;

    isAdult():boolean{
        return this.age>=18;    //Userの値が18以上なら「true」、以下なら「false」と出力される
    }

    setAge(age:number){
        this.age=age;   //thisは自分を表す
    }
}

const olivia=new User();
console.log(olivia.age);
console.log(olivia.isAdult());

olivia.setAge(23);
console.log(olivia.age);
console.log(olivia.isAdult());

//2つ目のインスタンス
const liam=new User();
liam.setAge(18);
console.log(liam.age);
console.log(liam.isAdult());