const nav = document.querySelector('.header__nav');
let topOfNav = nav.offsetTop;
console.log(topOfNav);

function fixNav() {
    console.log('scroll',window.scrollY);
  if(window.scrollY >= topOfNav) {

      document.body.style.paddingTop = `${nav.offsetHeight}px`;
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);




const click = document.querySelector(".click")

function op () {
  if(click.style.display = "block" ){
    click.style.display = none;
  }
}

const iconlogoup = document.querySelector(".icon-logo-up");

iconlogoup.addEventListener('click', op)
