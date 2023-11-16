! function(i) {
	var o, n;
	i(".accordion__title").on("click", function() {
		o = i(this).parents(".accordion__item"), n = o.find(".accordion__text"),
			o.hasClass("accordion__item--active") ? (o.removeClass("accordion__item--active"),
				n.slideUp()) : (o.addClass("accordion__item--active"), n.stop(!0, !0).slideDown(),
				o.siblings(".active_block").removeClass("accordion__item--active").children(
					".accordion__text").stop(!0, !0).slideUp())
	})
}(jQuery);