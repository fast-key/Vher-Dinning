const menuIcon = document.querySelector(".Menu-icon");
const closeIcon = document.querySelector(".Close-icon");
const listContainerSub = document.querySelector(".List-Container-Sub");
menuIcon.classList.add("hidden");

document.querySelector(".Close-icon").addEventListener("click", function () {
  menuIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  listContainerSub.classList.add("hidden");
});

document.querySelector(".Menu-icon").addEventListener("click", function () {
  closeIcon.classList.remove("hidden");
  menuIcon.classList.add("hidden");
  listContainerSub.classList.remove("hidden");
});
