// Phần I: Xử lý số
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function banKinhhinhCau(r) {
  let result = (4 / 3) * (3.14 * r ** 3);
  return result;
}
const r = 5;
const ketQua = banKinhhinhCau(r);
console.log(`Thể tích hình cầu có bán kính ${r} là ${ketQua}`);
// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function tongGiuahaiSo(a, b) {
  let ketQua = 0;
  if (a == b) {
    return ketQua;
  } else if (a > b) {
    for (let i = b + 1; i < a; i++) {
      ketQua += i;
    }
    return ketQua;
  } else {
    for (let i = a + 1; i < b; i++) {
      ketQua += i;
    }
    return ketQua;
  }
}
console.log(tongGiuahaiSo(6, 3));

// Bài 3: Cho 1 số nguyên dương, viết hàm kiểm tra xem số đó có phải số hoàn hảo (perfect number hay không)
function isPerfectNumber(number) {
  if (number <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    return true;
  } else {
    return false;
  }
}

// Phần II: Xử lý chuỗi
// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’.
function capitalizeFirstLetter(str) {
  let lowerCaseStr = str.toLowerCase();
  const words = lowerCaseStr.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
  const result = capitalizedWords.join(" ");

  return result;
}
const inputString = "hELLO world";
const newString = capitalizeFirstLetter(inputString);
console.log(newString);
// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ‘‘HELLO world’’ => ‘‘hello-world’’.
function ChangeLowerword(str) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, "-");
  return str;
}
// Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ‘‘HELLO world’’ có chứa ‘‘how’’ nhưng không chứa ‘‘hey’’ và không chứa ‘‘ww’’.**
function isStr2Ofstr1(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str2) {
    if (str1.indexOf(char) == -1) {
      return false;
    }
  }
  return true;
}

console.log(isStr2Ofstr1("HELLO world", "how"));

// Phần III: Xử lý mảng
// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ‘’‘’.
function removeFalseValues(array) {
  let newArray = [];

  for (let value of array) {
    if (
      value !== false &&
      value !== null &&
      value !== undefined &&
      !isNaN(value) &&
      value !== 0 &&
      value !== ""
    ) {
      newArray.push(value);
    }
  }

  return newArray;
}

const inputArray = [false, null, undefined, NaN, 0, "", 42, "hello", true];
const filteredArray = removeFalseValues(inputArray);
console.log(filteredArray);

//Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [‘‘aba’’, ‘‘aa’’, ‘‘ad’’, ‘‘c’’, ‘‘vcd’’] thì kết quả trả về [‘‘aba’’, ‘‘vcd’’].
function filterMaxLengthStrings(array) {
  let maxLength = 0;
  for (let str of array) {
    if (str.length > maxLength) {
      maxLength = str.length;
    }
  }
  const maxLengthStrings = array.filter((str) => str.length === maxLength);

  return maxLengthStrings;
}

const inputArray = ["aba", "aa", "ad", "c", "vcd"];
const result = filterMaxLengthStrings(inputArray);
console.log(result);
// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function compareArray(arr1, arr2) {
  let result = [];
  result = arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
  return result;
}
console.log(compareArray([1, 2, 3], [1, 3, 4, 5, 5]));

// Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau                 [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

// Phần IV: Object
// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function calculateAverageAge(students) {
  let totalAge = 0;

  for (let student of students) {
    totalAge += student.age;
  }

  const averageAge = totalAge / students.length;

  return averageAge;
}

// Mảng các sinh viên
const students = [
  { name: "Huy", age: 20 },
  { name: "Ha", age: 22 },
  { name: "Hung", age: 21 },
];

const averageAge = calculateAverageAge(students);
console.log(averageAge);
// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function ageDown(students) {
  students.sort(function (a, b) {
    return b.age - a.age;
  });
  return students;
}
const students = [
  { name: "Huy", age: 20 },
  { name: "Ha", age: 22 },
  { name: "Hung", age: 21 },
];
console.log(ageDown(students));

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function nameDown(students) {
  students.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return 1;
    } else {
      return -1;
    }
  });
  return students;
}

const students = [
  { name: "An", age: 20 },
  { name: "Ha", age: 22 },
  { name: "Nhi", age: 21 },
];

console.log(nameDown(students));

// // Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ‘‘H’’ hoặc ‘‘h’’.
// function nameIncludesH(students) {
//   const result = students.filter((student) => {
//     const firstLetter = student.name.charAt(0);
//     return firstLetter.toLowerCase() == "h";
//   });
//   return result;
// }
// const students = [
//   { name: "An", age: 20 },
//   { name: "Ha", age: 22 },
//   { name: "Nhi", age: 21 },
// ];
// console.log(nameIncludesH(students));

// // Phần V: Datetime
// // Bài 1: Viết một hàm JavaScript để tính số ngày còn lại từ ngày hiện tại đến một ngày cho trước.
// function timeRemaining(dateString) {
//   const date = new Date(dateString);
//   const now = new Date();
//   const dayDifferent = Math.ceil(
//     (date.getTime() - now.getTime()) / (1000 * 3600 * 24)
//   );
//   return dayDifferent;
// }
// console.log(timeRemaining("2024-08-14"));

// Bài 2: Tìm năm gần nhất là năm nhuận
function findNearestLeapYear() {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= currentYear + 4; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return year;
    }
  }
}
console.log(findNearest, LeapYear());
// Bài 3: Viết hàm nhận vào giá trị là một chuỗi thời gian dạng DD-MM-YYYY (Việt Nam), cho biết ngày đó có phải cuối tuần hay không
function IsWeekend(dateString) {
  const date = new Date(dateString).getDay();
  return date == 0;
}
console.log(IsWeekend("2024-06-16"));

// Phần V: Tổng hợp
// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ‘‘giờ:phút:giây’’, tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ‘‘09:20:56’’ và x = 7 thì kết quả là ‘‘09:21:03’’.
// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
function snailClimb(h, x, y) {
  let chieuCaohientai = 0;
  let ngay = 0;
  while (chieuCaohientai < h) {
    chieuCaohientai += x;
    ngay++;
    if (chieuCaohientai >= h) {
      return ngay;
    }
    chieuCaohientai -= y;
  }
}

console.log(snailClimb(10, 3, 2));

// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
function sortDigits(number) {
  const digits = Array.from(String(number), Number);
  digits.sort((a, b) => a - b);
}
