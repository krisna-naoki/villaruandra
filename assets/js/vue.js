new Vue ({
	el: '#app',
	methods: {
		isEven: function(index) {
			return (index % 2)
		}
	},
	data: function () {
		return {
			links: [
				{
					name: 'HOME',
					url: '#welcome'
				},
				{
					name: 'ACCOMMODATION',
					url: '#accommodation'
				},
				{
					name: 'THE VILLA',
					url: '#villa'
				},
				{
					name: 'GALLERY',
					url: '#gallery'
				},
				{
					name: 'RATES',
					url: '#rates'
				},
				{
					name: 'SERVICES AND FACILITIES',
					url: '#services-and-facilities'
				},{
					name: 'CONTACT',
					url: 'contact.html'
				},
			],

			texts: [
				{
					title: 'MASTER BEDROOM', 
					body: 'Master bedroom is placed in down stairs overlooking to pool with air condition ensuite bathroom accomplishing. Excellent service is presented in the master bedroom with king sized bed, good linen, LCD TV and satellite channels and DVD Player. Completed by AC, Dressing room en suite bathroom with bathtub, shower, hand wash basin, and toilet'
				},
				{
					title: 'SECOND BEDROOM', 
					body: 'Second bedrooms is placed in upstairs same big like master bedroom with king size bed, good linen, air condition, LCD Tv satellite channels and DVD Player, wardrobe and en suite bathroom with shower, hand wash basin and toilet.'
				},
				{
					title: 'BALCONY', 
					body: 'The villa has a big balcony in upstairs complete with chair, table and umbrella will be as a perfect relax and to enjoy sunset before evening time with tropical breeze'
				},
				{
					title: 'LIVING ROOM', 
					body: 'The living room area is a non AC area as it is an open air zone, enjoy the fresh breezing on the evening on this living area beside the dining and kitchen area. it\'s also completed with LCD Tv, stereo system. Starting the morning will be a perfect one as this area faces the pool with luxury sofa and cushion'
				},
				{
					title: 'DINING ROOM', 
					body: 'dining area is united with kitchen and living area. What makes it more perfect to be a place to spend the time is that the dining area faces the pool, making it a nice place to dine up while enjoying the breeze. Kitchen is near around with complete amenities including gas stove, oven, microwave, refrigerator, water dispenser, and cooking utensil'
				},
				{
					title: 'POOL & GARDEN', 
					body: 'Villa Ruandra present simple but elegant swimming pool with 2 deck and sun loungers by the pool. The pool is in ground pool and mini garden is right beside the pool with tropical plantation such as : Frangipani trees, and some other tropical plantations'
				},
			] ,

			gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],

		}
	}


})



$(document).ready(function(){
	$('.my-slider').unslider({
		autoplay: true,
		delay: 3000,
		nav: false,
		arrows: false,
		infinite: true,
	});
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$('#menu').on('click', function(event) {
	var target = $(".header");

	if( target.hasClass('on')) {
		$(target).removeClass('on')
	} else {
		$(target).addClass('on')
	}
});

$('.header a').on('click', function(event) {
	var target = $(".header");
	target.removeClass('on')
});

/*
 1. selector.addClass('on')
 2. selector.removeClass('on')
 3. selector.hasClass('on')
 */