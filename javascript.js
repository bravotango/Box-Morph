const growButton = document.getElementById("button1");
const blueButton = document.getElementById("button2");
const fadeButton = document.getElementById("button3");
const resetButton = document.getElementById("button4");
const box = document.getElementById("box");

growButton.addEventListener("click", function () {
  box.style.width = box.style.width.slice(0, -2) * 2 + "px";
  box.style.height = box.style.height.slice(0, -2) * 2 + "px";
});

blueButton.addEventListener("click", function () {
  const random = () => {
    const rRandom = Math.round(Math.random() * 255);
    const gRandom = Math.round(Math.random() * 255);
    const bRandom = Math.round(Math.random() * 255);

    return `rgb(${rRandom},${gRandom},${bRandom})`;
  };

  box.style.backgroundColor =
    box.style.backgroundColor === "blue" ? random() : "blue";
  blueButton.innerText =
    box.style.backgroundColor === "blue" ? "Random" : "Blue";
});

fadeButton.addEventListener("click", function () {
  const opacity = Math.random().toFixed(2);
  box.style.opacity = opacity;
});

resetButton.addEventListener("click", function () {
  location.reload();
});
let timer;
const move = (direction) => {
  timer = setInterval(() => {
    let increment = 2;
    let position;

    const moveBox = (styleAtt, operator) => {
      boxStyle = `box.style.${styleAtt}`;
      boxStyleValue = eval(boxStyle);
      position = eval(
        parseInt(boxStyleValue.slice(0, -2)) + operator + increment
      );
      if (styleAtt === "top") {
        box.style.top = position + "px";
      } else {
        box.style.left = position + "px";
      }
    };

    switch (direction) {
      case "right":
        moveBox("left", "+");
        break;
      case "left":
        moveBox("left", "-");
        break;
      case "up":
        moveBox("top", "-");
        break;
      case "down":
        moveBox("top", "+");
        break;
      case "ne":
        moveBox("top", "-");
        moveBox("left", "+");
        break;
      case "nw":
        moveBox("top", "-");
        moveBox("left", "-");
        break;
      case "se":
        moveBox("top", "+");
        moveBox("left", "+");
        break;
      case "sw":
        moveBox("top", "+");
        moveBox("left", "-");
        break;
    }
  }, 10);
};

const clearTimer = () => {
  clearInterval(timer);
};

const directions = ["up", "down", "left", "right", "ne", "nw", "se", "sw"];
directions.forEach((el) => {
  let elementId = el + "Trigger";

  document
    .getElementById(elementId)
    .addEventListener("mousedown", () => move(el));
});

const radius = () => {
  box.style.borderRadius = box.style.borderRadius === "50%" ? "0" : "50%";
  const circleButton = document.getElementById("circle");
  circleButton.innerText =
    box.style.borderRadius === "50%" ? "Square" : "Circle";
};

let counter = 0;
const duplicate = () => {
  counter++;
  let cloneBox = box.cloneNode(true);
  cloneBox.id = "box" + counter;
  cloneBox.style.zIndex = -counter;
  cloneBox.innerText = `Copy ${counter}`;
  document.body.appendChild(cloneBox);
};

document.getElementById("shrink").addEventListener("click", () => {
  const h = box.style.height.slice(0, -2);
  const w = box.style.width.slice(0, -2);
  box.style.height = parseInt(h * 0.75) + "px";
  box.style.width = parseInt(w * 0.75) + "px";
});
document.addEventListener("mouseup", clearTimer);
document.getElementById("controller").addEventListener("mouseup", clearTimer);
document.addEventListener("dblclick ", clearTimer);
document.getElementById("circle").addEventListener("click", radius);
document
  .getElementById("duplicate")
  .addEventListener("click", () => duplicate(counter));
