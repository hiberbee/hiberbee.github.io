if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(function (reg) {
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
    console.log('Registration failed with ' + error);
  });
}

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
