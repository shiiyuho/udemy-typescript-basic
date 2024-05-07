//配列
const colors : string[]=['Red','Green','Blue'];
console.log(colors);
// const num : string[]=[1,2,3];//型が違うからerror

//型を書かない書き方（型推論）
const iro =['Red','Green','Blue'];//型が明らかな場合は書かなくてよい
console.log(colors);

//型がバラバラな場合の配列
const mixdArr=['abc',1,true,false];
console.log(mixdArr);

//配列から値を取り出すときの書き方
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//配列の数の要素を取得する書き方
console.log(colors.length);

//末尾の配列の値を取得する書き方
console.log(colors[colors.length-1]);

//空の配列を宣言するには
const emptyArr:number[]=[];
console.log(emptyArr);
