
$(function(){
/* need to re-factor to slim down */
  $('.about-me').hide();
  $('.projects').hide();
  $('.contact-me').hide();

  $('#home').on("click", function(){
    $('.projects').hide();
    $('.contact-me').hide();
    $('.about-me').hide();
    $('.home').fadeIn('fast')
  });

  $('#about-me').on("click", function(){
    $('.home').fadeOut('fast');
    $('.projects').fadeOut('fast');
    $('.contact-me').fadeOut('fast');
    $('.about-me').fadeIn('fast')
  });

  $('#projects').on("click", function(){
    $('.home').fadeOut('fast');
    $('.about-me').fadeOut('fast');
    $('.contact-me').fadeOut('fast');
    $('.projects').fadeIn('fast')
  });

  $('#contact-me').on("click", function(){
    $('.home').fadeOut('fast');
    $('.about-me').fadeOut('fast');
    $('.projects').fadeOut('fast');
    $('.contact-me').fadeIn('fast')
  });


  $('#ghost-1').hide().fadeIn(1000);
  $('#ghost-2').hide().fadeIn(2000);
});
