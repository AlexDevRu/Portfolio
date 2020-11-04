Array.from($('.tabs-items a')).forEach(function(link) {
	if($(link).data("tab") === 'react') $(link).hide();
});

$('.tabs__button').click(function(event) {
	Array.from($('.tabs__button')).forEach(function(button) {
		$(button).removeClass('tabs__button--active');
	});
	$(this).addClass('tabs__button--active');
	let tab = $(this).data("tab");
	Array.from($('.tabs-items a')).forEach(function(link) {
		if($(link).data("tab") === tab) $(link).show();
		else $(link).hide();
	});
});

 $('.main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.header__menu-links',
	adaptiveHeight: true
});
$('.header__menu-links').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.main',
	
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow: 1
			}
		},
		
	]
});