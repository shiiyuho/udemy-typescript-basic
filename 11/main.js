function fn(nunber){
    return number * 2;
}
// const fn = function(number){ //無名関数
//     return number * 2;
// }

console.log(fn(2));  //呼び出し元は実行した場所

// const fnArrow = (number)=>{   //1~3のやつをアロー関数に書き換えたやつ  関数が1つの時は、丸かっこが省略できる。（関数を増やす場合は「,」で区切る
//     return number * 2; 　　　 //本文が1行の場合には、下のように波括弧と「return」を省略できる
// }

// const fnArrow = number => number * 2; //本文が1行の時の書き方

const fnArrow = number => {  //本文が複数行の場合は波括弧は消せない
    console.log(number);
    return number * 2
};
                               //オブジェクト
const fnArrowObj = number => ({result: number * 2})  //戻り値が「オブジェクト」の場合
                  //引数　　//丸括弧で囲うことでリザルトというプロパティを持ったオブジェクトが関数の実行結果として返却される
console.log(fnArrow(2));