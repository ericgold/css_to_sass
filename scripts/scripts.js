$(document).ready(function(){
	if ($(document).width() < 768) {
		$('.main-nav').hide();
	} else {
		$('.main-nav').show();
	}
});


$('#toggle').click(function() {
	$(this).next('.main-nav').toggle();
});
