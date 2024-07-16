const sinhVien = function (fullName, ID, birthDay, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthDay = birthDay;
  this.homeTown = homeTown;

  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.birthDay} ${this.homeTown}`;
  };
};
function Student(fullName, ID, birthDay, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthDay = birthDay;
  this.homeTown = homeTown;

  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.birthDay} ${this.homeTown}`;
  };
}
const sv1 = new Student("nguyen van a", "12345", 1996, "hanoi");
console.log(sv1);
console.log("nguyeen mau chame sv1");
console.log(Object.getPrototypeOf(sv1));
Student.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthDay;
};
console.log(sv1.calcAge(2024));
