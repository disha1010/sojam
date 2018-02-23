$(document).ready(function () {
  // accordion
  function close_accordion() {
    $('.accordion-toggle').removeClass('active');
    $('.faq-answer').slideUp(300).removeClass('open');
  }
  $('.article-title-wrapper').click(function (e) {
    e.preventDefault();
    if ($(this).find('.accordion-toggle').is('.active')) {
      close_accordion();
    } else {
      close_accordion();
      $(this).find('.accordion-toggle').addClass('active');
      $(this).parents('.faq-item')
        .find('.faq-answer')
        .slideDown(300)
        .addClass('open');
    }
  });
  // top-menu
  $('.navbar-toggle').on('click', function () {
    $(this).find('.nav-icon').toggleClass('open');
    $('.navbar-collapse-sojam').animate({
      width: 'toggle'
    });
  });

  // filter-nav
  $('.filter-toggle').on('click', function () {
    $('.nav-navbar-filter').toggleClass('open');
  });

  // form inits
  $('#contact-form').submit(function (e) {
    $('.message').removeClass('hide').slideDown().show();
    e.preventDefault();
  });
  
  // slider nav indicator animation
  var progressBarOptionsSlow = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: {
      duration: 4000,
      easing: "linear"
    },
    fill: {
      color: '#fff'
    }
  }
  var progressBarOptionsFast = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: {
      duration: 600,
      easing: "circleProgressEasing"
    },
    fill: {
      color: '#fff'
    }
  }
  var myIndicator = $('.main .carousel-control-sojam.right');
  if(myIndicator && myIndicator.length){
    myIndicator.circleProgress(progressBarOptionsSlow);
    // carousel
    var myCarousel = $('.main #myCarousel');
    myCarousel.on('slide.bs.carousel', function () {
      myIndicator.circleProgress(progressBarOptionsFast);
    });
    myCarousel.on('slid.bs.carousel', function () {
      myIndicator.circleProgress(progressBarOptionsSlow);
    });
}
});