function changeName() {
  const name = document.querySelector(".name");
  name.textContent = "Huy";
}

function showFullName() {
  const name = document.querySelector(".name");
  name.textContent = name.textContent + " đẹp trai";
}

function showShortName() {
  const name = document.querySelector(".name");
  name.textContent = name.textContent.replace(" đẹp trai", "");
}

function changeColor() {
  const textColor = document.querySelector("h1");
  textColor.style.color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
}

function setupCounter() {
  const allCounters = document.querySelectorAll(".counter");

  allCounters.forEach(function (counter) {
    const minus = counter.querySelector(".minus");
    const plus = counter.querySelector(".plus");
    const value = counter.querySelector("span");
    const min = parseInt(counter.getAttribute("data-min"));
    const max = parseInt(counter.getAttribute("data-max"));

    minus.addEventListener("click", function () {
      const current = parseInt(value.textContent);

      if (current > min) {
        value.textContent = current - 1;
      }
    });

    plus.addEventListener("click", function (e) {
      console.log(e);

      const current = parseInt(value.textContent);

      if (current < max) {
        value.textContent = current + 1;
      }
    });
  });
}

setupCounter();

function showCircle(e) {
  const prev = document.querySelector(".circle");
  if (prev) prev.remove();

  const x = e.clientX;
  const y = e.clientY;
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 15}px`;
  circle.style.top = `${y - 15}px`;
  document.body.append(circle);
}

document.addEventListener("click", showCircle);

document.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "Enter": {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.left = `${Math.random() * (window.innerWidth - 15)}px`;
      circle.style.top = `${Math.random() * (window.innerHeight - 15)}px`;
      document.body.append(circle);
      break;
    }
    case " ": {
      const circle = document.createElement("div");
      circle.classList.add("square");
      circle.style.left = `${Math.random() * (window.innerWidth - 15)}px`;
      circle.style.top = `${Math.random() * (window.innerHeight - 15)}px`;
      document.body.append(circle);
      break;
    }
    default: {
      document.documentElement.style.backgroundColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      break;
    }
  }
});

document.addEventListener("keydown", function (e) {
  const character = document.querySelector(".character");

  switch (e.key) {
    case "ArrowUp": {
      const rect = character.getBoundingClientRect();

      character.style.top = rect.top + 40 + "px";
      break;
    }
    case "ArrowDown": {
      const rect = character.getBoundingClientRect();

      character.style.top = rect.top + 40 + "px";
      break;
    }
    case "ArrowLeft": {
      const rect = character.getBoundingClientRect();
      console.log(rect, rect.left + 40 + "px");
      character.classList.remove("right");
      character.style.left = rect.left + 40 + "px";
      break;
    }
    case "ArrowRight": {
      const rect = character.getBoundingClientRect();

      character.classList.add("right");
      character.style.left = rect.left + 60 + "px";
      break;
    }
  }
});
