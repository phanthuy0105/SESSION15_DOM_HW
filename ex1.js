
// 1. Mục tiêu
// Luyện tập dom và event.
// 2. Mô tả

// Không viết thêm gì vào thẻ <body> ngoại trừ nhúng javascript trong file html
// Viết chương trình hiển thị danh sách lên trang web như sau
// . List item number 1
// . List item number 2
// . List item number 3


document.body.innerHTML = "<ul class=demo><li>List item number 1</li><li>List item number 2</li><li>List item number 3</li></ul>";

// fontSize cho ul li
document.querySelector(".demo").style.fontSize = "40px";