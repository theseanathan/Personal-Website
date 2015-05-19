$(document).ready(function(){   

	function scrollChevDown(){
		$('html, body').animate({
    	scrollTop: $('#main').offset().top - 50}, 800);
	}

	function scrollDownOne(){
		$('html, body').animate({
    	scrollTop: $('#about-me').offset().top }, 800);
	}

	// function animateIn(){
	// 	var scrollPosition = $(window).scrollTop();
	// 	if(scrollPosition < $('#about-me').offset().top - 50)){
	// 		$("#background-animated").animate(
	// 		{
	// 		height: '500px',
	// 		width: '500px',
	// 		color: '#E87A5A'
	// 		});
	// 	}
	// }

	$("#chev-down").click(scrollChevDown);

	$("#top-left").click(scrollDownOne);

	$(window).scroll(function(){

		var top = $(document).scrollTop();

		if(top > 1300){
			$("#background-animated").animate({
			opacity: '1',
			width: '99%',
			height: '98%',
			top: '0',
			left: '0'
			}, 800);

			setTimeout(function(){$("#about-me-text").fadeIn()}, 800);
		}
	});


});