$(document).ready(function() {
$(".slider").slick({
	prevArrow: $('.arrows-slider-left'),
	nextArrow: $('.arrows-slider-right'),
});
$(".reviews-cards").slick({
slidesToShow: 3,
slidesToScroll: 3,
prevArrow: $('.footer-slider-left'),
nextArrow: $('.footer-slider-right'),
responsive: [
{
	breakpoint: 1025,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
		centerMode: false,
	},
	breakpoint: 769,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
	}
}
]
});
$(".slick-track").css("display","flex");
$(".reviews-cards .slick-slide").css("height","initial");

});

