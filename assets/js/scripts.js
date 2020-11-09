$(document).ready(function(){
	// alert('hi');
	 // $('.project-content h3').counterUp({
	 // 	time:2000 

	 // });
	 $(".testimonials").owlCarousel({ 
	 	items:1,
  		nav:false, 
  		loop:true,
  		dots:false,
  		autoplay:true, 
  	});
	 $('.nav-icon').click(function(){
	 	$('.menu ul').slideToggle(1000);

	 	return false;
	 })
});