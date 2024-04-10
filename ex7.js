
// 1. Mục tiêu
// Luyện tập sử dụng hàm.

// 2. Mô tả
// Tạo giao diện như hình, mỗi khi bấm vào nút thì thêm một hàng mới vào bảng.


function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Cell 1 row 2";
    cell2.innerHTML = "Cell 2 row 2";
    cell3.innerHTML = "Cell 3 row 2";
}

document.getElementById("myTable").style.border = "1px solid black";
document.querySelector("td").style.border = "1px solid black";

document.querySelector("button").style.backgroundColor = "#4CAF50";
document.querySelector("button").style.borderRadius = "5px";
document.querySelector("button").style.border = "none";
document.querySelector("button").style.padding = "5px 10px";
document.querySelector("button").style.color = "#fff";