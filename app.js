 const menu = document.getElementById("main-nav");
  const menuBtn = document.querySelector(".fa-bars");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("fa-xmark");
  });