
// 1. Mục tiêu
// Luyện tập dom và event.

// 2. Mô tả
// Xây dựng giao diện gồm 1 nút bấm và 1 dòng chữ
// Khi ấn vào nút thì dòng chữ sẽ thay đổi style của dòng chữ.

document.getElementById("demo").style.fontSize = "50px";

function handleClick() {
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
    document.getElementById("demo").style.fontSize = "40px";
}

// lấy bằng class
// document.querySelector(".demo").style.fontSize = "50px";

// function handleClick() {

//     document.querySelector(".demo").style.color = "red";
//     document.querySelector(".demo").style.backgroundColor = "yellow";
//     document.querySelector(".demo").style.fontSize = "40px";
// }