document.addEventListener("DOMContentLoaded", function () {
  // Thêm class "table-bordered" cho <table>
  const table = document.querySelector("table");
  table.classList.add("table-bordered");

  // Thêm class "bg-dark" cho <tr> đầu tiên (hàng đầu tiên ngoại trừ header)
  const firstRow = table.querySelector("tr:nth-child(2)"); // Chú ý: Dùng nth-child(2) để loại bỏ header
  firstRow.classList.add("bg-dark");

  // Thêm 1 hàng mới vào table
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>Sean</td>
        <td>Reyes</td>
        <td>@sreyes</td>
    `;
  table.appendChild(newRow);

  // Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
  const leonaRow = table.querySelector("tr:nth-child(4)");
  leonaRow.querySelector("td:nth-child(4)").textContent = "@dixonl";

  // Di chuyển “Rosa Reed” lên đầu bảng và cập nhật các số thứ tự
  const rosaRow = table.querySelector("tr:nth-child(5)");
  table.insertBefore(rosaRow, table.rows[1]); // Chuyển lên đầu bảng (sau header)

  // Đổi chỗ 2 cột “First” và “Handle” cho nhau
  const headerRow = table.querySelector("tr:first-child");
  swapColumns(headerRow, 2, 4); // Đổi chỗ cột 2 (First) và cột 4 (Handle)

  // Các row có index là số lẻ (trừ hàng tiêu đề cột) thì có background = “#f2f2f2”
  const rows = table.querySelectorAll("tr:nth-child(odd):not(:first-child)");
  rows.forEach((row) => {
    row.style.backgroundColor = "#f2f2f2";
  });
});

// Hàm đổi chỗ hai cột của một hàng
function swapColumns(row, index1, index2) {
  const cells = row.querySelectorAll("td");
  const temp = cells[index1 - 1].innerHTML;
  cells[index1 - 1].innerHTML = cells[index2 - 1].innerHTML;
  cells[index2 - 1].innerHTML = temp;
}
