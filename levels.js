import { FillLevelThree, FillLevelTwo } from "/fill.js";
import { FillLevelOne, goodEndingLevelOne, badEndingLevelOne } from "/fill.js";
import { closeAllWindows } from "/windows.js";

const Obnos = document.getElementById("Obnos");
let money = 1000;
Obnos.innerHTML = money + " Kč";

//! Level handeler

let globalLevelControler = 0;

// !Good/Bad ending handler

let globalEndingStatus = null;

// True == Level is Good-ending
// False == Level is Bad-ending
// null == Level is not finished

// ! Level handler
let globalLevelOneStatus = null;
let globalLevelTwoStatus = null;
let globalLevelThreeStatus = null;

const emailOne = document.getElementById("emailOne");
const emailTwo = document.getElementById("emailTwo");
const emailThree = document.getElementById("emailThree");

window.addEventListener("load", () => {
  console.log("Page loaded! email one send");
  globalLevelControler = 1;
  emailOne.style.display = "flex";
  globalLevelOneStatus = true;
  FillLevelOne();
});

setInterval(function () {
  if (globalLevelControler == 2) {
    emailTwo.style.display = "flex";
    FillLevelTwo();
  } else if (globalLevelControler == 3) {
    emailThree.style.display = "flex";
    FillLevelThree();
  }
}, 2000);

//
//
//
//     !Ending handler
//
//
//

const reportButton = document.getElementById("reportBtn");

// !Report button

reportButton.addEventListener("click", () => {
  if (globalLevelControler === 1) {
    globalLevelControler = 2;
    globalLevelOneStatus = true; //GOOD ENDING
    FillLevelTwo();
    goodEndingLevelOne();
    closeAllWindows();
  } else if (globalLevelControler === 3) {
    globalLevelControler = true;
    alert("Level 2 je hotový!");
  } else {
    globalLevelControler = true;
    alert("Level 3 je hotový!");
  }
});

// ! Level 1

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const emailInputLevel1 = document.getElementById("emailInputLevel1");
  const passwordInputLevel1 = document.getElementById("passwordInputLevel1");
  if (
    // emailInputLevel1.value === window.glovalRandomEmail &&
    // passwordInputLevel1.value === window.globalRandomPassword
    emailInputLevel1.value === "ahoj" &&
    passwordInputLevel1.value === "ahoj"
  ) {
    globalLevelControler = 2;
    globalLevelOneStatus = false; //BAD ENDING
    FillLevelTwo();
    badEndingLevelOne();
    decraseMoeny();
    closeAllWindows();
  } else {
    alert(
      "Informace mimo hru – Zadali jste špatné údaje! Musíte zadat uživatelské jméno a heslo, které najdete ve vašich údajích vpravo dole!"
    );
  }
});

function decraseMoeny() {
  money -= 250;
  Obnos.innerHTML = money + " Kč";
}
