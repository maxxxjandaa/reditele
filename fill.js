document.addEventListener("DOMContentLoaded", function () {
  const dateElements = document.querySelectorAll(".date");

  // Start date (current date)
  let currentDate = new Date();

  dateElements.forEach((dateElement) => {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // měsíce jsou 0-indexované, proto přidáme 1
    dateElement.textContent = `${day}.${month < 10 ? "0" : ""}${month}.`;

    // Subtract one day to go backwards in time
    currentDate.setDate(currentDate.getDate() - 1);
  });
});

const userData = document.getElementById("info");

userData.addEventListener("click", function () {
  userData.classList.toggle("active");
});

// Seznamy pro generování náhodných hodnot
const firstNames = [
  "Jan",
  "Petr",
  "Jana",
  "Martina",
  "Lucie",
  "Tomáš",
  "Anna",
  "Jakub",
  "Karla",
  "Michal",
  "Pavel",
  "Marie",
  "David",
  "Eva",
  "František",
  "Pavla",
  "Veronika",
  "Roman",
  "Václav",
  "Zdeněk",
];
const lastNames = [
  "Novák",
  "Svoboda",
  "Novotný",
  "Dvořák",
  "Černý",
  "Procházka",
  "Růžička",
  "Kučera",
  "Marek",
  "Kovář",
  "Král",
  "Pokorný",
  "Jelínek",
  "Šimek",
  "Veselý",
  "Horák",
  "Kubík",
  "Bláha",
  "Němec",
  "Svěrák",
];

const numAccoutn = [
  "1234567890/0800",
  "9876543210/0800",
  "1029384756/0800",
  "5647382910/0800",
  "6789054321/0800",
  "3456789012/0800",
  "7890123456/0800",
  "2109876543/0800",
  "5678901234/0800",
  "4321098765/0800",
  "8901234567/0800",
  "3456789123/0800",
  "7654321098/0800",
  "6781234560/0800",
  "2345678901/0800",
  "8765432109/0800",
  "5432109876/0800",
  "1098765432/0800",
  "6543210987/0800",
  "9012345678/0800",
];
const domains = [
  "@gmail.com",
  "@seznam.cz",
  "@outlook.com",
  "@yahoo.com",
  "@hotmail.com",
];
const passwords = [
  "heslo123",
  "totojeheslo",
  "ema2007",
  "nevim123",
  "ucertovomostu1452",
  "1235467",
  "hesloje852",
  "novotnyjecool",
  "poklop",
  "hesloheslo",
];

// Funkce pro generování náhodných hodnot a přiřazení do elementů
function generateRandomData() {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomEmail =
    randomFirstName.toLowerCase() +
    randomLastName.toLowerCase() +
    domains[Math.floor(Math.random() * domains.length)];
  const randomPassword =
    passwords[Math.floor(Math.random() * passwords.length)];
  const randomAccount =
    numAccoutn[Math.floor(Math.random() * numAccoutn.length)];

  // Použití innerHTML pro zobrazení hodnot v HTML
  document.getElementById("name").innerHTML = "Jméno: " + randomFirstName;
  document.getElementById("surname").innerHTML = "Příjmení: " + randomLastName;
  document.getElementById("email").innerHTML = "Email: " + randomEmail;
  document.getElementById("password").innerHTML = "Heslo: " + randomPassword;
  document.getElementById("cislo_uctu").innerHTML = randomAccount;
}

// Automatické vygenerování dat po načtení stránky
window.onload = generateRandomData;

// !NewNemail

function newEmail() {
  const newEmailHtml = document.getElementById("itemSp");
  newEmailHtml.style.display = "flex";
}

setTimeout(newEmail, 2000);

// ! Drag and drop

const draggableWindow = document.getElementById("draggableWindow");
const dragHeader = document.getElementById("dragHeader");

let offsetX = 0,
  offsetY = 0,
  isDragging = false;

dragHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableWindow.offsetLeft;
  offsetY = e.clientY - draggableWindow.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    draggableWindow.style.left = `${e.clientX - offsetX}px`;
    draggableWindow.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// !Open message
const newMessage = document.getElementById("itemSp");
newMessage.addEventListener("click", () => {
  draggableWindow.style.display = "block";
});

// ! Close message

const closeMessage = document.getElementById("close");

closeMessage.addEventListener("click", () => {
  draggableWindow.style.display = "none";
});
