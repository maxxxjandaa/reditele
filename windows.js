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

emailOne.addEventListener("click", function () {
  draggableWindow.style.display = "block";
});
emailTwo.addEventListener("click", function () {
  draggableWindowTwo.style.display = "block";
});
emailThree.addEventListener("click", function () {
  draggableWindowThree.style.display = "block";
});

const linkLevelOne = document.getElementById("link");

linkLevelOne.addEventListener("click", () => {
  const loginFake = document.getElementById("loginFake");
  loginFake.style.display = "flex";
});

export function closeAllWindows() {
  loginFake.style.display = "none";
  draggableWindow.style.display = "none";
  draggableWindowTwo.style.display = "none";
  draggableWindowThree.style.display = "none";
}
