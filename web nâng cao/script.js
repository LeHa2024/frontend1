// // console.log(hello world);
// // headingElement.id = "heading";
// // headingElement.className = "heading";
// // headingElement.title = "Đây là tiêu đề";
// // headingElement.lang = "en";
// // let title = document.getElementById('title');
// // title.textContent =
// //     const originalElement = document.querySelector('.para2');
// // const clonedElement = originalElement.cloneNode(true);
// //  originalElement.insertAdjacentElement('afterend', clonedElement);
// function changeName() {
//   const name = document.querySelector(".name");
//   name.textContent = "Huy";
// }
// function showFullName() {
//   const name = document.querySelector(".name");
//   name.textContent = name.textContent + "đẹp trai";
// }
// function showShortName() {
//   const name = document.querySelector(".name");
//   name.textContent = name.textContent.replace("đẹp trai", "");
// }
// function changeColor() {
//   const textColor = document.querySelector("h1");
//   textColor.style.color =
//     "#" +
//     Math.floor(Math.random() * 16777215)
//       .toString()
//       .padStart(6, "0");
// }
// function setupCounter() {
//   const minus = document.querySelector(".minus");
//   const plus = document.querySelector(".plus");
//   const counter = document.querySelector(".counter span");

//   minus.addEventListener("click", function () {
//     const value = parseInt(counter.textContent);
//     counter.textContent = value - 1;
//   });
// }
function showCircle(event) {
  var x = event.clientX;
  var y = event.clientY;

  circle.classList.add("circle");

  circle.style.left = x + "px";
  circle.style.top = y + "px";
  document.body.append(circle);
}
document.addEventListener("click", showCircle);
