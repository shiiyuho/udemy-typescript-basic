"use strict";
//while文
let i = 1; //変数の初期化　　　　　　繰
while (i <= 3) { //whileの条件式　　  り
    console.log(i); //出力         返
    i++; //し
}
//「j」が5になったらwihle文を抜ける
let j = i;
while (j <= 10) {
    console.log(j);
    if (j === 5) {
        break;
    }
    j++;
}
