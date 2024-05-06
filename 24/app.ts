const firstName = 'Yuho';
const lastName ='Ishii';

const messege1='Hello! I am'+firstName + ' ' +lastName+'.';
console.log(messege1);

//テンプレートリテラル
const messege2=`Hello! I am ${firstName} ${lastName}.`;//「``」バックコートなので注意
                            //書き方としては、${変数名1} ${変数名2} 間にカンマはつけない
console.log(messege2);
//改行も入れられる
const messege3=`Hello!
 I am ${firstName} ${lastName}.`;//ここで改行すると。。。
console.log(messege3);
