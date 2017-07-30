  $(window).scroll(function () {
    if ($(this).scrollTop() > $('header').height()) {
      $('#sticky-nav').addClass('navbar-fixed');
    }
    else {
      $('#sticky-nav').removeClass('navbar-fixed');
    }
  });
