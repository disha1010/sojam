$(document).ready(function() {
  // accordion
  function close_accordion() {
    $('.accordion-toggle').removeClass('active');
    $('.faq-answer').slideUp(300).removeClass('open');
  }
  $('.accordion-toggle').click(function(e) {
    e.preventDefault();
    if($(this).is('.active')) {
      close_accordion();
    } else {
      close_accordion();
      $(this).addClass('active');
      $(this).parents('.faq-item').find('.faq-answer').slideDown(300).addClass('open');
    }
  });
});