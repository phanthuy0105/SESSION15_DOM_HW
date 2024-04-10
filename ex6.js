
// 1. Mục tiêu
// Luyện tập sử dụng hàm.

// 2. Mô tả
// Tạo giao diện như hình, mỗi khi bấm vào nút thì thêm giá trị trong ô input vào danh sách.

function myFunction() {
    var x = document.getElementById("myText").value;
    var y = document.createElement("li");
    document.getElementById("demo").appendChild(y).innerHTML = x;
}

document.querySelector("input").style.borderRadius = "50px";
document.querySelector("input").style.padding = "5px 10px";
document.querySelector("button").style.borderRadius = "5px";
document.querySelector("button").style.padding = "5px 10px";
