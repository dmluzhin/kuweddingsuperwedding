$(document).ready(function(){
	var anchorLink = $('.header__nav-item a, .header__schevron');
	anchorLink.click(function(){
		$('.active').removeClass('active');
		$(this).closest('a').addClass('active');

		$('html body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 50}, 400);

			return false;
	})

	$('.hamburger').click(function(){
			$('.header__nav').toggleClass('flex-display');
	});

	$('.header__nav-link').click(function(){
		$('.header__nav').removeClass('flex-display');
	});
});