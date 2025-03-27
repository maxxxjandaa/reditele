// !Draggable Window maker
const draggableWindow = document.querySelector(".draggableWindow");
const dragHeader = document.querySelector(".dragHeader");

let offsetX = 0,
  offsetY = 0,
  isDragging = false;

dragHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  // Calculate offset when the drag starts
  offsetX = e.clientX - draggableWindow.getBoundingClientRect().left;
  offsetY = e.clientY - draggableWindow.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    // Move the window based on mouse position
    draggableWindow.style.left = `${e.clientX - offsetX}px`;
    draggableWindow.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
// !Draggable Window maker end

// !NewNemail Level 1

// !Email Send Handler

// Ověření, zda globalLevelControler existuje a má hodnotu 0

// Opakovaná kontrola každé 2 sekundy
setInterval(function () {
  if (window.globalLevelControler === 0) {
    newEmail(1);
  } else if (window.globalLevelControler === 1) {
    newEmail(2);
  } else {
    newEmail(3);
  }
}, 2000);

function newEmail(i) {
  let newEmailHtml = document.getElementById("email" + i);
  if (newEmailHtml) {
    newEmailHtml.style.display = "flex";
  }
}

// !Open message
const newMessage = document.getElementById("email1");
newMessage.addEventListener("click", () => {
  draggableWindow.style.display = "block";
});

// ! Close message

const closeMessage = document.getElementById("close");

closeMessage.addEventListener("click", () => {
  draggableWindow.style.display = "none";
});

// ! User Data
const userData = document.getElementById("info");

userData.addEventListener("click", function () {
  userData.classList.toggle("active");
});
