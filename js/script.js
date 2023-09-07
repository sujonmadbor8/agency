// js code here

// add class start
const button = document.querySelector(".offcanvas_nav");
button.addEventListener("click", function () {
  const section = document.querySelector(".menu");
  section.classList.add("offcanvasmenu");
});

const closeButton = document.querySelector(".btn-close");
closeButton.addEventListener("click", function () {
  const section = document.querySelector(".menu");
  section.classList.remove("offcanvasmenu");
});

// add class start

// jq code here

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

$(".offcanvas_nav").on("click", function () {
  $(".offcanvas-body").addClass("bodyoffcanvas");
});
