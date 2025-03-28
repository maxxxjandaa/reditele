const reportButton = document.getElementById("reportBtn");

// !Report button

reportButton.addEventListener("click", () => {
  if (window.globalLevelControler === 1) {
    window.globalLevelControler = 2;
    window.globalLevelOneStatus = true;
  } else if (window.globalLevelControler === 3) {
    window.globalLevelControler = true;
    alert("Level 2 je hotový!");
  } else {
    window.globalLevelControler = true;
    alert("Level 3 je hotový!");
  }
});

// ! Level 1

const levelOneSubmitBtn = document.getElementById("submitBtn");
levelOneSubmitBtn.addEventListener("click", () => {
  const levelOneEmail = document.getElementById("emailInputLevel1").value;
  const levelOnePassword = document.getElementById("passwordInputLevel1").value;

  if (
    levelOneEmail === window.glovalRandomEmail &&
    levelOnePassword === window.globalRandomPassword
  ) {
    window.globalLevelControler = 1;
    window.globalLevelOneStatus = false;
  } else {
    alert("Informace mimo hru - Zadali jste špatné údaje!");
  }
});
