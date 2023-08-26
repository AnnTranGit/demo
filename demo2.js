// var canhA = +prompt ('Nhap canh A') ;
// var canhB = +prompt ('Nhap canh B') ;

// var canhHuyen = Math.sqrt ((canhA * canhA) + (canhB * canhB))

// console.log ('Canh huyen', canhHuyen)



//input: canh1:number, canh2:number
var canh1 = +prompt('Cạnh 1:');
var canh2 = +prompt('Cạnh 2:');
//output: canhHuyen: number
var canhHuyen = 0;

//process: 
//Bước 1: Tính tổng bình phương 2 cạnh góc vuông
var tongBP2C = canh1 * canh1 + canh2 * canh2;
//Bước 2: Lấy căn tổng bình phương 2 cạnh góc vuông gán cho cạnh huyền
canhHuyen = Math.sqrt(tongBP2C);

//In giá trị output ra giao diện
console.log('Cạnh huyền: ', canhHuyen);

