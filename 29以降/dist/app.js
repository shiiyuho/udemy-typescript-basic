"use strict";
// const getRectang =function(height:number,width:number):number{
//     return height*width;
// }
// console.log(getRectang(3,5));
//上の関数リテラルをアロー関数に書き換えてすっきりさせる書き方
const getRectangle = (height, width) => {
    return height * width;
};
console.log(getRectangle(3, 5));
//中括弧内が1文の場合は下のように省略できる
const getRectang = (height, width) => height * width;
console.log(getRectang(3, 5));
