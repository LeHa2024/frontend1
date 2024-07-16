// window.addEventListener("DOMContentLoaded",)
// $(function () {
// console.log(document.querySelector("h1"));
// $(selector | node | jqueryObject);
//   const $h1 = $("h1");
//   //jquery Object
//   console.log($h1);
//   if ($h1.length > 0) {
//     // do something
//   }
// truy cập chỉnh sửa nội dung
//   console.log($h1.text(),); //text content/inner text
//     $h1.text("hahahaha");
//     console.log($h1.attr("title"));
//     $h1.attr("title,""hehehe");
//     console.log($h1.html());
//     $h1.html("xin chào,<button>hihihi</button>!")
//     console.log($h1.hasClass("heading"));
//     $h1.addClass("heading heading-2");
//     $h1.remove("heading-2");
//     $h1.toggleClass("heading-3");
//     $h1.css({
//         color: "bluegreen";
//         fontSize: 40px;
//     })
//   $("h1")
//     .text("hello jQuery")
//     .attr({
//       title: "hello",
//       id: "heading",
//     })
//     .css({
//       color: "red",
//       fontSize: "40px",
//     })
//     .click(function () {
//       console.log("aaaabc");
//     })
//     .addClass("heading")
//     .html("xinchao");
//   const $text = $("input[name=`text`]");
//   console.log($text.val());
//   $text.val("huwuwu");
//   $checkbox = $$("input[name=`checkbox`]");
//   console.log($checkbox.prop("checked"));
//   $checkbox.prop;
// });
$(function () {
  $("h1")
    .css({
      color: "red",
    })
    .text($("heading").text().toUpperCase);
  $(".para").css({
    color: "Blue",
    fontSize: "40px",
  });
  $(".para-3").after('<a href="https://facebook.com">Facebook</a>');
  $("title").text("Đây là thẻ tiêu đề");
  $(".description").addClass("text-bold");
  $(".para-3").replaceWith("<button>Click Me</button>");
  $("para-2").after($(".para-2").clone());
  $(".para-1").remove();

  $(`<div>
    ẩn hiện heading
    <button class="button">ẩn heading</button>
    </div>`)
    .find("button")
    .click(function (e) {
      $("#heading").toggle();
    })
    .end()
    .insertBefore($("heading"));
});
