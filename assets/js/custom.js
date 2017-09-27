$(document).ready(function(){
	var sticyoffset = $('header').offset().top;
	$(window).scroll(function(){
		var sticky = $('header'),
			scroll = $(window).scrollTop();
		if (scroll > sticyoffset){
			$('header').addClass("fixed");
		}
		else $('header').removeClass("fixed");
			
	});
});


$(document).ready(function() {
var owl = $('.owl-carousel');
  owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,

responsive: {
    0: {
        stagePadding: 0,
        margin: 10,
        items: 1
    },
    600: {
        stagePadding: 0,
        margin: 10,
        items: 2
        
    },
    1200: {
        items: 3
    }
}
		

});
  
$('.play').on('click', function() {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
  owl.trigger('stop.owl.autoplay')
})
})
