 const menu = document.getElementById("main-nav");
  const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-nav");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("fa-xmark");
  });

  closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});