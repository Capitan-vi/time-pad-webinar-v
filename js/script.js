window.onload = function() {

	$(document).ready(function() {
		$('.js-soft-scroll').bind('click', function (event) {
			var this_hash = this.hash;
			var target_offset = $(this_hash).offset().top;
			$('html,body').stop().animate({
				scrollTop: target_offset
			}, 700 );
			location.hash = this_hash;
			event.preventDefault();
		})
	})

}
