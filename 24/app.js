var firstName = 'Yuho';
var lastName = 'Ishii';
var messege1 = 'Hello! I am' + firstName + ' ' + lastName + '.';
console.log(messege1);
//テンプレートリテラル
var messege2 = "Hello! I am ".concat(firstName, " ").concat(lastName, "."); //「``」バックコートなので注意
//書き方としては、${変数名1} ${変数名2} 間にカンマはつけない
console.log(messege2);
//改行も入れられる
var messege3 = "Hello!\n I am ".concat(firstName, " ").concat(lastName, "."); //ここで改行すると。。。
console.log(messege3);
