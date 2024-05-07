//function命令
function rectangle(height:number,width:number):number{ //値に型を指定する書き方
       //関数名     引数１:型     引数２:型
    return height*width; //型推論「number型」
            //戻り値
}

console.log(rectangle(3,5));