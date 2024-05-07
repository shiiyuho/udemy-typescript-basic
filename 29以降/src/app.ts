//スコアの平均を求める
const score=[100,90,80,70,60];
// console.log(score);
let sum=0;
for(let i=0;i<score.length;i++){
    sum +=score[i];
}
//平均値を求める
const average = sum / score.length;

console.log(`sum:${sum}`);
console.log(`average:${average}`);
