//lenh output
//   alert("hello world");

document.write("hello world");

console.log("hello world");
console.error("loi abc");

//bien: variables

/* cách đặt tên biến:

+ biến không được đặt trùng với các từ khóa của javascript  (từ khóa khi gõ ra sẽ có màu khác so với biến

+ Biến đặt tên phải có ý nghĩa (sau này đọc lại hiểu giá trị đó là gì)

+biến đặt heo kiểu camelcase: tuThuNhatVietThuong
  */
var mess = "hello cybersoft";
console.log("mess");

//kieu du lieu primitive type

stringHoTen = "an tran"; //kieu string chuỗi thường dùng để lưu tên người, email, địa chỉ

numberLuong = 1000; // Kiểu number (số) dùng để lưu những giá trị tính toán

kiemTra = true; //boolean nhận 2 giá trị là true | false (true ứng với 1 và false vs 0)

//null là gtri rỗng, undefined: gtri khg xác định

/* toán tử:
Toán tử số học: +-* / %


*/

var a = 5;
var b = 10;
var c = 13;
var tong = a + b;

var soDu = b % a;
console.log("Tong la", tong);

var hieu = b - a;
var tich = a * b;
var thuong = b / a;

console.log("hieu la", hieu);
console.log("tich: ", tich);
console.log("thuong: ", thuong);
console.log("so du la", soDu);

var number = 5;
number++;
console.log("number", number);

number += 1;
console.log("number", number);

console.log("number", number++);

//   console.log("number", ++number);

//viet chuong trinh tinh diem tb ba mon : Toan ly hoa, y/c tạo ba giá trị với số điểm tự cho  và tính điểm TB in ra gd console

var diemly = 8;
var diemToan = 8;
var diemHoa = 10;

var tb = (diemly + diemToan + diemHoa) / 3;

console.log("Diem Tb", tb);

/*
  Bài 2: Viết chương trình cho phép người dùng nhập vào 2 giá trị: 
  + Số giờ làm việc 
  + Số tiền làm việc trên 1 giờ
  + In ra tiền lương ở console.log
*/

var soGioLam = prompt("Nhập vào số giờ làm:");
var soTienLam1Gio = prompt("Nhập vào số tiền làm một giờ");

var tongTien = soGioLam * soTienLam1Gio;
console.log("Tong tien nhan duoc la", tongTien);
