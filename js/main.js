(function() {
	$(".search-icon").on('click', function(e) {
		e.preventDefault();
		$(".search-form input").toggleClass("isVisible").focus();
	});
})();