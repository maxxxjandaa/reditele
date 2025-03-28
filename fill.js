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

// Funkce pro odstranění diakritiky
function removeDiacritics(str) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

// Funkce pro generování náhodných hodnot a přiřazení do elementů
function generateRandomData() {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  window.glovalRandomEmail =
    removeDiacritics(
      randomFirstName.toLowerCase() + randomLastName.toLowerCase()
    ) + domains[Math.floor(Math.random() * domains.length)];
  window.globalRandomPassword =
    passwords[Math.floor(Math.random() * passwords.length)];
  const randomAccount =
    numAccoutn[Math.floor(Math.random() * numAccoutn.length)];

  // Použití innerHTML pro zobrazení hodnot v HTML
  document.getElementById("name").innerHTML = "Jmeno: " + randomFirstName;
  document.getElementById("surname").innerHTML = "Prijmeni: " + randomLastName;
  document.getElementById("email").innerHTML =
    "Email: " + window.glovalRandomEmail;
  document.getElementById("password").innerHTML =
    "Heslo: " + window.globalRandomPassword;
  document.getElementById("cislo_uctu").innerHTML = randomAccount;
}

// Automatické vygenerování dat po načtení stránky
window.onload = generateRandomData;

//
//
//
//
// ! Level script fill
//
//
//
//

const levelText = document.getElementById("levelText");

const datesetLevelOne =
  "Objednal sis balíček #CZ847263 a netrpělivě čekáš na doručení. Najednou ti přijde e-mail, že se zásilka #CZ847263 ztratila a musíš zadat své údaje pro opětovné doručení. Zní to naléhavě, ale je to skutečné, nebo jen past? Dávej pozor a pokud máš podezření, raději e-mail nahlas!";
console.log(window.globalLevelControler);
if (window.globalLevelControler == 0) {
  levelText.innerHTML = datesetLevelOne;
}

const copyButton = document.getElementById("closeLogin");
const loginFake = document.getElementById("loginFake");
copyButton.addEventListener("click", () => {
  loginFake.style.display = "none";
});

const link = document.getElementById("link");

link.addEventListener("click", () => {
  loginFake.style.display = "flex";
});
