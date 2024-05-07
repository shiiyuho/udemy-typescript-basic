const colors=['Red','Green','Blue'];
console.log(colors);

//配列に新たな値を入れるやり方
colors.push('black');
console.log(colors);

//先頭に追加
colors.unshift('white');
console.log(colors);

//[Red]を赤に書き換える
colors[1]='Aka';
console.log(colors);

//指定した位置に一つ以上を挿入
const insertArr =['a','b','c'];
insertArr.splice(1,0,'d');
insertArr.splice(2,0,'x','y','z');
console.log(insertArr);

//インデックス２から二つ削除
insertArr.splice(2,2);
console.log(insertArr);

//結合
const arr1=['a','b','c'];
const arr2=['e','f','g'];
const mergedArr=arr1.concat(arr2);
console.log(mergedArr);

//先頭削除
const arr3=['a','b','c'];
arr3.shift();
console.log(arr3);

//末尾を削除
arr3.pop();
console.log(arr3);

//スプレッド構文(配列を追加)
const arr4=['1','2','3'];
const arr5=['4','5','6',...arr4];
console.log(arr5);