$(document).ready(function () {
  // accordion
  function close_accordion() {
    $('.accordion-toggle').removeClass('active');
    $('.faq-answer').slideUp(300).removeClass('open');
  }
  $('.accordion-toggle').click(function (e) {
    e.preventDefault();
    if ($(this).is('.active')) {
      close_accordion();
    } else {
      close_accordion();
      $(this).addClass('active');
      $(this)
        .parents('.faq-item')
        .find('.faq-answer')
        .slideDown(300)
        .addClass('open');
    }
  });
  // top-menu
  $('.navbar-toggle').on('click', function () {
    $(this).find('.nav-icon').toggleClass('open');
    $('.navbar-collapse-sojam').animate({ width: 'toggle' });
  });

  // filter-nav
  $('.filter-toggle').on('click', function () {
    $('.nav-navbar-filter').toggleClass('open');
  });

  // slider nav indicator animation
  var progressBarOptionsSlow = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: { duration: 4000, easing: "linear" },
    fill: { color: '#fff' }
  }
  var progressBarOptionsFast = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: { duration: 600, easing: "circleProgressEasing" },
    fill: { color: '#fff' }
  }
  var myIndicator = $('.main .carousel-control-sojam.right');
  myIndicator.circleProgress(progressBarOptionsSlow);
  // carousel
  var myCarousel = $('#myCarousel');
  myCarousel.on('slide.bs.carousel', function () {
    myIndicator.circleProgress(progressBarOptionsFast);
  });
  myCarousel.on('slid.bs.carousel', function () {
    myIndicator.circleProgress(progressBarOptionsSlow);
  });
  
});

