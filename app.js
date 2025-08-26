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


window.addEventListener("scroll", () => {
    const blob = document.getElementById("background-decoration-blob");
    if (window.scrollY > 50) {
      blob.style.backgroundColor = "#111827"; 
    } else {
      blob.style.backgroundColor = "#e48d8d"; 
    }
  });