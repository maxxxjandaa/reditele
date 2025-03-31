import { thisiusBadTestEnd } from "/levels.js";

import { makeEndingText } from "/levels.js";

// !Draggable Window maker
document.querySelectorAll(".draggableWindow").forEach((draggableWindow) => {
  const exitBtn = draggableWindow.querySelector("#close"); // Najde tlačítko uvnitř okna
  if (exitBtn) {
    exitBtn.addEventListener("click", function () {
      draggableWindow.style.display = "none";
    });
  }

  const dragHeader = draggableWindow.querySelector(".dragHeader");
  let offsetX = 0,
    offsetY = 0,
    isDragging = false;

  dragHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableWindow.getBoundingClientRect().left;
    offsetY = e.clientY - draggableWindow.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      if (isDragging) {
        draggableWindow.style.left = `${e.clientX - offsetX}px`;
        draggableWindow.style.top = `${e.clientY - offsetY}px`;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});

// !Draggable Window maker end

// !NewEmail Level 1
//
//
//
//
//
// !User Data
const userData = document.getElementById("info");
const closaBtnInfo = document.getElementById("closaBtnInfo");
const closeLoginInfo = document.getElementById("closeLoginInfo");

closaBtnInfo.addEventListener("click", function () {
  userData.classList.toggle("active");
  closeLoginInfo.classList.toggle("rotate");
});
//
//
//
//
//
// !Open message
const emailOne = document.getElementById("emailOne");
const emailTwo = document.getElementById("emailTwo");
const emailThree = document.getElementById("emailThree");

const draggableWindow = document.getElementById("draggableWindow");
const draggableWindowTwo = document.getElementById("draggableWindowTwo");
const draggableWindowThree = document.getElementById("draggableWindowThree");

const newOne = document.querySelector(".newOne");
const newTwo = document.querySelector(".newTwo");

emailOne.addEventListener("click", function () {
  draggableWindow.style.display = "block";
});
emailTwo.addEventListener("click", function () {
  draggableWindowTwo.style.display = "block";
});
emailThree.addEventListener("click", function () {
  draggableWindowThree.style.display = "block";
});

// !LOgin level one

const linkLevelOne = document.getElementById("link");

linkLevelOne.addEventListener("click", () => {
  const loginFake = document.getElementById("loginFake");
  loginFake.style.display = "flex";
});

// !LOgin level two

const linkTeams = document.getElementById("linkTeams");
linkTeams.addEventListener("click", () => {
  const loginTeams = document.getElementById("loginTeams");
  loginTeams.style.display = "flex";
});

export function closeAllWindows() {
  loginFake.style.display = "none";
  loginTeams.style.display = "none";
  draggableWindow.style.display = "none";
  draggableWindowTwo.style.display = "none";
  draggableWindowThree.style.display = "none";
  deleting.style.display = "none";
  antivirWindow.style.display = "none"; // Skryju antivir window
}

export function clearEmailBgColor(index) {
  if (index === 1) {
    emailOne.style.backgroundColor = "transparent";
    newOne.style.display = "none";
    emailOne.style.pointerEvents = "none"; // Zakáže další kliky
  } else {
    emailTwo.style.backgroundColor = "transparent";
    newTwo.style.display = "none";
    emailTwo.style.pointerEvents = "none"; // Zakáže další kliky
  }
}

// !vir

const priloha = document.getElementById("priloha");
priloha.addEventListener("click", () => {
  const antivirWindow = document.getElementById("antivirWindow");
  antivirWindow.style.display = "flex";
  const reportBtnThree = document.getElementById("reportBtnThree");
  reportBtnThree.style.pointerEvents = "none"; // Zakáže další kliky
});

const deleteVirBtn = document.getElementById("deleteVirBtn");

if (deleteVirBtn) {
  deleteVirBtn.addEventListener("click", () => {
    const deleting = document.getElementById("deleting");
    const loadingItem = document.getElementById("loadingItem");

    if (!deleting || !loadingItem) {
      console.error("Jeden nebo více prvků nebylo nalezeno!");
      return;
    }

    deleting.style.display = "flex";

    const steps = [10, 20, 25, 25, 10, 5, 5]; // Různé kroky pro zvětšování
    let loadingNumber = 0;
    let stepIndex = 0; // Index pro kroky

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        loadingNumber += steps[stepIndex]; // Přidáme aktuální krok
        stepIndex++; // Přejdeme na další krok
      }

      // Omezíme maximální hodnotu na 100
      loadingNumber = Math.min(loadingNumber, 100);

      // Zvětší šířku loadingItem podle aktuálního čísla
      loadingItem.style.width = `${loadingNumber}%`;

      // Když dosáhneme 100, zastavíme interval a za 1.5 sekundy ukážeme "Chyba" a test
      if (loadingNumber >= 100) {
        setTimeout(() => {
          clearInterval(interval); // Zastavíme interval
          thisiusBadTestEnd();
        }, 800);
      }
    }, 700); // Pauza 0.7s mezi jednotlivými kroky
  });
}

// ! Statistic window

export function showStatistics() {
  const statisticsWindow = document.getElementById("StatisticWindow");
  statisticsWindow.style.display = "flex"; // Zobrazí okno statistik jako flex
  makeEndingText();
}

// Zajistí, že při načtení stránky nebo změně velikosti okna se objekt správně umístí

const navItemOne = document.getElementById("navItemOne");
const navItemTwo = document.getElementById("navItemTwo");
const navItemThree = document.getElementById("navItemThree");

const levelStatusStytisicText = document.getElementById(
  "levelStatusStytisicText"
);
const levelStatusStytisic = document.getElementById("levelStatusStytisic");

navItemOne.addEventListener("click", () => {
  const statisticOne = document.getElementById("contenOne");
  const statisticTwo = document.getElementById("contenTwo");
  const statisticThree = document.getElementById("contenThree");

  navItemOne.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  navItemTwo.style.backgroundColor = "transparent";
  navItemThree.style.backgroundColor = "transparent";

  levelStatusStytisicText.innerHTML = "E-mail 1 byl falešný!";
  levelStatusStytisic.style.backgroundColor = "red";

  statisticOne.style.display = "flex";
  statisticTwo.style.display = "none";
  statisticThree.style.display = "none";
});

navItemTwo.addEventListener("click", () => {
  const statisticOne = document.getElementById("contenOne");
  const statisticTwo = document.getElementById("contenTwo");
  const statisticThree = document.getElementById("contenThree");

  navItemOne.style.backgroundColor = "transparent";
  navItemTwo.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  navItemThree.style.backgroundColor = "transparent";

  levelStatusStytisicText.innerHTML = "E-mail 2 byl reálný!";
  levelStatusStytisic.style.backgroundColor = "#bada55";

  statisticOne.style.display = "none";
  statisticTwo.style.display = "flex";
  statisticThree.style.display = "none";
});

navItemThree.addEventListener("click", () => {
  const statisticOne = document.getElementById("contenOne");
  const statisticTwo = document.getElementById("contenTwo");
  const statisticThree = document.getElementById("contenThree");

  levelStatusStytisicText.innerHTML = "E-mail 3 byl falešný!";
  levelStatusStytisic.style.backgroundColor = "red";

  navItemOne.style.backgroundColor = "transparent";
  navItemTwo.style.backgroundColor = "transparent";
  navItemThree.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

  statisticOne.style.display = "none";
  statisticTwo.style.display = "none";
  statisticThree.style.display = "flex";
});
