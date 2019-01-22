// scroll header
$(document).scroll(function() {
    if($(document).scrollTop() > 50) {
      $('.nav ul li a').addClass('active');
      $('header').addClass('active');
    }
    else {
      $('.nav ul li a').removeClass('active');
      $('header').removeClass('active');
    }
  })
// menu slide
$('.menu').click (function(){
	$(this).toggleClass('move-left');
	$('.nav ul').toggleClass('translate-x');
	$('.logo-small').fadeIn('slow');
});
// change txt on click
$(".menu").click(function () {
	$(".change-txt").fadeOut(function () {
	$(".change-txt").text(($(".change-txt").text() == 'menu')
	? 'close' : 'menu').fadeIn();
	})
})