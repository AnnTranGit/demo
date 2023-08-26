/*
    Viết chương trình cho phép người dùng nhập vào 1 số có 3 ký số yêu cầu tính và in ra console.log tổng giá trị của 3 ký số:
    Ví dụ: 586 => 5+8+6 = 19 (in ra 19)


//input: số nhập vào: number
var inputNumber = +prompt('Nhập 1 số có 3 ký số: ');
//output: giaTriTong 3 ký số: number
var tongKySo = 0;

//process: 
//Lấy phần trăm => ví dụ lấy ra số 5
var phanTram = Math.floor(inputNumber / 100);
//Lấy phần chục => ví dụ lấy ra số 8
var phanChuc = Math.floor((inputNumber % 100) / 10);
//Lấy phần đơn vị
var donVi = inputNumber % 100 % 10;
//Tính tổng ký số
tongKySo = phanTram + phanChuc + donVi;

//In giá trị output ra giao diện
console.log('Tổng 3 số số của ', inputNumber, ' là ', tongKySo);
*/

var n = +prompt (' Nhap so here')

var hangTram = Math.floor(n/100);

var hangChuc = Math.floor(n%100/10);

var hangDv = n%10;

var totalNumber = hangTram + hangChuc + hangDv;

console.log ('Tong 3 chu so', totalNumber);

