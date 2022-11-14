$('button').on('mousedown', () => {
	if ($('button').hasClass('unclicked')) {
		$('button').addClass('clicked');
	}
	$('img').slideToggle();
});

$('button').on('mouseup', () => {
	$('button').removeClass('clicked');
	$('button').addClass('unclicked');
});