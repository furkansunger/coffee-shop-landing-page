let menuBtn = document.querySelector("#menuBtn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".imgSlider img").forEach((img) => {
  img.onclick = () => {
    var src = img.getAttribute("src");
    document.querySelector(".homeImage").src = src;
  };
});

var swiper = new Swiper(".reviewSlider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    768: {
      slidesPerView: 2,
    },
  },
  loop: true,
  grapCursor: true,
});
