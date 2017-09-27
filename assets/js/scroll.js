$(function(){
	$('a.page-scroll').bind('click',function(event){
		var $anchor=$(this);
		var element=$($anchor.attr('href'));
		var offset=element.data('offset')||0;
		$('html, body').stop().animate({scrollTop:element.offset().top- offset},1500,
			'easeInOutExpo');
		event.preventDefault();
	});
});