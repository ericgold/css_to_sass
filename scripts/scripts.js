$('#toggle').click(function() {
	$(this).next('.main-nav').children('a').toggleClass("is-collapsed-mobile");
});