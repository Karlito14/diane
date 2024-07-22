const elMenuTrigger = document.querySelector("#menuTrigger");
const elMenu = document.querySelector("#menu");
const elContainer = document.querySelector(".container");
const elMenuIcon = document.querySelector('#menuIcon');
const elCrossIcon = document.querySelector('#crossIcon');
console.log(elCrossIcon)

elMenuTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  elMenu.classList.toggle("hidden");
  elMenuIcon.classList.toggle("!hidden");
  elCrossIcon.classList.toggle("!hidden");
});

elContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  elMenu.classList.add("hidden");
  elMenuIcon.classList.toggle("!hidden");
  elCrossIcon.classList.toggle("!hidden");
});
