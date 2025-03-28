// !Draggable Window maker
const draggableWindow = document.querySelector(".draggableWindow");
const dragHeader = document.querySelector(".dragHeader");

let offsetX = 0,
  offsetY = 0,
  isDragging = false;

// Přidání události pro dragHeader
dragHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  // Calculate offset when the drag starts
  offsetX = e.clientX - draggableWindow.getBoundingClientRect().left;
  offsetY = e.clientY - draggableWindow.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    // Pohybuj oknem na základě pozice myši
    draggableWindow.style.left = `${e.clientX - offsetX}px`;
    draggableWindow.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
// !Draggable Window maker end

// !NewEmail Level 1

// !User Data
const userData = document.getElementById("info");

userData.addEventListener("click", function () {
  userData.classList.toggle("active");
});

// !Open message
const emailOne = document.getElementById("emailOne");
const emailTwo = document.getElementById("emailTwo");
const emailThree = document.getElementById("emailThree");

const exitBtn = document.getElementById("close");

emailOne.addEventListener("click", function () {
  draggableWindow.style.display = "block";
});
emailTwo.addEventListener("click", function () {
  draggableWindow.style.display = "block";
});
emailThree.addEventListener("click", function () {
  draggableWindow.style.display = "block";
});

exitBtn.addEventListener("click", function () {
  draggableWindow.style.display = "none";
});
