// Preloader
$(window).load(function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

$(document).ready(function () {

  // Toggle nav
  $(".nav-container").hover(function () {
    $("nav").stop().fadeIn('fast');
    $('.nav-handle').addClass('active');
  }, function () {
    $("nav").fadeOut('fast');
    $('.nav-handle').removeClass('active');
  });

  $(".nav-container").on('click', '.nav-handle', function () {
    $("nav").fadeToggle('fast');
    $(".nav-handle").toggleClass('active');
  });

  // Show/hide page content on click
  $(".main-column").each(function () {
    $(this).find("section:lt(1)").show()
  });

  $('nav a').click(function () {
    var index = $('nav a').index(this);
    $('.main-column').children().hide().eq(index).fadeIn();
  });

  // Show home panel
  $('.logo').click(function () {
    $('.contact-panel').hide();
    $('.about-panel').hide();
    $('.home-panel').fadeIn();
  });

});

