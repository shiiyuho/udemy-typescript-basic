//デフォルト値

const getRectangle= (height:number,width:number = 10)=>{
    return height*width;                       //デフォルト値（右にしかつけられない）
};

console.log(getRectangle(3,5));