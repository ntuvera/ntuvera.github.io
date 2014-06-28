function updateBannerImagePosition(){

  var scrollTop     = $(window).scrollTop();
  $('.para-image').each(function(idx, ele){
    console.log('scrollTop: ', scrollTop);
    var imageBanner = $(ele).parent();
    var imageStart  = imageBanner.position().top;
    var newTop      = .9*(scrollTop - imageStart);

    $(ele).css('top', newTop)
  })

}

$(window).on('scroll', function(){

  updateBannerImagePosition();

  var scrollTop = $(window).scrollTop();

});
