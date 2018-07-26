const nav = document.querySelector(".logo");
const list = document.querySelector(".icon-logo");
const toTopLink = document.querySelector('.logo-txt');
const navCoords = nav.getBoundingClientRect();

window.addEventListener("scroll", function() {
  if (pageYOffset >= navCoords.top) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("nav-fixed");
  } else {
    document.body.style.paddingTop = "";
    nav.classList.remove("nav-fixed");
  }
});

list.addEventListener("click", function(evt) {
  const target = evt.target;

  if (target === this || target.nodeName === "LI") return;

  evt.preventDefault();

  const href = target.getAttribute("href");
  const el = document.querySelector(href);

  const top =
    el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;

  window.scrollTo({ top: top, behavior: "smooth" });
});

toTopLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  
   window.scrollTo({ top: 0, behavior: "smooth" });
});
