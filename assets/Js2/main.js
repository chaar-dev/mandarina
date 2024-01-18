//
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const close = document.querySelector(".close");

//When you click on the icon Show Nav Bar
menu.addEventListener("click", (eo) => {
  links.style.display = "block";
  setTimeout(() => {
    links.style.transform = "translateX(0)";
  }, 100);
});
//When you click on the icon hide Nav Bar
close.addEventListener("click", (eo) => {
  links.style.transform = "translateX(50vw)";
  setTimeout(() => {
    links.style.display = "none";
  }, 300);
});

// When it is scrollY > 40 it is position = "fixed"
const nav = document.querySelector(".nav");
{
  window.addEventListener("scroll", (eo) => {
    if (scrollY > 40) {
      nav.style.position = "fixed";
      nav.style.top = "0";
    } else {
      nav.style.position = "relative";
    }
  });
}

// Start  Scroll Top
// When I click on it, it goes to the top of the page
const btnToTop = document.querySelector(".upToTop");

  window.addEventListener("scroll", (eo) => {
    if (scrollY > 200) {
      btnToTop.style.display = "block";
      setTimeout(() => {
        btnToTop.classList.add("UpToPageLeft")
      }, 150);

    } else {
      btnToTop.classList.remove("UpToPageLeft")
      setTimeout(() => {
        btnToTop.style.display = "none";
        
      }, 100);

     
    }
  });


btnToTop.addEventListener("click", (eo) => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
