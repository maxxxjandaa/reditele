// ! Level status making

const levelOne = document.getElementById("levelOne");
const levelTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");

let controller = 0;

if (controller == 0) {
  // level 1
  levelTwo.style.color = "rgba(255, 255, 255, 0.2)";
  levelThree.style.color = "rgba(255, 255, 255, 0.2)";
} else if (controller == 1) {
  // level 2
  levelTwo.style.color = "rgb(255, 255, 255)";
  levelThree.style.color = "rgba(255, 255, 255, 0.2)";
} else {
  levelThree.style.color = "rgb(255, 255, 255)";
  // level 3
}
