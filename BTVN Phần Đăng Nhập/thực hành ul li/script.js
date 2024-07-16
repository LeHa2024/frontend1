Sử dụng javascript để thực hiện những công việc sau
Thêm 3 thẻ < li > có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ul = document.getElementById("list");
let li8 = document.createElement('li');
let li9 = document.createElement('li');
let li10 = document.createElement('li');
li8.innerText = "item 8";
li9.innerText = "item 9";
li10.innerText = "item 10";
ul.appendChild(li8);
ul.appendChild(li9);
ul.appendChild(li10);
Sửa nội dung cho thẻ < li > 1 thành màu đỏ(color)
document.querySelector(#list li: nth - child(1)).style.color = "red";

Sửa background cho thẻ < li > 3 thành màu xanh(background - color)
document.querySelector('#list li: nth - child(3)').style.backgroundColor = "blue";
Remove thẻ < li > 4
let li4 = document.querySelector('#list li: nth - child(4)');
ul.removeChild(li4);
Thêm thẻ < li > mới thay thế cho thẻ < li > 4 bị xóa ở bước trước, thẻ < li > mới có nội dung bất kỳ
let newli = document.createElement("li");
newli.innerText = "item new";
const li5 = document.querySelector('#list li: nth - child(4)');
ul.insertBefore(newli, li5);

Thêm 1 nút “add” + 1 ô input để nhập text.Mỗi khi bấm nút thêm 1 thẻ < li > có nội dung là nội dung trong ô input vào cuối danh sách
function addItem() {
    
}
    
Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
Thêm 1 nút “Hide” trên đầu của danh sách < ul >.
function tongleList() {
    const listEl = document.querySelector("#list")
}
Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”