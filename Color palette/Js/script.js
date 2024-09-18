const palette = document.querySelectorAll(".color");
const code = document.querySelectorAll(".code");
const lock = document.querySelectorAll("#lock");

function rgbToHex() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

palette.forEach((palette) => {
  const clickHandler = () => {
    const red = Math.floor(Math.random() * (255 + 1));
    const green = Math.floor(Math.random() * (255 + 1));
    const blue = Math.floor(Math.random() * (255 + 1));
    let hexColor = rgbToHex(`${red}`, `${green}`, `${blue}`);

    palette.style.backgroundColor = hexColor;

    palette.childNodes[1].innerHTML = hexColor.valueOf();
  };
  palette.addEventListener("click", clickHandler);
});

lock.forEach((lock) => {
  const clickButtonHandler = () => {
    if ("click") console.log("first");
  };
  lock.addEventListener("click", clickButtonHandler);
});
