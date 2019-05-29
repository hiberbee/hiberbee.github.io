(function ($) {
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });
})(jQuery);
