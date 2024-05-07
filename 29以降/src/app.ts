//オブジェクト
const user={
    name:'Yuho Ishii',
    gender:'man',
    age:20
}
//ドット記法での出力
console.log(user.name);
console.log(user.gender);
console.log(user.age);
//ブラケット記法での出力
console.log(user['name']);
console.log(user['gender']);
console.log(user['age']);

//プロパティ内の値を書き換えたいとき(ドット版とブラケット版)
user.age=22;
console.log(user.age);
user['age']=23;
console.log(user['age']);

//プロパティの個数を求めるには
console.log(Object.keys(user).length);

//キーの一覧を習得するには？
console.log(Object.keys(user));

//型を指定する書き方
const user2:{
    name:string,
    gender:string,
    age:number
}={
    name:'Ishii',
    gender:'man',
    age:20
}

console.log(user2.name);
console.log(user2.gender);
console.log(user2.age);

interface UserObj{
    name:string,
    gender:string,
    age:number
}

const user3:UserObj={
    name:'Ishii',
    gender:'man',
    age:20
}

console.log(user2.name);
console.log(user2.gender);
console.log(user2.age);