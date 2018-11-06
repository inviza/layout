

const slideShow = document.querySelector("#slide-show") ;



let takeNumberPhoto = function (elem) {
    if(elem.hasAttribute("style")){
        let buffer =elem.getAttribute("style").slice(28,29);
        if ( Number.isInteger(+elem.getAttribute("style").slice(29,30))){
            let result= buffer.concat(elem.getAttribute("style").slice(29,30))
            return result;
        } else {
            return buffer;
        }
    }
}

window.addEventListener('scroll',
    function() {
        if (pageYOffset+1>takeNumberPhoto(slideShow)*50){
            let buffer = +takeNumberPhoto(slideShow)+1;
            slideShow.setAttribute("style", "background-image: url(./img/" + buffer + ".jpg);")
        } else if (pageYOffset+1<takeNumberPhoto(slideShow)*50) {
            buffer = +takeNumberPhoto(slideShow)-1;
            slideShow.setAttribute("style", "background-image: url(./img/" + buffer + ".jpg);")
        }
    }
  );