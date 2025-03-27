const reportButton = document.getElementById("reportBtn");
let levelOneEmail = document.getElementById("email");
let levelOnePassword = document.getElementById("password");
const levelOneSubmitBtn = document.getElementById("submitBtn");

reportButton.addEventListener("click", () => {
  if (window.globalLevelControler === 0) {
    window.globalLevelControler = 1;
    window.globalLevelOneStatus = true;
  } else if (window.globalLevelControler === 1) {
    window.globalLevelControler = true;
    alert("Level 2 je hotový!");
  } else {
    window.globalLevelControler = true;
    alert("Level 3 je hotový!");
  }
});

levelOneSubmitBtn.addEventListener("click", () => {
  console.log(levelOneEmail.value);
  console.log(levelOnePassword.value);
  if (levelOneEmail === "" && levelOnePassword === "") {
    console.log("Prohrál jsi");
  } else {
    console.log("Vyhrál jsi");
  }
});
