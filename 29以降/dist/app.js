"use strict";
//演習（swih）
// let num = 1;
//console.log(num); ←必須ではない
//ランダム機能の場合
let num = Math.floor(Math.random() * 5) + 1;
switch (num) {
    case 1:
        console.log('大吉');
        break;
    case 2:
        console.log('中吉');
        break;
    case 3:
        console.log('小吉');
        break;
    case 4:
        console.log('吉');
        break;
    case 5:
        console.log('凶');
        break;
    default:
        console.log('規定外の数値です。');
        break; //break忘れずに！！
}
