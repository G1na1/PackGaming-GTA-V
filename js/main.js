




// WINDOW SCROLL ON

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else{
        document.querySelector('.header').classList.remove('active');
    }

};


// SWIPER ON


var swiper = new Swiper(".box-container", {
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



