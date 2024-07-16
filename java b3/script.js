// // Cho 1 object chứa danh sách sinh viên dạng object
// // Với key là tên sinh viên và value là quốc gia của sinh viên đó
// const STUDENTS = {
//   ba: "Vietnam",
//   phoebe: "America",
//   kim: "Korea",
//   maria: "Japan",
// };

// //  Viết hàm in ra lần lượt các thuộc tính và giá trị của đối tượng
// // Hàm nhận vào tham số obj là một đối tượng bất kỳ
// function printPairs(obj) {
//   for (let key in obj) {
//     console.log(`${key}:${obj[key]}`);
//   }
// }

// // Viết hàm nhận vào một tên bất kỳ
// // Kiểm tra tên có trong danh sách sinh viên hay không
// // Nếu có thì in ra câu chào dạng "Hello, I'm Ba! I'm from Vietnam"
// // Nếu không có thì in ra "Hello, I'm guest"
// function greeting(name) {
//     if()
// }

// }
// function kiemTraChuoiDoiXung(chuoi) {
//   chuoi = chuoi.replace(/\s/g, "").toLowerCase();

//   if (daoNguocChuoi(chuoi) == chuoi) {
//     return true;
//   }
//   return false;
// }

// console.log(kiemTraChuoiDoiXung("Racecar"));
// function daoNguocChuoi(chuoi) {
//   let daoNguoc = "";
//   chuoi = chuoi.replace(/\s/g, "").toLowerCase();
//   for (let i = chuoi.length; i >= 0; i--) {
//     daoNguoc += chuoi[i];
//   }
//   return daoNguoc;

// //

// // // Ví dụ sử dụng hàm
// // console.log(kiemTraChuoiDoiXung("Racecar")); // Kết quả: true
// function sapXepSoNhoNhat(so) {
//   // Chuyển số nguyên thành mảng các chữ số
//   let mangChuSo = Array.from(String(so), Number);

//   // Sắp xếp mảng các chữ số theo thứ tự tăng dần
//   mangChuSo.sort((a, b) => a - b);

//   // Loại bỏ số 0 ở đầu mảng nếu có
//   while (mangChuSo[0] === 0) {
//     mangChuSo.shift();
//   }

//   // Nếu mảng rỗng sau khi loại bỏ số 0, trả về 0
//   if (mangChuSo.length === 0) {
//     return 0;
//   }

//   // Chuyển mảng các chữ số thành số nguyên và trả về
//   return parseInt(mangChuSo.join(""));
// }

// // Ví dụ sử dụng hàm
// console.log(sapXepSoNhoNhat(30070)); // Kết quả: 234789

// function soNhonhatCothe(n) {
//   let mangChuSo = Array.from(String(n), Number);
//   mangChuSo.sort((a, b) => a - b);
//   if (mangChuSo[0] == 0) {
//     let viTrihoanDoikhac0 = mangChuSo.findIndex((s) => s !== 0);
//     [mangChuSo[0], mangChuSo[viTrihoanDoikhac0]] = [
//       mangChuSo[viTrihoanDoikhac0],
//       mangChuSo[0],
//     ];
//   }
//   return parseInt(mangChuSo.join(""));
// }
// console.log(soNhonhatCothe(29800));

// function chuyenSnakeCake(chuoi) {
//   chuoi = chuoi.toLowerCase();
//   chuoi = chuoi.replace(/\);
// }

// let a = Number(prompt(`nhập vào giá trị chiều dài hình chữ nhật`));
// console.log(typeof r);
// let b = Number(prompt(`nhập vào giá trị chiều rộng hình chữ nhật`));
// console.log(typeof r);
// // diện tích hình chữ nhật
// dt = a * b;
// console.log(`diện tích hình chữ nhật là ${dt}`);
// let mang = ["ba", "an", "huy", "son"];
// console.log(`so phan tu cua mang la ${mang.length}`);
// console.log(`gia tri thu 3 của mang la ${mang[2]}`);
// for (let i = 0; i < mang.length; i++) {
//   console.log(`phan tu thư ${i + 1} là ${mang[i]} `);
// }
// for (let name of mang) {
//   console.log(name);
// }
// let numbers = [1, 3, 7];
// function mangBinhPhuong(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] ** 2;
//   }

//   return numbers;
// }
// console.log(mangBinhPhuong(numbers));
// console.log(`mang dao nguoc la ${numbers.reverse()}`);
// console.log(`xoa phan tử cuối cùng trả về giá trị ${numbers.pop()}`);
// console.log(`thêm giá trị vào mảng ${numbers.push(5)}`);
// console.log(`mang dao nguoc la ${numbers.reverse()}`);
// console.log(`mang dao nguoc la ${numbers.reverse()}`);

// let numbers = [1, 3, 7];
// function chuyenMang01(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] % 2;
//   }
//   return numbers;
// }
// console.log(chuyenMang01(numbers));

// function filterEvenNumber(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let chuoi = [1, -3, 5];
// console.log(filterEvenNumber(chuoi));
function hasPrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  return arr;
}

let chuoi = [1, -3, 5];
console.log(hasPrime(chuoi));
