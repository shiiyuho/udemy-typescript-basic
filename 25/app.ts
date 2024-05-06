// //後置演算子
// //インクリメント
// let num =10;
// num ++;
// console.log(num);
// //デクリメント
// num--;
// console.log(num);

// // 前置演算子
// ++num;
// console.log(num);
// --num;
// console.log(num);

let num1=10;
let num2=10;
let ans1 = ++num1;
let ans2 = num2++;

console.log(ans1);//前置演算子はインクリメントしてから代入　答えが11となる
console.log(ans2);//後置演算子は代入してからインクリメント　答えが10となる