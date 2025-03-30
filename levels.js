import { FillLevelThree, FillLevelTwo } from "/fill.js";
import { FillLevelOne, goodEndingIcon, badEndingIcon } from "/fill.js";
import { closeAllWindows } from "/windows.js";
import { clearEmailBgColor } from "/windows.js";
import { showStatistics } from "/windows.js";

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
  globalLevelControler = 1;
  emailOne.style.display = "flex";
  FillLevelOne();
});

setInterval(function () {
  if (globalLevelControler == 2) {
    emailTwo.style.display = "flex";
  } else if (globalLevelControler == 3) {
    emailThree.style.display = "flex";
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
const reportButtonTwo = document.getElementById("reportBtnTwo");
const reportButtonThree = document.getElementById("reportBtnThree");

// !Report button

reportButton.addEventListener("click", () => {
  if (globalLevelControler === 1) {
    globalLevelControler = 2;
    globalLevelOneStatus = true; //GOOD ENDING
    FillLevelTwo();
    goodEndingIcon(1);
    closeAllWindows();
    clearEmailBgColor(1);
  }
});
reportButtonTwo.addEventListener("click", () => {
  if (globalLevelControler === 2) {
    globalLevelControler = 3;
    globalLevelTwoStatus = false; //BAD ENDING
    FillLevelThree();
    badEndingIcon(2);
    closeAllWindows();
    clearEmailBgColor(2);
    decraseMoeny();
  }
});

reportButtonThree.addEventListener("click", () => {
  if (globalLevelControler === 3) {
    globalLevelControler = 4;
    globalLevelThreeStatus = true; //GOOD ENDING
    goodEndingIcon(3);
    showStatistics();
    closeAllWindows();
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
    badEndingIcon(1);
    decraseMoeny();
    closeAllWindows();
    clearEmailBgColor(1);
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

// ! Level 2

const submitBtnTeams = document.getElementById("submitBtnTeams");
submitBtnTeams.addEventListener("click", () => {
  const emailInputLevel2 = document.getElementById("emailInputLevel2");
  const passwordInputLevel2 = document.getElementById("passwordInputLevel2");
  if (
    // emailInputLevel1.value === window.glovalRandomEmail &&
    // passwordInputLevel1.value === window.globalRandomPassword
    emailInputLevel2.value === "ahoj" &&
    passwordInputLevel2.value === "ahoj"
  ) {
    globalLevelControler = 3;
    globalLevelTwoStatus = true; //BAD ENDING
    FillLevelThree();
    goodEndingIcon(2);
    closeAllWindows();
    clearEmailBgColor(2);
  } else {
    alert(
      "Informace mimo hru – Zadali jste špatné údaje! Musíte zadat uživatelské jméno a heslo, které najdete ve vašich údajích vpravo dole!"
    );
  }
});

// ! Level 3

const deleting = document.getElementById("deleting");

export function thisisGoodTestEnd() {
  goodEndingIcon(3);
  closeAllWindows();
  showStatistics();
  globalLevelThreeStatus = true; //GOOD ENDING
}

export function thisiusBadTestEnd() {
  badEndingIcon(3);
  decraseMoeny();
  closeAllWindows();
  showStatistics();
  globalLevelThreeStatus = false; //BAD ENDING
}

export function makeEndingText() {
  if (globalLevelOneStatus) {
    document.getElementById("textPoleOne").innerHTML = "Jste zvládl.";
  } else {
    document.getElementById("textPoleOne").innerHTML = "Se Vám nepodařil.";
  }

  if (globalLevelTwoStatus) {
    document.getElementById("textPoleTwo").innerHTML = "Jste zvládl.";
  } else {
    document.getElementById("textPoleTwo").innerHTML = "Se Vám nepodařil.";
  }

  if (globalLevelThreeStatus) {
    document.getElementById("textPoleThree").innerHTML = "Jste zvládl.";
  } else {
    document.getElementById("textPoleThree").innerHTML = "Se Vám nepodařil.";
  }
}
