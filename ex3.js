
// 1. Mục tiêu
// Luyện tập dom và event.

// 2. Mô tả
// Xây dựng giao diện gồm 1 nút bấm và 1 dòng chữ
// Khi ấn vào nút thì dòng chữ sẽ thay đổi nội dung của dòng chữ trên giao diện.

function handleClick() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("demo2").innerHTML = "Text after change";
}