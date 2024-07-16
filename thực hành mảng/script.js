// tạo mảng 1 chiều có n phần tử
let M1 = [];
let n;
while (true) {
  n = Number(prompt(`mời nhập vào số phần tử,lưu ý: n phải là số nguyên`));

  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (i = 0; i < n; i++) {
  let input = Number(prompt(`mời nhập vào giá trị cho phần tử:${i + 1}`));
  M1.push(input);
}
console.log(M1);
console.log;
console.log();
console.log();
console.log();
