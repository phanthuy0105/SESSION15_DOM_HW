
// 1. Mục tiêu
// Luyện tập sử dụng dom và event.

// 2. Mô tả
// Viết chương trình khai báo mảng names chứa họ tên của người dùng
// Tiến hành in tất cả các tên trong mảng lên danh sách trên màn hình trình duyệt.
// Ví dụ: khai báo mảng [“Nguyễn Văn A”, “Vũ Thị B”, “Nguyễn Minh C”] sẽ tạo ra danh sách:

let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

let nameLength = names.length;

let text = "<ul>";
for (i = 0; i <= nameLength - 1; i = i + 1) {
    text += "<li>" + names[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;



// cách 2
// const names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

// let text = "<ul>";
// names.forEach(myFunction);
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// function myFunction(value) {
//     text += "<li>" + value + "</li>";
// } 