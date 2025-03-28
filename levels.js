//! Level handeler

window.globalLevelControler = 0;

// ! Level status making

const levelOne = document.getElementById("levelOne");
const levelTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");

const iconTrue = document.getElementById("icontrue");
const iconFalse = document.getElementById("iconfalse");

window.globalLevelOneStatus = null;

// True == Level is Good-ending
// False == Level is Bad-ending
// null == Level is not finished
