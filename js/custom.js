$(document).ready(function() {
	//скрыть строку поиска 
	$(".search").hide();
	$(".close-search").hide();
	// показать меню
	$(".wrapper").show();
	// скрыть фиксированное меню
	$(".second-wrapper").hide();
	// slic
	//показать страку поиска при нажатии на иконку лупы
	$(".size").click(function(){
		$(".search").toggle();
		$(".close-search").toggle();
		$(".search").focus();
	});
	$(".close-search").click(function(){
		$(".close-search").toggle();
		$(".search").toggle();
	});
	$(".mobile-search-icon").click(function(){
		$(".search").toggle();
		$(".close-search").toggle();
		$(".search").focus();
	});
	$(".second-size").click(function(){
		$(".logo-nav-second").find(".nav-list").toggle();
	})
	// Фиксировать меню(шапка) после скролла
	// убрать новое меню (шапка) с мобильных устройств
	$(window).on('load resize', function(){
		
		if ($(window).width()<= '1200'){
			$(".second-wrapper").hide();
		} else {
			$('.hide-wrap').show();
			var height = 20;
			$(window).bind('scroll', function() {
				if ($(window).scrollTop() > height){
						$(".second-wrapper").show();
						$('header').addClass('fixed');
						$('.hide-wrap').hide();
						$('.main-content-section').css({"margin-top":"235px"});
						$('.slider-content').css({"margin-top":"130px"});
						$('.contact-main').css({"margin-top":"220px"})
						$('.index').css({"margin-top":"155px"});
						$('.prices-main').css({"margin-top":"155px"});
						$('.stock').css({"margin-top":"155px"});
			} else {
						$('header').removeClass('fixed');
						$(".second-wrapper").hide();
						$('.hide-wrap').show();
						$('.main-content-section').css({"margin-top":"65px"});
						$('.slider-content').css({"margin-top":"0px"});
						$('.contact-main').css({"margin-top":"70px"})
						$('.prices-main').css({"margin-top":"70px"});
						$('.stock').css({"margin-top":"0px"});
					}
		});
		}
		if ($(window).width()<= '1920'){

			$('.wrapp-card').masonry({
				columnWidth: '.grid-sizer',
			});
			$grid.masonry('layout');
		
		}
		if ($(window).width()<= '1024'){

			$('.reviews-block').masonry({
				columnWidth: 420,
			});
			$grid.masonry('layout');
		}
		
	});
	// проверка на открытое меню
	var close = false;
	// мобильное многоуровневое меню
	$("#dropdown-menu").click(function(){
		$(".sub-mobile-menu").slideToggle();
		close = true;	
	});
	$("#sub-dropdown-menu").click(function(){
		$(".level2").slideToggle();	
		close = true;
	});
	// скрытие всех открытых дополнительных элементов меню по нажатию на крестик (гамбургера)
	$(".closed").click(function(){
		if (close == true){
			$(".sub-mobile-menu").hide();
			$(".level2").hide();	
			}
	});
	// стили для выпадающего списка в форме
	// $('.pretty').prettyDropdown();
	// $(".prettydropdown").click(function(){
	// 	$(".selected").find(".checked").html("<svg><use xlink:href='img/svgdefs.svg#icon-arrow-right' xmlns:xlink='http://www.w3.org/1999/xlink'></use></svg>");
	// });
	//функция для того, что бы меню на мобильных устройствах не создавала пустое пространсвто 
	$(".closed").click(function(){
		$('#menu-fixed').toggleClass("abs");
	});
	// инициализация динамичной сетки мазайки для контента
	$('.wrapp-card').masonry({
		itemSelector: '.reviews-main__card',
		columnWidth: '.grid-sizer',
		// columnWidth: 200,
		isFitWidth: true,
		percentPosition: true,
	});
	
});

	
	