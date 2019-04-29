(function($){
  // prevent browse auto scroll
  if (window.location.hash) {
    window.scrollTo(0, 0)
    srollBody(window.location.hash)
  }

  // general
  var $navbar     = $('#navbar');
  var $navbarLink = $navbar.find('.navbar-item:not(.navbar-sub-item) > .navbar-link:not(.open-menu)');
  var $openMenu   = $navbar.find('#open-menu');
  var $closeMenu  = $navbar.find('#close-menu');
  var $mobileMenu = $navbar.find('#mobile-menu');

  function openMenu() {
    $mobileMenu.addClass('open');
    $closeMenu.addClass('active');
  }
  function closeMenu() {
    $mobileMenu.removeClass('open');
    $closeMenu.removeClass('active');
  }
  function smoothScroll(e) {
    e.preventDefault();
    var $link      = $($(e)[0].target);
    var $targetId  = $link.attr('href');
    srollBody($targetId)
    closeMenu();
  }

  function srollBody ($targetId) {
    var $targetEl  = $($targetId);
    if ($targetEl.length) {
    var $targetTop = $targetEl.offset().top - 60;
    
    $('html, body').animate({
      scrollTop: $targetTop
    }, 800);
    }
  }

  $openMenu.on('click', openMenu);
  $closeMenu.on('click', closeMenu);
  $('.scrollmotion').length > 0 && $navbarLink.on('click', smoothScroll);
}(jQuery))