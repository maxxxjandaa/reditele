// ! Date filling script
// ! This script fills the date fields

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

//
//
//
//
// ! Random user data generation script
//
//
//
//

// Seznamy pro generování náhodných hodnot
const firstNames = [
  "Jan",
  "Petr",
  "Jana",
  "Martina",
  "Lucie",
  "Tomas",
  "Anna",
  "Jakub",
  "Karla",
  "Michal",
  "Pavel",
  "Marie",
  "David",
  "Eva",
  "Frantisek",
  "Pavla",
  "Veronika",
  "Roman",
  "Vaclav",
  "Zdenek",
];
const lastNames = [
  "Novak",
  "Svoboda",
  "Novotny",
  "Dvorak",
  "Cerny",
  "Prochazka",
  "Ruzicka",
  "Kucera",
  "Marek",
  "Kovar",
  "Kral",
  "Pokorny",
  "Jelinek",
  "Simek",
  "Vesely",
  "Horak",
  "Kubik",
  "Blaha",
  "Nemec",
  "Sverak",
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

// Funkce pro odstranění diakritiky
function removeDiacritics(str) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-zA-Z0-9]/g, "");
}

// Funkce pro generování náhodných hodnot a přiřazení do elementů
function generateRandomData() {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  window.globalRandomUsername = removeDiacritics(
    randomFirstName.toLowerCase() + randomLastName.toLowerCase()
  );
  window.globalRandomPassword =
    passwords[Math.floor(Math.random() * passwords.length)];
  const randomAccount =
    numAccoutn[Math.floor(Math.random() * numAccoutn.length)];

  // Použití innerHTML pro zobrazení hodnot v HTML
  document.getElementById("name").innerHTML = "Jmeno: " + randomFirstName;
  document.getElementById("surname").innerHTML = "Prijmeni: " + randomLastName;
  document.getElementById("username").innerHTML =
    "Uzivatelske jmeno: " + window.globalRandomUsername;
  document.getElementById("password").innerHTML =
    "Heslo: " + window.globalRandomPassword;
  document.getElementById("cislo_uctu").innerHTML = randomAccount;
}

// Automatické vygenerování dat po načtení stránky
window.onload = generateRandomData;

//
//
//
// !Level color fill script
// !Level script
//
//

export function FillLevelOne() {
  const levelOne = document.getElementById("levelOne");
  const levelText = document.getElementById("levelText");
  levelOne.style.color = "#fff";
  levelText.innerHTML =
    "Právě jste obdrželi e-mail ohledně zásilky, kterou jste si před pár dny objednali přes Zásilkovnu s číslem #CZ847263. E-mail Vás informuje, že Vaše zásilka byla ztracena. Je tento e-mail skutečně od Zásilkovny, nebo jde o pokus o phishing? ";
}

export function FillLevelTwo() {
  const levelTwo = document.getElementById("levelTwo");
  const levelText = document.getElementById("levelText");
  levelTwo.style.color = "#fff";
  levelText.innerHTML =
    "Obdrželi jste e-mail od Martina Nováka z Tech Solutions s.r.o., kde pracujete, o povinné schůzi v Microsoft Teams. Je to běžná pracovní pozvánka, nebo jde o podvod? Zjistěte, jestli je e-mail autentický, nebo se jedná o phishing!";
}

export function FillLevelThree() {
  const levelThree = document.getElementById("levelThree");
  const levelText = document.getElementById("levelText");
  levelThree.style.color = "#fff";
  levelText.innerHTML =
    "Obdrželi jste e-mail od ČSOB, kde máte účet, o důležitých změnách ve službách a aktualizaci podmínek. Vypadá to jako běžná notifikace, ale je to skutečně autentické? Zjistěte, jestli je tento e-mail od ČSOB pravý, nebo jde o pokus o phishing.";
}
//
//
//  !!Ending handler Level 1
//
//
export function goodEndingIcon(element) {
  console.log(element);
  const icontrue = document.getElementById("icontrue" + element);
  const goodEndWindow = document.getElementById("goodEndWindow");
  icontrue.style.display = "block";
  goodEndWindow.style.display = "flex";
  setTimeout(function () {
    goodEndWindow.style.display = "none";
  }, 900);
}

export function badEndingIcon(element) {
  console.log(element);
  const iconfalse = document.getElementById("iconfalse" + element);
  const badEndWindow = document.getElementById("badEndWindow");
  iconfalse.style.display = "block";
  badEndWindow.style.display = "flex";
  setTimeout(function () {
    badEndWindow.style.display = "none";
  }, 900);
}

// const levelOneSubmitBtn = document.getElementById("submitBtn");
// levelOneSubmitBtn.addEventListener("click", () => {
//   const levelOneEmail = document.getElementById("emailInputLevel1").value;
//   const levelOnePassword = document.getElementById("passwordInputLevel1").value;

//   if (
//     levelOneEmail === window.glovalRandomEmail &&
//     levelOnePassword === window.globalRandomPassword
//   ) {
//     window.globalLevelControler = 1;
//     window.globalLevelOneStatus = false;
//   } else {
//     alert("Informace mimo hru - Zadali jste špatné údaje!");
//   }
// });
