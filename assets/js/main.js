// Handle Popup
$(document).ready(function () {
  $(".popup-menu").animate({
    opacity: 0,
    marginLeft: -999,
  });

  // Show-popup
  $(".icon-mega-menu").click(function (e) {
    e.preventDefault();
    $(".popup-menu").animate({
      opacity: 1,
      marginLeft: 0,
    });
    $(".effect-page").addClass("effect-page-appear");
  });

  // Hidden-popup
  $(".effect-page").click(function (e) {
    e.preventDefault();
    $(".popup-menu").animate({
      opacity: 0,
      marginLeft: -999,
    });
    $(".effect-page").removeClass("effect-page-appear");
  });

  // Handle-dropdown-extend
  $(".popup-dropdown-extend").slideUp();
  $(".title-menu-item").click(function (e) {
    e.preventDefault();
    $(this).next(".popup-dropdown-extend").slideToggle();
    $(this).children(".fas").toggleClass("handle-arrow");
  });
});

// Handle Slide-big
var owl = $(".slide-show");
owl.owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
});

// Handle Slide-info
var owl = $(".info-products .list-products");
owl.owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    969: {
      items: 4,
    },
  },
});

// Handle Slide-store
var owl = $(".info-store .container");
owl.owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    969: {
      items: 3,
      loop: false,
    },
  },
});
