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

userData.addEventListener("click", function () {
  userData.classList.toggle("active");
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
}

export function clearEmailBgColor(index) {
  if (index === 1) {
    emailOne.style.backgroundColor = "transparent";
    newOne.style.display = "none";
  } else {
    emailTwo.style.backgroundColor = "transparent";
    newTwo.style.display = "none";
  }
}

// !vir

const priloha = document.getElementById("priloha");
priloha.addEventListener("click", () => {
  const antivirWindow = document.getElementById("antivirWindow");
  antivirWindow.style.display = "flex";
});

const deleteVirBtn = document.getElementById("deleteVirBtn");

deleteVirBtn.addEventListener("click", () => {
  const deleting = document.getElementById("deleting");
  const loadingItem = document.getElementById("loadingItem");
  const errorMessage = document.getElementById("errormesage");
  const testDiv = document.getElementById("test");

  deleting.style.display = "flex";

  const steps = [10, 20, 25, 25]; // Různé kroky pro zvětšování
  let loadingNumber = 0;
  let stepIndex = 0; // Index pro kroky

  const interval = setInterval(() => {
    if (stepIndex < steps.length) {
      loadingNumber += steps[stepIndex]; // Přidáme aktuální krok
      stepIndex++; // Přejdeme na další krok
    }

    // Zvětší šířku loadingItem podle aktuálního čísla
    loadingItem.style.width = `${loadingNumber}%`;

    // Když dosáhneme 80, zastavíme interval a za 1.5 sekundy ukážeme "Chyba" a test
    if (loadingNumber >= 80) {
      clearInterval(interval);

      setTimeout(() => {
        errorMessage.innerHTML = "Chyba"; // Zobrazí div s chybou
        testDiv.style.display = "flex"; // Zobrazí div s testem
      }, 1500);
    }
  }, 700); // Pauza 0.7s mezi jednotlivými kroky
});

const testBtn = document.getElementById("doneBtn");
testBtn.addEventListener("click", () => {
  const answareOne = document.getElementById("right1");
  const answareTwo = document.getElementById("right2");
  const answareThree = document.getElementById("right3");
  const errorMessage = document.getElementById("errormesage");
  const testDiv = document.getElementById("test");

  if (answareOne.checked && answareTwo.checked && answareThree.checked) {
    // Počkám 1 sekundu před dokončením loadingu
    setTimeout(() => {
      // Skryju errorMessage a test
      errorMessage.style.display = "none";
      testDiv.style.display = "none";
      antivirWindow.style.display = "none"; // Skryju antivir window

      // Pokračuje loading na 90 %
      setTimeout(() => {
        loadingItem.style.width = "90%";
      }, 700);

      // Dokončení na 100 %
      setTimeout(() => {
        loadingItem.style.width = "100%";
        setTimeout(() => {
          deleting.style.display = "none"; // Skryju deleting¨
        }, 800);
      }, 1400);
    }, 1000); // Delay před začátkem dokončení loadingu
  }
});

// ! Statistic window

export function showStatistics() {
  const statisticsWindow = document.getElementById("StatisticWindow");
  statisticsWindow.style.display = "flex";
}
