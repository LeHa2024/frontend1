// const arr = [1, 3, 2, 5, 4];
//duyet qua mang in ra binh phuong
// function logSquare(a, b) {
//   a += b;
//   return a;
// }
// function logSquare(a, b) {
//   if (a >= b) return 1;
//   else return -1;
// }
//duyệt qua tất cả các phần tử và in ra bình phuong
// với mỗi phần tử gọi hàm callback một lân

// arr.forEach(logSquare);

//tìm phần tử hợp với điều kiện/ chỉ tìm một cái đầu tiên
// console.log(arr.find(logSquare));
//tìm phần tử hợp với điều kiện/ tìm tất cả
// console.log(arr.filter(logSquare));
// console.log(arr.map(logSquare)); //biến đổi phần tử trong mảng
// arr.reduce(callback); // tổng hợp tính toán các phần tử trong mảng
// console.log(arr.sort(logSquare)); //sắp xếp các phần tử trong mảng theo điều kiện
// console.log(arr.reduce(logSquare, 0));
// // / Danh sách các sản phẩm có trong giỏ hàng
// let products = [
//   {
//     name: "Iphone 13 Pro Max", // Tên sản phẩm
//     price: 3000000, // Giá mỗi sản phẩm
//     brand: "Apple", // Thương hiệu
//     count: 2, // Số lượng sản phẩm trong giỏ hàng
//   },
//   {
//     name: "Samsung Galaxy Z Fold3",
//     price: 41000000,
//     brand: "Samsung",
//     count: 1,
//   },
//   {
//     name: "IPhone 11",
//     price: 15500000,
//     brand: "Apple",
//     count: 1,
//   },
//   {
//     name: "OPPO Find X3 Pro",
//     price: 19500000,
//     brand: "OPPO",
//     count: 3,
//   },
// ];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
// function printProduct(product) {
//   console.log(
//     `${product.name.padEnd(25)} - ${product.price.toLocaleString(
//       "vi-VN"
//     )}- ${product.brand.padEnd(25)}- ${product.count}`
//   );
// }
// console.log(products.forEach(printProduct));

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
// function sumPrice(sum, product) {
//   sum += product.price * product.count;
//   return sum;
// }
// console.log(products.reduce(sumPrice, 0));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
// function isApplebrand(product) {
//   return product.brand == "Apple";
// }
// console.log(products.filter(isApplebrand));

// // 4. Tìm các sản phẩm có giá > 20000000
// function ispricethan20tr(product) {
//   return product.price > 20000000;
// }
// console.log(products.filter(ispricethan20tr));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần
// function priceUp(a, b) {
//   if (a.price >= b.price) return 1;
//   else return -1;
// }
// console.log(products.sort(priceUp));
// // 9. Sắp xếp giỏ hàng theo count giảm dần
// function priceDown(a, b) {
//   if (a.count >= b.count) return -1;
//   else return 1;
// }
// console.log(products.sort(priceDown));

// // 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

// let sortedNames = reverseSortNames(studentNames);
// console.log(sortedNames); // Output: ['Tuấn', 'Nam', 'Hoa']
// //  let sortedNames function reverseSortNames(names) {
//   names.sort(function (a, b) {
//     if (a < b) {
//       return 1; // Trả về số dương nếu a đứng sau b
//     } else if (a > b) {
//       return -1; // Trả về số âm nếu a đứng trước b
//     } else {
//       return 0; // Trả về 0 nếu a và b bằng nhau
//     }
//   });
//   return names; // Trả về mảng đã sắp xếp
// }

// // Sử dụng function để sắp xếp mảng tên học viên theo chiều ngược của bảng chữ cái
// let studentNames = ["Nam", "Hoa", "Tuấn"];
// let sortedNames = reverseSortNames(studentNames);
// console.log(sortedNames); // Output: ['Tuấn', 'Nam', 'Hoa']
// function getUniqueElements(arr1, arr2) {
// Kết hợp cả hai mảng để tạo một mảng duy nhất chứa tất cả các phần tử
// function combineArrays(arr1, arr2) {
//   const combinedArray = [...arr1, ...arr2];
//   return combinedArrays;
// }

// const mangA = [
//   [1, 2, 3],
//   [1, 2, 4],
// ];
// const result = combineArrays(mangA);
// console.log(result);
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();
// console.log(copiedArray);
// function getUniqueElements(arr1, arr2) {
// function combineArrays(arr1, arr2) {
//   const combinedArray = arr1.concat(arr2);
//   return combinedArray;
//   }
//   function getUniqueElements(arr1, arr2) {
// const combinedArray = [...arr1, ...arr2];
// arr1 = [1, 2, 3];
// arr2 = [3, 4, 5];

// console.log(combinedArray);
// function getUniqueElements(arr1, arr2) {
//   const combinedArray = arr1.concat(arr2);
//   const uniqueElements = combinedArray.filter((item, index) => {
//     return combinedArray.indexOf(item) === combinedArray.lastIndexOf(item);
//   });

//   return uniqueElements;
// }

// // Ví dụ sử dụng function
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const uniqueElements = getUniqueElements(arr1, arr2);
// console.log(uniqueElements); // Output: [1, 2, 6, 7]
function symmetricDifference(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const uniqueElements = combinedArray.filter((item, index) => {
    return combinedArray.indexOf(item) === index;
  });

  return uniqueElements;
}
console.log(symmetricDifference([1, 2, 3, 2], [1, 2, 4]));
