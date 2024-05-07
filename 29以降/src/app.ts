//練習問題
//Aさんの体重は６０Kg、身長は！1.7Mです

//AさんのBMIを計算
const height = 1.7;
const weight = 60;

const BMI =weight/(height*height);
console.log(BMI);

if(BMI>=25){
    console.log('肥満');
}else if(BMI>=18.5){
    console.log('普通');
}else if(BMI<=18.5){
    console.log('痩せ');
}else{}