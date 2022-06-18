  $(function() {
	$('#my-menu').mmenu({
		extensions: ['theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<h1>Меню<h1>'
		},
		offCanvas: {
			position  : 'right'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});
	});

//Активация плагина SLICK
$(document).ready(function() {
	 $("#slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
		nextArrow: '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>'
	 });
});

$(document).ready(function() {
	$("#gallery").slick({
	 infinite: true,
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 prevArrow: '<div class="gallery-arrow-left"><i class="fa-solid fa-chevron-left"></i></div>',
	 nextArrow: '<div class="gallery-arrow-right"><i class="fa-solid fa-chevron-right"></i></div>',
	 speed: 500,
	 fade: true,
	 cssEase: 'linear',
	 dots: false,
	 autoplay: true,
	 autoplaySpeed: 2000,
	});
});

$(document).ready(function() {
	$("#slick-comments").slick({
	 infinite: true,
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 prevArrow: '<div class="slick-comments-arrowLeft"><i class="fa-solid fa-hand-point-left"></i></div>',
	 nextArrow: '<div class="slick-comments-arrowRight"><i class="fa-solid fa-hand-point-right"></i></div>'
	});
});

$(document).ready(function() {
	$("#slick-partners").slick({
	 infinite: true,
	 slidesToShow: 3,
	 slidesToScroll: 2,
	 prevArrow: '<div class="slick-partners-arrowLeft"><i class="fa-solid fa-chevron-left"></i></div>',
	 nextArrow: '<div class="slick-partners-arrowRight"><i class="fa-solid fa-chevron-right"></i></i></div>',
	});
});