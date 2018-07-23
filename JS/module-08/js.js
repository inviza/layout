const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  ];

const divFullview = document.querySelector('.fullview');

const dataCustome = document.querySelectorAll('[data-fullview]');

const data1 = dataCustome[0];
const data2 = dataCustome[1];
const data3 = dataCustome[2];

function select () {
  // 
  if (divFullview.firstElementChild === null){
    alert('clear')
  } else{
    divFullview.firstElementChild.remove();
  }
  alert('CLICK!');
  console.log('event.target: ', event.target);
  let img = document.createElement('img');
  img.setAttribute('src', event.target.getAttribute('data-fullview'));
  img.setAttribute('alt', event.target.getAttribute('alt'));
  divFullview.append(img);
}
data1.addEventListener('click', select)
data2.addEventListener('click', select)
data3.addEventListener('click', select)