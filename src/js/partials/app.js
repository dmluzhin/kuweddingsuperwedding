$(document).ready(function(){
	var anchorLink = $('.header__nav-item a, .header__schevron');
	anchorLink.click(function(){
		$('.active').removeClass('active');
		$(this).closest('a').addClass('active');

		$('html body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 50}, 400);

			return false;
	})
});