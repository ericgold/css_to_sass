var menuTest = function() {
	if ($(document).width() < 768) {
		$('.main-nav').hide();
	} else {
		$('.main-nav').show();
	}
};

$(document).ready(menuTest); 

$(window).resize(menuTest);


$('#toggle').click(function() {
	$(this).next('.main-nav').toggle();
});
