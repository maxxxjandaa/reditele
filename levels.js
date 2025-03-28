//! Level handeler

window.globalLevelControler = 0;

// !Good/Bad ending handler

let globalLevelending = null;

// True == Level is Good-ending
// False == Level is Bad-ending
// null == Level is not finished

// ! Level handler
window.globalLevelOneStatus = null;
window.globalLevelTwoStatus = null;
window.globalLevelThreeStatus = null;

const emailOne = document.getElementById("emailOne");
const emailTwo = document.getElementById("emailTwo");
const emailThree = document.getElementById("emailThree");

window.addEventListener("load", () => {
  console.log("Page loaded! email one send");
  globalLevelControler = 1;
  emailOne.style.display = "flex";
  window.globalLevelOneStatus = true;
});

setInterval(function () {
  if (window.globalLevelControler == 2) {
    emailTwo.style.display = "flex";
  } else if (window.globalLevelControler == 3) {
    emailThree.style.display = "flex";
  }
}, 2000);
