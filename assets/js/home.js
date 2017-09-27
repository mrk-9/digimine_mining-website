$(document).ready(function() {
  var owl = $('#testimonial');
    owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 100,
    autoplay: false,
    autoheight: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav : true,
    dots: false,
    navText: [ '<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>' ],

  responsive: {
      0: {
          stagePadding: 0,
          margin: 10,
          items: 1
      },
      600: {
          stagePadding: 0,
          margin: 10,
          items: 1
          
      },
      1200: {
          items: 2
      }
  }
  
  }); 
  // $('.play').on('click', function() {
  //   owl.trigger('play.owl.autoplay', [1000])
  // })
  // $('.stop').on('click', function() {
  //   owl.trigger('stop.owl.autoplay')
  // })
})
