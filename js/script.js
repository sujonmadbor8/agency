// js code here
// animaiton on scroll start
AOS.init();
// animaiton on scroll end
// scroll to top start
function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if ($(window).scrollTop() > 500) {
    $(".backToTopBtn").addClass("active");
  } else {
    $(".backToTopBtn").removeClass("active");
  }
}
$(function () {
  // show and hide btn
  scrollTop();
  $(window).on("scroll", scrollTop);

  // body scroll on btn click
  $(".backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});

// scroll to top end

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
$(function () {
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

  //  slider start
  $(".banner_slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
  });
  $(".review_slide").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576.98,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //  slider end

  // counter start
  $(".counter").counterUp({
    delay: 100,
    time: 1000,
  });
  // counter end

  // scroll to top start
  // scroll to top end
});
