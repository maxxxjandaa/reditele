// Opakovaná kontrola každé 2 sekundy
setInterval(function () {
  // Kontrola pro globalLevelControler
  if (window.globalLevelControler == 0) {
    // level 1
    levelTwo.style.color = "rgba(255, 255, 255, 0.2)";
    levelThree.style.color = "rgba(255, 255, 255, 0.2)";
  } else if (window.globalLevelControler == 1) {
    // level 2
    levelTwo.style.color = "rgb(255, 255, 255)";
    levelThree.style.color = "rgba(255, 255, 255, 0.2)";
  } else {
    // level 3
    levelThree.style.color = "rgb(255, 255, 255)";
  }

  // Kontrola pro globalLevelOneStatus
  if (window.globalLevelOneStatus == true) {
    iconTrue.style.display = "block";
    iconFalse.style.display = "none";
  } else if (window.globalLevelOneStatus == false) {
    iconTrue.style.display = "none";
    iconFalse.style.display = "block";
  } else {
    iconTrue.style.display = "none";
    iconFalse.style.display = "none";
  }

  //   console.log("End je " + window.globalLevelControler);
  //   console.log("Level 1 je " + window.globalLevelOneStatus);
}, 200);

// ! Level 1
