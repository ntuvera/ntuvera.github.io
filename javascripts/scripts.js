
$(function(){

  $('.about-me').hide();
  $('.projects').hide();
  $('.contact-me').hide();

  $('#home').hover(function(){
    $('.projects').hide();
    $('.contact-me').hide();
    $('.about-me').hide();
    $('.home').fadeIn('fast')
  })

  $('#about-me').hover(function(){
    $('.home').hide();
    $('.projects').hide();
    $('.contact-me').hide();
    $('.about-me').fadeIn('fast')
  })

  $('#projects').hover(function(){
    $('.home').hide();
    $('.about-me').hide();
    $('.contact-me').hide();
    $('.projects').fadeIn('fast')
  })

  $('#contact-me').hover(function(){
    $('.home').hide();
    $('.about-me').hide();
    $('.projects').hide();
    $('.contact-me').fadeIn('fast')
  })

})
