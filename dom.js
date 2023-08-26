//DOM document object model

/* Cú pháp để truy xuất nội dung của thẻ 

<tag> [nội dung của tag]</tag>
.innerHTML :Noi dung cua the
.innerText : nội dung văn bản, kg phải thẻ
*/

document.getElementById('text').innerHTML = 'Hello bc 57';


// OR 
// var tagP = document.getElementById('text');
// tagP.innerHTML = 'hello bootcamp 57';


/*
Cú pháp truy xuất đến nd hình ảnh của thẻ img
.src thuộc tính hình ảnh của thẻ

*/

var tagImg = document.getElementById('hinhAnh');
tagImg.src = './img/3fc1f3ed-812a-4711-a5a5-344fdd3e200e.jpg';

/*
    Cú pháp truy xuất đến nội dung thẻ input
    .value: Lấy giá trị nhập trên thẻ input
    .className: mô tả class của thẻ 
    .addClass: thêm class
*/

var tagInput = document.getElementById('input-text');
tagInput.value = 'hello bcccccc57'
tagInput.className = 'form-control w-25'
tagInput.classList.add('bg-danger');

/*
    Thay đổi style của thẻ
    .style
    css     
    font-size => fontSize
    background-color => backgroundColor

*/

tagInput.style.fontSize = '30px';
tagInput.style.color = 'white'