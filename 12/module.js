export const hello=()=>{
    console.log("hello!");
};

const funcB =() => {
    console.log("funcB output")
}

export default funcB; //「default」でエクスポートできるのは、1つのファイルで1つだけ

class User{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(this.name);
    }
}

export {User}
//「export」をつけると、外部からのアクセスが可能となる。
