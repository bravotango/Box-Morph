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
const moveRight = () => {
  console.log("move right");
};
document.getElementById("rightTrigger").addEventListener("click", moveRight);
